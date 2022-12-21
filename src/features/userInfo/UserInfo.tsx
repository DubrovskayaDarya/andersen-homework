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

export class UserInfo extends React.Component<UserInfoPropsType> {
  render() {
    const userInfo = Object.values(this.props);

    return (
      <div className={style.userInfoContainer}>
        <h1>{`${this.props.name} ${this.props.surname}`}</h1>
        <ul>
          {userInfo.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    );
  }
}
