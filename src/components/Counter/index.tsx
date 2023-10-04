import { useState } from "react";
import * as S from "./style";

import { IoMdAdd, IoMdRemove } from "react-icons/io";

export const Counter = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <S.cotainer>
      <S.button disabled={count === 1 ? true : false} onClick={() => setCount(count - 1)}>
        <IoMdRemove />
      </S.button>
      {count}
      <S.button onClick={() => setCount(count + 1)}>
        <IoMdAdd />
      </S.button>
    </S.cotainer>
  );
};

export default Counter;
