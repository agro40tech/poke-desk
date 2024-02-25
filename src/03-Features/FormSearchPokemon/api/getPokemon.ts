import { Dispatch } from "@reduxjs/toolkit";
import { setData } from "../model/pokemonSlice";
import { instance } from "05-Shared/api";

type typeProps = {
  dispath: Dispatch;
  name: string;
};

export const getApiPokemon = async ({ dispath, name }: typeProps) => {
  await instance
    .get(`pokemon/${name}`)
    .then((res) => {
      if (res.status === 200) {
        dispath(setData(res.data));
        localStorage.setItem("pokemonData", JSON.stringify(res.data));
      } else {
        console.log("Ошибка статус: " + res.status);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
