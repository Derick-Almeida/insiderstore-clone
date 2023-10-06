import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IClotheProps, IProductProviderProps } from "../types";

import data from "../database/product";

export const ProductContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductProvider = ({ children }: IChildrenProps) => {
  const [color, setColor] = useState<string>("blue");
  const [size, setSize] = useState<string>("");
  const [clotheInfo, setClotheInfo] = useState<IClotheProps>({} as IClotheProps);

  useEffect(() => {
    data.clothes.map((clothe) => {
      if (clothe.color === color) {
        setClotheInfo(clothe);
        setSize(clothe.sizes[0].size);
      }
    });
  }, [color]);

  return (
    <ProductContex.Provider value={{ color, setColor, size, setSize, clotheInfo }}>
      {children}
    </ProductContex.Provider>
  );
};

export default ProductProvider;
