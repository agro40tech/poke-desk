import { Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

import "./__style.scss";
import { instance } from "05-Shared";

export const FormSearchPokemon: FC = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("Пусто поле");

  const handleClick = async () => {
    // if (!isValid) {
    //   await instance
    //     .get(`pokemon/${name}`)
    //     .then((res) => {
    //       if (res.status === 200) {
    //         console.log(res);
    //       } else {
    //         console.log("Ошибка статус:" + res.status);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    console.log("submit");
  };

  const handleBlur = () => {
    if (name.length < 2) {
      setError(true);
    }
  };

  const validRegex = () => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  };

  useEffect(() => {
    if (name.length >= 2) {
      if (validRegex()) {
        setError(false);
      } else {
        setError(true);
        setErrorMessage("Доступны символы A-Z и a-z");
      }
    } else {
      setErrorMessage("Нужно минимум 2 символа");
    }
  }, [name]);

  return (
    <form className="form">
      <TextField
        className="form__input"
        id="name-pokemon"
        label="Имя покемона"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        onBlur={handleBlur}
        error={error}
        helperText={error ? errorMessage : ""}
        placeholder="pikachu"
      />

      <Button
        disabled={error}
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}>
        Найти
      </Button>
    </form>
  );
};
