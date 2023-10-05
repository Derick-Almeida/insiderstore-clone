import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IProductProviderProps } from "../types";

import data from "../database/product";

export const ProductContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductProvider = ({ children }: IChildrenProps) => {
  const [color, setColor] = useState<string>("blue");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    data.clothes.map((clothe) => {
      if (clothe.color === color) {
        setImages(clothe.image);
      }
    });
  }, [color]);

  return (
    <ProductContex.Provider value={{ color, setColor, images, setImages }}>
      {children}
    </ProductContex.Provider>
  );
};

export default ProductProvider;
