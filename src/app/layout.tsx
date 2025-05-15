import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "../components/PostHogProvider";
import { Inter } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: "Buildr Network - Hackathon reinvented",
  description: "Our platform connects Financiers, Builders and Community in a unique way, making sure every project becomes a venture",
  openGraph: {
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildr Network - Hackathon reinvented",
    description: "Our platform connects Financiers, Builders and Community in a unique way, making sure every project becomes a venture",
    images: ["/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
