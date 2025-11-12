
import Image from "next/image";
export const metadata = { title: "Sobre — Décio Tiarajú" };

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Quem é Décio Tiarajú</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <Image
            src="/decio-tiaraju.webp"
            alt="Décio Tiarajú — Palestrante e Mentor"
            width={600}
            height={750}
            className="rounded-2xl shadow-lg w-full object-cover"
            priority
          />
        </div>
        <div className="md:col-span-2">
          <p className="text-white/80">
            Pai da Doce Helena, gaúcho do interior. Iniciou a vida profissional aos seis anos, trabalhou em lavouras e serviu como
            Sargento R2 no Exército Brasileiro (tropa de elite). Hoje atua como Personal Trainer, Palestrante Profissional, Mentor, Consultor
            e Treinador de equipes empresariais, desportivas, de sobrevivencialismo e resgate.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold">Formação</h3>
              <ul className="mt-2 text-white/80 list-disc list-inside">
                <li>Bacharel em Educação Física — URCAMP/RS</li>
                <li>Pós: Reestruturação Corporal Global — UGF/RJ</li>
                <li>Pós: Reabilitação Cardíaca e Grupos Especiais — UGF/RJ</li>
                <li>Pós: Fisiologia do Exercício — ESEF/UFRGS</li>
                <li>Life Coach e Coach Esportivo — LACUS/RS</li>
                <li>Palestrante Profissional — APRESENTARTE/RS</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">Experiências & Atuação</h3>
              <ul className="mt-2 text-white/80 list-disc list-inside">
                <li>25+ anos de docência (Saúde, Segurança e Educação)</li>
                <li>Mentor de atletas no extrapista</li>
                <li>Ultramaratonista</li>
                <li>Operador especial em terrenos e situações adversas</li>
                <li>Resgatista voluntário em missões solidárias</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
