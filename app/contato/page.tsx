
export const metadata = { title: "Contato — Fale comigo" };
export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Contato</h1>
      <p className="mt-4 text-white/80">Vamos conversar sobre o seu projeto, equipe ou evento.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Canais</h3>
          <ul className="mt-2 text-white/80 space-y-2">
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5551997201564" className="text-brand-300">+55 51 99720-1564</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/deciotiaraju" className="text-brand-300">@deciotiaraju</a></li>
            <li><strong>Facebook:</strong> <span>Décio Tiarajú</span></li>
            <li><strong>LinkedIn:</strong> <span>Décio Tiarajú</span></li>
            <li><strong>YouTube:</strong> <span>Décio Tiarajú</span></li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Mensagem</h3>
          <p className="text-white/70">Conecte um serviço de formulário (Formspree/Getform) ou sua API.</p>
          <form className="mt-4 grid gap-3">
            <input className="bg-transparent border border-white/20 rounded-lg px-3 py-2" placeholder="Seu nome" />
            <input className="bg-transparent border border-white/20 rounded-lg px-3 py-2" placeholder="E-mail" />
            <textarea className="bg-transparent border border-white/20 rounded-lg px-3 py-2" placeholder="Como posso ajudar?" rows={5} />
            <button className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400" type="button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
