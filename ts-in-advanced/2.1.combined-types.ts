type Vector2 = { x: number; y: number };
type Box = {
  id: string;
  size: Vector2;
  location: Vector2;
  content: string | number;
  color: string;
};

const defineBox = (box: Box) => {
  // logic
};
defineBox({
  content: "Content goes here",
  color: "green",
  location: { x: 100, y: 100 },
  size: { x: 50, y: 50 }
});

type MakeOptional<T, K extends keyof T> =
  Omit<T, K> & Pick<Partial<T>, K>;


const defineBoxWithOptionalId = (box: MakeOptional<Box, "id">) => {
  // logic
};
defineBoxWithOptionalId({
  content: "Content goes here",
  color: "green",
  location: { x: 100, y: 100 },
  size: { x: 50, y: 50 }
});

// Convert type string to number
type ConvertTypeTo<T, From, To> = {
  [K in keyof T]: Required<T>[K] extends From ? To : T[K];
};

type BoxStringToNumber = ConvertTypeTo<Box, string | number, number>;
