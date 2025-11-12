
# Site — Décio Tiarajú (Next.js + Tailwind)

## Rodar local
```bash
npm install
npm run dev
```
http://localhost:3000

## Deploy na Vercel
1) Suba este projeto para um repositório GitHub
2) Importe na Vercel e conecte o repositório
3) Build & deploy

## Onde editar
- `app/page.tsx`: seção hero e destaques
- `app/sobre/page.tsx`: biografia e formações
- `app/servicos/page.tsx`: ofertas e trilhas
- `app/portfolio/page.tsx`: cases (preencher com o PDF)
- `app/contato/page.tsx`: canais e formulário
- Cores: `tailwind.config.js` (namespace `brand`)

## Próximos passos
- Formulário com Formspree/Getform ou API própria
- Blog/MDX em `/conteudos`
- JSON-LD (`Person`, `Organization`, `Event`)
- OG tags e imagens de capa por página
