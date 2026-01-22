import Link from "next/link";

export const metadata = {
  title: "Mentoria para Alta Performance — Disciplina que sustenta resultados",
  description: "Mentoria que transforma disciplina em método prático e gera resultados positivos, mesmo em cenários adversos.",
};

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Olá Décio! Quero entrar na mentoria.");
const whatsappLink = `https://wa.me/${whatsappSanitized}?text=${whatsappMessage}`;

export default function Page() {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <span className="kicker">Mentoria</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Mentoria para Alta Performance
        </h1>
        <p className="mt-6 text-xl text-white/90 font-semibold">
          Disciplina que sustenta resultados. Método que constrói legado.
        </p>
        <p className="mt-6 text-lg text-white/80">
          Vivemos em um tempo onde todos querem resultado, mas poucos aceitam disciplina. Onde há excesso de informação e escassez de execução. Onde o problema não é falta de capacidade, é falta de método.
        </p>
        <p className="mt-4 text-lg text-white/80">
          Esta mentoria existe para resolver isso. Aqui, disciplina não é discurso. É sistema.
        </p>

        <div className="mt-12 card bg-brand-500/10 border-brand-500/30">
          <h2 className="text-2xl font-semibold text-white">A promessa</h2>
          <p className="mt-4 text-lg text-white/90">
            Transformar disciplina em método prático e gerar resultados positivos, mesmo em cenários adversos. Sem atalhos. Sem fórmulas mágicas. Com ciência, estratégia e vida real.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">O problema real</h2>
          <p className="mt-4 text-lg text-white/80">
            Talvez você se identifique com um ou mais pontos abaixo:
          </p>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Começa projetos e não termina.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Tem dias bons e longos períodos de queda.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Sente falta de energia, foco e constância.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Lidera pessoas, mas sente dificuldade em manter padrão de entrega.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span>Sabe o que precisa fazer, mas não executa com regularidade.</span>
            </li>
          </ul>
          <p className="mt-6 text-lg text-white/90 font-semibold">
            Isso não é falta de força de vontade. É ausência de estrutura disciplinada.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">A solução: disciplina como método</h2>
          <p className="mt-4 text-lg text-white/80">
            A mentoria une três mundos que raramente caminham juntos:
          </p>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Disciplina de atleta campeão e militar operador especial.</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Ciência do movimento e do comportamento humano.</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span><strong>Liderança aplicada à vida real.</strong></span>
            </li>
          </ul>
          <p className="mt-6 text-lg text-white/90">
            Tudo organizado em um método claro, progressivo e executável.
          </p>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">Os pilares do método</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-brand-200">1 - Diagnóstico e Direção</h3>
              <p className="mt-2 text-white/90">
                Clareza total sobre seu cenário atual, metas e prioridades.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-200">2 - Disciplina como base de todo o Sistema</h3>
              <p className="mt-2 text-white/90">
                Rotina, regras, padrões e constância. A inspiração nos resultados será a motivação para constância em todo o processo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-200">3 - Ciência do Movimento e do Comportamento</h3>
              <p className="mt-2 text-white/90">
                Energia, hábitos, gestão do tempo, sono, treino, nutrição, foco e tomada de decisão.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-200">4 - Execução e Liderança</h3>
              <p className="mt-2 text-white/90">
                Aplicação prática na vida, no trabalho, nos relacionamentos e na missão pessoal, no chamado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">O que você recebe na mentoria</h2>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-brand-400 font-semibold">✔</span>
              <span>Plano estratégico de rotina e execução.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 font-semibold">✔</span>
              <span>Organização de hábitos vencedores.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 font-semibold">✔</span>
              <span>Treino mental para situações adversas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 font-semibold">✔</span>
              <span>Estrutura de liderança pessoal e profissional.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 font-semibold">✔</span>
              <span>Acompanhamento, ajustes e feedback.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-400 font-semibold">✔</span>
              <span>Clareza de propósito e direção para construção de legado.</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">Quem é o mentor</h2>
          <p className="mt-4 text-lg text-white/80">
            <strong>Décio Tiarajú</strong>
          </p>
          <p className="mt-4 text-white/90">
            Pai da Doce Helena. Criado no interior do Rio Grande do Sul. Começou a trabalhar aos seis anos nas lavouras. Ingressou no Exército Brasileiro, foi sargento R2 e membro da tropa de elite. Operador especial em missões de fronteira. Sobrevivencialista e resgatista voluntário. Atleta ultramaratonista.
          </p>
          <p className="mt-4 text-white/90">
            Essa vivência moldou equilíbrio emocional, liderança, espírito de servir e capacidade de cumprir missões sob pressão.
          </p>
          <p className="mt-4 text-white/90">
            Hoje atua como: Personal trainer, Mentor, Consultor, Palestrante profissional, Treinador de líderes, equipes e atletas de alta performance.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-brand-200">Formação acadêmica</h3>
            <ul className="mt-4 space-y-2 text-white/90">
              <li>• Bacharel e Licenciado em Educação Física – URCAMP/RS</li>
              <li>• Pós-graduação em Reestruturação Corporal Global – UGF/RJ</li>
              <li>• Pós-graduação em Reabilitação Cardíaca e Grupos Especiais – UGF/RJ</li>
              <li>• Pós-graduação em Fisiologia do Exercício – ESEF/UFRGS</li>
              <li>• Especialista em Comportamento Humano</li>
              <li>• Mais de 25 anos de docência nas áreas de saúde, segurança e educação</li>
            </ul>
            <p className="mt-4 text-white/90">
              Tudo isso reunido em um método estratégico, eficaz e construído na vida real.
            </p>
          </div>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">Para quem é esta mentoria</h2>
          <ul className="mt-6 space-y-2 text-white/90">
            <li>• Pessoas que desejam alta performance pessoal e profissional.</li>
            <li>• Líderes que querem entregar resultado com constância.</li>
            <li>• Profissionais cansados de recomeçar e deixar projetos inacabados.</li>
            <li>• Quem deseja construir algo que permaneça: um legado</li>
          </ul>
        </div>

        <div className="mt-8 card">
          <h2 className="text-2xl font-semibold text-white">Formatos de mentoria</h2>
          <ul className="mt-6 space-y-2 text-white/90">
            <li>• Mentoria para gestores.</li>
            <li>• Mentoria para líderes.</li>
            <li>• Mentoria para operadores.</li>
            <li>• Mentoria para atletas.</li>
            <li>• Mentoria para sobrevivência.</li>
            <li>• Mentoria para vida real.</li>
          </ul>
        </div>

        <div className="mt-12 card bg-brand-500/10 border-brand-500/30">
          <h2 className="text-2xl font-semibold text-white">Encerramento</h2>
          <p className="mt-4 text-xl text-white/90 italic">
            Disciplina não limita. Disciplina liberta. Liberta do caos, da improvisação e da mediocridade.
          </p>
          <p className="mt-4 text-lg text-white/90">
            Vamos construir seu próximo grande resultado - ponte para seu legado.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-400 hover:shadow-xl"
          >
            Quero entrar na mentoria
          </a>
        </div>
      </div>
    </section>
  );
}
