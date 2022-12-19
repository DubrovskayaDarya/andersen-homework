import React, { FormEvent } from "react";
import style from "./Form.module.css";
import { Input } from "./input/Input";
import { Textarea } from "./textarea/Textarea";
import { CustomButton } from "../../common/components/customButton/CustomButton";
import { FormValuesType } from "../Main";

type FormPropsType = {
  formState: FormValuesType;
  onSubmit: () => void;
  clearForm: () => void;
};

export function Form(props: FormPropsType) {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <div className={style.formContainer}>
      <h1>Создание анкеты</h1>
      <form onSubmit={onSubmitHandler}>
        {props.formState.input.map((el, i) => (
          <Input
            onChange={el.onChange}
            id={el.id}
            error={el.error}
            mask={el.mask}
            key={i}
            value={el.value}
            type={el.type}
            title={el.title}
          />
        ))}
        {props.formState.textarea.map((el, i) => (
          <Textarea
            onChange={el.onChange}
            id={el.id}
            error={el.error}
            key={i}
            value={el.value}
            title={el.title}
          />
        ))}
        <div className={style.buttonBlock}>
          <CustomButton
            name={"Отмена"}
            type={"button"}
            onClick={props.clearForm}
          />
          <CustomButton name={"Сохранить"} type={"submit"} />
        </div>
      </form>
    </div>
  );
}
