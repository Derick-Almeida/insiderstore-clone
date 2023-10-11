import styled from "styled-components";

export const section = styled.section`
  padding: 2.5rem 4%;

  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 2.5rem 0;
  }
`;
