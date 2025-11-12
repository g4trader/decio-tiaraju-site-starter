
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "../components/site-header";
import { siteConfig } from "../lib/site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  jobTitle: [
    "Mentor de Alta Performance",
    "Palestrante Profissional",
    "Personal Trainer",
    "Consultor de Liderança",
  ],
  url: siteConfig.url,
  image: `${siteConfig.url}/decio-tiaraju.webp`,
  description: siteConfig.description,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.youtube,
    siteConfig.social.whatsapp,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Serviços e Mentorias",
      telephone: "+55-51-99720-1564",
      email: siteConfig.contactEmail,
      areaServed: "BR",
      availableLanguage: ["Portuguese", "Spanish"],
    },
  ],
  knowsAbout: [
    "Alta performance pessoal e profissional",
    "Liderança e gestão de equipes",
    "Sobrevivencialismo e resgate",
    "Saúde integral e qualidade de vida",
    "Treinamento físico e condicionamento",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Décio Tiarajú — Alta Performance, Liderança e Sobrevivência",
    template: "%s | Décio Tiarajú",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "pt-BR": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Décio Tiarajú — Alta Performance, Liderança e Sobrevivência",
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/decio-tiaraju.webp`,
        width: 1200,
        height: 675,
        alt: "Décio Tiarajú em palestra sobre alta performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciotiaraju",
    creator: "@deciotiaraju",
    title: "Décio Tiarajú — Alta Performance",
    description: siteConfig.description,
    images: [`${siteConfig.url}/decio-tiaraju.webp`],
  },
  category: "business",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <footer className="mt-20 border-t border-white/10">
          <div className="container py-8 text-sm text-white/60">
            © {new Date().getFullYear()} Décio Tiarajú. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}
