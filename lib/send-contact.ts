"use server"

import nodemailer from "nodemailer";
import {headers} from "next/headers";
import {email as contactEmail} from "@/lib/contact-details";

export type ContactState = {
    status: "success" | "error",
    message: string
} | null

const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (attempts.get(ip) ?? []).filter(time => now - time < WINDOW_MS);
    if (recent.length >= LIMIT) {
        attempts.set(ip, recent);
        return true;
    }
    attempts.set(ip, [...recent, now]);
    return false;
}

function field(formData: FormData, name: string): string {
    const value = formData.get(name);
    return typeof value === "string" ? value.trim() : "";
}

function isValidUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

export async function sendContact(_: ContactState, formData: FormData): Promise<ContactState> {
    if (field(formData, "website") !== "") {
        return {status: "success", message: "Thanks! Your message has been sent."};
    }

    const name = field(formData, "name");
    const email = field(formData, "email");
    const company = field(formData, "company");
    const offer = field(formData, "offer");
    const roles = field(formData, "roles");
    const message = field(formData, "message");

    if (!name || !email || !company || !offer) {
        return {status: "error", message: "Please fill in all required fields."};
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {status: "error", message: "Please enter a valid email address."};
    }
    if (!isValidUrl(offer)) {
        return {status: "error", message: "Please enter a valid link to the offer."};
    }
    if (name.length > 200 || email.length > 200 || company.length > 200 || offer.length > 1000 || roles.length > 500 || message.length > 5000) {
        return {status: "error", message: "One of the fields is too long."};
    }

    const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
        return {status: "error", message: "Too many messages. Please try again in a few minutes."};
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD},
        });

        await transporter.sendMail({
            from: `Portfolio <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_TO,
            replyTo: {name, address: email},
            subject: `Portfolio – ${name} (${company})`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Company: ${company}`,
                `Offer: ${offer}`,
                `Roles: ${roles || "-"}`,
                "",
                message || "-",
            ].join("\n"),
        });
    } catch (error) {
        console.error("Contact form email failed", error);
        return {status: "error", message: `Something went wrong. Please email me directly at ${contactEmail}.`};
    }

    return {status: "success", message: "Thanks! Your message has been sent."};
}
