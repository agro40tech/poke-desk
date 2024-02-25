import { FC } from "react";

type typeProps = {
  title: string;
  data: string | number;
};

export const InfoItem: FC<typeProps> = ({ title, data }) => {
  return (
    <li className="info__item">
      <span className="info__title">{title}</span>
      <span className="info__data">{data}</span>
    </li>
  );
};
