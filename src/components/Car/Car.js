import React from 'react';
import './Car.css';
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
     <div className="py-5 text-center bg-primary">
      <div className="container">
        <div className="row">
        <div className="col-md-12">
          <h1 className="pb-3 text-white">Min bil</h1>
        </div>
      </div>
      <div className="row" id="thumbnails">
        <div className="col-md-3 col-6 p-1 clearfix">
                <img className="d-block img-fluid" src={nul} alt=""/>
        </div>
        
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={et} alt=""/>
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={to} alt=""/>
        </div>
      </div>
      <div className="row" id="thumbnails">
        
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={tre} alt=""/>
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={fire} alt=""/>
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={fem} alt=""/> 
        </div>
      </div>
      <div className="row" id="thumbnails">
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={seks} alt=""/>
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={syv} alt=""/>
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={otte} alt=""/> 
        </div>
        
      </div>
      <div className="row" id="thumbnails">
        
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={ni} alt=""/> 
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={ti} alt=""/> 
        </div>
        <div className="col-md-3 col-6 p-1 clearfix">
            <img className="d-block img-fluid" src={elve} alt=""/> 
        </div>
      </div>
    </div>
   </div>
  </div>
  );
}

export default Car;