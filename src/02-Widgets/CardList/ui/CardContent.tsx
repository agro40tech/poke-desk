import { FC } from "react";

type typeProps = {
  imageSrc: string;
  cardTitle: string;
};

export const CardContent: FC<typeProps> = ({ cardTitle, imageSrc }) => {
  return (
    <div className="card__content">
      <img className="card__img" src={imageSrc} alt={`Картинка покемона ${cardTitle}`} />
      <span className="card__title">{cardTitle}</span>
    </div>
  );
};
