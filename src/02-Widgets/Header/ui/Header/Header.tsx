import { FC } from "react";

import "./__style.scss";
import { ToggleChangeTheme } from "03-Features/ToggleChangeTheme";
import { DropDownMenu } from "03-Features/DropDownMenu";

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
