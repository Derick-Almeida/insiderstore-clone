import * as S from "./style";

import data from "../../database/product";
import { useContext } from "react";
import { ProductContex } from "../../contexts/product.context";

const ColorSelect = () => {
  const { color, setColor } = useContext(ProductContex);

  return (
    <div>
      <S.span>
        cor: <b>{color}</b>
      </S.span>

      <S.ul>
        {data.clothes.map((clothe) => (
          <S.li
            key={clothe.id}
            style={{
              background: clothe.hex,
              border: `3px solid ${color === clothe.color ? "var(--gray-3)" : "transparent"}`,
            }}
            onClick={() => setColor(clothe.color)}
          ></S.li>
        ))}
      </S.ul>
    </div>
  );
};

export default ColorSelect;
