import { EMPTY_FIELD_ERROR } from "../constants/constants";

export type ValuesType = {
  name: string;
  surname: string;
  phoneNumber: string;
  dateOfBirth: string;
  website: string;
  about: string;
  stack: string;
  lastProject: string;
};
export type FormErrorType = {
  name?: string;
  surname?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  website?: string;
  about?: string;
  stack?: string;
  lastProject?: string;
};

export const validator = (
  values: ValuesType,
  setErrorHandler: (error: FormErrorType) => void
) => {
  const errors: FormErrorType = {};

  if (values.name === "") {
    errors.name = EMPTY_FIELD_ERROR;
  } else if (
    values.name &&
    values.name.charAt(0) !== values.name.charAt(0).toUpperCase()
  ) {
    errors.name = "Имя должно начинаться с заглавной буквы";
  }

  if (values.surname === "") {
    errors.surname = EMPTY_FIELD_ERROR;
  } else if (
    values.surname &&
    values.surname.charAt(0) !== values.surname.charAt(0).toUpperCase()
  ) {
    errors.surname = "Фамилия должна начинаться с заглавной буквы";
  }

  if (values.website === "") {
    errors.website = EMPTY_FIELD_ERROR;
  } else if (values.website && !values.website.startsWith("https://")) {
    errors.website = "Сайт должен начинаться с https://";
  }

  if (values.phoneNumber === "") {
    errors.phoneNumber = EMPTY_FIELD_ERROR;
  }

  if (values.dateOfBirth === "") {
    errors.dateOfBirth = EMPTY_FIELD_ERROR;
  }

  if (values.about === "") {
    errors.about = EMPTY_FIELD_ERROR;
  }

  if (values.stack === "") {
    errors.stack = EMPTY_FIELD_ERROR;
  }

  if (values.lastProject === "") {
    errors.lastProject = EMPTY_FIELD_ERROR;
  }

  return Object.keys(errors).length === 0 ? null : setErrorHandler(errors);
};
