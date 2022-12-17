import React, {ChangeEvent} from "react";
import style from './Input.module.css'

type FormInputPropsType = {
    title: string;
    type: string;
    value: string;
    onChange: (value: string) => void
};
type FormInputStateType = {
    inputValue: string
};


export class Input extends React.Component<FormInputPropsType, FormInputStateType> {

    onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.currentTarget.value)
    };

    render() {
        return <div className={style.formInput}>
            <label className={style.label}>{this.props.title}</label>
            <input value={this.props.value}
                   className={style.customInput}
                   type={this.props.type}
                   placeholder={this.props.title}
                   onChange={this.onChangeInputHandler}/>
        </div>
    }
}