import { FC, useEffect } from "react";

import "../style/index.css";
import { Button } from "@mui/material";
import { increment, useAppDispatch, useAppSelector } from "05-Shared";

export const App: FC = () => {
  const count = useAppSelector((state) => state.test.count);
  const dispath = useAppDispatch();

  useEffect(() => {
    console.log(count);
  }, [count]);

  const clickHandle = () => {
    dispath(increment(1));
  };

  return (
    <div>
      <Button variant="contained" onClick={clickHandle}>
        Добавить 1
      </Button>{" "}
      {count}
    </div>
  );
};
