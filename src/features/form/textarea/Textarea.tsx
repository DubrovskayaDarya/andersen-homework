import React, { ChangeEvent } from "react";
import style from "./Textarea.module.css";
import { MAX_TEXTAREA_LENGTH } from "../../../common/constants/constants";

//Types
type FormTextareaPropsType = {
  id: string;
  title: string;
  error: string | undefined;
  value: string;
  onChange: (value: string) => void;
};

//Component
export function Textarea(props: FormTextareaPropsType) {
  const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.currentTarget.value);
  };

  return (
    <div className={style.formInput}>
      <label className={style.label}>{props.title}</label>
      <textarea
        value={props.value.trim()}
        onChange={onChangeTextareaHandler}
        placeholder={props.title}
        className={style.formTextarea}
        maxLength={MAX_TEXTAREA_LENGTH}
        rows={7}
        cols={1}
      />
      {`Осталось ${
        MAX_TEXTAREA_LENGTH - props.value.length
      }/${MAX_TEXTAREA_LENGTH}`}
      {props.error && <div className={style.error}>{props.error}</div>}
    </div>
  );
}
