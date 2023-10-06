import styled from "styled-components";

export const container = styled.div`
  position: relative;

  > span {
    position: absolute;
    top: 50%;
    z-index: 9;
    cursor: pointer;

    &:nth-child(2) {
      left: -5%;
    }

    &:nth-child(4) {
      right: -5%;
    }
  }
`;

export const ul = styled.ul`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  user-select: none;
`;

export const li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  min-width: 33%;
  max-width: 33%;

  > img {
    max-width: 100%;
    height: 60px;
  }
`;

export const p = styled.p`
  color: var(--gray-4);
  font-weight: 800;
  font-size: 16px;

  margin-bottom: 35px;
`;

export const span = styled.span`
  color: var(--gray-3-opaque-2);
  text-transform: capitalize;
`;
