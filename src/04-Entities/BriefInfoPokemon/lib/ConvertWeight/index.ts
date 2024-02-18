export const convertWeight = (w: number) => {
  if (w <= 1000) {
    return (w / 10).toFixed(1) + " кг";
  } else {
    return w + " кг";
  }
};
