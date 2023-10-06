import { IChildrenProps } from "../types";
import ProductProvider from "./product.context";

const Providers = ({ children }: IChildrenProps) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default Providers;
