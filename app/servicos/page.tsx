
export const metadata = { title: "Serviços — Mentoria, Palestras e Treinamentos" };
export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">O que eu faço</h1>
      <p className="mt-4 text-white/80">
        Suporte para pessoas e empresas que buscam inovação e reinvenção por meio de mentorias, cursos, palestras,
        consultorias e treinamentos — presenciais e online.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card"><h3 className="text-xl font-semibold">Mentoria Individual</h3>
          <ul className="mt-2 text-white/80 list-disc list-inside">
            <li>Alta performance pessoal</li><li>Autoconfiança & autorresponsabilidade</li><li>Saúde integral e qualidade de vida</li>
          </ul></div>
        <div className="card"><h3 className="text-xl font-semibold">Programas In Company</h3>
          <ul className="mt-2 text-white/80 list-disc list-inside">
            <li>Liderança eficaz e cultura de disciplina</li><li>Gestão do conhecimento & planejamento estratégico</li><li>Equipes desportivas</li>
          </ul></div>
        <div className="card"><h3 className="text-xl font-semibold">Cursos & Workshops</h3>
          <ul className="mt-2 text-white/80 list-disc list-inside">
            <li>Auto cuidado e saúde integral</li><li>Personal Training (on/offline)</li><li>Sobrevivência e Resgate</li>
          </ul></div>
        <div className="card"><h3 className="text-xl font-semibold">Palestras</h3>
          <p className="mt-2 text-white/80">Conteúdos teórico-práticos e aplicáveis, conectando propósito, técnica e execução.</p></div>
      </div>
    </section>
  )
}
