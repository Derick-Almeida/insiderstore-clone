import styled from "styled-components";

export const cotainer = styled.div`
  border: 1px solid var(--gray-3-opaque-1);
  padding: 10px;
  width: 135px;
  margin-bottom: 1rem;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
`;

export const button = styled.button`
  background: none;
  border: none;
  font-size: 20px;

  &:disabled {
    cursor: not-allowed;
  }
`;
