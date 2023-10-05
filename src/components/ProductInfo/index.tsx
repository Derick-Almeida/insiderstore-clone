import * as S from "./style";
import { useContext, useState } from "react";

import data from "../../database/product";

import ColorSelect from "../ColorSelect";
import Counter from "../Counter";
import Button from "../Button";

import { ProductContex } from "../../contexts/product.context";

import { LiaRulerHorizontalSolid } from "react-icons/lia";
import { PiCoatHangerThin } from "react-icons/pi";

const ProductInfo = () => {
  const { clotheInfo, size, setSize, color } = useContext(ProductContex);
  const [productInStock, setProductInStock] = useState<boolean>(false);

  return (
    <S.aside>
      <S.h1>{data.name}</S.h1>

      <S.span>
        cor: <b>{color}</b>
      </S.span>
      <ColorSelect />

      <S.span>tamanho</S.span>

      <S.ul>
        {clotheInfo.sizes?.map((e) => (
          <S.li key={e.id}>
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
          </S.li>
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

      <S.p>{data.description}</S.p>
    </S.aside>
  );
};

export default ProductInfo;
