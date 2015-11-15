
export interface IAState1Service {
  getThings(): string[]
}

export const AState1Service = (): IAState1Service => {
  return {
    getThings: getThings
  };

  function getThings() {
    return ['thing 1', 'thing 2', 'thing 3'];
  };
}
