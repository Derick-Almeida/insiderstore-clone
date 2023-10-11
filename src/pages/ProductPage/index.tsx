import * as S from "./style";
import { useContext } from "react";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import ProductInfo from "../../components/ProductInfo";
import MoreProductInfo from "../../components/MoreProductInfo";
import MobileHeader from "../../components/MobileHeader";

import { ProductContex } from "../../contexts/product.context";
import InitialProductInfo from "../../components/InitialProductInfo";

const ProductPage = () => {
  const { windowSize } = useContext(ProductContex);

  return (
    <>
      {windowSize >= 990 ? <Header /> : <MobileHeader />}

      <S.section>
        {windowSize <= 425 && <InitialProductInfo />}

        <Gallery />
        <ProductInfo />
        <MoreProductInfo />
      </S.section>

      <Footer />
    </>
  );
};

export default ProductPage;
