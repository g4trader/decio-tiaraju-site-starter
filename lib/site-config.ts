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
    instagram: "https://www.instagram.com/deciotiaraju?igsh=OGtqMWl3eHg1aDZ3",
    facebook: "https://www.facebook.com/deciotiaraju",
    linkedin: "https://www.linkedin.com/in/d%C3%A9ciotiaraj%C3%BA?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    youtube: "https://youtube.com/@deciotiarajupalestrante?si=P5uHMjtZkonP30um",
  },
  contactEmail: "contato@deciotiaraju.com.br",
};

export type SiteConfig = typeof siteConfig;

