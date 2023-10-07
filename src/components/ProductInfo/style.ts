import styled from "styled-components";

export const aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px 3%;
  max-width: 35%;

  > button {
    padding: 20px 10px;
    font-size: 14px;
  }
`;

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

export const ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 1rem;
  max-width: 100%;

  > li > button {
    padding: 13px 15px;
  }
`;

export const div = styled.div`
  > button ~ button {
    margin-left: 15px;
  }
`;

export const span = styled.span`
  text-transform: capitalize;
  color: var(--gray-3-opaque-2);
  font-size: 14px;
`;

export const description = styled.p`
  letter-spacing: 0.5px;
  line-height: 22px;

  > p {
    font-weight: 800;
    font-size: 14px;
    white-space: nowrap;

    margin: 20px 0;
  }
`;
