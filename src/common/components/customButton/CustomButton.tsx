import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./CustomButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type CustomButtonPropsType = DefaultButtonPropsType & {
  error?: boolean;
};

export class CustomButton extends React.Component<CustomButtonPropsType, any> {
  render() {
    const finalClassName = `${this.props.error ? style.error : style.default} ${
      this.props.className
    }`;

    return (
      <button className={finalClassName} {...this.props}>
        {this.props.name}
      </button>
    );
  }
}
