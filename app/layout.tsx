import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spectra Networks — Internet en Ponce, Puerto Rico",
  description:
    "Proveedor local de internet para hogares y negocios en Ponce, PR. Planes desde $53.53/mes, sin contrato, sin cargos ocultos.",
  keywords:
    "internet ponce puerto rico, spectra networks, fibra ponce, internet residencial ponce",
  openGraph: {
    title: "Spectra Networks — Internet en Ponce, PR",
    description: "Proveedor local desde 2016. Planes desde $53.53/mes. Sin contrato.",
    type: "website",
    locale: "es_PR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#f8f8f8] text-[#111] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
