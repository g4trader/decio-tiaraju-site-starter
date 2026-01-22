import Link from "next/link";

export const metadata = { title: "Serviços — Consultoria, Mentoria, Palestras e Treinamentos" };

const servicos = [
  {
    href: "/servicos/consultoria",
    title: "Consultoria",
    description: "Disciplina, liderança e construção de legado para organizações e líderes.",
  },
  {
    href: "/servicos/mentoria",
    title: "Mentoria",
    description: "Disciplina que sustenta resultados. Método que constrói legado.",
  },
  {
    href: "/servicos/palestras",
    title: "Palestras",
    description: "Do resgate à reconstrução – disciplina e liderança para superar adversidade.",
  },
  {
    href: "/servicos/personal-training",
    title: "Personal Training",
    description: "Treinamento físico individualizado com método, ciência e experiência.",
  },
  {
    href: "/servicos/treinamento-presencial",
    title: "Treinamento Presencial",
    description: "Imersão teórico-prática para desenvolver disciplina e liderança.",
  },
  {
    href: "/servicos/workshop",
    title: "Workshop",
    description: "Do resgate à reconstrução – método prático para enfrentar adversidades.",
  },
];

export default function Page() {
  return (
    <section className="container py-16">
      <div className="text-center">
        <span className="kicker">Serviços</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Soluções para alta performance e construção de legado
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
          Consultoria, mentoria, palestras, treinamentos e workshops baseados em experiência real,
          disciplina e liderança aplicada.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico) => (
          <Link
            key={servico.href}
            href={servico.href}
            className="card group transition hover:scale-105 hover:border-brand-500/50"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-brand-200">
              {servico.title}
            </h3>
            <p className="mt-3 text-white/80">{servico.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 group-hover:text-brand-200">
              Conhecer mais
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
