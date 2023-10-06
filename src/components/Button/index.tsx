import { IButtonProps } from "../../types";
import * as S from "./style";

const Button = ({ children, icon, ...props }: IButtonProps) => {
  return (
    <S.button {...props}>
      {icon && icon}
      {children}
    </S.button>
  );
};

export default Button;
