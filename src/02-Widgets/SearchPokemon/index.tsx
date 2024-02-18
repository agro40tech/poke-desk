import { Card, CardContentPokemon } from "05-Shared";
import { FC } from "react";

import "./__style.scss";
import { FormSearchPokemon } from "03-Features";
import { data } from "./data";
import { BriefInfoPokemon } from "04-Entities/BriefInfoPokemon";

export const SearchPokemon: FC = () => {
  return (
    <section className="main__search">
      <h1 className="search__title">Хочешь найти покемона?</h1>

      <div className="search__content">
        <Card
          maxWidth={true}
          className="search__card card-animated"
          content={
            <CardContentPokemon
              cardTitle={data.name}
              imageSrc={data.sprites.other["official-artwork"].front_default}
            />
          }
        />
        <div className="search__about">
          <BriefInfoPokemon data={data} />
          <FormSearchPokemon />
        </div>
      </div>
    </section>
  );
};
