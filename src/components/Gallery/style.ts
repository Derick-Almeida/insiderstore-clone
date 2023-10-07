import styled from "styled-components";

export const main = styled.main`
  min-width: 65%;
  max-width: 65%;
  height: fit-content;

  display: grid;
  grid-template-columns: auto auto;
  gap: 1.3rem;

  overflow: hidden;

  > img {
    width: 100%;
    height: fit-content;
  }
`;

export const span = styled.span`
  background-color: var(--white);
  border-radius: 50%;
  padding: 8px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 15px;
  left: 15px;

  opacity: 0;
  font-size: 14px;

  > svg {
    opacity: 0.7;
  }
`;

export const box = styled.a`
  min-width: 100%;
  min-height: auto;
  background: var(--gray-2) no-repeat center;
  background-size: cover;
  position: relative;

  > img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;

    > ${span} {
      opacity: 1;
    }
  }
`;
