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
