import styled from "styled-components";

export const SocialMidiaStyle = styled.div`
    position: absolute;
    top: 150px;
    z-index: 1;
    left: -60px;

    li {
        list-style: none;
        width: 10px;
        height: 50px;

        

        img {

        }
    }


    li:first-child::after{
        content: "";
        width: 1px;
        height: 9.4rem;
        background: #5289EF;
        position: absolute;
        text-align: center;
        left: 100%;
        margin-left: 56px;
        top: -100px;
    }

    li:first-child{
        margin-bottom: 3rem;
    }




    @media (max-width: 1585px) {
        
        left: -20px;
    }



    @media (max-width: 1200px) {
        
        top: 0;
        width: 100%;
        max-width: 90px;
        left: -50px;

        li:first-child::after{
            display: none;
        }

        li:first-child{
            transform: translateY(-4px);
        }

        li {
            width: 20px;
            margin-top: 10px;
        }

        ul{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 10px;
        }
    }
`;