import React from "react";
import {Input} from "./input/Input";
import style from "./Form.module.css"
import {Textarea} from "./textarea/Textarea";
import {CustomButton} from "../../common/components/customButton/CustomButton";

//Types
type FormPropsType = {};
type FormStateType = {
    name: string
    surname: string
    dateOfBirth: string
    phoneNumber: string
    website: string
    about: string
    stack: string
    lastProject: string
    formErrors: string
};

export class Form extends React.Component<FormPropsType, FormStateType> {

    constructor(props: FormPropsType) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            dateOfBirth: '',
            phoneNumber: '',
            website: '',
            about: '',
            stack: '',
            lastProject: '',
            formErrors: ''
        }
    }

    render() {

        const formState = {
            input: [
                {
                    type: 'text',
                    title: 'Имя',
                    value: this.state.name,
                    onChange: (value: string) => this.setState({name: value})
                },
                {
                    type: 'text',
                    title: 'Фамилия',
                    value: this.state.surname,
                    onChange: (value: string) => this.setState({surname: value})
                },
                {
                    type: 'date',
                    title: 'Дата рождения',
                    value: this.state.dateOfBirth,
                    onChange: (value: string) => this.setState({dateOfBirth: value})
                },
                {
                    type: 'text',
                    title: 'Номер телефона',
                    value: this.state.phoneNumber,
                    onChange: (value: string) => this.setState({phoneNumber: value})
                },
                {
                    type: 'text',
                    title: 'Сайт',
                    value: this.state.website,
                    onChange: (value: string) => this.setState({website: value})
                },
            ],
            textarea: [
                {
                    title: 'О себе',
                    value: this.state.about,
                    onChange: (value: string) => this.setState({about: value})
                },
                {
                    title: 'Стек технологий',
                    value: this.state.stack,
                    onChange: (value: string) => this.setState({stack: value})
                },
                {
                    title: 'Описание последнего проекта',
                    value: this.state.lastProject,
                    onChange: (value: string) => this.setState({lastProject: value})
                },
            ]
        };

        return <div className={style.formContainer}>
            <h1>Создание анкеты</h1>
            <form>
                {formState.input.map((el, i) => <Input onChange={el.onChange}
                                                       key={i}
                                                       value={el.value}
                                                       type={el.type}
                                                       title={el.title}/>)}
                {formState.textarea.map((el, i) => <Textarea onChange={el.onChange}
                                                             key={i}
                                                             value={el.value}
                                                             title={el.title}/>)}
                <div className={style.buttonBlock}>
                    <CustomButton name={'Отмена'} type={'button'}/>
                    <CustomButton name={'Сохранить'} type={'submit'}/>
                </div>
            </form>
        </div>
    }
}