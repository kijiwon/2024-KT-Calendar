import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ScheduleCalendar from './components/ScheduleCalendar';
import { COLOR, DdoryTheme, SIZE, VicTheme } from './style/theme';
import { useState } from 'react';

const AppWrapper = styled.div`
  min-width: ${SIZE.mobileMin};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px 20px;
  background-color: ${({ theme }) => theme.color.background};

  h1 {
    color: ${({ theme }) => theme.color.fontColor};
    font-size: 50px;
    font-weight: bold;
    margin-top: -40px;
  }

  @media screen and (max-width: ${SIZE.tablet}) {
    padding: 10px 0px;
    height: 100vh;
    h1 {
      font-size: 30px;
      margin-top: 10px;
    }
  }
`;

const AppHeader = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 80px;
    height: fit-content;
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    img {
      width: 70px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ModeButton = styled.button`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-family: 'KOTRAHOPE';
  text-align: center;
  margin-left: 10px;
  border: none;
  background-color: inherit;
  p {
    margin-top: 3px;
    color: ${({ theme }) => theme.color.fontColor};
    border-bottom: 2px solid ${COLOR.dark_red};
  }
  img {
    width: 65px;
    background-color: ${COLOR.dark_red};
    border-radius: 50%;
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    font-size: 12px;
    margin-left: 2px;
    img {
      width: 30px;
    }
  }
  cursor: pointer;
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
          <ButtonWrapper>
            <ModeButton onClick={() => setVicMode(true)}>
              <img src={process.env.PUBLIC_URL + '/assets/vic.png'} />
              <p>빅 모드</p>
            </ModeButton>
            <ModeButton onClick={() => setVicMode(false)}>
              <img src={process.env.PUBLIC_URL + '/assets/ddory.png'} />
              <p>또리 모드</p>
            </ModeButton>
          </ButtonWrapper>
        </AppHeader>
        <h1>2024 kt wiz 경기일정</h1>
        <ScheduleCalendar />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
