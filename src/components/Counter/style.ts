import styled from "styled-components";

export const cotainer = styled.div`
  border: 1px solid var(--gray-3-opaque-1);
  padding: 15px;
  width: 150px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
`;

export const button = styled.button`
  background: none;
  border: none;
  font-size: 24px;

  &:disabled {
    cursor: not-allowed;
  }
`;
