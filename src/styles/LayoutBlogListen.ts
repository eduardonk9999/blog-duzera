import styled from "styled-components";

export const LayoutBlogListen = styled.article`
    cursor: pointer;
    max-width: 1040px;
    margin: 3rem auto 5rem auto;

   h2 {
    margin-bottom: 10px;
    color: #01C721;
    font-weight: 600;
    font-size: 28px;
    
   }

   span {
    color: #01C721;
    font-weight: bold;
   }

   li {
    list-style: none;
    margin: 1rem auto 2rem auto;
   }

   
   
   @media (max-width: 1200px) {
        
        padding: 0 5rem;
    }

    @media (max-width: 768px) {
        
        padding: 5rem 2rem;
    }

`;