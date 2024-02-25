import { FC } from "react";
import { Link } from "react-router-dom";

import "./__style.scss";

export const NotFoundPage: FC = () => {
  return (
    <div className="not-found-page">
      <span className="not-found-page__text-error">Ошибка 404: Страница не найдена</span>
      <Link className="not-found-page__link" to={"/"}>
        На главную
      </Link>
    </div>
  );
};
