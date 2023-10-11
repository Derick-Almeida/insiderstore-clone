import * as S from "./style";
import { useContext, useEffect, useState } from "react";

import data from "../../database/product";

import Button from "../Button";
import Counter from "../Counter";
import ColorSelect from "../ColorSelect";
import InitialProductInfo from "../InitialProductInfo";
import ProductCharacteristics from "../ProductCharacteristics";

import { ProductContex } from "../../contexts/product.context";

import { LiaRulerHorizontalSolid } from "react-icons/lia";
import { PiCoatHangerThin } from "react-icons/pi";

const ProductInfo = () => {
  const { clotheInfo, size, setSize, color, windowSize } = useContext(ProductContex);
  const [productInStock, setProductInStock] = useState<boolean>(false);

  useEffect(() => {
    if (clotheInfo.sizes) {
      setProductInStock(true);
    } else {
      setProductInStock(false);
    }
  }, [clotheInfo]);

  return (
    <S.aside>
      {windowSize > 425 && <InitialProductInfo />}

      <S.span>
        cor: <b>{color}</b>
      </S.span>
      <ColorSelect />

      <S.span>tamanho</S.span>

      <S.ul>
        {clotheInfo.sizes?.map((e) => (
          <li key={e.id}>
            <Button
              variant={size === e.size ? "black" : "white"}
              in_stock={e.inStock}
              onClick={() => {
                setSize(e.size);
                setProductInStock(e.inStock);
              }}
            >
              {e.size}
            </Button>
          </li>
        ))}
      </S.ul>

      <S.div>
        <Button in_stock variant="gray" icon={<PiCoatHangerThin />}>
          provador virtual
        </Button>
        <Button in_stock variant="gray" icon={<LiaRulerHorizontalSolid />}>
          tabela de medidas
        </Button>
      </S.div>

      <S.span>quantidade</S.span>
      <Counter />

      <Button variant="black" in_stock>
        {productInStock ? "Adicionar ao carrinho" : "avise-me quando estiver disponível"}
      </Button>

      <S.description>
        {data.description}
        <S.p>
          Composição: 92% TENCEL™ <b>modal e 8% elastano</b>
        </S.p>
        Altura do modelo: 1,83m, tamanho: M | 40
      </S.description>

      <ProductCharacteristics />
    </S.aside>
  );
};

export default ProductInfo;
