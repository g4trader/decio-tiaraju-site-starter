import Link from "next/link";

export const metadata = {
  title: "Personal Training — Método, Ciência e Experiência",
  description: "Treinamento físico individualizado, seguro e orientado seguindo princípios embasados cientificamente.",
};

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Olá Décio! Quero agendar uma avaliação de Personal Training.");
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

export default function Page() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <span className="kicker">Personal Training</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          PERSONAL TRAINING COM MÉTODO - CIÊNCIA E EXPERIÊNCIA
        </h1>
        <p className="mt-6 text-xl text-white/90">
          Do atleta olímpico ao idoso centenário
        </p>
        <p className="mt-6 text-lg text-white/80">
          Treinamento físico individualizado, seguro e orientado seguindo princípios embasados cientificamente. Meu trabalho como Personal Trainer é baseado em planejamento, progressão e acompanhamento contínuo, respeitando profundamente a individualidade biológica, o histórico, as limitações e os objetivos de cada aluno.
        </p>
        <p className="mt-4 text-lg text-white/80">
          Aqui, o treino não é aleatório. Ele é estruturado, periodizado e pensado em fases, para gerar resultados reais, sustentáveis e seguros.
        </p>

        <div className="mt-12 card">
          <h2 className="text-2xl font-semibold text-white">PARA QUEM É ESSE TRABALHO?</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Atletas de alto rendimento",
              "Praticantes de esporte amador",
              "Pessoas que buscam emagrecimento, força, saúde e estética",
              "Idosos que desejam autonomia, equilíbrio e longevidade",
              "Pessoas com restrições físicas ou condições especiais (reabilitação cardíaca, correção postural...)",
              "Preparação para TAF em concursos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔️</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/90">
            👉 Atendo desde atletas olímpicos até idosos centenários, sempre respeitando o ritmo, a realidade, a necessidade e o objetivo de cada um.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">MEU DIFERENCIAL COMO PERSONAL TRAINER</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Planejamento individualizado",
              "Progressão controlada de carga e intensidade",
              "Redução do risco de lesões",
              "Resultados sustentáveis no médio e longo prazo",
              "Acompanhamento contínuo e ajustes constantes",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-brand-400 font-semibold">✔️</span>
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/90">
            Seu treino é planejado em fases. Primeiro definimos o objetivo maior, depois organizamos o caminho até ele — com segurança, estratégia e consistência.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">PLANO DE PERIODIZAÇÃO DO TREINAMENTO</h2>
          <p className="mt-4 text-lg text-white/80">
            Estrutura profissional de Personal Training. Todo o processo é prescrito respeitando suas avaliações, restrições, necessidades, desejos e objetivos.
          </p>
          <p className="mt-4 text-lg text-white/90 font-semibold">
            Meu protocolo organiza o treinamento em:
          </p>
          <ul className="mt-4 space-y-2 text-white/90">
            <li>• MACROCICLOS</li>
            <li>• MESOCICLOS</li>
            <li>• MICROCICLOS</li>
            <li>• SESSÕES DE TREINO</li>
          </ul>
          <p className="mt-4 text-white/90">
            Essa estrutura garante evolução contínua, controle de fadiga e segurança.
          </p>
        </div>

        <div className="mt-8 card">
          <h3 className="text-xl font-semibold text-brand-200">O QUE É O MACROCICLO</h3>
          <p className="mt-4 text-white/90">
            O macrociclo é o planejamento global do treinamento, com duração média de 3 a 12 meses, conforme o objetivo do cliente.
          </p>
          <p className="mt-4 text-white/90 font-semibold">Finalidade do macrociclo:</p>
          <ul className="mt-2 space-y-2 text-white/90">
            <li>✔️ Definir os objetivos principais</li>
            <li>✔️ Organizar a evolução ao longo do tempo</li>
            <li>✔️ Prevenir lesões e excesso de treino</li>
            <li>✔️ Garantir progressão segura e consistente</li>
          </ul>
          <p className="mt-4 text-white/90">Exemplos de objetivos no macrociclo:</p>
          <ul className="mt-2 space-y-1 text-white/80">
            <li>• Emagrecimento saudável</li>
            <li>• Ganho de força e hipertrofia muscular</li>
            <li>• Condicionamento físico global</li>
            <li>• Alta performance esportiva</li>
            <li>• Saúde, longevidade e qualidade de vida</li>
          </ul>
          <p className="mt-4 text-white/90">
            📌 O macrociclo responde à pergunta: <strong>"Onde queremos chegar?"</strong>
          </p>
        </div>

        <div className="mt-8 card">
          <h3 className="text-xl font-semibold text-brand-200">O QUE É O MESOCICLO</h3>
          <p className="mt-4 text-white/90">
            O mesociclo é uma fase dentro do macrociclo, com duração média de 4 a 8 semanas, focada em um objetivo específico.
          </p>
          <p className="mt-4 text-white/90 font-semibold">Finalidade do mesociclo:</p>
          <ul className="mt-2 space-y-2 text-white/90">
            <li>✔️ Desenvolver capacidades físicas específicas</li>
            <li>✔️ Ajustar volume e intensidade</li>
            <li>✔️ Criar estímulos progressivos e eficientes</li>
          </ul>
          <p className="mt-4 text-white/90">Exemplos de mesociclos:</p>
          <ul className="mt-2 space-y-1 text-white/80">
            <li>• Adaptação neuromuscular</li>
            <li>• Base de força</li>
            <li>• Hipertrofia</li>
            <li>• Resistência muscular</li>
            <li>• Potência e velocidade</li>
            <li>• Resposta cardiopulmonar</li>
          </ul>
          <p className="mt-4 text-white/90">
            📌 O mesociclo responde à pergunta: <strong>"O que vamos desenvolver agora?"</strong>
          </p>
        </div>

        <div className="mt-8 card">
          <h3 className="text-xl font-semibold text-brand-200">O QUE É O MICROCICLO</h3>
          <p className="mt-4 text-white/90">
            O microciclo é a organização semanal do treino, geralmente com duração de 3 a 6 dias.
          </p>
          <p className="mt-4 text-white/90 font-semibold">Finalidade do microciclo:</p>
          <ul className="mt-2 space-y-2 text-white/90">
            <li>✔️ Distribuir estímulos e descanso</li>
            <li>✔️ Controlar a fadiga</li>
            <li>✔️ Ajustar cargas conforme a resposta do aluno</li>
          </ul>
          <p className="mt-4 text-white/90">Exemplo de microciclo semanal:</p>
          <ul className="mt-2 space-y-1 text-white/80">
            <li>• Segunda: Mobilidade + Cardio</li>
            <li>• Terça: Força – cadeia posterior</li>
            <li>• Quarta: Cardio + Alongamento</li>
            <li>• Quinta: Força – cadeia anterior</li>
            <li>• Sexta: Força global moderada</li>
            <li>• Sábado: Cardio + Relaxamento</li>
            <li>• Repouso programado</li>
          </ul>
          <p className="mt-4 text-white/90">
            📌 O microciclo responde à pergunta: <strong>"Como será esta semana de treino?"</strong>
          </p>
        </div>

        <div className="mt-8 card">
          <h3 className="text-xl font-semibold text-brand-200">O QUE É UMA SESSÃO DE TREINO</h3>
          <p className="mt-4 text-white/90">
            A sessão de treino é o que o aluno executa no dia, cuidadosamente planejada para cumprir o objetivo do microciclo.
          </p>
          <p className="mt-4 text-white/90 font-semibold">Exemplo de estrutura da sessão:</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-white/90 font-semibold">1 - Aquecimento (5–10 min)</p>
              <ul className="mt-2 ml-4 space-y-1 text-white/80">
                <li>• Mobilidade articular</li>
                <li>• Ativação muscular</li>
                <li>• Preparação cardiovascular</li>
              </ul>
            </div>
            <div>
              <p className="text-white/90 font-semibold">2 - Parte principal (40–50 min)</p>
              <ul className="mt-2 ml-4 space-y-1 text-white/80">
                <li>• Exercícios de força, resistência ou potência</li>
                <li>• Séries, repetições, cargas e intervalos definidos</li>
              </ul>
            </div>
            <div>
              <p className="text-white/90 font-semibold">3 - Esfriamento (5–10 min)</p>
              <ul className="mt-2 ml-4 space-y-1 text-white/80">
                <li>• Alongamentos</li>
                <li>• Exercícios respiratórios</li>
                <li>• Relaxamento e recuperação</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-white/90">
            📌 A sessão responde à pergunta: <strong>"O que será feito hoje, com segurança e propósito?"</strong>
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">QUEM É O PROFISSIONAL POR TRÁS DO MÉTODO</h2>
          <p className="mt-4 text-lg text-white/90 font-semibold">
            Décio Tiarajú Rosa de Oliveira
          </p>
          <ul className="mt-4 space-y-2 text-white/90">
            <li>• Bacharel em Educação Física – URCAMP/RS</li>
            <li>• Licenciado em Educação Física – URCAMP/RS</li>
            <li>• Pós-graduação em Reestruturação Corporal Global – UGF/RJ</li>
            <li>• Pós-graduação em Reabilitação Cardíaca e Grupos Especiais – UGF/RJ</li>
            <li>• Pós-graduação em Fisiologia do Exercício – ESEF/UFRGS</li>
            <li>• Life Coach e Coach Esportivo – LACUS/RS</li>
            <li>• Especialista em Comportamento Humano e Alta Performance</li>
            <li>• Mentor de Atletas no Extrapista</li>
            <li>• Ultramaratonista</li>
            <li>• Mais de 25 anos de docência nas áreas de Saúde, Segurança e Educação</li>
          </ul>
        </div>

        <div className="mt-12 card bg-brand-500/10 border-brand-500/30">
          <h2 className="text-2xl font-semibold text-white">TREINAMENTO COM PROPÓSITO, DISCIPLINA E RESULTADO</h2>
          <p className="mt-4 text-lg text-white/90">
            Aqui você não encontra promessas vazias. Encontra método, ciência, experiência e acompanhamento real. Seja para alta performance, saúde, reabilitação ou longevidade, o caminho é construído com disciplina e segurança.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white">ENTRE EM CONTATO</h2>
          <p className="mt-4 text-lg text-white/80">
            📱 WhatsApp: (51) 99720-1564<br />
            📸 Instagram: @deciotiaraju
          </p>
          <p className="mt-6 text-white/90">
            👉 Agende sua avaliação e inicie um treinamento verdadeiramente planejado para você.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
