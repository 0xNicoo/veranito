import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/Navbar";
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
          <header className="text-center mb-4">
              <p>El sitio web oficial de Veranito!{' '}
                  <Link href="http://curiososgarchados.com" target="_blank" className="text-blue-600 underline">
                      curiososgarchados.com
                  </Link>
              </p>
          </header>
          <Navbar />
        </div>
        <main className="flex flex-col items-center">
            {children}
        </main>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mt-4">Created whit ♡ by Veranito™</h1>
        </div>
      </body>
    </html>
  );
}
