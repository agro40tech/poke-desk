export const buildStringHeight = (height: number) => {
  if (height <= 9) {
    return `0.${height} m`;
  } else {
    return `${height} m.`;
  }
};
