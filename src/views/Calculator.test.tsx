/* eslint-disable @typescript-eslint/no-empty-function */
// Calculator should have a display view
// Calculator should have a keyboard
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from 'views/parts/Display';
import Calculator from './Calculator';

describe('calculator should render a display port', () => {
  test('that initally displays 0', () => {
    render(<Display results={0} />);

    const display = screen.getByText(/0/i);

    expect(display).toBeInTheDocument();
  });

  test('that can display a range of 1-8 digit numbers', () => {
    render(<Display results={12345678} />);

    const display = screen.getByText(/12345678/i);

    expect(display).toBeInTheDocument();
  });

  test('that can display a range of 1-3 decimal numbers', () => {
    render(<Display results={12345678.321} />);

    const display = screen.getByText(/12345678.321/i);

    expect(display).toBeInTheDocument();
  });

  test('that wont display a 0 floating pt value', () => {
    render(<Display results={12345678.0} />);

    const display = screen.getByText(/12345678/i);

    expect(display).toBeInTheDocument();
  });
});

describe('calculator should render a keyboard', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  describe('with numerical buttons', () => {
    test('where a user can press 1', () => {
      const numberBtn = screen.getByRole('button', { name: /1/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('1');
    });

    test('where a user can press 2', () => {
      const numberBtn = screen.getByRole('button', { name: /2/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('2');
    });

    test('where a user can press 3', () => {
      const numberBtn = screen.getByRole('button', { name: /3/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('3');
    });

    test('where a user can press 4', () => {
      const numberBtn = screen.getByRole('button', { name: /4/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('4');
    });

    test('where a user can press 5', () => {
      const numberBtn = screen.getByRole('button', { name: /5/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('5');
    });

    test('where a user can press 6', () => {
      const numberBtn = screen.getByRole('button', { name: /6/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('6');
    });

    test('where a user can press 7', () => {
      const numberBtn = screen.getByRole('button', { name: /7/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('7');
    });

    test('where a user can press 8', () => {
      const numberBtn = screen.getByRole('button', { name: /8/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('8');
    });

    test('where a user can press 9', () => {
      const numberBtn = screen.getByRole('button', { name: /9/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('9');
    });

    test('where a user can press 0', () => {
      const numberBtn = screen.getByRole('button', { name: /0/i });
      userEvent.click(numberBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0');
    });

    // eslint-disable-next-line max-len
    test('where a user can press 0 multiple times and always display one 0', () => {
      const numberBtn = screen.getByRole('button', { name: /0/i });
      for (let i = 0; i < 3; i += 1) {
        userEvent.click(numberBtn);
      }
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0');
    });

    test("where a user can't enter more than 8 digits", () => {
      const oneBtn = screen.getByRole('button', { name: /1/i });
      for (let i = 0; i < 9; i += 1) {
        userEvent.click(oneBtn);
      }
      const twoBtn = screen.getByRole('button', { name: /2/i });
      userEvent.click(twoBtn);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('11111111');
    });
  });

  describe('with operator buttons', () => {
    test('where a user can press +', () => {
      const operator = screen.getByRole('button', { name: '+' });
      userEvent.click(operator);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0+');
    });

    test('where a user can press -', () => {
      const operator = screen.getByRole('button', { name: '-' });
      userEvent.click(operator);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0+');
    });

    test('where a user can press /', () => {
      const operator = screen.getByRole('button', { name: '/' });
      userEvent.click(operator);
      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0+');
    });

    test('where a user can press =', () => {
      const one = screen.getByRole('button', { name: /1/i });
      const equal = screen.getByRole('button', { name: '=' });

      userEvent.click(one);
      userEvent.click(one);
      userEvent.click(equal);

      const display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('2');
    });
  });

  describe('with clear buttons', () => {
    test('where a user can press C', () => {
      const one = screen.getByRole('button', { name: /1/i });
      const operator = screen.getByRole('button', { name: '+' });
      const clear = screen.getByRole('button', { name: 'C' });

      userEvent.click(one);
      let display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('1');

      userEvent.click(clear);
      display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0');

      userEvent.click(one);
      userEvent.click(operator);
      display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('1+');

      userEvent.click(clear);
      display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('1');
    });

    test('where a user can press AC', () => {
      const one = screen.getByRole('button', { name: /1/i });
      const operator = screen.getByRole('button', { name: '+' });
      const clear = screen.getByRole('button', { name: 'AC' });

      userEvent.click(one);
      userEvent.click(operator);
      let display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('1+');

      userEvent.click(clear);
      display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0');
    });
  });

  describe('with postive/negative buttons', () => {
    test('where a user can press +/-', () => {
      const one = screen.getByRole('button', { name: /1/i });
      const posneg = screen.getByRole('button', { name: '+/-' });

      userEvent.click(posneg);
      let display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0');

      userEvent.click(one);
      userEvent.click(posneg);
      display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('-1');
    });
  });

  describe('with decminal button', () => {
    test('where a user can press .', () => {
      const decimal = screen.getByRole('button', { name: /\./i });
      const numberBtn = screen.getByRole('button', { name: /0/i });

      userEvent.click(decimal);
      for (let i = 0; i < 3; i += 1) {
        userEvent.click(numberBtn);
      }

      let display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0.000');

      userEvent.click(numberBtn);
      display = screen.getByTestId('Display');
      expect(display.innerHTML).toContain('0.000');
    });
  });
});
