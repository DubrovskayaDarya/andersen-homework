import React from "react";
import style from "./UserForm.module.css";

type UserInfoPropsType = {
  name: string;
  surname: string;
  dateOfBirth: string;
  phoneNumber: string;
  website: string;
  about: string;
  stack: string;
  lastProject: string;
};

export function UserInfo(props: UserInfoPropsType) {
  const userInfo = Object.values(props);

  return (
    <div className={style.userInfoContainer}>
      <h1>{`${props.name} ${props.surname}`}</h1>
      <ul>
        {userInfo.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
