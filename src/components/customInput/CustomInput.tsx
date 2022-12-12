import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./CustomInput.module.css"

//Types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type CustomInputPropsType = DefaultInputPropsType & {
    value: string
    type: 'text' | 'date'
    onChangeInput: (value: string) => void;
    placeholder: string;
}

//Component
export class CustomInput extends React.Component<CustomInputPropsType, any> {

    onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeInput(e.currentTarget.value)
    };

    render() {
        return <>
            <input
                value={this.props.value}
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.onChangeInputHandler}
                className={style.customInput}
            />
        </>
    }
}