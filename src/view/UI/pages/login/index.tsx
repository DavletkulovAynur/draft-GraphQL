import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "./components/FormButton";
import LoginInput from "./components/LoginInput";
import { IFormValues } from "./types";
import "./styles.scss";
import PasswordInput from "./components/PasswordInput";
import { useMutation } from "@apollo/client";
import { observer } from "mobx-react-lite";
import { authStore } from "../../../../store";
import { LOGIN } from "../../../../services/AuthService";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>();

  const [auth, { data, loading, error }] = useMutation(LOGIN);

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    const { login, password } = data;

    try {
      const response = await auth({
        variables: {
          username: login,
          password,
        },
      });

      authStore.setAuth(true);
      localStorage.setItem("token", response.data.login.token);
    } catch (e) {
      console.log("ERROR", error);
    }
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
          <FormButton loading={loading} />
        </div>
      </form>
    </div>
  );
}

export default observer(Login);
