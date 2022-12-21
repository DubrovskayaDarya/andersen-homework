import React from "react";
import {FormInput} from "./formInput/FormInput";
import style from "./Form.module.css"
import {FormTextarea} from "./formTextarea/FormTextarea";
import {CustomButton} from "../../components/customButton/CustomButton";

//Types
export type InputTypes = 'text' | 'date'
type FormPropsType = {};
type FormStateType = {
    input: Array<{ title: string, type: InputTypes }>
    textarea: Array<{ title: string }>
}

export class Form extends React.Component<FormPropsType> {

    render() {

        const formState: FormStateType = {
            input: [
                {
                    type: 'text',
                    title: 'Имя'
                },
                {
                    type: 'text',
                    title: 'Фамилия'
                },
                {
                    type: 'date',
                    title: 'Дата рождения'
                },
                {
                    type: 'text',
                    title: 'Номер телефона'
                },
                {
                    type: 'text',
                    title: 'Сайт'
                },
            ],
            textarea: [
                {title: 'О себе'},
                {title: 'Стек технологий'},
                {title: 'Описание последнего проекта'},
            ]
        };

        return <div className={style.formContainer}>
            <h1>Создание анкеты</h1>
            <form>
                {formState.input.map(el => <FormInput type={el.type} title={el.title}/>)}
                {formState.textarea.map(el => <FormTextarea title={el.title}/>)}
                <div className={style.buttonBlock}>
                    <CustomButton name={'Отмена'} type={'button'}/>
                    <CustomButton name={'Сохранить'} type={'submit'}/>
                </div>
            </form>
        </div>
    }
}