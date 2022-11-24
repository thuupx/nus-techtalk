

// Never type
// Popular: Use `never` to ensure our switch statement is covered in all cases.
enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,
}

const flowerLatinName = (flower: Flower) => {
  switch (flower) {
    case Flower.Rose:
      return "Rosa rubiginosa";
    case Flower.Rhododendron:
      return "Rhododendron ferrugineum";
    case Flower.Violet:
      return "Viola reichenbachiana";
    case Flower.Daisy:
      return "Bellis perennis";

    default:
      const _exhaustiveCheck: never = flower;
      return _exhaustiveCheck;
  }
};

// Unknown vs any type

// let value: any;

// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = new TypeError(); // OK
// value = Symbol("type"); // OK

// // // => Access
// value.name // OK
// value.trim() // OK
// new value() // OK


let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK

// => Access 
value.name // OK
value.trim() // OK
new value() // OK

// Assignment values

// let value: unknown;

// let value1: unknown = value; // OK
// let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error

// => Only works with `unknown` and `any` types

//Narrow unknown type

try {
  if (1) {
    throw new Error("Not implemented");
  }
  else {
    throw "String error"
  }
} catch (error) {
  if (error instanceof Error) {
    console.trace(error.stack)
  }
  if (error instanceof String) {
    console.error(error);
  }
}

// Or JSON parsing

const parse = (str: string): unknown => JSON.parse(str);

// Usage
interface User {
  name: string;
}
const userString = localStorage.getItem("user") || "";
const user = parse(userString) as User;