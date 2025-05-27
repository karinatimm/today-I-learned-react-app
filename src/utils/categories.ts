export const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
] as const;
/*
as const Это даст TypeScript понять, что значения неизменяемые и можно точно 
вывести типы
*/

/*
Тип категории (объекта с name и color) был чётко определён — это тип Category.
typeof CATEGORIES — говорит TypeScript: «Это массив с объектами категории».
[number] — означает «выбери любой элемент этого массива».
Значит, Category — это тип одного объекта из массива CATEGORIES.

Ты мог искать в CATEGORIES именно объекты с таким типом.
fact.category — это строка, которая совпадает с одним из name в CATEGORIES.

Проще:

Если у тебя есть массив [obj1, obj2, obj3], (typeof arr)[number] — это тип, 
который соответствует любому из этих объектов.
*/
export type CategoryType = (typeof CATEGORIES)[number];
/*
CategoryName — это тип только значения поля name из объекта Category.
В твоём случае CategoryName будет типом: "technology" | "science" | "finance" | 
... (все возможные строки, которые есть в CATEGORIES.name).

Зачем это нужно?
Если у тебя есть переменная типа CategoryName, то она может принимать только те 
значения, которые реально есть в твоём списке категорий.
*/
export type CategoryName = CategoryType["name"];
