import styled from '@emotion/styled';
import { useTheme, Theme } from '@emotion/react';
import Calculator from 'views/Calculator';

const App = (): JSX.Element => {
  const theme: Theme = useTheme();

  const Body = styled('div')({
    width: '100%',
    backgroundColor: theme.colors.backgroundBlack,
    color: 'white',
    margin: '0',
    minHeight: '100vh',
  });

  const Header = styled('div')({
    width: '100%',
    height: '100px',
    margin: '0',
    backgroundColor: theme.colors.backgroundBlue,
    display: 'flex',
  });

  const HeaderText = styled('div')({
    display: 'inline-block',
    alignSelf: 'flex-end',
    paddingLeft: '30px',
  });

  return (
    <Body>
      <Header>
        <HeaderText>
          <h1>CRA Template</h1>
        </HeaderText>
      </Header>
      <Calculator />
    </Body>
  );
};

export default App;
