import { HeaderContainer } from '@/styles/HeaderStyles';
import Link from 'next/link';
import React from 'react';
import ButtonWhiteBlackComponent from './ButtonWhiteBlack/ButtonWhiteBlack';


const Header: React.FC = () => {

    return(
        <HeaderContainer>
            <div className="container">
                <h1>Duzera</h1>
                <nav>
                    <Link href="/blog">Blog</Link>
                    <ButtonWhiteBlackComponent onClick={() => console.log('Botão clicado!')} />
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header;