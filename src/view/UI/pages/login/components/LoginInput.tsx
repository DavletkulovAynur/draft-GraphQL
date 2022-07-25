import { TextField } from "@mui/material";
import { IInput } from "../types";

const LoginInput =({register}: IInput) => {
  return (
    <TextField
      id="login"
      label="Логин"
      placeholder="Логин"
      variant="outlined"
      autoComplete="on"
      fullWidth
      {...register("login", {
        required: true,
      })}
    />
  )
}

export default LoginInput