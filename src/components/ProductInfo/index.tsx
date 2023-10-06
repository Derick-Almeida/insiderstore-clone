import * as S from "./style";
import { useContext, useState } from "react";

import data from "../../database/product";

import Button from "../Button";
import Counter from "../Counter";
import ColorSelect from "../ColorSelect";
import ProductCharacteristics from "../ProductCharacteristics";

import { ProductContex } from "../../contexts/product.context";

import { LiaRulerHorizontalSolid } from "react-icons/lia";
import { PiCoatHangerThin } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

const ProductInfo = () => {
  const { clotheInfo, size, setSize, color } = useContext(ProductContex);
  const [productInStock, setProductInStock] = useState<boolean>(false);

  return (
    <S.aside>
      <S.h1>{data.name}</S.h1>

      <S.p>
        <div>
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>

        <S.span>
          {data.stars}( {data.reviews} reviews )
        </S.span>
      </S.p>
      <S.price>R$ {clotheInfo.price}</S.price>

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
          Composição: 92% TENCEL™ <S.span>modal e 8% elastano</S.span>
        </S.p>
        Altura do modelo: 1,83m, tamanho: M | 40
      </S.description>

      <ProductCharacteristics />
    </S.aside>
  );
};

export default ProductInfo;
