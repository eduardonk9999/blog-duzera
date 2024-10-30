import { HeaderContainer } from '@/styles/HeaderStyles';
import Link from 'next/link';
import React from 'react';
import ButtonWhiteBlackComponent from './ButtonWhiteBlack/ButtonWhiteBlack';


const Header: React.FC = () => {

    return(
        <HeaderContainer>
            <div className="container">
                <h1><Link href="/">Duzera</Link></h1>
                <nav>
                    <Link href="/itsmy">It's-A Me, Edu!</Link>
                    <ButtonWhiteBlackComponent onClick={() => console.log('Botão clicado!')} />
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header;