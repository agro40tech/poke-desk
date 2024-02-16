import { FC } from "react";

import { DropDownMenu, ToggleChangeTheme } from "03-Features";

import "./__style.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Pokedesk</h1>

      <nav className="header__nav">
        <ul className="nav__list">
          <li className="list__item">
            <ToggleChangeTheme />
          </li>
          <li className="list__item">
            <DropDownMenu buttonText="Инструменты" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
