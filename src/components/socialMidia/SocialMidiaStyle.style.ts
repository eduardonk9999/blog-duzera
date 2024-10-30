import styled from "styled-components";

export const SocialMidiaStyle = styled.div`
    position: absolute;
    top: 60px;
    z-index: 1;

    li {
        list-style: none;
        width: 10px;
        height: 50px;

        ::after{
            
                content: "";
                width: 1px;
                height: 60%;
                background: #fff;
                position: absolute;
                text-align: center;
                left: 100%;
                margin-left: 56px;
                top: -10px;
            
        }

        img {

        }
    }
`;