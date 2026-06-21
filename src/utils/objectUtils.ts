export const arrayToTrueObject = <T extends string | number | symbol>(
  array: T[]
): Record<T, boolean> => {
  return array.reduce(
    (acc, item) => {
      acc[item] = true;
      return acc;
    },
    {} as Record<T, boolean>
  );
};
