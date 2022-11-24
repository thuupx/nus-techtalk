type Person = {
  age: number;
  name: string;
  alive: boolean
};

type I1 = Person["age" | "name"];

type I2 = Person[keyof Person];

type AliveOrName = "alive" | "name";

type I3 = Person[AliveOrName];



// Real use cases

// Contact is not a type that we can control
type Staff = {
  firstName: string;
  lastName: string;
  contact?: {
    type: string;
    value: string;
  }[];
};

type Contact = Staff['contact'][number];

// Fix
type Contact2 = Exclude<Staff['contact'], undefined>[number];
// OR using NonNullable type
type Contact1 = NonNullable<Staff['contact']>;