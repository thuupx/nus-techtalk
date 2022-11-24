//Before

async function computationLogic<T>(arg: Promise<T>): Promise<T[]> {
  return [await arg];
}

class Observer<T> {
  private value: T | undefined;
  public constructor(t: T | undefined = undefined) {
    this.value = t;
  }
  async getValue() {
    return this.value;
  }
  async compute() {
    return computationLogic(this.getValue());
  }
}

(async () => {
  const p = new Observer<Promise<string>>();
  const m = await p.compute(); // typeof m = (Promise<string> | undefined)[]
})();

// After

async function computationLogicAwaited<T>(arg: Promise<T>): Promise<Awaited<T>[]> {
  return [await arg];
}

class ObserverAwaited<T> {
  private value: T | undefined;
  public constructor(t: T | undefined = undefined) {
    this.value = t;
  }
  async getValue() {
    return this.value;
  }
  async compute() {
    return computationLogicAwaited(this.getValue());
  }
}

(async () => {
  const p = new ObserverAwaited<Promise<string>>();
  const m = await p.compute(); // typeof m = (string | undefined)[]
})();