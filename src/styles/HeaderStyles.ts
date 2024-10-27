import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #1A0B2E;
    padding: 10px 0;

    .container{
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        nav{
            display: flex;
            align-items: center;
            justify-content: space-between;

            a {
                margin-right: 20px;
            }
        }

        h1 {
            color: #01C721;
        }
    }
    

`;