import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./CustomInput.module.css"

//Types
export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type CustomInputPropsType = DefaultInputPropsType & {
    onChangeInput: (value: string) => void;
}

export class CustomInput extends React.Component<CustomInputPropsType> {

    onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeInput(e.currentTarget.value)
    };

    render() {
        return (
            <input
                onChange={this.onChangeInputHandler}
                className={style.customInput}
                {...this.props}
            />
        )
    }
}