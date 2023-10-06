import styled from "styled-components";

export const ul = styled.ul`
  display: flex;
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
`;
