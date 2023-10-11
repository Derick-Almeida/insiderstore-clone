import * as S from "./style";
import logo from "../../assets/logo.png";

import { IoIosSearch } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileHeader = () => {
  return (
    <>
      <S.div>FRETE GRÁTIS em compras a partir de R$ 349</S.div>
      <S.header>
        <RxHamburgerMenu />

        <img src={logo} alt="isider logo" />

        <S.icons>
          <IoIosSearch />
          <PiBagSimple />
        </S.icons>
      </S.header>
    </>
  );
};

export default MobileHeader;
