import React from 'react';
import './Caravan.css';
import nul from './trailer.jpg';
import et from './DSCN0034.JPG';
import to from './BILD0254.JPG';
import tre from './BILD0253.JPG';
import fire from './20170512_124708.jpg';
import fem from './20170525_082605.jpg';
import seks from './20170525_082556.jpg';
import syv from './20170525_082530_1.jpg';
import otte from './296407_2540388913134_916656901_n.jpg';

const Caravan = () => {
  return (
    <div>
     <div className="py-5 gradient-overlay text-center bg-secondary">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-light">Billeder a min Campingvogn</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-5 text-center bg-primary">
    <div className="container">
        <div className="row">
        <div className="col-md-12">
          <h1 className="pb-3 text-white">Min Campingvogn</h1>
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
    </div>
  </div>
  </div>
  );
}

export default Caravan;