// pages/api/data.ts

export const posts = [
  {
      id: 1,
      title: "Criando Meu Blog com Next.js, GitHub Issues e Styled Components",
      body: `
          Motivação e Planejamento
          Decidi desenvolver este blog para ter uma plataforma pessoal onde pudesse compartilhar conteúdo 
          e experiências de uma forma flexível e totalmente personalizável. Além disso, utilizei este projeto 
          como uma oportunidade para expandir e testar conhecimentos em tecnologias atuais, integrando GitHub 
          como uma fonte de dados e explorando várias ferramentas de desenvolvimento modernas.

          <h2>Estrutura e Principais Tecnologias Utilizadas</h2>
          <p><strong>1. Next.js</strong></p>
          <p>Para o framework, escolhi Next.js. Com ele, além da capacidade de gerar páginas estáticas, pude utilizar rotas dinâmicas e renderização do lado do servidor (SSR) para otimizar o carregamento das páginas e oferecer uma experiência mais fluida para o usuário.</p>
          <p>O Next.js oferece várias funcionalidades out-of-the-box, como roteamento e geração de páginas estáticas, o que torna o desenvolvimento rápido e otimizado. Um dos pontos altos foi usar as rotas dinâmicas para criar páginas únicas de posts.</p>

          <p><strong>2. GitHub Issues como Backend</strong></p>
          <p>Para gerenciar o conteúdo do blog, aproveitei o recurso de GitHub Issues. Em vez de configurar um backend completo, conectei a API de Issues do GitHub para puxar os posts diretamente de lá. Isso simplifica o gerenciamento de conteúdo, pois posso criar e editar posts direto no GitHub, sem a necessidade de um CMS complexo.</p>

          <h2>Na prática:</h2>
          <p>Implementei uma API personalizada no Next.js para consumir os dados de issues, transformando-os em uma estrutura organizada e útil para o blog. Usei autenticação com tokens para contornar limitações de acesso na API do GitHub, o que garantiu que pudesse consumir os dados sem problemas de permissão ou restrição de requisições.</p>

          <h2>3. Styled Components</h2>
          <p>Para estilização, optei pelo Styled Components, que permitiu a criação de estilos encapsulados e dinâmicos diretamente nos componentes. Além de facilitar a manutenção, os Styled Components oferecem uma abordagem mais modular e escalável para projetos que podem crescer em complexidade ao longo do tempo.</p>

          <h2>Principais vantagens:</h2>
          <p>Temas dinâmicos: Apliquei um contexto global para alternar temas claro e escuro, com cores que mudam conforme a escolha do usuário.</p>
          <p>Componentes reutilizáveis: Criei componentes de botão e layouts que seguem um design consistente e que podem ser facilmente ajustados.</p>

          <h2>4. Context API para Gerenciamento de Estado Global</h2>
          <p>Para facilitar a implementação de temas (claro e escuro), utilizei o Context API do React para armazenar a preferência de tema do usuário. Isso permite que o tema seja alterado globalmente e de forma eficiente em todo o blog.</p>

          <h2>5. TypeScript</h2>
          <p>O TypeScript foi essencial para garantir tipagens e segurança no código. Ele ajudou a detectar erros antecipadamente, o que foi um diferencial na construção de um projeto mais robusto e organizado.</p>

          <h2>Principais Desafios</h2>
          <p>Integração com a API do GitHub: A comunicação com a API foi relativamente tranquila, mas precisei ajustar a autenticação para evitar erros de permissão e limitar as requisições.</p>
          <p>Gestão de Tema Global: Implementar o contexto de tema foi uma experiência enriquecedora. Aprendi mais sobre como o Context API facilita a passagem de estados globais, como o tema, em uma aplicação React.</p>
      `,
  },
  // Adicione mais posts conforme necessário
];
