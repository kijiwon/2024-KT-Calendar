import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ScheduleCalendar from './components/ScheduleCalendar';
import { DdoryTheme, SIZE, VicTheme } from './style/theme';
import ProjectHeader from './components/Header';
import ProjectFooter from './components/Footer';

const AppWrapper = styled.div`
  min-width: ${SIZE.mobileMin};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};

  h1 {
    color: ${({ theme }) => theme.color.fontColor};
    font-size: 50px;
    font-weight: bold;
    margin-top: -40px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    padding-top: 10px;
    height: 100vh;
    h1 {
      font-size: 30px;
      margin-top: 10px;
    }
  }
`;

function App() {
  const [vicMode, setVicMode] = useState<boolean>(true);
  return (
    <ThemeProvider theme={vicMode ? VicTheme : DdoryTheme}>
      <AppWrapper>
        <ProjectHeader vicMode={vicMode} setVicMode={setVicMode} />
        <h1>2024 kt wiz 경기일정</h1>
        <ScheduleCalendar />
        <ProjectFooter />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
