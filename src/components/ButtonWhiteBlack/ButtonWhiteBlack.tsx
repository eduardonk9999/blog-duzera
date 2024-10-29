import React, { useState } from "react";




import BlackIcon from './Black.svg';
import WhiteIcon from './white.svg';
import Image from "next/image";
import { ButtonWhiteBlack } from "./ButtonWhiteBlack.styles";

interface ButtonWhiteBlackProps {
  primary?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonWhiteBlackComponent: React.FC<ButtonWhiteBlackProps> = ({
  onClick,
  children = null,
}) => {

    const [isBlackIcon, setIsBlackIcon] = useState(true);

    const handkeClick = () => {
        setIsBlackIcon(!isBlackIcon);
        if(onClick) onClick();
    }



  return (

    <ButtonWhiteBlack onClick={handkeClick} isBlackIcon={isBlackIcon}>
        {isBlackIcon ? <Image src={BlackIcon} alt="Black Icon" /> : <Image src={WhiteIcon} alt="White Icon" />}
        {children}
    </ButtonWhiteBlack>
   
  );
};

export default ButtonWhiteBlackComponent;