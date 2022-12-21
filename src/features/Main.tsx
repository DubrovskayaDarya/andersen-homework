import React, { useState } from "react";
import { FormErrorType, validator } from "../common/utils/validator";
import { PHONE_NUMBER_MASK } from "../common/constants/constants";
import { UserInfo } from "./userInfo/UserInfo";
import { Form } from "./form/Form";

//Types
type MainPropsType = {};
type MainStateType = {
  name: string;
  surname: string;
  dateOfBirth: string;
  phoneNumber: string;
  website: string;
  about: string;
  stack: string;
  lastProject: string;
  formErrors: FormErrorType;
  isAuthorised: boolean;
};
export type FormValuesType = {
  input: Array<InputValuesType>;
  textarea: Array<CommonValuesType>;
};
export type InputValuesType = CommonValuesType & {
  type: string;
  mask: string;
};
export type CommonValuesType = {
  title: string;
  value: string;
  id: string;
  onChange: (value: string) => void;
  error: string | undefined;
};

//IS
const initialState: MainStateType = {
  name: "",
  surname: "",
  dateOfBirth: "",
  phoneNumber: "",
  website: "",
  about: "",
  stack: "",
  lastProject: "",
  formErrors: {
    name: "",
    surname: "",
    dateOfBirth: "",
    website: "",
    about: "",
    stack: "",
    lastProject: "",
  },
  isAuthorised: false,
};

export function Main(props: MainPropsType) {
  const [state, setState] = useState<MainStateType>(initialState);

  const onSubmit = () => {
    setState({ ...state, isAuthorised: true });

    const setErrorHandler = (errorValue: FormErrorType) => {
      setState({ ...state, formErrors: errorValue, isAuthorised: false });
    };

    validator({ ...state }, setErrorHandler);
  };

  const clearForm = () => setState(initialState);

  const formState: FormValuesType = {
    input: [
      {
        type: "text",
        title: "Имя",
        id: "name",
        value: state.name,
        onChange: (value: string) => setState({ ...state, name: value }),
        error: state.formErrors.name,
        mask: "",
      },
      {
        type: "text",
        title: "Фамилия",
        id: "surname",
        value: state.surname,
        onChange: (value: string) => setState({ ...state, surname: value }),
        error: state.formErrors.surname,
        mask: "",
      },
      {
        type: "date",
        title: "Дата рождения",
        id: "dateOfBirth",
        value: state.dateOfBirth,
        onChange: (value: string) => setState({ ...state, dateOfBirth: value }),
        error: state.formErrors.dateOfBirth,
        mask: "",
      },
      {
        type: "text",
        title: "Номер телефона",
        id: "phoneNumber",
        value: state.phoneNumber,
        onChange: (value: string) => setState({ ...state, phoneNumber: value }),
        error: state.formErrors.phoneNumber,
        mask: PHONE_NUMBER_MASK,
      },
      {
        type: "text",
        title: "Сайт",
        id: "website",
        value: state.website,
        onChange: (value: string) => setState({ ...state, website: value }),
        error: state.formErrors.website,
        mask: "",
      },
    ],
    textarea: [
      {
        title: "О себе",
        value: state.about,
        id: "about",
        onChange: (value: string) => setState({ ...state, about: value }),
        error: state.formErrors.about,
      },
      {
        title: "Стек технологий",
        value: state.stack,
        id: "stack",
        onChange: (value: string) => setState({ ...state, stack: value }),
        error: state.formErrors.stack,
      },
      {
        title: "Описание последнего проекта",
        value: state.lastProject,
        id: "lastProject",
        onChange: (value: string) => setState({ ...state, lastProject: value }),
        error: state.formErrors.lastProject,
      },
    ],
  };

  return (
    <>
      {!state.isAuthorised ? (
        <Form formState={formState} onSubmit={onSubmit} clearForm={clearForm} />
      ) : (
        <UserInfo
          name={state.name}
          surname={state.surname}
          dateOfBirth={state.dateOfBirth}
          phoneNumber={state.phoneNumber}
          website={state.website}
          about={state.about}
          stack={state.stack}
          lastProject={state.lastProject}
        />
      )}
    </>
  );
}
