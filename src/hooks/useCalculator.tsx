import { useState, useEffect } from 'react';
import EquationStack from './helpers/EquationStack';

const useCalculator = (): {
  display: string;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
} => {
  const [display, setDisplay] = useState('0');
  const [equationStack, setEquationStack] = useState<EquationStack>(
    new EquationStack()
  );

  useEffect(() => {
    if (equationStack.length > 0) {
      setDisplay(equationStack.format());
    } else {
      setDisplay('0');
    }
  }, [equationStack]);

  const itemAction = (equation: EquationStack, n: string): void => {
    equation.push(n);
    setEquationStack(equation);
  };

  const clearAction = (equation: EquationStack): void => {
    // If there is anything to pop off stack, do so
    if (equation.length > 0) {
      equation.pop();
      setEquationStack(equation);
    }
  };

  const allClearAction = (): void => {
    setEquationStack(new EquationStack());
  };

  const resolveEquation = (equation: EquationStack): void => {
    const value = equation.computeValue() ?? '';
    setEquationStack(new EquationStack([value]));
  };

  const action = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const newEquation = new EquationStack(equationStack.copyEquation());
    const token = e.currentTarget.value;

    switch (token) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '+':
      case '-':
      case '/': {
        itemAction(newEquation, token);
        break;
      }
      case '=': {
        resolveEquation(newEquation);
        break;
      }
      case 'C': {
        clearAction(newEquation);
        break;
      }
      case 'AC':
        allClearAction();
        break;
      case '+/-':
        break;
      case '.':
        break;
      default:
        break;
    }
  };

  return { display, action };
};

export default useCalculator;
