import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root:{
        width: '64px',
        height: '18px',
        margin: '0 55px 16px 56px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: '0.6px',
        color: '#999999'
    },
 table: {
     minWidth: "176px"
 }, 
 tableRow:{
    border: "hidden"
 },
 slider: {
    position: "absolute",
    width: "3px",
    height: "74px",
    margin: "-30px 12px 0 0",
    marginLeft: "8px",
    backgroundColor: "#0f6ebe",
    position:"absolute"
 },
 calendar:{
    width: "1280px",
    height: "720px",
    padding: "16px 10px 8px",
    backgroundColor: "#121212"
 },
 headerCell: {
    width: "182px"
},
grid:{
    marginRight: '22px',
    marginLeft: '22px'
},
days:{
    height: "18px",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: 1.29,
    letterSpacing: "0.6px",
    color: "#999999",
    textAlign:"center"
   
},
greyCell:{
    width: "182px",
    height:"100px",
    padding: "0 24px 0 16px",
    maxHeight: "100px",
    opacity: 0.4,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    border: "hidden",
    color: "#e6e6e6",
},
blackCell:{
    width: "182px",
    height:"100px",
    padding: "0 24px 0 16px",
    maxHeight: "100px",
    opacity: 0.8,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    border: "hidden",
    color: "#e6e6e6",
},
dateText:{
    width: "25px",
    position: "absolute",
    height: "28px",
    margin: "0 2px 0 0",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "bold",
    // float: "left",
    lineHeight: 1.17,
    color: "#e6e6e6",
    marginLeft: "27px",
},
calendarIcon: {
    width: "12px",
    height: "12px",
    margin: "2px 4px 0 0",
},
monthString:{
    width: "45px",
    height: "18px",
    marginLeft: "54px",
    marginTop: "8px",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: 1.29,
    color: "rgba(255, 255, 255, 0.9)"
},
nameOfTheDay: {
    height: "15px",
    padding: "12px 20px",
    borderBottomLeftRadius: "100px",
    borderTopLeftRadius: "100px",
    backgroundColor: "#0f6ebe",
    color: "#e6e6e6"

},
nameOfTheDayTextIcon: {
    top: "-10px",
    color: "#e6e6e6"
}
})

