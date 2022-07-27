import { UseFormRegister } from "react-hook-form/dist/types/form";

export interface IFormValues {
  login: string;
  password: string;
}

export interface IInput {
  register: UseFormRegister<IFormValues>;
}

export interface IFormButton {
  loading: boolean
}