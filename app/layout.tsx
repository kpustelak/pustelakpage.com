import type { Metadata } from "next";
import "./globals.css";
import { GeistFont, GeistMonoFont, InstrumentSerifFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Kornel Pustelak",
  description: "Student developer who builds his own tools, from client websites to a self-hosted blog.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistFont.variable} ${GeistMonoFont.variable} ${InstrumentSerifFont.variable} h-full bg-background`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
