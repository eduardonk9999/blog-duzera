import LogoDuzera from './LogoEdu.svg';
import { FooterStyled } from './Footer.styles';
//

const Footer: React.FC = () => {

    return(
        <FooterStyled>
            <div className="container">
                <LogoDuzera className="logoDuzera" />
            </div>
        </FooterStyled>
    )
}

export default Footer;