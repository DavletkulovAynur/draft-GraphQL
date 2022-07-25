import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "./components/FormButton";
import LoginInput from "./components/LoginInput";
import { IFormValues } from "./types";
import "./styles.scss";
import PasswordInput from "./components/PasswordInput";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    console.log(data);
    // await user.login();
    // navigate(redirectName, redirectParams);
  };

  return (
    <div className="Login">
      <h1 className="Login__title">Вход</h1>
      <h4 className="Login__description">
        Уникальная технология доступная для вашего бизнеса уже сейчас!
      </h4>
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
