"use client";

import { useState } from "react";
import redirectToMain from "../../utils/redirectToMain";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "../../styles/login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  function checkEmail() {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (email.length === 0) {
      setEmailError("Заполните поле");
      return false;
    } else if (!EMAIL_REGEXP.test(email)) {
      setEmailError("Неправильный формат email");
      return false;
    }

    return true;
  }

  function checkPassword() {
    const trimmedPassword = password.trim();
    const PASSWORD_REGEXP = /^(?=.*[A-Z]).{8,}$/;

    if (password.length === 0) {
      setPasswordError("Заполните поле");
      return false;
    } else if (!PASSWORD_REGEXP.test(trimmedPassword)) {
      setPasswordError(
        "Пароль должен быть минимум 8 символов и содержать хотя бы одну заглавную букву."
      );
      return false;
    }
    return true;
  }

  function checkForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();

    if (isEmailValid && isPasswordValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("isAuthenticated", "true");
        redirectToMain();
      }, 2000);
    }
  }

  return (
    <div className={style.login_container}>
      <h1>Авторизация</h1>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 3, width: "45ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={checkForm}
      >
        <div className={style.login_form}>
          <TextField
            id="outlined-email"
            label="Email"
            placeholder="Введите Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            error={!!emailError}
            helperText={emailError ? emailError : ""}
            sx={{ height: 56 }}
          />
          <TextField
            id="outlined-password"
            label="Password"
            placeholder="Введите пароль"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            error={!!passwordError}
            helperText={passwordError ? passwordError : ""}
            sx={{ height: 56 }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ height: 56, mt: 3 }}
          >
            {loading ? "Загрузка..." : "Авторизация"}
          </Button>
        </div>
      </Box>
    </div>
  );
}
