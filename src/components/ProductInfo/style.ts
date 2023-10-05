import styled from "styled-components";

export const aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px 3%;
`;

export const h1 = styled.h1`
  color: var(--gray-4);
  font-size: 32px;
`;

export const p = styled.p``;

export const ul = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 1rem;
`;

export const li = styled.li``;

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
