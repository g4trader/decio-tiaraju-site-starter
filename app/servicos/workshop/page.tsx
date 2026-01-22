import Link from "next/link";

export const metadata = {
  title: "Workshop — Do Resgate à Reconstrução",
  description: "Workshop prático e transformador sobre disciplina e liderança para superar adversidades.",
};

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Olá Décio! Quero contratar o workshop.");
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

export default function Page() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <span className="kicker">Workshop</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          WORKSHOP
        </h1>
        <h2 className="mt-6 text-2xl font-semibold text-brand-200">
          DO RESGATE À RECONSTRUÇÃO – O DESAFIO
        </h2>
        <p className="mt-6 text-xl text-white/90 font-semibold">
          Disciplina e liderança para superar cenários de adversidade e construir legado
        </p>
        <p className="mt-6 text-lg text-white/80">
          O Workshop <strong>Do Resgate à Reconstrução – O Desafio</strong>, é uma imersão prática e transformadora, fundamentada em experiências reais vividas na lavoura, na tropa de elite, em ambientes de alto risco, em operações de resgate em enchentes e no desafio das ultramaratonas.
        </p>
        <p className="mt-4 text-lg text-white/80">
          Criado para quem não quer apenas motivação, o workshop entrega método, disciplina aplicada e liderança prática para enfrentar adversidades e reconstruir caminhos com propósito.
        </p>

        <div className="mt-12 card">
          <h2 className="text-2xl font-semibold text-white">SOBRE O WORKSHOP</h2>
          <p className="mt-4 text-lg text-white/80">
            A metodologia do workshop nasce da vivência na lavoura, na tropa de elite e, nas competições de alto nível, onde disciplina, tomada de decisão sob pressão, liderança e responsabilidade coletiva, são questões de sobrevivência.
          </p>
          <p className="mt-4 text-lg text-white/80">
            Esses princípios são conectados a experiências de:
          </p>
          <ul className="mt-4 space-y-2 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Atuação em ambientes hostis e de alto risco</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Resgates em enchentes e segurança em abrigos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Reconstrução de comunidades e apoio humanitário</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Superação física e mental em ultramaratonas</span>
            </li>
          </ul>
          <p className="mt-6 text-lg text-white/90 italic">
            Aqui, disciplina não é discurso. É comportamento treinável. Liderança não é cargo. É postura em momentos críticos. Legado não é promessa. É resultado de escolhas consistentes.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">O QUE OS PARTICIPANTES VÃO DESENVOLVER</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Disciplina operacional aplicada à vida e ao trabalho",
              "Liderança sob pressão, inspirada na tropa de elite",
              "Clareza para tomada de decisões em cenários de adversidade",
              "Quebra de crenças limitantes",
              "Estratégias de sobrevivência emocional, física e comportamental",
              "Planejamento prático para reconstrução pessoal, profissional ou organizacional",
              "Visão estratégica para construção de legado",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">COMO FUNCIONA O WORKSHOP</h2>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-brand-400">•</span>
              <span>Metodologia prática, objetiva e participativa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">•</span>
              <span>Exercícios baseados na ciência e em fatos vivenciados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">•</span>
              <span>Estudos de caso reais</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">•</span>
              <span>Reflexões guiadas com aplicação imediata</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400">•</span>
              <span>Ferramentas simples, replicáveis e eficazes</span>
            </li>
          </ul>
          <div className="mt-6 space-y-2 text-white/90">
            <p><span className="text-brand-400">📌</span> <strong>Formato:</strong> presencial</p>
            <p><span className="text-brand-400">📌</span> <strong>Duração:</strong> adaptável conforme necessidade da organização</p>
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">PARA QUEM É ESTE WORKSHOP</h2>
          <ul className="mt-6 space-y-2 text-white/90">
            <li>• Líderes e gestores</li>
            <li>• Equipes corporativas</li>
            <li>• Empreendedores e empresários</li>
            <li>• Atletas e profissionais de alta performance</li>
            <li>• Instituições e organizações</li>
            <li>• Pessoas em processo de reconstrução após adversidades</li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">POR QUE CONTRATAR ESTE WORKSHOP</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Conteúdo baseado em vivência real na tropa de elite, não teoria",
              "Disciplina aplicada à realidade",
              "Liderança testada sob pressão",
              "Alto nível de engajamento e transformação",
              "Desenvolvimento de pessoas que constroem legado",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 card bg-brand-500/10 border-brand-500/30">
          <h2 className="text-2xl font-semibold text-white">MENSAGEM CENTRAL DO WORKSHOP</h2>
          <p className="mt-4 text-xl text-white/90 italic">
            A adversidade revela o caráter.<br />
            A disciplina sustenta o caminho.<br />
            A liderança se manifesta na pressão.<br />
            O legado é construído na prática.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white">LEVE ESTE WORKSHOP PARA SUA EMPRESA OU EVENTO</h2>
          <p className="mt-4 text-lg text-white/80">
            Forme pessoas preparadas para agir, decidir e liderar mesmo nos cenários mais adversos.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
          >
            QUERO CONTRATAR O WORKSHOP
          </a>
        </div>
      </div>
    </section>
  );
}
