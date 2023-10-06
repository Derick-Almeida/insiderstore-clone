import * as S from "./style";

import product_characteristics_1 from "../../assets/product_characteristics_1.jpg";
import product_characteristics_2 from "../../assets/product_characteristics_2.jpg";
import product_characteristics_3 from "../../assets/product_characteristics_3.jpg";
import product_characteristics_4 from "../../assets/product_characteristics_4.jpg";
import product_characteristics_5 from "../../assets/product_characteristics_5.png";
import product_characteristics_6 from "../../assets/product_characteristics_6.jpg";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ProductCharacteristics = () => {
  return (
    <S.container>
      <S.p>Características do produto</S.p>

      <SlArrowLeft />
      <S.ul>
        <S.li>
          <img src={product_characteristics_1} alt="" />
          <S.span>Anti odor</S.span>
        </S.li>
        <S.li>
          <img src={product_characteristics_2} alt="" />
          <S.span>não precisa passar</S.span>
        </S.li>
        <S.li>
          <img src={product_characteristics_3} alt="" />
          <S.span>regulação térmica</S.span>
        </S.li>
        <S.li>
          <img src={product_characteristics_4} alt="" />
          <S.span>não desbota</S.span>
        </S.li>
        <S.li>
          <img src={product_characteristics_5} alt="" />
          <S.span>leve e macia</S.span>
        </S.li>
        <S.li>
          <img src={product_characteristics_6} alt="" />
          <S.span>sustentável</S.span>
        </S.li>
      </S.ul>
      <SlArrowRight />
    </S.container>
  );
};

export default ProductCharacteristics;
