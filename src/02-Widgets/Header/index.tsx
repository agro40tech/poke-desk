import { FC } from "react";

import { DropDownMenu } from "03-Features";
import { Switch } from "@mui/material";
import "./__style.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Pokedesk</h1>
      <ul className="header__list">
        <li className="list__item">
          <Switch aria-label="Switch theme" />
        </li>
        <li className="list__item">
          <DropDownMenu buttonText="Инструменты" />
        </li>
      </ul>
    </header>
  );
};
