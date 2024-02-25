export const buildStringWeight = (w: number) => {
  if (w <= 1000) {
    return (w / 10).toFixed(1) + " kg";
  } else {
    return w + " kg";
  }
};
