import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./CustomButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type CustomButtonPropsType = DefaultButtonPropsType & {
  error?: boolean;
};

export function CustomButton(props: CustomButtonPropsType) {
  const finalClassName = `${props.error ? style.error : style.default} ${
    props.className
  }`;

  return (
    <button className={finalClassName} {...props}>
      {props.name}
    </button>
  );
}
