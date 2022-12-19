import React, {ChangeEvent} from "react";
import style from "./Input.module.css";
import ReactInputMask from "react-input-mask";

type InputPropsType = {
    title: string;
    id: string;
    error: string | undefined;
    mask: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
};

export function Input(props: InputPropsType) {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value);
    };

    return (
        <div className={style.formInput}>
            <label className={style.label}>{props.title}</label>
            <ReactInputMask
                mask={props.mask}
                id={props.id}
                value={props.value.trim()}
                className={style.customInput}
                type={props.type}
                placeholder={props.title}
                onChange={onChangeInputHandler}
            />
            {props.error && (
                <div className={style.error}>{props.error}</div>
            )}
        </div>
    );
}
