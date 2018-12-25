import React from "react";
import { Carousel } from "react-responsive-carousel";
import one from '../Images/one.jpg';
import three from '../Images/three.jpg';
import four from '../Images/four.jpg';
import five from '../Images/five.jpg';
import two from '../Images/two.jpeg';
import six from '../Images/msef.jpg';

import './look.css';

class Carousel1 extends React.Component
{
    render()
    {
        return(
          <center>

  <Carousel  autoPlay={true} infiniteLoop = {true}  interval= "2000">
    
  <div>
      <img src={six} alt="description of dogs" />
          <p className="legend">usm2</p>
      </div>
      <div>
    
    <img src={three} alt="description of dogs" />
      <p className="legend">usm1</p>
      </div>
    <div>
    
    <img src={five} alt="description of dogs" />
      <p className="legend">usm1</p>
      </div>
      
      <div>
        <img src={four} alt="description of dogs" />
      <p className="legend">usm2</p>
      </div>
      <div>
        <img src={one} alt="description of dogs" />
      <p className="legend">usm2</p>
      </div>
      <div>
        <img src={two} alt="description of dogs" />
      <p className="legend">usm2</p>
      </div>
      
  </Carousel>
</center>  

);
        }
    }

    export default Carousel1;

