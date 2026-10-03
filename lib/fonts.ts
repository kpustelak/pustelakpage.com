import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

export const GeistFont = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

export const GeistMonoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const InstrumentSerifFont = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});
