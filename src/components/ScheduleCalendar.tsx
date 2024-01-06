import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const ScheduleCalendar = () =>{
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment)

    return <div>
       <Calendar localizer={localizer} style={{height:500}}/> 
    </div>
}

export default ScheduleCalendar