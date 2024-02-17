import { FC } from "react";
import { CardList, Header } from "02-Widgets";

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
