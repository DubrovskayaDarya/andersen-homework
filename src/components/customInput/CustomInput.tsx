import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./CustomInput.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CustomInputPropsType = DefaultInputPropsType & {
    value: string
    onChangeInput: (value: string) => void;
    placeholder: string;
}

export class CustomInput extends React.Component<CustomInputPropsType, any> {

    onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeInput(e.currentTarget.value)
    };

    render() {
        return <>
            <input
                value={this.props.value}
                type={'text'}
                placeholder={this.props.placeholder}
                onChange={this.onChangeCallback}
                className={style.customInput}
            />
        </>
    }
};