import { FC } from "react";

import "./__style.scss";
import { Link } from "react-router-dom";
import { cardContentConfig } from "../../config/contentConfig";
import { Card, CardContentPokemon } from "05-Shared/ui";

export const CardList: FC = () => {
  return (
    <section className="main__card-list">
      <h1 className="card-list__title">Найди своего покемона!</h1>
      <ul className="card-list__list">
        <li className="list__item">
          <Card
            className="item__card card-animated"
            maxWidth={true}
            content={
              <CardContentPokemon
                cardTitle={cardContentConfig.firstCard.cardTitle}
                imageSrc={cardContentConfig.firstCard.imageSrc}
              />
            }
          />
        </li>
        <li className="list__item">
          <Link to={"/1"}>
            <Card
              className="item__card card-animated"
              maxWidth={true}
              content={
                <CardContentPokemon
                  cardTitle={cardContentConfig.secondCard.cardTitle}
                  imageSrc={cardContentConfig.secondCard.imageSrc}
                />
              }
            />
          </Link>
        </li>
        <li className="list__item">
          <Card
            className="item__card card-animated"
            maxWidth={true}
            content={
              <CardContentPokemon
                cardTitle={cardContentConfig.lastCard.cardTitle}
                imageSrc={cardContentConfig.lastCard.imageSrc}
              />
            }
          />
        </li>
      </ul>
    </section>
  );
};
