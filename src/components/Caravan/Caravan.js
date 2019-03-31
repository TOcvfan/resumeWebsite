import React from 'react';
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
    <div>
        
        <div className="container-text">
          <h1>Min Campingvogn</h1>
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
      </div>
    </div>
  </div>
  
  );
}

export default Caravan;