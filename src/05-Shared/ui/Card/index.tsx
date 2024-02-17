import { FC } from "react";

import "./__style.scss";

type typeProps = {
  className?: string;
  maxWidth: boolean;
  content: React.ReactElement;
};

export const Card: FC<typeProps> = ({ className, maxWidth, content }) => {
  const defaultClassName = "card";
  const classNameMaxWidth = "max-width-card";

  const buildClassName: string = className ? `${className} ${defaultClassName}` : defaultClassName;

  const usedClassName: string = maxWidth
    ? `${buildClassName} ${classNameMaxWidth}`
    : buildClassName;

  return <article className={usedClassName}>{content}</article>;
};
