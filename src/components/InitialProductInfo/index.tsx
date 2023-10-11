import * as S from "./style";
import { useContext } from "react";

import data from "../../database/product";

import { ProductContex } from "../../contexts/product.context";

import { IoIosStar } from "react-icons/io";

const InitialProductInfo = () => {
  const { clotheInfo } = useContext(ProductContex);

  return (
    <S.box>
      <div>
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
      </div>
      <S.price>R$ {clotheInfo.price}</S.price>
    </S.box>
  );
};

export default InitialProductInfo;
