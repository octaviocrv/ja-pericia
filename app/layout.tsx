import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg font-sans text-fg antialiased">{children}</body>
    </html>
  );
}
