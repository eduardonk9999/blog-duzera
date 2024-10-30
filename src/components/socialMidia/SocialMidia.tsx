
import React from 'react';

import { SocialMidiaStyle } from './SocialMidiaStyle.style';

import Linkedin from './linkedin.svg';
import GitHub from './github.svg';
import Image from 'next/image';


const SocialMidia: React.FC = () => {

    return(
        <SocialMidiaStyle>
            <ul>
                <li>
                    <Image src={GitHub} alt="GitHub" />
                </li>
                <li>
                    <Image src={Linkedin} alt="Linkedin" />
                </li>
            </ul>
        </SocialMidiaStyle>
    )
}

export default SocialMidia;