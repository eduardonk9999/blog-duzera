
import React from 'react';

import { SocialMidiaStyle } from './SocialMidiaStyle.style';

import Linkedin from './Linkedin.svg';
import GitHub from './Github.svg';
import Link from 'next/link';


const SocialMidia: React.FC = () => {

    return(
        <SocialMidiaStyle>
            <ul>
                <li>
                   <Link href="https://github.com/eduardonk9999" target='_blank'>
                     <GitHub />
                   </Link>  
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/eduardo-silva-537963160/" target='_blank'>
                        <Linkedin />
                    </Link>
                </li>
            </ul>
        </SocialMidiaStyle>
    )
}

export default SocialMidia;