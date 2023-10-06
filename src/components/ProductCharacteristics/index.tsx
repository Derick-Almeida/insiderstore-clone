import { useRef, useState } from "react";
import data from "../../database/product";
import * as S from "./style";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ProductCharacteristics = () => {
  const [counter, setCounter] = useState(1);

  const carousel = useRef<HTMLUListElement>(null);
  const item = useRef<HTMLLIElement>(null);

  const scrollLeft = () => {
    if (carousel.current && item.current) {
      if (counter > 1) {
        setCounter(counter - 1);

        carousel.current.scrollLeft -= item.current.offsetWidth;
      }
    }
  };

  const scrollRight = () => {
    if (carousel.current && item.current) {
      if (counter < data.characteristics.length - 2) {
        setCounter(counter + 1);

        carousel.current.scrollLeft += item.current.offsetWidth;
      }
    }
  };

  return (
    <S.container>
      <S.p>Características do produto</S.p>

      <span onClick={scrollLeft} style={{ opacity: counter > 1 ? 1 : 0 }}>
        <SlArrowLeft />
      </span>

      <S.ul ref={carousel}>
        {data.characteristics.map((char) => (
          <S.li key={char.id} ref={item}>
            <img src={char.image} alt="" />
            <S.span>{char.text}</S.span>
          </S.li>
        ))}
      </S.ul>

      <span
        onClick={scrollRight}
        style={{ opacity: counter < data.characteristics.length - 2 ? 1 : 0 }}
      >
        <SlArrowRight />
      </span>
    </S.container>
  );
};

export default ProductCharacteristics;
