import { combineReducers } from "@reduxjs/toolkit";

import pokemonReducer from "../../03-Features/FormSearchPokemon/model/pokemonSlice";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});
