import * as S from "./style";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import ProductInfo from "../../components/ProductInfo";
import MoreProductInfo from "../../components/MoreProductInfo";
// import Carroussel from "../../components/Carroussel";

const ProductPage = () => {
  return (
    <>
      <Header />
      {/* <Carroussel /> */}

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
