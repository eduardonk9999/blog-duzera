import { useEffect, useState } from "react";
import { Main } from "./Main.style";



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
                {profileImage && <img src={profileImage} alt="Foto de Perfil do GitHub" style={{ borderRadius: "50%", width: "150px" }} />}
                <h2>Eduardo Silva - Engenheiro de Software</h2>
            </article>

            <article className="container">
                <p>Olá! Sou Eduardo Silva, um desenvolvedor com mais de 5 anos de experiência, especializado em JavaScript e React. 
                Atualmente, estou expandindo minhas habilidades e aprendendo Java, Spring, MySQL e práticas de DevOps. <br />
                Estou animado em aplicar meu conhecimento em Desenvolvimento para criar soluções completas e eficientes.
                Busco constantemente novos desafios e oportunidades para aprimorar minhas habilidades como desenvolvedor.</p>
            </article>
      </Main>
    )
}

export default MainHome;