import styled from '@emotion/styled';
import Box from 'components/Box';

const DisplayContainer = styled(Box)({
  height: '50px',
  width: '100px',
  backgroundColor: 'red',
});

interface DisplayProps {
  display?: string;
}

const Display = ({ display = '0' }: DisplayProps): JSX.Element => {
  return <DisplayContainer data-testid="Display">{display}</DisplayContainer>;
};

Display.defaultProps = {
  display: '0',
};

export default Display;
