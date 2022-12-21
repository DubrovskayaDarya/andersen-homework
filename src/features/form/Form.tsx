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

export class Form extends React.Component<FormPropsType> {
  onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <div className={style.formContainer}>
        <h1>Создание анкеты</h1>
        <form onSubmit={this.onSubmitHandler}>
          {this.props.formState.input.map((el, i) => (
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
          {this.props.formState.textarea.map((el, i) => (
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
              onClick={this.props.clearForm}
            />
            <CustomButton name={"Сохранить"} type={"submit"} />
          </div>
        </form>
      </div>
    );
  }
}
