import styled from '@emotion/styled';
import Box from 'components/Box';

const DisplayContainer = styled(Box)({
  height: '40px',
  width: 'auto',
  margin: '5px',
  backgroundColor: 'white',
  color: 'black',
  padding: '5px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  border: '1px solid black',
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
