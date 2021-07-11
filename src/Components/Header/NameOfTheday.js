import React from 'react';
import { useStyles } from './StylesUtils';
import '../../App.css';
import { Button } from '@material-ui/core';
import { EventAvailable } from '@material-ui/icons';

export default function NameOfTheDay(props) {
    const styles = useStyles();
        return (
            <div className={styles.nameOfTheDay}>
            <Button startIcon={<EventAvailable className={styles.calendarIcon}/>}  className={styles.nameOfTheDayTextIcon} style={{ color: "#e6e6e6",     textTransform: "capitalize"}}>
            {props.nameOfTheDay}
          </Button>
          </div>
        )

}