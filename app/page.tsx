
import Link from "next/link";
export default function Page() {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="kicker">Alta Performance & Liderança</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
            Estratégia, disciplina e propósito para transformar pessoas e equipes
          </h1>
          <p className="mt-4 text-white/80">
            Personal Trainer, Palestrante Profissional, Mentor e Consultor. Treinamentos para equipes empresariais, desportivas,
            de sobrevivencialismo e resgate — com foco em autoconfiança, disciplina, liderança eficaz e saúde integral.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/servicos" className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400">Ver serviços</Link>
            <Link href="/contato" className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40">Falar com Décio</Link>
          </div>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Mentorias, Palestras e Treinamentos</h3>
          <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
            <li>Alta performance pessoal e profissional</li>
            <li>Autoconfiança e autorresponsabilidade</li>
            <li>Disciplina e liderança eficaz</li>
            <li>Planejamento e desenvolvimento estratégico</li>
            <li>Saúde integral e qualidade de vida</li>
            <li>Paternidade com responsabilidade afetiva</li>
            <li>Sobrevivência e Resgate</li>
          </ul>
          <Link href="/servicos" className="inline-block mt-4 text-brand-300 hover:text-brand-200">Explorar trilhas</Link>
        </div>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="card">
          <p className="kicker">Para empresas</p>
          <h3 className="text-xl font-semibold">Treinamentos In Company</h3>
          <p className="mt-2 text-white/80">Workshops, palestras e programas sob medida para cultura de alta performance e liderança.</p>
        </div>
        <div className="card">
          <p className="kicker">Para pessoas</p>
          <h3 className="text-xl font-semibold">Mentoria Individual</h3>
          <p className="mt-2 text-white/80">Planos personalizados presenciais e online: foco, disciplina e saúde integral.</p>
        </div>
        <div className="card">
          <p className="kicker">Especialidade</p>
          <h3 className="text-xl font-semibold">Sobrevivencialismo & Resgate</h3>
          <p className="mt-2 text-white/80">Técnicas e protocolos para terrenos e situações adversas com segurança.</p>
        </div>
      </div>
    </section>
  )
}
