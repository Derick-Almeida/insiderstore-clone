import styled from "styled-components";

export const ul = styled.ul`
  display: flex;
  gap: 6px;
  margin-top: 1rem;
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

export const span = styled.span`
  text-transform: capitalize;
  color: var(--gray-3-opaque-2);
  font-size: 14px;
`;
