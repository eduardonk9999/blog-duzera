import { useEffect, useState } from "react";
import { Main } from "./Main.style";
import Image from "next/image";



const MainHome: React.FC = () => {
    const [profileImage, setProfileImage] = useState<string>();


    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const response = await fetch('https://api.github.com/users/eduardonk9999');
                const data = await response.json();
                setProfileImage(data.avatar_url);

            } catch (error) {
                console.error(error);
            }    
        }

        fetchProfileImage();
    }, []);

    return(
        <Main>

            <article className="container profileNameImage">
                {profileImage && <Image src={profileImage} alt="Foto de Perfil do GitHub"  width={100} height={100} />}
                <h2>Eduardo Silva - Engenheiro de Software</h2>
            </article>

            <article className="container container_content">
                <p>Olá! Sou Eduardo Silva, engenheiro de software com experiência sólida em desenvolvimento de soluções escaláveis e de alta performance. 
                Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FIAP, aprimorando ainda mais meus conhecimentos e aprofundando minha expertise em tecnologia.</p>

                <p>Minha atuação inclui tecnologias como Java e Spring Boot no back-end, onde crio APIs robustas e serviços eficientes, integrando com maestria os processos e 
                dados necessários para a operação de sistemas complexos.</p>

                <p>No front-end, trabalho intensivamente com JavaScript, React e Next.js para desenvolver interfaces responsivas e centradas na experiência do usuário. 
                Tenho também experiência com GraphQL, o que me permite otimizar a busca de dados, oferecendo desempenho aprimorado e respostas rápidas aos usuários.</p>

                <p>Sou proficiente em bancos de dados e aplico práticas de DevOps para manter ambientes de desenvolvimento consistentes e facilitar o deploy e a escalabilidade dos sistemas. 
                Meu foco é desenvolver soluções completas e eficientes, aproveitando ao máximo cada tecnologia para entregar produtos de alta qualidade que atendam às demandas do negócio.</p>

                <p>Busco constantemente novos desafios e oportunidades para aprimorar minhas habilidades e contribuir de forma impactante para os projetos em que me envolvo.</p>



            </article>
        </Main>
    )
}

export default MainHome;