const keys = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
  plus: '+',
  minus: '-',
  divide: '/',
  equal: '=',
  clear: 'C',
  allClear: 'AC',
  posneg: '+/-',
  decimal: '.',
};

interface KeypadProps {
  keypadPress: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Keypad = ({ keypadPress }: KeypadProps): JSX.Element => {
  return (
    <>
      <button type="button" onClick={keypadPress} value={keys.one}>
        {keys.one}
      </button>
      <button type="button" onClick={keypadPress} value={keys.two}>
        {keys.two}
      </button>
      <button type="button" onClick={keypadPress} value={keys.three}>
        {keys.three}
      </button>
      <button type="button" onClick={keypadPress} value={keys.four}>
        {keys.four}
      </button>
      <button type="button" onClick={keypadPress} value={keys.five}>
        {keys.five}
      </button>
      <button type="button" onClick={keypadPress} value={keys.six}>
        {keys.six}
      </button>
      <button type="button" onClick={keypadPress} value={keys.seven}>
        {keys.seven}
      </button>
      <button type="button" onClick={keypadPress} value={keys.eight}>
        {keys.eight}
      </button>
      <button type="button" onClick={keypadPress} value={keys.nine}>
        {keys.nine}
      </button>
      <button type="button" onClick={keypadPress} value={keys.zero}>
        {keys.zero}
      </button>
      <button type="button" onClick={keypadPress} value={keys.plus}>
        {keys.plus}
      </button>
      <button type="button" onClick={keypadPress} value={keys.minus}>
        {keys.minus}
      </button>
      <button type="button" onClick={keypadPress} value={keys.divide}>
        {keys.divide}
      </button>
      <button type="button" onClick={keypadPress} value={keys.equal}>
        {keys.equal}
      </button>
      <button type="button" onClick={keypadPress} value={keys.clear}>
        {keys.clear}
      </button>
      <button type="button" onClick={keypadPress} value={keys.allClear}>
        {keys.allClear}
      </button>
      <button type="button" onClick={keypadPress} value={keys.posneg}>
        {keys.posneg}
      </button>
      <button type="button" onClick={keypadPress} value={keys.decimal}>
        {keys.decimal}
      </button>
    </>
  );
};

export default Keypad;
