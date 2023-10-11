import styled from "styled-components";

export const section = styled.section`
  padding: 2.5rem 4%;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0;

    > div:nth-child(4) {
      flex-direction: column-reverse;
    }
  }
`;
