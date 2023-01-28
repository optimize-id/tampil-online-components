import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonVariant = "solid" | "outline" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
}

const buttonVariants = (variant: ButtonVariant) => {
  if (variant === "outline") {
    return css`
      color: #3c64b1;

      &:hover {
        color: #34579a;
      }
    `;
  }

  if (variant === "solid") {
    return css`
      background-color: #3c64b1;
      color: #fff;

      &:hover {
        background-color: #34579a;
      }
    `;
  }

  return css`
    color: #3c64b1;
    border-color: transparent;

    &:hover {
      color: #34579a;
      border-color: transparent;
    }
  `;
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  cursor: pointer;
  padding: 12px 24px;
  border-width: 1px;
  background-color: #fff;
  font-weight: 600;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  border-color: #3c64b1;
  &:hover {
    border-color: #34579a;
  }

  ${({ variant = "solid" }) => buttonVariants(variant)}
`;

export default Button;
