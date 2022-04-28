class NumberLib {
  static convertToNumber = (n: string): number => {
    return Number.parseInt(n, 10);
  };

  static isNumber = (n: string): boolean => {
    return Number.isInteger(Number.parseInt(n, 10));
  };
}

export default NumberLib;
