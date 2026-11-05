import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Firmino | Perito Contábil · JA Perícia",
  description:
    "João Firmino, perito contábil (JA Perícia): laudos periciais, pareceres técnicos e assistência técnica em perícia contábil. Prova técnica precisa, fundamentada e imparcial para processos judiciais, arbitrais e extrajudiciais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg font-sans text-fg antialiased">{children}</body>
    </html>
  );
}
