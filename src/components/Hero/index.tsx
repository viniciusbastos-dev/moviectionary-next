import React from "react";
import { Media } from "@/@types/types";
import * as S from "./styles";

interface HeroProps {
  data: Media;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <S.Background $backgroundImage={data.backdrop_url}>
      <S.Overlay>
        <div>
          <S.Title>{data.title}</S.Title>
          <S.Description>{data.overview}</S.Description>
        </div>
      </S.Overlay>
    </S.Background>
  );
};

export default Hero;
