import { Card, CardContentPokemon } from "05-Shared";
import { FC } from "react";
import { config } from "./config";

import "./__style.scss";
import { FormSearchPokemon } from "03-Features";

export const SearchPokemon: FC = () => {
  return (
    <section className="main__search-pokemon">
      <h1 className="search-pokemon__title">Хочешь найти покемона?</h1>

      <div className="search-pokemon__content">
        <FormSearchPokemon />
        <Card
          maxWidth={true}
          className="search-pokemon__card card-animated"
          content={
            <CardContentPokemon cardTitle={config.card.cardTitle} imageSrc={config.card.imageSrc} />
          }
        />
      </div>
    </section>
  );
};
