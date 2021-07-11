import  { TableCell, TableHead, TableRow} from '@material-ui/core';
import { useStyles } from './Header/StylesUtils';
import React from 'react';

export default function Columns() {
    const styles = useStyles();
    const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
    return (         
    <TableHead key="calendar_header" >
    <TableRow className={styles.tableRow}>
    {
        days.map((day) => {
            return (
                <TableCell size="small" className={styles.headerCell}>
                <div className={styles.days}>{day} </div>
                </TableCell>
            )
        })
    }
 
    </TableRow>
    </TableHead>);

}