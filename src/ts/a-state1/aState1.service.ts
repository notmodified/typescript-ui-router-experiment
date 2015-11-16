
export interface IAState1Service {
  getThings(): string[]
  addThing(thing: string): void
}

export const AState1Service = (): IAState1Service => {

  let things: string[] = ['thing 1', 'thing 2', 'thing 3'];

  return {
    getThings: getThings,
    addThing: addThing
  };

  function getThings() {
    return things;
  };

  function addThing(thing: string) {
    things.push(thing);
  }
}
