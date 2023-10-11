import { useRef } from "react";
import data from "../../database/product";
import * as S from "./style";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CarouselControls from "../CarouselControls";

const ProductCharacteristics = () => {
  const carousel = useRef<HTMLUListElement>(null);
  const item = useRef<HTMLLIElement>(null);

  const { counter, scrollLeft, scrollRight } = CarouselControls(
    carousel,
    item,
    data.characteristics,
    3,
    false
  );

  return (
    <div>
      <S.p>Características do produto</S.p>

      <S.container>
        <S.ul ref={carousel}>
          {data.characteristics.map((char) => (
            <S.li key={char.id} ref={item}>
              <img src={char.image} alt="" />
              <S.span>{char.text}</S.span>
            </S.li>
          ))}
        </S.ul>

        <S.controls>
          <span onClick={scrollLeft} style={{ opacity: counter > 1 ? 1 : 0 }}>
            <SlArrowLeft />
          </span>

          <span
            onClick={scrollRight}
            style={{ opacity: counter < data.characteristics.length - 2 ? 1 : 0 }}
          >
            <SlArrowRight />
          </span>
        </S.controls>
      </S.container>
    </div>
  );
};

export default ProductCharacteristics;
