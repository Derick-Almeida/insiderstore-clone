import * as S from "./style";
import logo from "../../assets/logo.png";

import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiBagSimple } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <S.div>FRETE GRÁTIS em compras a partir de R$ 349</S.div>
      <S.header>
        <S.ul>
          <img src={logo} alt="isider logo" />
          <S.li>insider</S.li>
          <S.li>homem</S.li>
          <S.li>mulher</S.li>
          <S.li>collabs</S.li>
          <S.li>nossa tecnologia</S.li>
          <S.li>beachwear</S.li>
        </S.ul>

        <S.ul>
          <S.li>ajuda</S.li>
          <IoIosSearch />
          <FiUser />
          <PiBagSimple />
        </S.ul>
      </S.header>
    </>
  );
};

export default Header;
