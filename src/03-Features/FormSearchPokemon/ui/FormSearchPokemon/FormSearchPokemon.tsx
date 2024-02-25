import { Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";

import "./__style.scss";

import { useAppDispatch } from "00-App/store/appStore";

import { setData } from "../../model/pokemonSlice";
import { getApiPokemon } from "../../api/getPokemon";

export const FormSearchPokemon: FC = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("Пусто поле");

  const dispath = useAppDispatch();

  const handleClick = async () => {
    if (!error) {
      const cacheData = JSON.parse(localStorage.getItem("pokemonData") as string);

      // Если в кеше есть прошлый запрос то смотрим совпадает ли он с текущим объектом поиска
      if (cacheData) {
        // Если имя совпало то берем ответ запроса из кеша
        if (cacheData.name === name) {
          dispath(setData(cacheData));
          console.log("совпадение");
        }
        // Если имя не совпадает то делаем запрос
        else {
          getApiPokemon({ dispath: dispath, name: name });
        }
      }
      // Если запроса в кеше нету делаем запрос
      else {
        console.log("Запрос");
        getApiPokemon({ dispath: dispath, name: name });
      }
    }

    console.log("submit");
  };

  // Проверка при снятии фокуса
  const handleBlur = () => {
    if (name.length < 2) {
      setError(true);
    }
  };

  // Проверка формы через regex
  const validRegex = () => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  };

  useEffect(() => {
    // Если длина значения поля >= 2 то валидируем данные
    if (name.length >= 2) {
      // Если валидация regex прошла то активируем форму
      if (validRegex()) {
        setError(false);
      }
      // Если валидация regex не прошла то отключаем форму
      else {
        setError(true);
        setErrorMessage("Доступны символы A-Z и a-z");
      }
    }
    // Если длина значения поля < 2 то выводим сообщение о минимальной длине
    else {
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
        placeholder="pikachu"
        error={error}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleBlur}
        helperText={error ? errorMessage : ""}
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
