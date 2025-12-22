type UserProps = {
  id: number;
  name: string;
  role: string;
};

const sortedObjects = (array: UserProps[]) => {
  const Result = {};

  array.forEach((user) => {
    if (!Result[user.role]) {
      Result[user.role] = [];
    }
    Result[user.role].push(user);
  });
  return Result;
};

const Result = sortedObjects([
  { id: 1, name: "Asha", role: "admin" },
  { id: 2, name: "Ravi", role: "user" },
  { id: 3, name: "Meera", role: "admin" },
]);

console.log(Result);
