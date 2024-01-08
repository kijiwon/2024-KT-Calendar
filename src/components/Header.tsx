import React from 'react';
import styled from 'styled-components';
import { COLOR, SIZE } from '../style/theme';

interface HeaderProps {
  vicMode: boolean;
  setVicMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderWrapper = styled.header`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;

  img {
    width: 80px;
    height: fit-content;
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    width: 90%;
    img {
      width: 70px;
      height: 30px;
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

const ProjectHeader = ({ vicMode, setVicMode }: HeaderProps) => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

export default ProjectHeader;
