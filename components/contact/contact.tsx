"use client"

import SectionTab from "@/components/global/section-tab";
import FormInput from "@/components/contact/form-input";
import FormMessageBox from "@/components/contact/form-messagebox";
import FormSelection from "@/components/contact/form-selection";
import {contactDescription} from "@/lib/contact-description";
import {FormEvent, startTransition, useActionState, useState} from "react";
import {ContactState, sendContact} from "@/lib/send-contact";

const contactMock = contactDescription

export default function Contact(){
    const [formKey, setFormKey] = useState(0);
    const [state, formAction, pending] = useActionState(async (previous: ContactState, formData: FormData) => {
        const result = await sendContact(previous, formData);
        if (result?.status === "success") setFormKey(key => key + 1);
        return result;
    }, null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => formAction(formData));
    }

    return(
        <section id="contact" className="section-container">
            <SectionTab title="Contact" fullWidth={true}>
                <h2>{contactMock.title}</h2>
                <div className="flex flex-col gap-16 lg:flex-row">
                    <div className="flex flex-col gap-y-8 lg:w-1/2">
                        <p>{contactMock.description}</p>
                        {contactMock.textDescription.map((item,i) => (
                            <div className="flex flex-col gap-y-5" key={i}>
                                <p className="font-medium uppercase text-primary">{item.title}</p>
                                <hr className="border-primary-20" />
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <form key={formKey} onSubmit={handleSubmit} className="flex flex-col gap-y-6 lg:w-1/2">
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <FormInput fieldName="Name" name="name" placeholder="Name" required autoComplete="name" />
                            <FormInput fieldName="Email" name="email" type="email" placeholder="Email" required autoComplete="email" />
                            <FormInput fieldName="Company name" name="company" placeholder="Company name" required autoComplete="organization" />
                            <FormInput fieldName="Link to offer" name="offer" type="url" placeholder="https://" required />
                        </div>
                        <FormSelection name="roles" />
                        <FormMessageBox placeholder="Tell me more about the project" fieldName="Message" name="message" />
                        <button type="submit" disabled={pending} className="self-start bg-primary px-6 py-3 text-background cursor-pointer transition-opacity hover:opacity-80 disabled:cursor-wait disabled:opacity-60">
                            {pending ? "Sending…" : "Send message →"}
                        </button>
                        <p role="status" className={state?.status === "error" ? "text-primary" : "text-primary-60"}>
                            {state?.message}
                        </p>
                    </form>
                </div>
            </SectionTab>
        </section>
    )
}
