import styled from "styled-components";

export const ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const li = styled.li`
  min-width: 1.8rem;
  max-width: 1.8rem;
  min-height: 1.8rem;
  max-height: 1.8rem;

  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 425px) {
    min-width: 2rem;
    max-width: 2rem;
    min-height: 2rem;
    max-height: 2rem;
  }
`;
