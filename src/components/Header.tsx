import { HeaderContainer } from '@/styles/HeaderStyles';
import Link from 'next/link';
import React from 'react';
import ButtonWhiteBlackComponent from './ButtonWhiteBlack/ButtonWhiteBlack';
import SocialMidia from './socialMidia/SocialMidia';


const Header: React.FC = () => {

    return(
        <HeaderContainer>
            
            <div className="container">
                <SocialMidia />
                <h1><Link href="/">Duzera</Link></h1>
                <nav>
                    <Link href="/itsmy">Its-A Me, Edu!</Link>
                    <Link href="/">Blog</Link>
                    <ButtonWhiteBlackComponent onClick={() => console.log('Botão clicado!')} />
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header;