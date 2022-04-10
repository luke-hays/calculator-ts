import { useState } from 'react';
import styled from '@emotion/styled';

import Box from 'components/Box';
import Display from './parts/Display';
import Keypad from './parts/Keypad';

const MAX_DIGIT_LENGTH = 8;
const MAX_DECIMAL_LENGTH = 3;

const CalculatorContainer = styled(Box)({
  backgroundColor: 'blue',
  height: '400px',
});

const Calculator = (): JSX.Element => {
  const [display, setDisplay] = useState('0');
  const [currentVal, setCurrentVal] = useState(0);

  const keypadPress = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const n = e.currentTarget.value;

    switch (n) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0': {
        // Ignore the value if greater than digit length
        // Ignore the value if adding zeros
        const num = parseInt(n, 10);

        if (currentVal.toString().length >= MAX_DIGIT_LENGTH) break;
        if (currentVal === 0) {
          if (num !== 0) {
            setDisplay(n);
            setCurrentVal(num);
          }
        } else {
          setDisplay(display + n);
          setCurrentVal(currentVal * 10 + num);
        }
        break;
      }
      case '+':
      case '-':
      case '/':
        break;
      case '=':
        break;
      case 'C': {
        if (display === '0') break;

        const newDisplay = display.slice(0, display.length - 1);
        if (newDisplay.length === 0) setDisplay('0');
        else setDisplay(newDisplay);

        setCurrentVal(currentVal / 10);
        break;
      }
      case 'AC':
        setDisplay('0');
        setCurrentVal(0);
        break;
      case '+/-':
        break;
      case '.':
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <CalculatorContainer>
        <Display display={display} />
        <Keypad keypadPress={keypadPress} />
      </CalculatorContainer>
    </>
  );
};

export default Calculator;
