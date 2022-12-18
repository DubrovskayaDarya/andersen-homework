import React, {FormEvent} from "react";
import {Input} from "./input/Input";
import style from "./Form.module.css"
import {Textarea} from "./textarea/Textarea";
import {CustomButton} from "../../common/components/customButton/CustomButton";
import {FormErrorType, validator} from "../../common/utils/validator";
import {PHONE_NUMBER_MASK} from "../../common/constants/constants";

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
    formErrors: FormErrorType
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
            formErrors: {
                name: '',
                surname: '',
                dateOfBirth: '',
                website: '',
                about: '',
                stack: '',
                lastProject: ''
            }
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formInfo = {
            name: this.state.name,
            surname: this.state.surname,
            dateOfBirth: this.state.dateOfBirth,
            phoneNumber: this.state.phoneNumber,
            website: this.state.website,
            about: this.state.about,
            stack: this.state.stack,
            lastProject: this.state.lastProject,
        };

        const setErrorHandler = (errorValue: FormErrorType) => this.setState({formErrors: errorValue})

        validator(formInfo, setErrorHandler)
    };

    clearForm = () => this.setState({
        name: '',
        surname: '',
        dateOfBirth: '',
        phoneNumber: '',
        website: '',
        about: '',
        stack: '',
        lastProject: '',
        formErrors: {
            name: '',
            surname: '',
            dateOfBirth: '',
            website: '',
            about: '',
            stack: '',
            lastProject: ''
        }
    });

    render() {

        const formState = {
            input: [
                {
                    type: 'text',
                    title: 'Имя',
                    id: 'name',
                    value: this.state.name,
                    onChange: (value: string) => this.setState({name: value}),
                    error: this.state.formErrors.name,
                    mask: ''
                },
                {
                    type: 'text',
                    title: 'Фамилия',
                    id: 'surname',
                    value: this.state.surname,
                    onChange: (value: string) => this.setState({surname: value}),
                    error: this.state.formErrors.surname,
                    mask: ''
                },
                {
                    type: 'date',
                    title: 'Дата рождения',
                    id: 'dateOfBirth',
                    value: this.state.dateOfBirth,
                    onChange: (value: string) => this.setState({dateOfBirth: value}),
                    error: this.state.formErrors.dateOfBirth,
                    mask: ''
                },
                {
                    type: 'text',
                    title: 'Номер телефона',
                    id: 'phoneNumber',
                    value: this.state.phoneNumber,
                    onChange: (value: string) => this.setState({phoneNumber: value}),
                    error: this.state.formErrors.phoneNumber,
                    mask: PHONE_NUMBER_MASK
                },
                {
                    type: 'text',
                    title: 'Сайт',
                    id: 'website',
                    value: this.state.website,
                    onChange: (value: string) => this.setState({website: value}),
                    error: this.state.formErrors.website,
                    mask: ''
                },
            ],
            textarea: [
                {
                    title: 'О себе',
                    value: this.state.about,
                    id: 'about',
                    onChange: (value: string) => this.setState({about: value}),
                    error: this.state.formErrors.about
                },
                {
                    title: 'Стек технологий',
                    value: this.state.stack,
                    id: 'stack',
                    onChange: (value: string) => this.setState({stack: value}),
                    error: this.state.formErrors.stack
                },
                {
                    title: 'Описание последнего проекта',
                    value: this.state.lastProject,
                    id: 'lastProject',
                    onChange: (value: string) => this.setState({lastProject: value}),
                    error: this.state.formErrors.lastProject
                },
            ]
        };

        return <div className={style.formContainer}>
            <h1>Создание анкеты</h1>
            <form onSubmit={this.onSubmitHandler}>
                {formState.input.map((el, i) => <Input onChange={el.onChange}
                                                       id={el.id}
                                                       error={el.error}
                                                       mask={el.mask}
                                                       key={i}
                                                       value={el.value}
                                                       type={el.type}
                                                       title={el.title}/>)}
                {formState.textarea.map((el, i) => <Textarea onChange={el.onChange}
                                                             id={el.id}
                                                             error={el.error}
                                                             key={i}
                                                             value={el.value}
                                                             title={el.title}/>)}
                <div className={style.buttonBlock}>
                    <CustomButton name={'Отмена'} type={'button'} onClick={this.clearForm}/>
                    <CustomButton name={'Сохранить'} type={'submit'}/>
                </div>
            </form>
        </div>
    }
}