// 2. Write a function that filters out expired items. It takes an array of objects, each with data and an expires-at value in milliseconds.

export const expiredItems = (items: { value: string; expiresAt: number }[]) => {
  const now = Date.now();

  return items.filter((item) => item.expiresAt < now);
};

const inputs = [
  { value: "data", expiresAt: 1764385871929 },
  { value: "eggs", expiresAt: 17643858719897 },
];

const result = expiredItems(inputs);
console.log(result);
