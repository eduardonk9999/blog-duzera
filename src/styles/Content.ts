import styled from "styled-components";

export const Content = styled.article`
   max-width: 1220px;
   margin: 4rem auto 5rem auto;


   h1 {
    margin-bottom: 2rem;
    color: #FFF;
    font-weight: 600;
    font-size: 36px;
    
   }

   p {
    margin: 1rem 0 2rem 0;
   }

   span {
      margin: 1rem 0 2rem 0;
   }

   h3 {
      font-size: 30px;
      margin: 2rem 0 1rem 0;
   }


   @media (max-width: 1400px) {
        
        padding: 0 5rem;
   }

    @media (max-width: 768px) {
        
        padding: 5rem 2rem;
   }
   

`;