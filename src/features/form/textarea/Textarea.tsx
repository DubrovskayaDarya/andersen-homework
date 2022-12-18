import React, {ChangeEvent} from "react";
import style from './Textarea.module.css'
import {MAX_TEXTAREA_LENGTH} from "../../../common/constants/constants";

//Types
type FormTextareaPropsType = {
    id: string;
    title: string;
    error: string | undefined;
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
                maxLength={MAX_TEXTAREA_LENGTH}
                rows={7}
                cols={1}/>
            {`Осталось ${MAX_TEXTAREA_LENGTH - this.props.value.length}/${MAX_TEXTAREA_LENGTH}`}
            {this.props.error && <div className={style.error}>{this.props.error}</div>}
        </div>
    }
};