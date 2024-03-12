"use client";

import styled from "styled-components";

export const Background = styled.section<any>`
  display: flex;
  background-image: url("${(props) => props.$backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 450px;
  width: 100vw;
  color: #fff;
`;

export const Overlay = styled.div`
  background-color: #0000009d;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 60px 40px;
`;

export const Title = styled.h2`
  font-size: 2.875rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  max-width: 660px;
`;
