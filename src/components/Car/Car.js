import React from 'react';
import nul from './bil.jpg';
import et from './samlet.png';
import to from './Roadtrip-070715-243-1.jpg';
import tre from './DSCN0827-052515-003.JPG';
import fire from './332.JPG';
import fem from './26789_1408971228399_7832914_n.jpg';
import seks from './DSCN0826-052515-002.JPG';
import syv from './Roadtrip-072815-1371.JPG';
import otte from './26789_1408972748437_7654718_n.jpg';
import ni from './228716_2026947837428_4833309_n.jpg';
import ti from './231016_2026947597422_2384708_n.jpg';
import elve from './404559_2947626733825_1488252122_n.jpg';

const Car = () => {
  return (
    <div>
      <div className="container-text">
          <h1>Min bil</h1>
        </div>
    <div className="container">
      <div>
        <div>
          <img className="img-fluid" src={nul} alt=""/>
        </div>
        
        <div>
            <img className="img-fluid" src={et} alt=""/>
        </div>
        <div>
            <img className="img-fluid" src={to} alt=""/>
        </div>
      </div>
      <div>
        
        <div>
            <img className="img-fluid" src={tre} alt=""/>
        </div>
        <div>
            <img className="img-fluid" src={fire} alt=""/>
        </div>
        <div>
            <img className="img-fluid" src={fem} alt=""/> 
        </div>
      </div>
      <div>
        <div>
            <img className="img-fluid" src={seks} alt=""/>
        </div>
        <div>
            <img className="img-fluid" src={syv} alt=""/>
        </div>
        <div>
            <img className="img-fluid" src={otte} alt=""/> 
        </div>
        
      </div>
      <div>
        
        <div>
            <img className="img-fluid" src={ni} alt=""/> 
        </div>
        <div>
            <img className="img-fluid" src={ti} alt=""/> 
        </div>
        <div>
            <img className="img-fluid" src={elve} alt=""/> 
        </div>
      </div>
    </div>
  </div>
  );
}

export default Car;