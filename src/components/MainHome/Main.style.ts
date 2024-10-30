import styled from "styled-components";


export const Main = styled.main`
    .profileNameImage {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 100px auto 50px auto;

        img {
            margin-right: 10px;
            box-shadow: 0 0 15px rgba(0, 123, 255, 0.6), /* Glow Effect */
              0 0 30px rgba(0, 123, 255, 0.4),
              0 0 45px rgba(0, 123, 255, 0.2);
            transition: box-shadow 0.3s ease-in-out;

            border-radius: 110px;
            height: 150px;
            width: 150px;
            
        }
    }

    p {
      
        font-size: 20px;
        margin-bottom: 0px;
        line-height: 35px;
        padding: 1rem 0rem;
    }


    .container_content {
        p {
            padding: 0 10rem;
            line-height: 35px;
            font-size: 20px;
            margin-bottom: 1rem;
        }
    }


    .container_content {
        flex-direction: column!important;
    }
    
   @media (max-width: 760px) {
        padding: 0 2rem;

        p {
            padding: 1rem 1rem;
        }
        
       .profileNameImage {
            flex-direction: column;
       }

       .container_content {
            p {
                padding: 0 1rem;
                line-height: 35px;
                font-size: 20px;
                margin-bottom: 1rem;
            }
        }
    }

    

`;