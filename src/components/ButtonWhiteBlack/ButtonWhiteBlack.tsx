import React from "react";
import BlackIcon from './Black.svg';
import WhiteIcon from './White.svg';
import Image from "next/image";
import { ButtonWhiteBlack } from "./ButtonWhiteBlack.styles";
import { useTheme } from "@/contexts/ThemeContext";

interface ButtonWhiteBlackProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonWhiteBlackComponent: React.FC<ButtonWhiteBlackProps> = ({
  onClick,
  children = null,
}) => {
  const { toggleTheme, isDarkTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();  
    if (onClick) onClick();
  };

  return (
    <ButtonWhiteBlack isBlackIcon={isDarkTheme} onClick={handleClick}>
      {isDarkTheme ? (
        <Image src={BlackIcon} alt="Black Icon" />
      ) : (
        <Image src={WhiteIcon} alt="White Icon" />
      )}
      {children}
    </ButtonWhiteBlack>
  );
};

export default ButtonWhiteBlackComponent;
