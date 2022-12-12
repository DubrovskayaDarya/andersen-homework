import React from "react";
import style from './FormInput.module.css'
import {CustomInput} from "../../../components/customInput/CustomInput";


type FormInputPropsType = {
    title: string;
    type: 'text' | 'date'
};
type FormInputStateType = {
    inputValue: string
};


export class FormInput extends React.Component<FormInputPropsType, FormInputStateType> {

    state: FormInputStateType = {
        inputValue: '',
    };

    onChangeInput = (value: string) => {
        this.setState({inputValue: this.state.inputValue = value})
    };

    render() {
        return <div className={style.formInput}>
            <label className={style.label}>{this.props.title}</label>
            <CustomInput value={this.state.inputValue}
                         type={this.props.type}
                         placeholder={this.props.title}
                         onChangeInput={this.onChangeInput}/>
        </div>
    }
};