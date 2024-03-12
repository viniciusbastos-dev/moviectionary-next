import Link from "next/link";
import * as S from "./styles";
import React from "react";
import { Media } from "@/@types/types";

interface MediaCardProps {
  data: Media;
  loading: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({ data, loading }) => {
  return (
    <S.CardContainer loading={loading}>
      <Link href={`/${data.media_type}/${data.id}`}>
        <S.CardPoster src={data.poster_url} alt={data.title} />
      </Link>
      <S.CardTitle>{data.title}</S.CardTitle>
      <S.CardDate>{data.release_date}</S.CardDate>
    </S.CardContainer>
  );
};

export default MediaCard;
