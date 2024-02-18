import { FC } from "react";
import { convertWeight } from "./lib/ConvertWeight";

import "./__style.scss";

type typeProps = {
  data: any;
};

export const BriefInfoPokemon: FC<typeProps> = ({ data }) => {
  // Добавляем 0 если id не из 4 цифр
  const id: number | string = data.id.lenght <= 3 ? data.id : `0${data.id}`;

  // Добавляем меру исчесления
  const height: string = data.height <= 9 ? `0.${data.height} м` : `${data.height} м.`;

  // Конвертирую массу к такому виду ?.? кг
  const weight: string = convertWeight(data.weight);

  return (
    <div className="info__wrapper">
      <span className="info info-title">№ {id}</span>
      <ul className="info__list">
        <li className="info">
          <span className="info__title">Height</span>
          <span className="info__data">{height}</span>
        </li>
        <li className="info">
          <span className="info__title">Category</span>
          <span className="info__data">
            {data.moves.map((element: any) => {
              return element.move.name;
            })}
          </span>
        </li>
        <li className="info">
          <span className="info__title">Weight</span>
          <span className="info__data">{weight}</span>
        </li>
        <li className="info">
          <span className="info__title">Abilities</span>
          {data.abilities.map((element: any) => {
            return <span className="info__data">{element.ability.name}</span>;
          })}
        </li>
        <li className="info">
          <span className="info__title">Gender</span>
        </li>
        <li className="info">
          <span className="info__title">Type</span>
          <span className="info__data">{data.types.map((element: any) => element.type.name)}</span>
        </li>
      </ul>
    </div>
  );
};
