import React from "react";
import {FormInput} from "../formInput/FormInput";
import style from "./Form.module.css"
import {FormTextarea} from "../formTextarea/FormTextarea";
import {CustomButton} from "../../components/customButton/CustomButton";

type FormPropsType = {};
type FormStateType = {};

export class Form extends React.Component<FormPropsType, FormStateType> {

    render() {
        return <div className={style.formContainer}>
            <h1>Create a questionnaire</h1>
            <form>
                <FormInput type={'text'} title={'Name'}/>
                <FormInput type={'text'} title={'Surname'}/>
                <FormInput type={'date'} title={'Date of Birth'}/>
                <FormInput type={'text'} title={'Phone number'}/>
                <FormInput type={'text'} title={'Personal Website'}/>
                <FormTextarea title={'About'}/>
                <FormTextarea title={'Tech'}/>
                <FormTextarea title={'Last project'}/>
                <div className={style.buttonBlock}>
                    <CustomButton name={'Cancel'} type={'button'}/>
                    <CustomButton name={'Save'} type={'submit'}/>
                </div>
            </form>
        </div>
    }
}