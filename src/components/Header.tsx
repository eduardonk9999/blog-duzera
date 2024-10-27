import { HeaderContainer } from '@/styles/HeaderStyles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import iconSvg from "./Sun.svg"

const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <h1>Edu</h1>

            <nav>
                <Link href="/blog">Blog</Link>

              
               
            </nav>
            <Image 
                src={iconSvg}
            />
        </HeaderContainer>
        
    )
}

export default Header;