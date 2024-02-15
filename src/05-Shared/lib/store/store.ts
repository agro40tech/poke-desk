import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { exportTestSlice as testSlise } from "./reducers";

const rootReducer = combineReducers({
  test: testSlise,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
