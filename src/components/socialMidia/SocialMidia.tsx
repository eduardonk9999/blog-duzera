
import React from 'react';

import { SocialMidiaStyle } from './SocialMidiaStyle.style';

import Linkedin from './linkedin.svg';
import GitHub from './github.svg';
import Image from 'next/image';
import Link from 'next/link';


const SocialMidia: React.FC = () => {

    return(
        <SocialMidiaStyle>
            <ul>
                <li>
                   <Link href="https://github.com/eduardonk9999" target='_blank'>
                     <Image src={GitHub} alt="GitHub" />
                   </Link>  
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/eduardo-silva-537963160/" target='_blank'>
                        <Image src={Linkedin} alt="Linkedin" />
                    </Link>
                </li>
            </ul>
        </SocialMidiaStyle>
    )
}

export default SocialMidia;