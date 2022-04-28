import styled from '@emotion/styled';
import useCalculator from 'hooks/useCalculator';

import Box from 'components/Box';
import Display from './parts/Display';
import Keypad from './parts/Keypad';

const CalculatorFeatures = styled(Box)({
  backgroundColor: 'blue',
  height: '350px',
  width: '300px',
});

const CalculatorContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Calculator = (): JSX.Element => {
  const { display, action } = useCalculator();

  return (
    <CalculatorContainer>
      <h1>Calculator</h1>
      <CalculatorFeatures>
        <Display display={display} />
        <Keypad keypadPress={action} />
      </CalculatorFeatures>
    </CalculatorContainer>
  );
};

export default Calculator;
