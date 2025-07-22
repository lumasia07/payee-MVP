import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import {Lexend} from "next/font/google";


const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payee |  Create Payment Links",
  description: "Create and manage payment links easily with Payee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
