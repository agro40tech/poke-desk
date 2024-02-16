import { FC } from "react";

import "./__style.scss";
import { Card } from "05-Shared";
import { CardContent } from "./ui/CardContent";
import { cardContentConfig } from "./config";

export const CardList: FC = () => {
  return (
    <section className="main__card-list">
      <ul className="card-list__list">
        <li className="list__item">
          <Card
            className="item"
            maxWidth={"350px"}
            content={
              <CardContent
                cardTitle={cardContentConfig.firstCard.cardTitle}
                imageSrc={cardContentConfig.firstCard.imageSrc}
              />
            }
          />
        </li>
        <li className="list__item">
          <Card
            className="item"
            maxWidth={"350px"}
            content={
              <CardContent
                cardTitle={cardContentConfig.secondCard.cardTitle}
                imageSrc={cardContentConfig.secondCard.imageSrc}
              />
            }
          />
        </li>
        <li className="list__item">
          <Card
            className="item"
            maxWidth={"350px"}
            content={
              <CardContent
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
