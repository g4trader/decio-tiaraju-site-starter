import Link from "next/link";

export const metadata = {
  title: "Treinamento Presencial — Do Resgate à Reconstrução",
  description: "Imersão teórico-prática para desenvolver disciplina e liderança em cenários de adversidade.",
};

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Olá Décio! Quero contratar o treinamento presencial.");
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

export default function Page() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <span className="kicker">Treinamento Presencial</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          TREINAMENTO PRESENCIAL – IMERSÃO TEÓRICO–PRÁTICA
        </h1>
        <h2 className="mt-6 text-2xl font-semibold text-brand-200">
          DO RESGATE À RECONSTRUÇÃO – O DESAFIO
        </h2>
        <p className="mt-6 text-xl text-white/90 font-semibold">
          Disciplina e liderança para superar cenários de adversidade e construir legado
        </p>
        <p className="mt-6 text-lg text-white/80">
          Este não é um treinamento convencional. É uma imersão presencial, estruturada em conteúdo teórico aplicado + oficinas práticas, baseada em experiências reais vividas na tropa de elite, em operações de resgate, na reconstrução de comunidades e na alta performance física e mental, de atletas vencedores.
        </p>
        <p className="mt-4 text-lg text-white/80">
          O treinamento foi criado para desenvolver pessoas e equipes capazes de agir, decidir e liderar quando o ambiente é instável, a pressão é alta e não há espaço para improviso.
        </p>

        <div className="mt-12 card">
          <h2 className="text-2xl font-semibold text-white">O QUE TORNA ESTE TREINAMENTO DIFERENTE</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Oficinas práticas com aplicação imediata",
              "Simulações de tomada de decisão sob pressão",
              "Princípios reais da tropa de elite aplicados à vida e às organizações",
              "Desenvolvimento de disciplina operacional",
              "Liderança prática, não apenas teórica",
              "Construção de plano de ação e visão de legado",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg text-white/90 italic">
            Aqui, disciplina deixa de ser discurso. Liderança deixa de ser cargo. Legado deixa de ser promessa.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">O QUE OS PARTICIPANTES VÃO DESENVOLVER</h2>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Disciplina para agir com constância mesmo sob adversidade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Liderança clara em ambientes instáveis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Capacidade de decisão em cenários críticos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Controle emocional e mental</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Trabalho em equipe sob pressão de meta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Planejamento de reconstrução pessoal e profissional</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Consciência de legado</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">FORMATO DO TREINAMENTO</h2>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-brand-400">📌</span>
              <span><strong>Modalidade:</strong> Presencial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">📌</span>
              <span><strong>Carga horária:</strong> A combinar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">📌</span>
              <span><strong>Metodologia:</strong> Teoria aplicada + oficinas práticas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">📌</span>
              <span><strong>Indicado para:</strong> líderes, empreendedores, equipes empresariais e desportivas, atletas, organizações privadas e estatais.</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">PARA QUEM É ESTE TREINAMENTO</h2>
          <p className="mt-4 text-lg text-white/90">
            Se sua equipe enfrenta desafios constantes, precisa fortalecer disciplina, melhorar decisões, desenvolver liderança real e criar resultados sustentáveis, este treinamento é para vocês.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white">PREPARE SUA ORGANIZAÇÃO PARA AGIR QUANDO MAIS IMPORTA</h2>
          <p className="mt-4 text-lg text-white/80">
            Leve para sua empresa um treinamento que forma pessoas preparadas para enfrentar adversidades, reconstruir cenários e construir legado.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
          >
            QUERO CONTRATAR ESTE TREINAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}
