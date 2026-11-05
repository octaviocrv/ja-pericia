# JA Perícia — Landing Page

Landing page autoral do núcleo pericial da JA Contabilidade e Perícia.
Estrutura e linguagem visual baseadas na LP do Rafael Santos (Black Premium), com a paleta da JA.

## Rodar

```bash
npm install
npm run dev   # http://localhost:3000
```

## Antes de publicar

- `lib/config.ts`: nome do perito, CRC/CNPC, cidade/UF, WhatsApp, Instagram e CNPJ (todos marcados com TODO)
- Números `[a confirmar]` em `StatsBar.tsx` e `Authority.tsx`
- Fotos: cada `<ImagePlaceholder>` descreve a foto esperada. Para trocar, coloque o arquivo em
  `app/assets/` e substitua por `next/image`, como no Hero/Authority da LP do Rafael

## Seções

Hero · Números · Quem é o perito · O ponto cego · Áreas de atuação · Como funciona ·
Para quem é · Para quem não é · Provas · Conteúdo · FAQ · CTA final · Rodapé
