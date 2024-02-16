import { FC } from "react";

import "./__style.scss";

type typeProps = {
  className?: string;
  maxWidth?: string;
  content: React.ReactElement;
};

export const Card: FC<typeProps> = ({ className, maxWidth, content }) => {
  const defaultClassName = "card";

  const usedClassName: string = className ? `${className} ${defaultClassName}` : defaultClassName;

  return !maxWidth ? (
    <article className={usedClassName}>{content}</article>
  ) : (
    <article className={usedClassName} style={{ maxWidth: maxWidth }}>
      {content}
    </article>
  );
};
