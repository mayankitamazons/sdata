import React from 'react';
import { Link } from 'react-router-dom';

class typeoffair extends React.Component 
{
render() {
   
    return (
  <div  style={{WebkitTextFillColor: "White" }}>
  <center>
         <h1>Region-I Science and Engineering Fair</h1>
        <div>    
      <h1 >UPPER FAIR DETAILS</h1>

      <table cellpadding="2" width="50%" border="10" cellspacing="4">
          <tr><td><b>Date of fair:</b></td><td><b> 15th FEBRUARY 2019</b></td></tr>
          <tr><td><b>Date of Late Registration:</b></td><td><b> 2ND FEBRUARY 2019</b></td></tr>
          <tr><td><b>Check-in::</b></td><td><b>8AM</b></td></tr>
          <tr><td><b>Time:</b></td><td><b>9AM</b></td></tr>
          <tr><td><b>Place:</b></td><td><b>THAD COCHRAN CENTER</b></td></tr>
          <br/><br/>
   <tr align="center">  <Link to ={ {
         pathname: "/uform" 
} }>  <button style={{WebkitTextFillColor : "Brown"}}><font size="3">Student Registartion </font> </button> </Link></tr>
</table>
        </div>
       
        <div>
        <br/><br/><br/><br/><br/>
                <h1 >LOWER FAIR DETAILS</h1>
      <table cellpadding="2" width="50%" border="10" cellspacing="4">
            <tr><td><b> Date of fair:</b></td><td> <b>12TH APRIL 2019</b></td></tr>
            <tr><td><b>Date of Late Registration: </b></td><td><b> 29TH MARCH 2019</b></td></tr>
            <tr><td><b>Check-in:</b></td><td><b>8AM </b></td></tr>
            <tr><td><b>Time: </b></td><td><b> 9AM</b></td></tr>
            <tr><td><b>Place: </b></td><td><b>THAD COCHRAN CENTER</b></td></tr>
       
        <br/><br/>
        <tr align="center"><button style={{WebkitTextFillColor: "Brown" }}><font size="3">Student Registartion</font></button></tr>
        </table>
        </div>
        </center>
    </div> );
}
}


export default typeoffair;