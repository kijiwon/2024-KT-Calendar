/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {
  Calendar,
  momentLocalizer,
  ToolbarProps,
  NavigateAction,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { COLOR } from '../style/theme';

interface ToolBarProps {
  label: string;
  onNavigate: (action: NavigateAction) => void;
}

const CalendarWrapper = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${COLOR.light_gray};
  border-radius: 15px;
  padding: 20px 15px 15px;
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

  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        components={{
          toolbar: ToolBar,
        }}
      />
    </CalendarWrapper>
  );
};

export default ScheduleCalendar;
