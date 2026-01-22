import Link from "next/link";

export const metadata = {
  title: "Palestras — Do Resgate à Reconstrução",
  description: "Palestra sobre disciplina e liderança para superar cenários de adversidade e construir legado.",
};

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Olá Décio! Quero contratar a palestra.");
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

export default function Page() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <span className="kicker">Palestras</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          DO RESGATE À RECONSTRUÇÃO – O DESAFIO
        </h1>
        <p className="mt-6 text-xl text-white/90 font-semibold">
          Disciplina e liderança para superar cenários de adversidade e construir legado
        </p>
        <p className="mt-6 text-lg text-white/80">
          Quando tudo desmorona, alguns desistem. Outros se levantam, lideram e constroem um legado.
        </p>
        <p className="mt-4 text-lg text-white/80">
          A palestra <strong>Do Resgate à Reconstrução – O Desafio</strong>, é uma experiência real, profunda e transformadora, baseada em vivências extremas de superação, liderança sob pressão e reconstrução de vidas, equipes e comunidades.
        </p>
        <p className="mt-4 text-lg text-white/80">
          Mais do que inspirar, esta palestra desperta consciência, gera ação e desenvolve disciplina aplicada à vida e ao trabalho, formando líderes capazes de construir legado mesmo diante da adversidade.
        </p>

        <div className="mt-12 card">
          <h2 className="text-2xl font-semibold text-white">SOBRE A PALESTRA</h2>
          <p className="mt-4 text-lg text-white/80">
            Da lavoura a operações de fronteira. Do resgate em enchentes à reconstrução de comunidades. Da dor física e emocional ao desafio das ultramaratonas.
          </p>
          <p className="mt-4 text-lg text-white/80">
            Essa palestra conecta histórias reais a princípios práticos de disciplina, liderança e legado, mostrando como agir quando não há atalhos, resta apenas observação de cenário, adaptação, planejamento, decisão e ação.
          </p>
          <div className="mt-6 space-y-3 text-white/90">
            <p className="font-semibold">O público aprende que:</p>
            <ul className="ml-4 space-y-2">
              <li>• A disciplina sustenta escolhas difíceis</li>
              <li>• A liderança se revela nos cenários de adversidade</li>
              <li>• O legado é construído na prática diária</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">O QUE SUA EQUIPE VAI APRENDER</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Disciplina para manter constância mesmo sob pressão",
              "Liderança para decidir com clareza em ambientes instáveis",
              "Como romper crenças limitantes",
              "Estratégias de sobrevivência emocional, física e comportamental",
              "Como transformar adversidade em crescimento",
              "Construção de resultados sustentáveis e de um legado real",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">PARA QUEM É ESSA PALESTRA</h2>
          <ul className="mt-6 space-y-2 text-white/90">
            <li>• Empresas e organizações</li>
            <li>• Líderes, gestores e equipes</li>
            <li>• Empreendedores e empresários</li>
            <li>• Instituições de ensino</li>
            <li>• Organizações sociais</li>
            <li>• Eventos corporativos, educacionais e institucionais</li>
          </ul>
          <p className="mt-4 text-white/80">
            Se sua equipe enfrenta desafios, mudanças ou pressão por resultados, essa palestra é para você.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">POR QUE CONTRATAR ESTA PALESTRA</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Conteúdo baseado em experiência real",
              "Linguagem clara, direta e aplicável",
              "Alto impacto emocional e racional",
              "Disciplina como ferramenta prática de resultados",
              "Liderança humanizada e estratégica",
              "Mensagem que constrói legado",
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
            A adversidade testa a disciplina.<br />
            Revela a liderança.<br />
            E constrói o legado.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white">LEVE ESSA EXPERIÊNCIA PARA SUA EMPRESA OU EVENTO</h2>
          <p className="mt-4 text-lg text-white/80">
            Inspire sua equipe a agir com clareza, disciplina e liderança mesmo nos cenários mais desafiadores.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
          >
            QUERO CONTRATAR A PALESTRA
          </a>
        </div>
      </div>
    </section>
  );
}
