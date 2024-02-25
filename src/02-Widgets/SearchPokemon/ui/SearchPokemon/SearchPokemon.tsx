import { FC } from "react";

import { useAppSelector } from "00-App/store/appStore";

import "./__style.scss";
import { initData } from "../../model/initData";
import { Card, CardContentPokemon } from "05-Shared/ui";
import { BriefInfoPokemon } from "04-Entities/BriefInfoPokemon";
import { FormSearchPokemon } from "03-Features/FormSearchPokemon";

export const SearchPokemon: FC = () => {
  const reduxData = useAppSelector((state) => state.pokemon.pokemonData);

  const getPokemonData = () => {
    if (Object.keys(reduxData).length === 0) {
      return initData;
    } else {
      return reduxData;
    }
  };

  const pokemonData = getPokemonData();

  return (
    <section className="main__search">
      <h1 className="search__title">Хочешь найти покемона?</h1>

      <div className="search__content">
        <Card
          maxWidth={true}
          className="search__card card-animated"
          content={
            <CardContentPokemon
              cardTitle={pokemonData.name}
              imageSrc={pokemonData.sprites.other["official-artwork"].front_default}
            />
          }
        />
        <div className="search__about">
          <BriefInfoPokemon data={pokemonData} />
          <FormSearchPokemon />
        </div>
      </div>
    </section>
  );
};
