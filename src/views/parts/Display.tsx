import styled from '@emotion/styled';
import Box from 'components/Box';

const DisplayContainer = styled(Box)({
  height: '50px',
  width: '100px',
  backgroundColor: 'red',
});

interface DisplayProps {
  results?: number;
}

const Display = ({ results = 0 }: DisplayProps): JSX.Element => {
  return <DisplayContainer data-testid="Display">{results}</DisplayContainer>;
};

Display.defaultProps = {
  results: 0,
};

export default Display;
