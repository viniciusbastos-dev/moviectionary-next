import styled from "styled-components";

export const CardContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 260px;
    font-weight: 500;
    gap: 8px;
    white-space: normal;
`;

export const CardPoster = styled.img`
    max-width: 240px;
    max-height: 360px;
    border-radius: 8px;
`;

export const CardTitle = styled.h3`
    font-size: 18px;
`;

export const CardDate = styled.p`
    color: #8b8e93;
`;
