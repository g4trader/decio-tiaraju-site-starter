import Link from "next/link";

export const metadata = {
  title: "Consultoria — Disciplina, Liderança e Construção de Legado",
  description: "Consultoria para organizações, líderes e equipes que precisam agir com clareza, disciplina e liderança em cenários de adversidade.",
};

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Olá Décio! Quero conhecer a consultoria.");
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

export default function Page() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <span className="kicker">Consultoria</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          DISCIPLINA, LIDERANÇA E CONSTRUÇÃO DE LEGADO
        </h1>
        <p className="mt-6 text-xl text-white/90">
          Princípios que sustentam decisões. Valores que conduzem ações. Resultados que constroem legado.
        </p>
        <p className="mt-6 text-lg text-white/80">
          Minha consultoria é voltada a organizações, líderes e equipes que precisam agir com clareza, disciplina e liderança em cenários de adversidade, mudanças e pressão por resultados.
        </p>
        <p className="mt-4 text-lg text-white/80">
          Mais do que aconselhamento, entrego direção prática, baseada em vivências reais: ultramaratona, tropa de elite, ambientes de alto risco, resgates em enchentes, reconstrução de comunidades, alta performance física e mental.
        </p>

        <div className="mt-12 card">
          <h2 className="text-2xl font-semibold text-white">PROPÓSITO DA CONSULTORIA</h2>
          <p className="mt-4 text-lg text-white/90">
            Ajudar pessoas e organizações a superar adversidades, fortalecer disciplina operacional, desenvolver liderança prática e construir resultados sustentáveis e legado.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">BASE DA CONSULTORIA: EXPERIÊNCIA REAL</h2>
          <p className="mt-4 text-lg text-white/80">
            Esta consultoria não nasce da teoria, mas da prática vivida em:
          </p>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Lavoura:</strong> superação com escassez de alimentos e equipamentos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Tropa de elite:</strong> disciplina, hierarquia, tomada de decisão sob pressão</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Ambientes extremos:</strong> controle emocional e foco</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Resgates em enchentes:</strong> liderança, trabalho em equipe e responsabilidade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Reconstrução de comunidades:</strong> planejamento, constância e visão de longo prazo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Ultramaratonas:</strong> equilíbrio emocional, disciplina diária e superação</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">PRINCÍPIOS QUE GUIAM A CONSULTORIA</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Disciplina – constância, rotina e execução",
              "Liderança – exemplo, responsabilidade e clareza",
              "Responsabilidade – assumir decisões e consequências",
              "Controle emocional – agir mesmo sob pressão",
              "Cooperação – ninguém constrói sozinho",
              "Propósito – direção clara para ações",
              "Legado – impacto que permanece",
            ].map((principio) => (
              <div key={principio} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{principio}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">VALORES PRATICADOS</h2>
          <ul className="mt-6 space-y-2 text-white/90">
            <li>• Verdade e transparência</li>
            <li>• Compromisso com resultados reais</li>
            <li>• Respeito às pessoas e às equipes</li>
            <li>• Ética, caráter e responsabilidade</li>
            <li>• Serviço, contribuição e reconstrução</li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">COMO A CONSULTORIA ATUA</h2>
          <p className="mt-4 text-lg text-white/80">
            A consultoria é personalizada, prática e aplicada à realidade do contratante:
          </p>
          <ul className="mt-6 space-y-3 text-white/90">
            {[
              "Diagnóstico do cenário atual",
              "Identificação de riscos, falhas e oportunidades",
              "Desenvolvimento de disciplina operacional",
              "Fortalecimento da liderança individual e coletiva",
              "Estruturação de planos de ação",
              "Acompanhamento e ajustes estratégicos",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-400">🔹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">PARA QUEM É ESTA CONSULTORIA</h2>
          <ul className="mt-6 space-y-2 text-white/90">
            <li>• Empresas e organizações</li>
            <li>• Líderes e gestores</li>
            <li>• Equipes operacionais e estratégicas</li>
            <li>• Empreendedores</li>
            <li>• Instituições sociais e educacionais</li>
          </ul>
          <p className="mt-4 text-white/80">
            Indicada para quem enfrenta desafios reais, precisa tomar decisões difíceis e deseja construir resultados com legado.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">O QUE O CONTRATANTE RECEBE</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Clareza estratégica",
              "Disciplina aplicada à rotina",
              "Liderança fortalecida",
              "Tomada de decisão mais segura",
              "Equipes mais preparadas",
              "Estrutura para crescimento sustentável",
              "Direção para construção de legado",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">DIFERENCIAL DA CONSULTORIA</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Baseada em experiência real, não apenas teoria",
              "Aplicável ao dia a dia",
              "Linguagem direta e objetiva",
              "Foco em ação e resultado",
              "Valores sólidos e coerentes",
              "Visão de longo prazo e legado",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 card bg-brand-500/10 border-brand-500/30">
          <h2 className="text-2xl font-semibold text-white">MENSAGEM CENTRAL</h2>
          <p className="mt-4 text-xl text-white/90 italic">
            A adversidade exige disciplina.<br />
            A disciplina sustenta a liderança.<br />
            A liderança constrói resultados.<br />
            O legado permanece.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white">LEVE ESTA CONSULTORIA PARA SUA ORGANIZAÇÃO</h2>
          <p className="mt-4 text-lg text-white/80">
            Prepare sua equipe para agir com clareza, disciplina e liderança, mesmo nos cenários mais desafiadores.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
          >
            QUERO CONHECER A CONSULTORIA
          </a>
        </div>
      </div>
    </section>
  );
}
