
import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { siteConfig } from "../lib/site-config";

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent(
  "Olá Décio! Quero levar minha performance para o próximo nível."
);
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

const transformationHighlights = [
  "Construir equipes e lideranças com foco em alta performance sustentável.",
  "Desenvolver autoconfiança, disciplina e autorresponsabilidade.",
  "Aplicar planejamento estratégico para resultados consistentes.",
  "Elevar saúde integral, energia e qualidade de vida.",
];

const deliveryPillars = [
  "Mentorias e treinamentos personalizados presenciais ou online.",
  "Workshops, palestras e consultorias in company.",
  "Programas de autocuidado, saúde integral e performance física.",
];

const methodGap = [
  {
    title: "Gestão do Tempo",
    description:
      "Planejamento diário, organização de rotinas e priorização do que garante segurança, sabedoria e momentos lúdicos.",
  },
  {
    title: "Gestão do Conhecimento",
    description:
      "Imersão com pessoas positivas, aprendizado contínuo e prática de escuta ativa para expansão do repertório.",
  },
  {
    title: "Gestão do Sono",
    description:
      "Rituais noturnos, ambiente adequado e reflexão diária para acordar com energia e clareza.",
  },
  {
    title: "Gestão da Alimentação",
    description:
      "Planejamento, escolhas conscientes e equilíbrio entre os grupos alimentares para nutrir corpo e mente.",
  },
  {
    title: "Gestão do Movimento",
    description:
      "Treinos estruturados, mobilidade, força e resistência com acompanhamento profissional e segurança.",
  },
];

const credentials = [
  "Bacharelado em Educação Física - URCAMP/RS;",
  "Licenciatura em Educação Física - URCAMP/RS;",
  "Pós Graduação em Reestruturação Corporal Global - UGF/RJ;",
  "Pós Graduação em Reabilitação Cardíaca e Grupos Especiais - UGF/RJ;",
  "Pós Graduação em Fisiologia do Exercício - ESEF/UFRGS;",
  "Especialista em Comportamento Humano.",
  "Mentor de Líderes e Atletas de Alta Performance e Palestrante Profissional.",
  "Mais de 25 anos de Docência, nàs áreas de: Saúde, Segurança e Educação.",
];

const values = [
  "Servir pessoas e instituições para que cresçam com propósito.",
  "Transformar desafios em disciplina, liderança e resultados.",
  "Construir legados que inspirem respeito, gratidão e responsabilidade afetiva.",
];

