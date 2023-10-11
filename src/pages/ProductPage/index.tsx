import * as S from "./style";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import ProductInfo from "../../components/ProductInfo";
import MoreProductInfo from "../../components/MoreProductInfo";
import MobileHeader from "../../components/MobileHeader";

const ProductPage = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.outerWidth);

    const noteTheSize = () => {
      setWindowSize(window.outerWidth);
    };
    window.addEventListener("resize", noteTheSize);

    return () => {};
  }, []);

  return (
    <>
      {windowSize > 425 ? <Header /> : <MobileHeader />}

      <S.section>
        <Gallery />
        <ProductInfo />
      </S.section>

      <MoreProductInfo />

      <Footer />
    </>
  );
};

export default ProductPage;
