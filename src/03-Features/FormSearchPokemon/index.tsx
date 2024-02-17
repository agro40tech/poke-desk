import { Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

import "./__style.scss";
import { instance } from "05-Shared";

export const FormSearchPokemon: FC = () => {
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

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

  useEffect(() => {
    if (name.length > 2) {
      setIsValid(false);
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
      />

      <Button
        disabled={isValid}
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
