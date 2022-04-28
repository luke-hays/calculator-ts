import { useState, useEffect } from 'react';

const MAX_DIGIT_LENGTH = 8;
// const MAX_DECIMAL_LENGTH = 3;

const useCalculator = (): {
  display: string;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
} => {
  const [display, setDisplay] = useState('0');
  const [equationStack, setEquationStack] = useState<string[]>([]);

  useEffect(() => {
    if (equationStack.length > 0) {
      setDisplay(equationStack.join(' '));
    } else {
      setDisplay('0');
    }
  }, [equationStack]);

  const isNumber = (n: string): boolean => {
    return Number.isInteger(Number.parseInt(n, 10));
  };

  const convertToNumber = (n: string): number => {
    return Number.parseInt(n, 10);
  };

  // A lot of repeated instances of getting equationstack
  const numberAction = (n: string): void => {
    const equation = [...equationStack];

    // If stack is empty, push onto stack
    if (equationStack.length === 0) {
      equation.push(n);
    } else {
      // Check the top of the equation stack
      let token = equation.pop() ?? '';

      // If token is number and won't surpass max length
      // concat to token and push back on stack
      if (isNumber(token)) {
        if (token.length >= MAX_DIGIT_LENGTH) return;
        token += n;
        equation.push(token);
      } else {
        // If its an operator
        // push operator back on stack
        equation.push(token);
        // push new number to stack
        equation.push(n);
      }
    }

    setEquationStack(equation);
  };

  const operatorAction = (n: string): void => {
    const equation = [...equationStack];

    // If equation stack is empty push 0
    if (equation.length === 0) equation.push('0');

    // Push the operator onto the stack
    equation.push(n);
    setEquationStack(equation);
  };

  const clearAction = (): void => {
    const equation = [...equationStack];

    // If there is anything to pop off stack, do so
    if (equation.length > 0) {
      equation.pop();
      setEquationStack(equation);
    }
  };

  const allClearAction = (): void => {
    setEquationStack([]);
  };

  const resolveEquation = (): void => {
    const equation = [...equationStack];

    // If no equation to evaluate, return
    if (equation.length === 0) return;

    // if top token of equation is not a number, display error
    if (!isNumber(equation[equation.length - 1])) {
      // Display Error Here
      allClearAction();
    } else {
      // This will NOT take order of operations into account (yet)
      // While stack has elements

      // If theres only one just return
      if (equation.length === 1) return;

      let x = convertToNumber(equation[0]);
      for (let i = 1; i < equation.length; i += 2) {
        const operator = equation[i];
        const y = convertToNumber(equation[i + 1]);

        switch (operator) {
          case '+':
            x += y;
            break;
          case '-':
            x -= y;
            break;
          case '/':
            x /= y;
            break;
          default:
            // Display error here
            break;
        }
      }
      setEquationStack([x.toString()]);
    }
  };

  const action = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
        numberAction(n);
        break;
      }
      case '+':
      case '-':
      case '/':
        operatorAction(n);
        break;
      case '=': {
        resolveEquation();
        break;
      }
      case 'C': {
        clearAction();
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
