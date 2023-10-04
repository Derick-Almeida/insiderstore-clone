import * as S from "./style";

import emphasis1 from "../../assets/emphasis_1.jpg";
import emphasis2 from "../../assets/emphasis_2.jpg";

const MoreProductInfo = () => {
  return (
    <>
      <S.container>
        <S.content>
          <S.h2>POR QUE CRIAMOS</S.h2>

          <S.p>
            Com decote em V não profundo, a Tech T-shirt gola V é uma opção para o dia a dia com um
            design ainda minimalista e com todas as funcionalidades da Tech T-shirt.
          </S.p>
        </S.content>
        <img src={emphasis1} alt="man crouching with hands on leg" />
      </S.container>

      <S.container>
        <img src={emphasis2} alt="t-shirt" />

        <S.content>
          <S.h2>MINIMALISMO FUNCIONAL</S.h2>

          <S.p>
            Além de ser <strong>leve e macia</strong>, a Tech T-shirt gola V tem todas as
            funcionalidades que você já conhece:
            <strong>não precisa ser passada, não desstrongota</strong> com o tempo, é
            <strong>anti odor</strong> e ajuda na
            <strong>regulação da temperatura</strong> corporal.
          </S.p>
        </S.content>
      </S.container>
    </>
  );
};

export default MoreProductInfo;
