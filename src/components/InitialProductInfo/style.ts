import styled from "styled-components";

export const box = styled.div`
  > div,
  div h1 {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 1.5rem 3% 0 3%;

    > div,
    div h1 {
      margin-bottom: 1rem;
    }
  }
`;

export const h1 = styled.h1`
  color: var(--gray-4);
  font-size: 32px;

  @media (max-width: 425px) {
    font-size: 24px;
  }
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
  color: var(--black);

  @media (max-width: 425px) {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray-4);
  }
`;

export const span = styled.span`
  text-transform: capitalize;
  color: var(--gray-3-opaque-2);
  font-size: 14px;
`;
