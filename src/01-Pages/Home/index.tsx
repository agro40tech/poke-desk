import { FC } from "react";
import { CardList, Header, SearchPokemon } from "02-Widgets";

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
