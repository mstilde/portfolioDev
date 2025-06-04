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

export const metadata = {
  title: "Matías Buttari | Portfolio",
  description: "Soy QA y desarrollador con experiencia en automatización, testing manual y desarrollo web. Explorá mis proyectos y conocimientos.",
  openGraph: {
    title: "Matías Buttari | Portfolio",
    description: "Conocé mi trabajo, habilidades y experiencia en testing y desarrollo web.",
    url: "https://portfoliomatiasbuttari.vercel.app/",
    siteName: "Portfolio de Matías Buttari",
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
