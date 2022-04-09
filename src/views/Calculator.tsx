import styled from '@emotion/styled';
import Box from 'components/Box';
import Display from './parts/Display';

const CalculatorContainer = styled(Box)({
  backgroundColor: 'blue',
  height: '400px',
});

const Calculator = (): JSX.Element => {
  return (
    <>
      <h1>Calculator</h1>
      <CalculatorContainer>
        <Display />
        <div>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">0</button>
          <button type="button">+</button>
          <button type="button">-</button>
          <button type="button">/</button>
          <button type="button">=</button>
          <button type="button">C</button>
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">.</button>
        </div>
      </CalculatorContainer>
    </>
  );
};

export default Calculator;
