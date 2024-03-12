/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Slider from "react-slick";
import { Media } from "@/@types/types";
import MediaCard from "../MediaCard";
import Selector from "../Selector";
import { getTrending } from "@/services/request";
import { time } from "console";

interface CarouselProps {
  data: Media[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [firstLoading, setFirstLoading] = useState(true);
  const [period, setPeriod] = useState<string>("day");
  const [newData, setNewData] = useState<Media[]>(data);

  const sliderOptions = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (firstLoading) {
      setFirstLoading(false);
    } else {
      getTrending(period).then((response) => setNewData(response));
    }
  }, [period]);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>Tendências</S.Title>
          <Selector data={period} setData={setPeriod} />
        </S.Wrapper>
        <S.Carousel>
          <Slider {...sliderOptions}>
            {newData.map((item) => (
              <S.Item key={item.id}>
                <MediaCard data={item} />
              </S.Item>
            ))}
          </Slider>
        </S.Carousel>
      </S.Container>
    </>
  );
};

export default Carousel;
