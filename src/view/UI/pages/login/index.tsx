import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "./components/FormButton";
import LoginInput from "./components/LoginInput";
import { IFormValues } from "./types";
import "./styles.scss";
import PasswordInput from "./components/PasswordInput";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN } from "../../../viewModels/auth/mutations";
import { GET_ALL_DASHBOARD_STAT } from "../../../viewModels/dashboard/query";


function Login() {
  const test = useQuery(GET_ALL_DASHBOARD_STAT)

  // console.log('data', test )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>();

  const [newUser] = useMutation(LOGIN)

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    // console.log(data);
    const {login, password} = data
    newUser({
      variables: {
        username: login,
        password
      }
    }).then((data) => {
      console.log(data.data.login.token)
      localStorage.setItem('token', data.data.login.token);
     
    })
    // await user.login();
    // navigate(redirectName, redirectParams);
  };

  const test2 = () => {
    console.log('data', test )
  }

  return (
    <div className="Login">
      <h1 className="Login__title">Вход</h1>
      <h4 className="Login__description">
        Уникальная технология доступная для вашего бизнеса уже сейчас!
      </h4>
      <button onClick={test2}>PRESS</button>
      <form
        className="Login__form"
        autoComplete="on"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="Login__formItem">
          <LoginInput register={register} />
        </div>
        <div className="Login__formItem">
          <PasswordInput register={register} />
        </div>

        <div>
          <FormButton />
        </div>
      </form>
    </div>
  );
}

export default Login;
