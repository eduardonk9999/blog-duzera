
import Header from "@/components/Header";
import Link from "next/link";

import { FC } from "react";

const Home: FC = () => {
  return (
    <>
    
      <Header />
      <main>

        <article className="duzera">
          <h2>Eduardo Silva - Engenheiro de Software</h2>
        </article>

        <p>Olá! Sou Eduardo Silva, um desenvolvedor com mais de 5 anos de experiência, especializado em JavaScript e React. 
          Atualmente, estou expandindo minhas habilidades e aprendendo Java, Spring, MySQL e práticas de DevOps. <br />
          Estou animado em aplicar meu conhecimento em Desenvolvimento para criar soluções completas e eficientes.
           Busco constantemente novos desafios e oportunidades para aprimorar minhas habilidades como desenvolvedor.</p>
      </main>

      <footer>
        
      </footer>  
      
    </>
  );
}

export default Home;