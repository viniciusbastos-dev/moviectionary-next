import styled from "styled-components";

export const CardContainer = styled.div<any>`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 8px;
  white-space: normal;
  ${(props) =>
    props.loading &&
    `
  background-color: #ffffff90;
  width: 260px;
  height: 470px;
  border-radius: 8px;
  `}
`;

export const CardPoster = styled.img`
  width: 260px;
  height: 420px;

  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
`;

export const CardDate = styled.p`
  color: #8b8e93;
`;
