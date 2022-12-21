import React, {ChangeEvent} from "react";
import style from './FormTextarea.module.css'

//Types
type FormTextareaPropsType = {
    title: string;
};
type FormTextareaStateType = {
    inputValue: string
};

//Component
export class FormTextarea extends React.Component<FormTextareaPropsType, FormTextareaStateType> {

    state: FormTextareaStateType = {
        inputValue: '',
    };

    onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({inputValue: this.state.inputValue = e.currentTarget.value})
    };

    render() {
        return <div className={style.formInput}>
            <label className={style.label}>{this.props.title}</label>
            <textarea
                onChange={this.onChangeTextareaHandler}
                placeholder={this.props.title}
                className={style.formTextarea}
                maxLength={240}
                rows={7}
                cols={1}>{this.state.inputValue}</textarea>
        </div>
    }
};