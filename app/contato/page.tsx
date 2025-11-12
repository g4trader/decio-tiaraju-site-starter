
export const metadata = { title: "Contato — Fale comigo" };
export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Contato</h1>
      <p className="mt-4 max-w-2xl text-white/80">
        Vamos conversar sobre o seu projeto, equipe ou evento. O WhatsApp é o canal mais rápido para receber uma resposta direta.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold">Fale agora</h3>
          <p className="text-white/70">Atendimento por mensagem ou áudio — resposta rápida.</p>
          <a
            href="https://wa.me/5551997201564?text=Olá%20Décio!%20Quero%20falar%20sobre%20alta%20performance."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105"
          >
            <span>Enviar WhatsApp</span>
          </a>
        </div>
        <div className="card space-y-3">
          <h3 className="text-xl font-semibold">Outros canais</h3>
          <ul className="space-y-2 text-white/80">
            <li><strong>Telefone/WhatsApp:</strong> <a href="https://wa.me/5551997201564" className="text-brand-300 hover:text-brand-200">+55 51 99720-1564</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/deciotiaraju" className="text-brand-300 hover:text-brand-200">@deciotiaraju</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/deciotiaraju" className="text-brand-300 hover:text-brand-200">Décio Tiarajú</a></li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@deciotiaraju" className="text-brand-300 hover:text-brand-200">Décio Tiarajú</a></li>
            <li><strong>E-mail:</strong> <span className="text-white/70">contato@deciotiaraju.com.br</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
