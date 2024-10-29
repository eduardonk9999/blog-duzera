

import Image from 'next/image';
import logoDuzera from './LogoEdu.svg';
import { FooterStyled } from './Footer.styles';


const Footer: React.FC = () => {

    return(
        <FooterStyled>
            <div className="container">
                <Image src={logoDuzera} alt="Logo Duzera" />
            </div>
        </FooterStyled>
    )
}

export default Footer;