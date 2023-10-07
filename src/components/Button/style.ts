import styled, { css } from "styled-components";
import { IStyledButtonProps } from "../../types";

export const button = styled.button<IStyledButtonProps>`
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;

  border-radius: 8px;
  padding: 12px 10px;
  border: none;
  outline: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  position: relative;
  overflow: hidden;

  ${({ variant, outline_hover }) => {
    switch (variant) {
      case "white":
        return css`
          background-color: var(--gray-1);
          color: var(--gray-3-opaque-2);
        `;
      case "gray":
        return css`
          background-color: var(--white);
          border: 1px solid var(--gray-2);
          color: var(--gray-3);

          &:hover {
            color: var(--black);
            border-color: var(--black);
          }
        `;
      case "black":
        return css`
          background-color: var(--black);
          color: var(--white);

          ${outline_hover &&
          css`
            &:hover {
              outline: 1px solid var(--black);
            }
          `}
        `;
    }
  }}

  ${({ in_stock }) =>
    !in_stock &&
    css`
      color: var(--gray-3);

      &::before {
        content: "";
        width: 100%;
        border: 1px solid var(--gray-3);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) skewY(-35deg);
      }
    `}
`;
