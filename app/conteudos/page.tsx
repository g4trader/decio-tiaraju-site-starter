
export const metadata = { title: "Conteúdos — Artigos & Vídeos" };
export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Conteúdos</h1>
      <p className="mt-4 text-white/80">Publicações autorais, artigos, vídeos e materiais de apoio.</p>
      <div className="mt-6 card">
        <p className="text-white/70">Em breve: integração com blog/MDX ou CMS (Notion, Ghost, Headless WP, etc.).</p>
      </div>
    </section>
  )
}
