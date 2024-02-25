import { FC } from "react";

import { InfoItem } from "../InfoItem/InfoItem";

import { buildStringId } from "../../lib/utils/BuildStringId";
import { buildStringHeight } from "../../lib/utils/BuildStringHeight";
import { buildStringWeight } from "../../lib/utils/BuildStringWeight";
import { typeConfigInfo } from "../../model/types";

import "./__style.scss";

type typeProps = {
  data: any;
};

export const BriefInfoPokemon: FC<typeProps> = ({ data }) => {
  const configInfo: typeConfigInfo = {
    id: buildStringId(data.id),
    height: buildStringHeight(data.height),
    weight: buildStringWeight(data.weight),
    abilities: data.abilities[0].ability.name,
    type: data.types[0].type.name,
    movies: data.moves.length,
  };

  return (
    <div className="info__wrapper">
      <span className="info-title">№ {configInfo.id}</span>

      <ul className="info__list">
        <InfoItem title="Height" data={configInfo.height} />
        <InfoItem title="Weight" data={configInfo.weight} />
        <InfoItem title="Abilities" data={configInfo.abilities} />
        <InfoItem title="Type" data={configInfo.type} />
        <InfoItem title="Movies" data={configInfo.movies} />
      </ul>
    </div>
  );
};
