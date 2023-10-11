import styled from "styled-components";

export const aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2.5rem;
  max-width: 35%;

  > button {
    padding: 20px 10px;
    font-size: 14px;
  }

  @media (max-width: 425px) {
    min-width: 100%;
    max-width: 100%;
    padding: 0 1rem;

    > button {
      padding: 15px 10px;
    }
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

export const ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 1rem;
  max-width: 100%;

  > li > button {
    padding: 13px 15px;
  }

  @media (max-width: 425px) {
    gap: 10px;

    > li > button {
      padding: 10px 13px;
    }
  }
`;

export const div = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 425px) {
    margin-bottom: 1rem;
  }
`;

export const span = styled.span`
  text-transform: capitalize;
  color: var(--gray-3-opaque-2);
  font-size: 14px;
`;

export const description = styled.p`
  letter-spacing: 0.3px;
  line-height: 25px;
  font-size: 16px;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > p {
    font-weight: 800;
    font-size: 14px;
    display: inline-block;

    > b {
      color: var(--gray-3);
    }
  }
`;
