import React from "react";
import {FormInput} from "../formInput/FormInput";
import style from "./Form.module.css"

type FormPropsType = {};

type FormStateType = {};

export class Form extends React.Component<FormPropsType, FormStateType> {

    render() {
        return <div className={style.formContainer}>
            <h1>Create a questionnaire</h1>
            <form>
                <FormInput title={'Name'}/>
                <FormInput title={'Surname'}/>
                <FormInput title={'Date of Birth'}/>
                <FormInput title={'Phone number'}/>
                <FormInput title={'Personal Website'}/>
                <FormInput title={'About'}/>
                <FormInput title={'Tech'}/>
                <FormInput title={'Last project'}/>
            </form>
        </div>
    }
}