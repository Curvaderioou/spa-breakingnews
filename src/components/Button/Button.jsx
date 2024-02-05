import { ButtonSpace } from "./ButtonStyled";

/* eslint-disable react/prop-types */
export function Button({ type, text }) {
  return <ButtonSpace type={type}>{text}</ButtonSpace>;
}
