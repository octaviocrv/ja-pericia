import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import MotionPreferences from "@/components/ui/MotionPreferences";

// Fontes servidas pelo próprio site (next/font): sem CSS externo bloqueando a renderização.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "João Firmino | Perito Contábil · JA Perícia",
  description:
    "João Firmino, perito contábil à frente da JA Perícia. Perícia contábil, laudos e pareceres com rigor técnico e fundamentação sólida para demandas judiciais, arbitrais e extrajudiciais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${garamond.variable}`}>
      <body className="bg-bg font-sans text-fg antialiased">
        <a href="#sobre" className="skip-link">Pular para o conteúdo</a>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
