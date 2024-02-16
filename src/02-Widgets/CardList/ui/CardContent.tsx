import { FC } from "react";

type typProps = {
  imageSrc: string;
  cardTitle: string;
};

export const CardContent: FC<typProps> = ({ cardTitle, imageSrc }) => {
  return (
    <div className="card__content">
      <img className="card__img" src={imageSrc} alt={`Картинка покемона ${cardTitle}`} />

      <span className="card__title">{cardTitle}</span>
    </div>
  );
};
