import { HeaderContainer } from '@/styles/HeaderStyles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonWhiteBlackComponent from './ButtonWhiteBlack/ButtonWhiteBlack';



const Header: React.FC = () => {

    



    return(
        <HeaderContainer>
            <h1>Edu</h1>

            <nav>
                <Link href="/blog">Blog</Link>

              
               
            </nav>
         

            <ButtonWhiteBlackComponent onClick={() => console.log('Botão clicado!')} />
                

        </HeaderContainer>
        
    )
}

export default Header;