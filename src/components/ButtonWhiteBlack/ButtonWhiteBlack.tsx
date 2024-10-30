import React from "react";
import BlackIcon from './Black.svg';
import WhiteIcon from './white.svg';

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
        <BlackIcon className="iconWhiteBlack" />
      ) : (
        <WhiteIcon className="iconWhiteBlack" />
      )}
      {children}
    </ButtonWhiteBlack>
  );
};

export default ButtonWhiteBlackComponent;
