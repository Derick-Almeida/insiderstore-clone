import styled from "styled-components";

export const footer = styled.footer`
  background-color: var(--black);
  padding: 3%;

  > img {
    filter: invert(1);
  }

  @media (max-width: 425px) {
    padding: 8%;
  }
`;
