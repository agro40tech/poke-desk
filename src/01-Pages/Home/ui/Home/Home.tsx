import { CardList } from "02-Widgets/CardList";
import { Header } from "02-Widgets/Header";
import { SearchPokemon } from "02-Widgets/SearchPokemon";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <CardList />
        <SearchPokemon />
      </main>
    </>
  );
};
