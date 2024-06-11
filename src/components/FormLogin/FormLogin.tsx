import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./FormLogin.module.css";
import Icon from "../Icon";
import { useDispatch } from "react-redux";
import { logInThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { IForms } from "../Types/types";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    })
    .required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IForms>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForms) => {
    dispatch(logInThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrap}>
        <input
          {...register("email")}
          className={css.input}
          placeholder="Email address"
        />
        <p className={css.errormessage}>{errors.email?.message}</p>

        <div className={css.inputWrap}>
          <input
            {...register("password")}
            className={css.input}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          {showPassword ? (
            <div className={css.icon} onClick={() => setShowPassword(false)}>
              <Icon name="openeye" />
            </div>
          ) : (
            <div className={css.icon} onClick={() => setShowPassword(true)}>
              <Icon name="closeeye" />
            </div>
          )}
        </div>
        <p className={css.errormessage}>{errors.password?.message}</p>
      </div>

      <button type="submit" className={css.button}>
        Log in
      </button>
    </form>
  );
};

export default FormLogin;
