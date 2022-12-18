import React, {ChangeEvent} from "react";
import style from './Input.module.css'
import ReactInputMask from "react-input-mask";

type FormInputPropsType = {
    title: string;
    id: string;
    error: string | undefined;
    mask: string;
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
            <ReactInputMask mask={this.props.mask}
                            id={this.props.id}
                            value={this.props.value}
                            className={style.customInput}
                            type={this.props.type}
                            placeholder={this.props.title}
                            onChange={this.onChangeInputHandler}/>
            {this.props.error && <div className={style.error}>{this.props.error}</div>}
        </div>
    }
}