/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Calendar, momentLocalizer, NavigateAction } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { COLOR, SIZE } from '../style/theme';
import { gameData } from '../data/gameData';

interface ToolBarProps {
  label: string;
  onNavigate: (action: NavigateAction) => void;
}

const CalendarWrapper = styled.div`
  width: 90%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.calendar};
  border-radius: 15px;
  padding: 10px 15px 15px;
  margin-top: 20px;

  .rbc-date-cell {
    text-align: start;
    margin-top: 2px;
    margin-left: 5px;
    padding: 0;
  }
  .rbc-event {
    padding: 0;
  }
  .rbc-today {
    background-color: ${({ theme }) => theme.color.calendar};
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    width: 95%;
    height: 600px;
  }
`;

const CellWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  font-size: 18px;
  font-family: 'KOTRAHOPE';

  p {
    width: 18px;
    height: 18px;
    text-align: center;
    border-radius: 25px;
    margin-right: 3px;
  }
  img {
    width: 75%;
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 16px;
    }
    img {
      width: 95%;
      padding-bottom: 4px;
      height: 57px;
    }
  }
`;

const ToolBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
  p {
    margin-left: 20px;
    font-family: 'KOTRAHOPE';
    font-size: 18px;
    &:last-child {
      font-size: 40px;
      margin-top: 3px;
    }
  }
  @media screen and (max-width: ${SIZE.tablet}) {
    margin-bottom: 5px;
    p:last-child {
      font-size: 30px;
    }
  }
`;

const ToolBarButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

const ToolBarButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: 'KOTRAHOPE';
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const ToolBar = ({ label, onNavigate }: ToolBarProps) => {
  const handleNavigate = (action: NavigateAction) => {
    onNavigate(action);
  };

  const formatYear = moment(label, 'MMMM YYYY').format('YYYY년');
  const formatMonth = moment(label, 'MMMM YYYY').format('MM월');

  return (
    <ToolBarWrapper>
      <div>
        <p>{formatYear}</p>
        <p>{formatMonth}</p>
      </div>
      <ToolBarButtonWrapper>
        <ToolBarButton onClick={() => handleNavigate('PREV')}>
          <IoIosArrowBack size={20} />
        </ToolBarButton>
        <ToolBarButton onClick={() => handleNavigate('TODAY')}>
          <span>이번달</span>
        </ToolBarButton>
        <ToolBarButton onClick={() => handleNavigate('NEXT')}>
          <IoIosArrowForward size={20} />
        </ToolBarButton>
      </ToolBarButtonWrapper>
    </ToolBarWrapper>
  );
};

const ScheduleCalendar = () => {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);
  const eventData = gameData.map((event) => ({
    title: (
      <CellWrapper>
        <p
          style={{
            color: event.place === 'H' ? `#ffff` : `${COLOR.black}`,
            backgroundColor: event.place === 'H' ? `${COLOR.crimson}` : '',
          }}
        >
          {event.place}
        </p>
        <img
          alt="teamlogo"
          src={process.env.PUBLIC_URL + `/assets/teamlogo/${event.team}.png`}
        />
      </CellWrapper>
    ),
    start: new Date(event.date),
    end: new Date(event.date),
    img: event.team,
    place: event.place,
  }));

  const eventStyle = (event: any) => {
    let backgroundColor;

    switch (event.place) {
      case 'H':
        backgroundColor = `inherit`;
        break;
      case 'A':
        backgroundColor = `${COLOR.gray}`;

        break;
      default:
        backgroundColor = 'inherit';
    }
    return {
      style: {
        backgroundColor,
      },
    };
  };

  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={eventData}
        defaultView="month"
        views={['month']}
        eventPropGetter={eventStyle}
        components={{
          toolbar: ToolBar,
        }}
      />
    </CalendarWrapper>
  );
};

export default ScheduleCalendar;
