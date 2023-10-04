import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

type ButtonVariant = "black" | "white" | "gray";

export interface IStyledButtonProps {
  variant?: ButtonVariant;
  outline_hover?: boolean;
  icon?: ReactNode;
  in_stock?: boolean;
}

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IStyledButtonProps;
