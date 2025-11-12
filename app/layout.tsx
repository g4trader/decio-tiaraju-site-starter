
import "./globals.css";
import { SiteHeader } from "../components/site-header";

export const metadata = {
  title: "Décio Tiarajú — Alta Performance, Liderança e Sobrevivência",
  description: "Personal trainer, mentor e palestrante. Alta performance, liderança, sobrevivência e resgate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
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
