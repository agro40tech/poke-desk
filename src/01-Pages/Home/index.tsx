import { Header } from "02-Widgets";
import { CardList } from "02-Widgets/CardList";
import { FC } from "react";

import "./__style.scss";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <CardList />
      </main>
    </>
  );
};
