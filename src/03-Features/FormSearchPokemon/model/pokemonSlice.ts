import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type typeState = {
  pokemonData: any;
};

const initialState: typeState = {
  pokemonData: {},
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{}>) => {
      state.pokemonData = action.payload;
    },
  },
});

export const { setData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
