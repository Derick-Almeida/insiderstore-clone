import styled from "styled-components";

export const container = styled.div`
  padding: 2.5rem 4.5%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 50%;
  }
`;

export const content = styled.div`
  min-width: 50%;
  max-width: 50%;

  padding: 4.5rem;
`;

export const h2 = styled.h2`
  color: var(--gray-4);
  font-size: 20px;
  margin-bottom: 3rem;
`;

export const p = styled.p`
  color: var(--gray-3-opaque-2);
  font-size: 16px;
  line-height: 2rem;
  letter-spacing: 0.08rem;
`;
