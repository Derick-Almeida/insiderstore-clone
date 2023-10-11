import styled from "styled-components";

export const div = styled.div`
  background-color: var(--gray-4);
  color: var(--white);
  user-select: none;

  text-align: center;
  font-size: 12px;
  padding: 2px 0;
  letter-spacing: 1.5px;
  line-height: 20px;
`;

export const header = styled.header`
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-1);

  position: sticky;
  top: 0;
  z-index: 999;

  display: grid;
  grid-template: ". . .";
  justify-content: space-between;
  align-items: center;

  padding: 2% 3.5%;

  > img {
    height: 22px;
  }

  > svg,
  > div {
    font-size: 30px;
  }
`;

export const icons = styled.div`
  > svg ~ svg {
    margin-left: 20px;
  }
`;