const heroSocialLinks = [
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    icon: YoutubeIcon,
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <section className="container py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <div className="flex flex-wrap justify-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-100 md:justify-start">
              <span className="rounded-full border border-brand-200/40 bg-gradient-to-r from-brand-600/90 via-brand-500/90 to-brand-400/90 px-4 py-2 text-white shadow-lg shadow-brand-500/30">
                Alta performance comprovada
              </span>
              <span className="rounded-full border border-brand-300/30 px-4 py-2 text-brand-200/90">
                Alta performance integral
              </span>
            </div>
            <div className="pointer-events-none absolute -top-6 -right-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
            <Image
              src="/decio-tiaraju.webp"
              alt="Décio Tiarajú Rosa de Oliveira em treinamento"
              width={640}
              height={800}
              className="relative w-full max-w-md rounded-3xl border border-white/10 object-cover shadow-2xl md:self-start"
              priority
            />
            <p className="max-w-md text-base font-semibold uppercase tracking-[0.18em] text-brand-200 md:text-left">
              Disciplina de atleta e militar. Ciência do movimento e do comportamento humano. Liderança que entrega resultados em qualquer ambiente.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {heroSocialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/60 hover:text-white"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5 text-current" />
                </a>
              ))}
            </div>
          </div>
        <div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Mentoria que transforma disciplina em método e gera resultados positivos, mesmo em cenários adversos.
          </h1>
            <p className="mt-6 text-lg text-white/90">
              Personal Trainer, palestrante e mentor com trajetória militar, esportiva
              e corporativa. Décio Tiarajú conecta disciplina, estratégia e saúde integral
              para construir energia, liderança e performance sustentáveis.
            </p>
            <ul className="mt-8 space-y-3 text-white/95">
              {transformationHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
              >
                <WhatsappIcon />
                Falar agora pelo WhatsApp
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
              >
                Ver soluções completas
              </Link>
            </div>
            <div className="mt-12 grid gap-4 text-sm text-white/60 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left md:p-8">
                <p className="text-3xl font-semibold text-white">25+</p>
                <p>anos formando líderes, professores e equipes multidisciplinares.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <p className="text-3xl font-semibold text-white">+ de 9.000</p>
                <p>alunos, atletas e empresas impactados por treinamentos e mentorias.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
                <p className="text-[2.8rem] font-semibold leading-tight text-white md:text-[3.4rem]">
                  360
                </p>
                <p className="mt-3 text-white/90">
                  Resultado que conecta corpo, mente, liderança e legado.
                </p>
              </div>
            </div>
          </div>
      </div>
      </section>

      <section className="border-t border-white/10 bg-white/5 py-16">
        <div className="container grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="kicker">Quem é Décio Tiarajú</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              DE BOIA-FRIA A LIDER ESTRATÉGISTA: Disciplina de ultramaratonista e militar da tropa de elite, especialista em saúde, educação e comportamento humano, a disposição da sua evolução.
            </h2>
          </div>
          <div className="space-y-4 text-white/90">
            <p>
              Pai da Doce Helena, criado no interior do Rio Grande do sul, Décio Tiarajú começou trabalhar aos seis anos e venceu os desafios das lavouras até integrar ao Exército brasileiro, foi sargento R2 e, membro da tropa de elite.
            </p>
            <p>
              Essa vivência moldou o equilíbrio emocional, o espírito de liderança, de servir ao próximo e cumprir com eficácia toda e qualquer missão.
            </p>
            <p>
              Hoje atua como personal trainer, palestrante profissional, mentor, consultor, treinador de líderes e equipes empresariais.
            </p>
            <p>
              Seu propósito é servir, inspirar disciplina para inovação comportamental, saúde integral, alta performance para pessoas e organizações que buscam construir um legado.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="kicker">Como eu ajudo</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Programas sob medida para transformar mentalidade, hábitos e resultados
            </h2>
            <p className="mt-4 text-white/90">
              Cada projeto nasce de uma escuta ativa para entender o contexto, alinhar expectativas e
              construir um plano de ação prático que gere mudanças consistentes.
            </p>
            <ul className="mt-6 space-y-3 text-white/95">
              {deliveryPillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.16em] text-white/50">
              <span className="rounded-full border border-white/15 px-4 py-2">Mentorias</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Cursos</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Palestras</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Consultorias</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Workshops</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Treinamentos</span>
        </div>
      </div>
          <div className="grid gap-6">
        <div className="card">
              <p className="kicker">Alta Performance 360</p>
              <h3 className="text-2xl font-semibold text-white">
                Resultados que conectam corpo, mente e liderança
              </h3>
              <p className="mt-3 text-white/85">
                Atendimentos personalizados, vivências práticas e conteúdos estratégicos geram evolução tangível para
                pessoas físicas e jurídicas. Jornada completa da autopercepção à execução disciplinada.
              </p>
            </div>
            <div className="card space-y-2">
              <h4 className="text-xl font-semibold text-brand-200">Valores que nos movem</h4>
              <ul className="space-y-2 text-white/80">
                {values.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/10 py-20">
        <div className="container">
          <div className="text-center">
            <span className="kicker">Método 5 G.A.P</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Cinco gestões para viver e liderar em alta performance
            </h2>
            <p className="mt-4 mx-auto max-w-3xl text-white/90">
              Um framework exclusivo que integra gestão do tempo, do conhecimento, do sono,
              da alimentação e do movimento. Um roteiro prático para aplicar disciplina,
              inteligência emocional e saúde integral no seu dia a dia.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodGap.map((item) => (
              <div key={item.title} className="card h-full bg-[var(--card)]/90">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <span className="kicker">Credenciais & experiências</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Tragetória acadêmica, militar, esportiva, reunidas em um método estratégico e eficaz.
            </h2>
            <ul className="space-y-3 text-white/95">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card h-full space-y-4 bg-[var(--card)]/95">
            <h3 className="text-2xl font-semibold text-white">
              O que você leva para a sua equipe ou jornada individual
            </h3>
            <p className="text-white/90">
              Conteúdos teórico-práticos, experiências transformadoras, criação de hábitos vencedores em uma condução harmônica, disciplinada e eficaz, construida na vida real, para guiar sua evolução e a construção do seu legado.
            </p>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-brand-200">
                Multicanais
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Mentorias, consultorias, palestras, cursos e treinamentos com acompanhamento próximo e aplicabilidade imediata.
              </p>
            </div>
            <div className="space-y-2 text-white/70">
              <p>Cel/WhatsApp: <a href={whatsappLink} className="text-brand-300 hover:text-brand-200">{whatsappNumber}</a></p>
              <p>Instagram: <a href="https://www.instagram.com/deciotiaraju" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">@deciotiaraju</a></p>
              <p>Facebook: <a href="https://www.facebook.com/deciotiaraju" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">Décio Tiarajú</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/deciotiaraju" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">Décio Tiarajú</a></p>
              <p>YouTube: <a href="https://www.youtube.com/@deciotiaraju" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">Décio Tiarajú</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20">
        <div className="container">
          <div className="text-center">
            <span className="kicker">Na prática</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Alta performance em ação com Décio Tiarajú
            </h2>
            <p className="mt-4 mx-auto max-w-3xl text-white/85">
              Assista a trechos de palestras e treinamentos para sentir a energia, a metodologia e a entrega que transformam equipes e pessoas.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <VideoCard
              title="Construindo equipes resilientes"
              description="Highlights de palestra sobre disciplina, liderança e performance extrema."
              videoId="rAxwWApVE2w"
            />
            <VideoCard
              title="Mentalidade de alta performance"
              description="Conteúdo prático para acender autoconfiança e autorresponsabilidade."
              videoId="aG1Y12EdjPU"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-500/10 py-20">
        <div className="container text-center">
          <span className="kicker">Pronto para agir?</span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Vamos construir o seu próximo grande resultado
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-white/90">
            Envie uma mensagem agora mesmo e receba um diagnóstico inicial sem custo para entender
            qual formato (mentoria, treinamento ou palestra) acelera a sua meta.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
            >
              <WhatsappIcon />
              Iniciar conversa no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-lg font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
            >
              Solicitar proposta completa
            </Link>
        </div>
      </div>
    </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105"
        aria-label="Conversar com Décio Tiarajú pelo WhatsApp"
      >
        <WhatsappIcon />
        <span className="hidden sm:inline">Falar com Décio</span>
      </a>
    </main>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

function WhatsappIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className="text-white"
    >
      <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.63.86 5.08 2.3 7.08L4 29l7.16-2.26a12.07 12.07 0 004.88 1.04c6.64 0 12.04-5.4 12.04-12.04S22.68 3 16.04 3zm0 21.96c-1.96 0-3.78-.52-5.36-1.44l-.38-.22-4.24 1.34 1.38-4.12-.24-.4A9.32 9.32 0 016.68 15c0-5.16 4.2-9.36 9.36-9.36 5.16 0 9.36 4.2 9.36 9.36 0 5.16-4.2 9.36-9.36 9.36zm5.16-6.98c-.28-.14-1.64-.82-1.9-.92-.26-.1-.44-.14-.62.14-.18.28-.72.92-.88 1.1-.16.18-.32.2-.6.06-.28-.14-1.18-.43-2.26-1.36-.84-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.44.12-.58.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.06-.34 0-.48-.06-.14-.62-1.5-.86-2.06-.22-.52-.44-.46-.62-.46h-.54c-.18 0-.48.06-.74.34-.26.28-1 1-1 2.44 0 1.44 1.02 2.84 1.16 3.04.14.2 2 3.06 4.86 4.28.68.3 1.22.48 1.64.62.68.22 1.3.2 1.78.12.54-.08 1.64-.66 1.88-1.3.24-.64.24-1.18.16-1.3-.06-.12-.24-.18-.52-.32z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 10v6" strokeLinecap="round" />
      <path d="M8 7.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill="currentColor" stroke="none" />
      <path d="M12 16v-3.25c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75V16" strokeLinecap="round" />
      <path d="M12 13.5h3.5" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M13 9h1.5M11 20v-6H9v-2h2V9.8C11 8.25 12.25 7 13.8 7H16v2h-1.5c-.3 0-.5.2-.5.5V12h2l-.3 2H14v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3" y="7" width="18" height="10" rx="4" />
      <path d="M11 10.5l3 1.5-3 1.5v-3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

type VideoCardProps = {
  title: string;
  description: string;
  videoId: string;
};

function VideoCard({ title, description, videoId }: VideoCardProps) {
  return (
    <div className="card bg-[var(--card)]/95">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="mt-5 space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
        >
          Assistir no YouTube
        </a>
      </div>
    </div>
  );
}
