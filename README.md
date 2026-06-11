# Connections Languages — Landing Page

Refatoração da landing page da Connections Languages em Next.js, preservando seções, textos e imagens do site original.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4

## Estrutura

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── header.tsx
│   ├── sobre.tsx
│   ├── idiomas.tsx
│   ├── metodologia.tsx
│   ├── professores.tsx
│   ├── modalidades.tsx
│   ├── pacotes.tsx
│   ├── importancia.tsx
│   ├── depoimentos.tsx
│   ├── contato.tsx
│   ├── footer.tsx
│   ├── whatsapp-float.tsx
│   └── ui/
├── lib/
│   └── content.ts      # Textos e dados centralizados
public/
├── img/                # Imagens do site original
└── font/               # Fontes Rubik e BillionDreams
```

## Seções migradas

1. Sobre Nós (com carrossel e texto animado)
2. Idiomas Disponíveis
3. Metodologia
4. Professores
5. Modalidades de Aula
6. Pacotes e Valores
7. Importância de aprender idiomas
8. Depoimentos
9. Contato + WhatsApp flutuante

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Próximos passos

- Páginas `/empresarial` e `/newsletter`
- Modernização visual e animações
- Formulários e integrações (backend)
