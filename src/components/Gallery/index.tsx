import { useContext } from "react";
import * as S from "./style";
import { ProductContex } from "../../contexts/product.context";

const Gallery = () => {
  const { clotheInfo } = useContext(ProductContex);

  return (
    <S.main>
      {clotheInfo.image?.map((img) => (
        <img key={img} src={img} alt="" />
      ))}
    </S.main>
  );
};

export default Gallery;
