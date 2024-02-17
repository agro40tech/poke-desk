import { Card, CardContentPokemon } from "05-Shared";
import { FC } from "react";
import { config } from "./config";

import "./__style.scss";
import { FormSearchPokemon } from "03-Features";

export const SearchPokemon: FC = () => {
  return (
    <section className="main__search-pokemon">
      <FormSearchPokemon />
      <div className="search-pokemon__card-pokemon">
        <Card
          maxWidth={true}
          content={
            <CardContentPokemon cardTitle={config.card.cardTitle} imageSrc={config.card.imageSrc} />
          }
        />
      </div>
    </section>
  );
};
