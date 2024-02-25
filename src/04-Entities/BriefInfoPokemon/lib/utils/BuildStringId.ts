export const buildStringId = (id: number) => {
  let result: string;

  switch (id.toString().length) {
    case 4:
      result = `${id}`;
      break;

    case 3:
      result = `0${id}`;
      break;

    case 2:
      result = `00${id}`;
      break;

    case 1:
      result = `000${id}`;
      break;

    default:
      result = "";
  }

  return result;
};
