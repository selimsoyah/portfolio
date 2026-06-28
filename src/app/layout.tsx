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
  description: "Data Scientist & ML Engineer based in Hildesheim, Germany. MSc Data Analytics student focused on predictive maintenance, Industry 4.0, and IoT analytics.",
  keywords: ["portfolio", "data science", "predictive maintenance", "machine learning", "Industry 4.0", "IoT", "Germany", "Hildesheim", "python", "time-series"],
  authors: [{ name: "Salim Soyah" }],
  openGraph: {
    title: "Salim Soyah - Portfolio",
    description: "From Tunisia to Germany — pursuing MSc Data Analytics while building predictive maintenance solutions for Industry 4.0.",
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
