import { useState } from 'react';
import styled from '@emotion/styled';

import Box from 'components/Box';
import Display from './parts/Display';
import Keypad from './parts/Keypad';

const MAX_DIGIT_LENGTH = 8;
// const MAX_DECIMAL_LENGTH = 3;

const CalculatorContainer = styled(Box)({
  backgroundColor: 'blue',
  height: '400px',
});

const Calculator = (): JSX.Element => {
  const [display, setDisplay] = useState('0');
  const [currentVal, setCurrentVal] = useState(0);
  const [equationStack, setEquationStack] = useState<string[]>([]);
  const [isFirst, setIsFirst] = useState(true);

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
        // Ignore the value if adding zeros to zero
        const num = parseInt(n, 10);

        if (currentVal.toString().length >= MAX_DIGIT_LENGTH) break;
        if (currentVal === 0) {
          if (num !== 0) {
            if (isFirst) {
              setIsFirst(false);
              setDisplay(n);
            } else {
              setDisplay(display + n);
            }
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
        // Push our currentValue onto the stack
        equationStack.push(currentVal.toString());
        // Push the operator onto the stack
        equationStack.push(n);
        // Update the display
        setDisplay(display + n);
        // Set the current Vlue
        setCurrentVal(0);
        break;
      case '=': {
        if (currentVal !== 0) {
          equationStack.push(currentVal.toString());
        }

        let token = '';
        let lastVal = '';

        for (let i = 0; i < equationStack.length; i += 1) {
          const element = equationStack[i];

          if (Number.isInteger(Number.parseInt(element, 10))) {
            if (!lastVal) {
              lastVal = element;
            } else if (!token) {
              setDisplay('Err: No operator');
              break;
            } else {
              switch (token) {
                case '+':
                  lastVal = (
                    Number.parseInt(lastVal, 10) + Number.parseInt(element, 10)
                  ).toString();
                  break;
                case '-':
                  lastVal = (
                    Number.parseInt(lastVal, 10) - Number.parseInt(element, 10)
                  ).toString();
                  break;
                case '/':
                  lastVal = (
                    Number.parseInt(lastVal, 10) / Number.parseInt(element, 10)
                  ).toString();
                  break;
                default:
                  break;
              }
              token = '';
            }
          } else if (!token) {
            token = element;
          } else {
            setDisplay('Err: Invalid equation');
            break;
          }
        }

        setCurrentVal(Number.parseInt(lastVal, 10));
        setDisplay(lastVal);
        setEquationStack([]);
        break;
      }
      case 'C': {
        if (display === '0') break;

        const newDisplay = display.slice(0, display.length - 1);
        if (newDisplay.length === 0) {
          setDisplay('0');
          setIsFirst(true);
        } else setDisplay(newDisplay);

        const lastVal = equationStack.pop();
        if (Number.isInteger(lastVal)) {
          const newVal = currentVal / 10;
          setCurrentVal(newVal);
          equationStack.push(newVal.toString());
        }
        break;
      }
      case 'AC':
        setDisplay('0');
        setCurrentVal(0);
        setEquationStack([]);
        setIsFirst(true);
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
