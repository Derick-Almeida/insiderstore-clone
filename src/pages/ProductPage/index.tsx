import * as S from "./style";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import ProductInfo from "../../components/ProductInfo";
import MoreProductInfo from "../../components/MoreProductInfo";

const ProductPage = () => {
  return (
    <>
      <Header />

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
