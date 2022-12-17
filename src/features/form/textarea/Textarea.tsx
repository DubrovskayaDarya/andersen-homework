import React, {ChangeEvent} from "react";
import style from './Textarea.module.css'

//Types
type FormTextareaPropsType = {
    title: string;
    value: string;
    onChange: (value: string) => void
};
type FormTextareaStateType = {
    inputValue: string
};

//Component
export class Textarea extends React.Component<FormTextareaPropsType, FormTextareaStateType> {

    onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.props.onChange(e.currentTarget.value)
    };

    render() {
        return <div className={style.formInput}>
            <label className={style.label}>{this.props.title}</label>
            <textarea
                value={this.props.value}
                onChange={this.onChangeTextareaHandler}
                placeholder={this.props.title}
                className={style.formTextarea}
                maxLength={240}
                rows={7}
                cols={1}/>
        </div>
    }
};