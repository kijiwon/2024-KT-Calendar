/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {
  Calendar,
  momentLocalizer,
  NavigateAction,
  DateLocalizer,
  Event,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { COLOR } from '../style/theme';
import { gameData } from '../data/gameData';

interface ToolBarProps {
  label: string;
  onNavigate: (action: NavigateAction) => void;
}

const CalendarWrapper = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #ffff;
  border-radius: 15px;
  padding: 20px 15px 15px;
  margin-top: 20px;

  .rbc-date-cell {
    text-align: start;
    margin-top: 2px;
    margin-left: 3px;
    padding: 0;
  }
  .rbc-event {
    padding: 0;
  }
`;

const CellWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;

  p {
    width: 18px;
    height: 18px;
    text-align: center;
    border-radius: 25px;
  }
  img {
    width: 85%;
  }
`;

const ToolBar = ({ label, onNavigate }: ToolBarProps) => {
  const handleNavigate = (action: NavigateAction) => {
    onNavigate(action);
  };

  const formatYear = moment(label, 'MMMM YYYY').format('YYYY년');
  const formatMonth = moment(label, 'MMMM YYYY').format('MM월');

  return (
    <div>
      <div>
        <p>{formatYear}</p>
        <p>{formatMonth}</p>
      </div>
      <div>
        <button onClick={() => handleNavigate('PREV')}>
          <IoIosArrowBack />
        </button>
        <button onClick={() => handleNavigate('TODAY')}>이번달</button>
        <button onClick={() => handleNavigate('NEXT')}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

const ScheduleCalendar = () => {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);
  const eventData = gameData.map((event) => ({
    title: (
      <CellWrapper>
        <img
          alt="teamlogo"
          src={process.env.PUBLIC_URL + `/assets/teamlogo/${event.team}.png`}
        />
        <p
          style={{
            color: event.place === 'H' ? `#ffff` : `${COLOR.black}`,
            backgroundColor: event.place === 'H' ? `${COLOR.crimson}` : '',
          }}
        >
          {event.place}
        </p>
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
