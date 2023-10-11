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

export interface IProductProviderProps {
  color: string;
  setColor: (e: string) => void;
  size: string;
  setSize: (e: string) => void;
  clotheInfo: IClotheProps;
  windowSize: number;
}

export interface IClotheProps {
  id: string;
  color: string;
  hex: string;
  price: number;
  sizes: {
    id: string;
    size: string;
    inStock: boolean;
  }[];
  image: string[];
}
