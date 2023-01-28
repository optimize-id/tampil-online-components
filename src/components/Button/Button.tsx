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
    `;
  }

  if (variant === "solid") {
    return css`
      background-color: #3c64b1;
      color: #fff;
    `;
  }

  return css`
    color: #3c64b1;
    border-color: transparent;
  `;
};

const Button = styled.button<ButtonProps>`
  display: flex;
  cursor: pointer;
  padding: 12px 24px;
  border-width: 1px;
  border-color: #3c64b1;
  background-color: #fff;

  ${({ variant = "solid" }) => buttonVariants(variant)}
`;

export default Button;
