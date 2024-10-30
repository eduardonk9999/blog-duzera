import styled from "styled-components";


interface ButtonStyledProps {
    isBlackIcon: boolean;
  }

export const ButtonWhiteBlack = styled.button<ButtonStyledProps>`
  background-color: ${(props) => (props.isBlackIcon ? '#3D1672' : '#9E56FF')};
  border: none;
  cursor: pointer;
  border-radius: 35px;
  width: 90px;
  height: 33px;
  transition: background-color 0.6s;

  svg.iconWhiteBlack {
      width: 50px;
      height: 50px;
      transform: translate3d(
        ${(props) => (props.isBlackIcon ? '15px' : '-13px')},
        ${(props) => (props.isBlackIcon ? '-1px' : '-4px')},
        0
      );
      transition: transform 0.6s;
  }
`;