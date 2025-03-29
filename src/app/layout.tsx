import type { Metadata } from "next";
// Replace Geist font imports with valid alternatives or remove them if not needed
import { Inter } from "next/font/google";

const Geist_Sans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const Geist_Mono = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
import { Poppins } from "next/font/google";
import "./globals.css";

// Using Geist font from the official package (more reliable)
// Note: Geist is now exported from 'geist/font' instead of 'next/font/google'
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "plexCode",
  description: "plexCode - Innovators, Creatives, Visionaries",
  icons: {
    icon: "/images/icon/code.ico", // Use public path directly
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Geist_Sans.variable} ${Geist_Mono.variable} ${poppins.variable}`}
      suppressHydrationWarning={process.env.NODE_ENV === "development"} // Optional for dev
    >
      <head>
        {/* Preload fonts for better performance */}
        {/* Font preloading removed as next/font handles it automatically */}
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}