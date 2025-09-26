import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salim Soyah - Portfolio",
  description: "From First Code to Data Science - A journey of curiosity, learning, and turning data into insights. Full-stack developer and data scientist.",
  keywords: ["portfolio", "data science", "web development", "full stack", "react", "python", "machine learning"],
  authors: [{ name: "Salim Soyah" }],
  openGraph: {
    title: "Salim Soyah - Portfolio",
    description: "From First Code to Data Science - A journey of curiosity, learning, and turning data into insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
