import { FC } from "react";

import "./__style.scss";

type typeProps = {
  imageSrc: string;
  cardTitle: string;
};

export const CardContentPokemon: FC<typeProps> = ({ cardTitle, imageSrc }) => {
  return (
    <div className="card__content">
      <img className="card__img" src={imageSrc} alt={`Картинка покемона ${cardTitle}`} />
      <span className="card__title">{cardTitle}</span>
    </div>
  );
};
