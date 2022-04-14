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
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
});

const KeypadButton = styled(Button)({
  margin: '0 auto',
  height: '-webkit-fill-available',
  width: '-webkit-fill-available',
  border: '1px solid black',
});

const Keypad = ({ keypadPress }: KeypadProps): JSX.Element => {
  return (
    <KeypadContainer>
      <KeypadButton type="button" onClick={keypadPress} value={keys.one}>
        {keys.one}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.two}>
        {keys.two}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.three}>
        {keys.three}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.four}>
        {keys.four}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.five}>
        {keys.five}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.six}>
        {keys.six}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.seven}>
        {keys.seven}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.eight}>
        {keys.eight}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.nine}>
        {keys.nine}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.zero}>
        {keys.zero}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.plus}>
        {keys.plus}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.minus}>
        {keys.minus}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.divide}>
        {keys.divide}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.equal}>
        {keys.equal}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.clear}>
        {keys.clear}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.allClear}>
        {keys.allClear}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.posneg}>
        {keys.posneg}
      </KeypadButton>
      <KeypadButton type="button" onClick={keypadPress} value={keys.decimal}>
        {keys.decimal}
      </KeypadButton>
    </KeypadContainer>
  );
};

export default Keypad;
