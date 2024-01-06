import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ScheduleCalendar from './components/ScheduleCalendar';
import { DdoryTheme, SIZE, VicTheme } from './style/theme';
import { useState } from 'react';

const AppWrapper = styled.div`
  min-width: ${SIZE.mobileMin};
  width: 100vw;
  height: 100vh;
  padding: 30px 20px 10px;
  background-color: ${({ theme }) => theme.color.background};
`;

const AppHeader = styled.header`
  p {
    color: ${({ theme }) => theme.color.fontColor};
  }

  img {
    width: 100px;
  }
`;

function App() {
  const [vicMode, setVicMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={vicMode ? VicTheme : DdoryTheme}>
      <AppWrapper>
        <AppHeader>
          {vicMode ? (
            <img src={process.env.PUBLIC_URL + '/assets/ktmark-white.png'} />
          ) : (
            <img src={process.env.PUBLIC_URL + '/assets/ktmark-black.png'} />
          )}
          <p>2024 kt wiz 경기일정</p>
          <button onClick={() => setVicMode(!vicMode)}>모드변경</button>
        </AppHeader>
        <ScheduleCalendar />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
