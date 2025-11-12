
import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Décio Tiarajú — Alta Performance, Liderança e Sobrevivência",
  description: "Personal trainer, mentor e palestrante. Alta performance, liderança, sobrevivência e resgate."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b border-white/10">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="font-semibold text-lg">Décio Tiarajú</Link>
            <nav className="flex gap-6 text-sm text-white/80">
              <Link href="/sobre">Sobre</Link>
              <Link href="/servicos">Serviços</Link>
              <Link href="/portfolio">Portfólio</Link>
              <Link href="/conteudos">Conteúdos</Link>
              <Link href="/contato" className="px-3 py-1 rounded-lg bg-brand-500 hover:bg-brand-400 text-white">Contato</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-white/10">
          <div className="container py-8 text-sm text-white/60">© {new Date().getFullYear()} Décio Tiarajú. Todos os direitos reservados.</div>
        </footer>
      </body>
    </html>
  )
}
