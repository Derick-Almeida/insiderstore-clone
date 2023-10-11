import styled from "styled-components";

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
    object-fit: contain;
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

export const container = styled.div`
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    padding: 0 4.5%;
  }
`;

export const controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110%;

  position: absolute;
  top: 40%;
  left: -5%;
  z-index: 9;

  > span {
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 100%;
    left: 0%;
  }
`;
