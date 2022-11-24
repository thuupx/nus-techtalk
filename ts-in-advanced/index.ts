// TS challenges
declare const config: Chainable;

const result: Result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .option('baz', '')
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

interface Chainable<T = {}> {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V,
  ): Chainable<Omit<T, K> & { [P in K]: V }>
  get(): T;
}

