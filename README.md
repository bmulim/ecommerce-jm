# 🏋️ JM Store - E-commerce de Suplementação

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Plataforma moderna de e-commerce para suplementos e produtos fitness**

[🌐 Demo](#) • [📖 Documentação](#-sobre-o-projeto) • [🚀 Instalação](#-instalação) • [🇬🇧 English](README.en.md)

</div>

---

## 📋 Sobre o Projeto

JM Store é uma plataforma de e-commerce desenvolvida com as tecnologias mais modernas do mercado, focada na venda de suplementos alimentares e produtos fitness. O projeto faz parte do ecossistema JM Fitness Studio e oferece uma experiência de compra excepcional com design elegante e performance otimizada.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface elegante com tema dourado premium (#C2A537)
- ⚡ **Performance**: Otimizado com Next.js 15 e Server Components
- 📱 **Responsivo**: Experiência perfeita em todos os dispositivos
- 🎭 **Animações Suaves**: Framer Motion para transições elegantes
- 🔒 **Seguro**: Autenticação e proteção de dados integrada
- 🛒 **Carrinho Inteligente**: Sistema de compras otimizado
- 💳 **Pagamentos**: Integração com gateways de pagamento
- 📧 **Newsletter**: Sistema de marketing por e-mail
- 🎯 **SEO Otimizado**: Melhor posicionamento em mecanismos de busca

---

## 🛠️ Tecnologias

### Core

- **[Next.js 15.5.3](https://nextjs.org/)** - Framework React com Server Components
- **[React 19.1.0](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e customizáveis
- **[CVA](https://cva.style/)** - Variantes de componentes

### Banco de Dados

- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations e seeds

### Ferramentas de Desenvolvimento

- **[ESLint](https://eslint.org/)** - Linter para qualidade de código
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Regras TypeScript para ESLint

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn ou pnpm
- PostgreSQL 14 ou superior

### Passos de Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/bmulim/ecommerce-jm.git
cd ecommerce-jm
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/jmstore"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Execute as migrations do banco de dados**

```bash
npm run db:push
# ou
npm run db:migrate
```

5. **Popule o banco de dados (opcional)**

```bash
npm run db:seed
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📁 Estrutura do Projeto

```
jmstore/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Estilos globais
│   ├── components/            # Componentes reutilizáveis
│   │   ├── HeroSection/       # Banner principal
│   │   ├── FeaturedProducts/  # Produtos em destaque
│   │   ├── CategorySection/   # Categorias
│   │   ├── BenefitsSection/   # Benefícios da loja
│   │   ├── NewsletterSection/ # Newsletter
│   │   ├── Header/            # Cabeçalho
│   │   ├── Footer/            # Rodapé
│   │   └── WhatsAppFloat/     # Botão WhatsApp flutuante
│   ├── db/                    # Configuração do banco de dados
│   │   ├── index.ts           # Cliente Drizzle
│   │   ├── schema.ts          # Schemas do banco
│   │   └── seed.ts            # Dados iniciais
│   └── lib/                   # Utilitários
│       └── utils.ts           # Funções auxiliares
├── public/                    # Arquivos estáticos
│   └── favicon.svg           # Favicon do site
├── drizzle/                   # Migrations do banco
├── .env                       # Variáveis de ambiente
├── drizzle.config.ts         # Configuração Drizzle
├── tailwind.config.ts        # Configuração Tailwind
├── tsconfig.json             # Configuração TypeScript
└── package.json              # Dependências do projeto
```

---

## 🎯 Funcionalidades

### 📦 Página Inicial (Homepage)

#### Hero Section

- Banner principal com animações
- CTAs para produtos e sobre a loja
- Estatísticas da loja (produtos, clientes, satisfação)
- Efeitos de partículas animadas

#### Produtos em Destaque

- Grid responsivo de produtos
- Sistema de avaliações com estrelas
- Badges (Mais Vendido, Destaque, Novo)
- Preços com desconto destacados
- Botão de adicionar ao carrinho

#### Categorias de Produtos

- 6 categorias principais:
  - 💪 Proteínas (Whey, Caseína, Albumina)
  - ⚡ Creatinas (Monohidratada, HCL, Micronizada)
  - 🔥 Pré-Treinos (Energia e foco)
  - 💧 Aminoácidos (BCAA, Glutamina)
  - 🏋️ Hipertrofia (Ganho de massa)
  - ❤️ Saúde (Vitaminas, Minerais)
- Ícones animados
- Contador de produtos por categoria

#### Benefícios da Loja

- ✓ Entrega Rápida (24h)
- ✓ Produtos Originais (100% certificados)
- ✓ Melhor Preço (promoções exclusivas)
- ✓ Suporte 24/7 (atendimento especializado)
- ✓ Qualidade Garantida (testados e aprovados)
- ✓ Troca Facilitada (até 30 dias)

#### Newsletter

- Formulário de inscrição
- Validação de e-mail
- Feedback visual
- Benefícios da assinatura
- Estatísticas (15k+ inscritos)

### 🎨 Componentes Globais

#### Header

- Logo animado
- Menu de navegação responsivo
- Links para Home, Produtos, Sobre, Contato
- Menu hamburger mobile
- Integração com autenticação

#### Footer

- Informações da empresa
- Links rápidos
- Botão WhatsApp
- Redes sociais
- Copyright

#### WhatsApp Flutuante

- Botão fixo no canto inferior direito
- Animação de pulo (bounce)
- Badge de notificação
- Mensagem pré-configurada
- Oculto em rotas admin/coach

---

## 🎨 Design System

### Paleta de Cores

```css
/* Dourados Principais */
--primary: #c2a537 /* Dourado principal */ --secondary: #d4b547
  /* Dourado secundário */ --accent: #ffe17d /* Dourado claro */
  --dark-gold: #b8941f /* Dourado escuro */ /* Neutros */ --background: #000000
  /* Preto */ --foreground: #ffffff /* Branco */ --gray: #6b7280 /* Cinza */;
```

### Tipografia

- **Fonte Sans**: Geist Sans (variável)
- **Fonte Mono**: Geist Mono (variável)
- **Tamanhos**: 12px a 72px (sistema responsivo)

### Componentes UI

Todos os componentes seguem a estrutura:

```
ComponentName/
└── index.tsx
```

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint

# Banco de Dados
npm run db:push      # Sincroniza schema com o banco
npm run db:migrate   # Executa migrations
npm run db:seed      # Popula o banco com dados iniciais
npm run db:studio    # Abre Drizzle Studio (GUI)
```

---

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático a cada push

### Outras Plataformas

O projeto é compatível com:

- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify
- Netlify

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Convenções de Código

- Use TypeScript para type safety
- Siga as regras do ESLint
- Formate com Prettier
- Escreva commits semânticos
- Adicione testes quando possível

---

## 📝 Roadmap

- [ ] Sistema de autenticação completo
- [ ] Integração com gateway de pagamento
- [ ] Painel administrativo
- [ ] Sistema de avaliações e comentários
- [ ] Programa de fidelidade
- [ ] Rastreamento de pedidos
- [ ] Cupons de desconto
- [ ] Wishlist de produtos
- [ ] Comparação de produtos
- [ ] Chat de suporte ao vivo

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Equipe

- **Desenvolvedor Principal**: [Bruno Mulim](https://github.com/bmulim)
- **Design**: JM Fitness Studio
- **Projeto**: JM Store

---

## 📞 Contato

- **Website**: [jmstore.com.br](#)
- **E-mail**: contato@jmstore.com.br
- **WhatsApp**: (21) 98099-5749
- **Instagram**: [@jmstore](#)

---

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela incrível framework
- [Vercel](https://vercel.com/) pelo hosting
- [Tailwind CSS](https://tailwindcss.com/) pelo sistema de design
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- Comunidade open source

---

<div align="center">

**Feito com ❤️ e ☕ por JM Fitness Studio**

[⬆ Voltar ao topo](#-jm-store---e-commerce-de-suplementação)

</div>
