import { FC } from "react";
import { Link } from "react-router-dom";

import "./__style.scss";

export const NotFoundPage: FC = () => {
  return (
    <div className="not-found-page">
      <span>Ошибка 404: Страница не найдена</span>
      <Link to={"/"}>На главную</Link>
    </div>
  );
};
