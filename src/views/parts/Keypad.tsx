import styled from '@emotion/styled';
import Box from 'components/Box';
import Button from 'components/Button';

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

const KeypadContainer = styled(Box)({
  backgroundColor: 'purple',
  width: 'auto',
  height: '200px',
  margin: '5px',
});

const Keypad = ({ keypadPress }: KeypadProps): JSX.Element => {
  return (
    <KeypadContainer>
      <Button type="button" onClick={keypadPress} value={keys.one}>
        {keys.one}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.two}>
        {keys.two}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.three}>
        {keys.three}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.four}>
        {keys.four}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.five}>
        {keys.five}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.six}>
        {keys.six}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.seven}>
        {keys.seven}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.eight}>
        {keys.eight}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.nine}>
        {keys.nine}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.zero}>
        {keys.zero}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.plus}>
        {keys.plus}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.minus}>
        {keys.minus}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.divide}>
        {keys.divide}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.equal}>
        {keys.equal}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.clear}>
        {keys.clear}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.allClear}>
        {keys.allClear}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.posneg}>
        {keys.posneg}
      </Button>
      <Button type="button" onClick={keypadPress} value={keys.decimal}>
        {keys.decimal}
      </Button>
    </KeypadContainer>
  );
};

export default Keypad;
