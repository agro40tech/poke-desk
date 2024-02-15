import { FC } from "react";

import { DropDownMenu, ToggleChangeTheme } from "03-Features";

import "./__style.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Pokedesk</h1>

      <ul className="header__list">
        <li className="list__item">
          <ToggleChangeTheme />
        </li>
        <li className="list__item">
          <DropDownMenu buttonText="Инструменты" />
        </li>
      </ul>
    </header>
  );
};
