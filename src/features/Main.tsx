import React from "react";
import {FormErrorType, validator} from "../common/utils/validator";
import {PHONE_NUMBER_MASK} from "../common/constants/constants";
import {UserInfo} from "./userInfo/UserInfo";
import {Form} from "./form/Form";

//Types
type MainPropsType = {};
type MainStateType = {
    name: string
    surname: string
    dateOfBirth: string
    phoneNumber: string
    website: string
    about: string
    stack: string
    lastProject: string
    formErrors: FormErrorType
    isAuthorised: boolean
};
export type FormValuesType = {
    input: Array<InputValuesType>
    textarea: Array<CommonValuesType>
};
export type InputValuesType = CommonValuesType & {
    type: string
    mask: string
};
export type CommonValuesType = {
    title: string
    value: string
    id: string
    onChange: (value: string) => void
    error: string | undefined
};

export class Main extends React.Component<MainPropsType, MainStateType> {

    constructor(props: MainPropsType) {
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
            },
            isAuthorised: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onSubmit = () => {
        this.setState({isAuthorised: true})

        const setErrorHandler = (errorValue: FormErrorType) => {
            this.setState({formErrors: errorValue, isAuthorised: false})
        }

        validator({...this.state}, setErrorHandler);
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

        const formState: FormValuesType = {
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

        return <>
            {!this.state.isAuthorised
                ? <Form formState={formState}
                        onSubmit={this.onSubmit}
                        clearForm={this.clearForm}/>
                : <UserInfo name={this.state.name}
                            surname={this.state.surname}
                            dateOfBirth={this.state.dateOfBirth}
                            phoneNumber={this.state.phoneNumber}
                            website={this.state.website}
                            about={this.state.about}
                            stack={this.state.stack}
                            lastProject={this.state.lastProject}/>}
        </>
    }
}