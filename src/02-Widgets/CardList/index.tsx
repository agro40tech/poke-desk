import { FC } from "react";
import { Card, CardContentPokemon } from "05-Shared";

import { cardContentConfig } from "./config";

import "./__style.scss";
import { Link } from "react-router-dom";

export const CardList: FC = () => {
  return (
    <section className="main__card-list">
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
