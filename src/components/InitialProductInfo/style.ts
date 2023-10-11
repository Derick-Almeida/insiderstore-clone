import styled from "styled-components";

export const h1 = styled.h1`
  color: var(--gray-4);
  font-size: 32px;
`;

export const p = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;

  > span {
    font-size: 13px;
  }
`;

export const price = styled.p`
  font-weight: 400;
  font-family: "Times New Roman", Times, serif;
  font-size: 26px;
`;

export const span = styled.span`
  text-transform: capitalize;
  color: var(--gray-3-opaque-2);
  font-size: 14px;
`;

export const box = styled.div`
  > div,
  div h1 {
    margin: 1rem 0;
  }
`;
