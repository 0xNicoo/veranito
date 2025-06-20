import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Veranito",
  description: "El sitio web oficial de Veranito! curiososgarchados.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col items-center p-4">
          <p className="text-lg">El sitio web oficial de Veranito! <a href="curisosgarchados.com" className="text-blue-600 underline">curiososgarchados.com</a></p>
          <div className="inset-border mt-4 p-1 flex space-x-2">
            <Link href="/" className="win95-button">Home</Link>
            <Link href="/proximamente" className="win95-button">Galeria</Link>
            <Link href="/proximamente" className="win95-button">Campeones</Link>
            <Link href="/proximamente" className="win95-button">Login</Link>
          </div>
        </div>
        {children}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mt-4">Created whit ♡ by Veranito™</h1>
        </div>
      </body>
    </html>
  );
}
