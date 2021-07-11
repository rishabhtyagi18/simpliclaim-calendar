import React from 'react';
import '../App.css';
import  Header  from './Header/Header';
import Grid  from './Grid';
import { useState } from 'react';
import moment from 'moment';
import { useStyles } from './Header/StylesUtils';

function CalenderView() {
  const styles = useStyles();
  let date;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth ] = useState(currentDate.toLocaleString('en-us', {month: "long", year: "numeric"}));
  const [nameOfTheDay, setNameOfTheDay ] = useState("Today");

  function onClickLeft () {
    const month = currentDate.getMonth();
    currentDate.setDate(1);
    currentDate.setMonth(month -1);
      date = moment(currentDate);
      console.log(moment().diff(date, 'days'));
    if (Math.abs(moment().diff(date, 'days')) >= 1) {
      setNameOfTheDay(date.fromNow()); // '2 days ago' etc.
    } else {
      setNameOfTheDay(date.calendar().split(' ')[0]);
    }
    setCurrentDate(currentDate);
    setCurrentMonth(currentDate.toLocaleString('en-us', {month: "long", year: "numeric"}));
  }

  function onClickRight () {
    const month = currentDate.getMonth();
    currentDate.setDate(1);
    currentDate.setMonth(month + 1);
    date = moment(currentDate);

    if (Math.abs(moment().diff(date, 'days')) >= 1) {
      setNameOfTheDay(date.fromNow()); // ' in 2 days' etc.
    } else {
      setNameOfTheDay(date.calendar().split(' ')[0]);
    }
    setCurrentDate(currentDate);
    setCurrentMonth(currentDate.toLocaleString('en-us', {month: "long", year: "numeric"}));
  }


  return (
    <div>
      <div className={styles.calendar}>
        <Header  currentMonth={currentMonth} onClickLeft={onClickLeft} onClickRight={onClickRight} nameOfTheDay={nameOfTheDay}/>
        <Grid currentDate={currentDate} setCurrentDate={setCurrentDate} className={styles.grid}/>
      </div>
    </div>
  );
}

export default CalenderView;
