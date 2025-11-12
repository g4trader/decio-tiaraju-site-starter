
export const metadata = { title: "Portfólio — Cases & Missões" };
export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Portfólio</h1>
      <p className="mt-4 text-white/80">
        Selecione aqui seus principais cases, missões solidárias e programas de treinamento. Substitua os cards abaixo
        com os itens do seu portfólio: título, objetivo, público, metodologia, resultados e depoimentos.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card">
            <p className="kicker">Case {i+1}</p>
            <h3 className="text-xl font-semibold">Título do Projeto</h3>
            <p className="mt-2 text-white/80">Breve descrição do objetivo, público, metodologia e resultado.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
