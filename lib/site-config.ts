export const siteConfig = {
  name: "Décio Tiarajú",
  legalName: "Décio Tiarajú Rosa de Oliveira",
  description:
    "Mentor, palestrante e personal trainer especializado em alta performance, liderança, sobrevivencialismo e saúde integral.",
  keywords: [
    "alta performance",
    "mentoria",
    "palestrante",
    "personal trainer",
    "sobrevivencialismo",
    "liderança",
    "consultoria empresarial",
    "treinamento corporativo",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deciotiaraju.com.br",
  social: {
    whatsapp: "https://wa.me/5551997201564",
    instagram: "https://www.instagram.com/deciotiaraju",
    facebook: "https://www.facebook.com/deciotiaraju",
    linkedin: "https://www.linkedin.com/in/deciotiaraju",
    youtube: "https://www.youtube.com/@deciotiaraju",
  },
  contactEmail: "contato@deciotiaraju.com.br",
};

export type SiteConfig = typeof siteConfig;

