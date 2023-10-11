import styled from "styled-components";

export const header = styled.header`
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-1);

  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

export const ul = styled.ul`
  display: flex;

  &:nth-child(1) {
    flex-wrap: wrap;
  }

  align-items: center;
  padding: 2% 3.5%;

  > img {
    height: 22px;
  }

  > svg {
    font-size: 30px;
    margin-left: 20px;

    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
  }
`;

export const li = styled.li`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: var(--black);
  line-height: 30px;
  white-space: nowrap;

  border: 1px solid transparent;
  margin-left: 35px;

  &:nth-child(1) {
    margin-right: 25px;
  }

  &:hover {
    border-bottom-color: var(--black);
    cursor: pointer;
  }
`;
