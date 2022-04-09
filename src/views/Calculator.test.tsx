/* eslint-disable @typescript-eslint/no-empty-function */
// Calculator should have a display view
// Calculator should have a keyboard
import { render, screen } from '@testing-library/react';
import Display from 'views/parts/Display';

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
  describe('with numerical buttons', () => {
    test('where a user can press 1', () => {});
    test('where a user can press 2', () => {});
    test('where a user can press 3', () => {});
    test('where a user can press 4', () => {});
    test('where a user can press 5', () => {});
    test('where a user can press 6', () => {});
    test('where a user can press 7', () => {});
    test('where a user can press 8', () => {});
    test('where a user can press 9', () => {});
    test("where a user can't enter more than 8 digits", () => {});
  });
  describe('with operator buttons', () => {
    test('where a user can press +', () => {});
    test('where a user can press -', () => {});
    test('where a user can press /', () => {});
    test('where a user can press =', () => {});
  });
  describe('with clear buttons', () => {
    test('where a user can press C', () => {});
    test('where a user can press AC', () => {});
  });
  describe('with postive/negative buttons', () => {
    test('where a user can press +/-', () => {});
  });
  describe('with decminal button', () => {
    test('where a user can press .', () => {});
  });
});
