import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.footer};
  margin-top: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  p {
    color: ${({ theme }) => theme.color.logo};
    font-family: 'KOTRAHOPE';
  }
`;
const LogoWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    width: 80px;
  }
  p {
    font-size: 55px;
  }
`;

const LinkButton = styled.button`
  position: absolute;
  right: 30px;
  height: 30px;
  background-color: inherit;
  border: 1.5px solid ${({ theme }) => theme.color.logo};
  border-radius: 10px;
  p {
    font-size: 18px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.logo};
    p {
      color: ${({ theme }) => theme.color.buttonText};
    }
  }
  cursor: pointer;
`;

const ProjectFooter = () => {
  const openGithub = () => {
    window.open('https://github.com/kijiwon/2024-KT-Calendar');
  };

  return (
    <FooterWrapper>
      <LogoWrapper>
        <img src={process.env.PUBLIC_URL + '/assets/teamlogo/kt.png'} />
        <p>Road To V2</p>
        <img src={process.env.PUBLIC_URL + '/assets/vicddory3.png'} />
      </LogoWrapper>
      <LinkButton onClick={openGithub}>
        <p>Github 보러가기 Click⇦</p>
      </LinkButton>
    </FooterWrapper>
  );
};

export default ProjectFooter;
