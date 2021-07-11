import React from 'react';
import NameOfTheDay  from './NameOfTheday';
import MonthComponent  from './MonthComponent';
import '../../App.css';

export default function Header(props) {

        return (
            <div className="BG">
                <NameOfTheDay nameOfTheDay={props.nameOfTheDay}/>
                <MonthComponent currentMonth={props.currentMonth} onClickLeft={props.onClickLeft} onClickRight={props.onClickRight}/>
            </div>
        )
}