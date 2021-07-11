import React, { useState } from 'react';

import { Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import { useStyles } from './Header/StylesUtils';
import Columns from './Columns';


function TableCellWithSlider(props) {
   const styles = useStyles();
   const col = props.col;
   const row = props.row;
   const date = props.date;
   const fulldateString = props.fulldateString;
   const monthString =  (fulldateString.split(' ')[2]==="01"?fulldateString.split(' ')[1].split(',')[0]: '');
   const show = props.show;
 return (<TableCell  key={date} onClick={props.onClick}  size="small"  className={props.className} style={{border: "hidden", padding:0}} >
  { show && <span className={styles.slider}/>}

<div className={styles.dateText} key={date}>{fulldateString.split(' ')[2]}</div>
{monthString && <div className={styles.monthString}>{monthString}</div>}

 </TableCell>);
 
}

export default function Grid (props) {
      const styles = useStyles();
      const [currDate, setCurrentDate]  = useState(props.currentDate);
      const [dateforSlider, setNewDate] = useState(props.currentDate);
 
      const rows = [0, 1, 2, 3, 4, 5];
      const cols = [0, 1, 2, 3, 4, 5, 6];
      let columns = [];
 
      let day = 0;
         
 
      const [showSliderRow, setShowSliderRow ] = useState(0);
      const [showSliderCol, setShowSliderCol] = useState(0);
    
      function onCellClick(row, col, newDate) {
         setShowSliderRow(row);
         setShowSliderCol(col);
         setNewDate(newDate);
      }

      React.useEffect (() => {
         setShowSliderRow(0);
         setShowSliderCol(0);
         setNewDate(props.currentDate);
         setCurrentDate(props.currentDate);
         }, [props.currentDate]);
      

        return (
        <Table style={{ height: "auto", tableLayout: "auto" }}> 
            <TableBody>
               <Columns />
               {
                  rows.map(row => {
                  return (<TableRow key={row} style={{ float:"left"}}>
                        {cols.map((col) => {
                  const newDate = new Date(currDate.getTime() + day*864e5)
                  const fulldateString = newDate.toLocaleString('en-us', {day:'2-digit', month:"long", weekday:"long"});
                  day = day +1;
                  const show = showSliderRow === row && showSliderCol === col && newDate.toLocaleString('en-us', {day:'2-digit', month:"long", weekday:"long"})===dateforSlider.toLocaleString('en-us', {day:'2-digit', month:"long", weekday:"long"});
                  const className = day%2 === 0? styles.blackCell: styles.greyCell;
                  return <TableCellWithSlider key={newDate} onClick={(event) => {onCellClick(row, col, newDate)}} show={show} col={col} row={row} date={newDate} fulldateString={fulldateString} className={className}/>
                  })}
                  </TableRow>)
                  })
               }
            </TableBody>
        </Table>
    );
    }