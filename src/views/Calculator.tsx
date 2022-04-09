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
      </CalculatorContainer>
    </>
  );
};

export default Calculator;
