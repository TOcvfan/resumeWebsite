import React from 'react';
import nul from './Picture 2.jpg';
import et from './mig med bue.jpg';
import to from './bil2.jpg';
import './Home.css';


const Application = ({ age }) => {
  return (
    <div>
    <div className="py-5 gradient-overlay text-center bg-secondary">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-light">Velkommen til min side</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-5 bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 bg-primary">
              <h1 className="text-white border border-primary bg-primary">Om mig</h1>
              <img className="d-block w-100 mb-3 rounded" src={nul} alt=""/>
              <p className="text-white">Jeg er halvt spanier og bor på stevns for tiden.
                <br/>Jeg er <em id="age">{age}</em> år og har ikke nogen børn og aldrig været gift, men det forsøger jeg dog at lave om på.&nbsp;</p>
            </div>
            <div className="col-md-4 bg-primary">
              <h1 className="text-white border border-primary bg-primary">Bueskydning</h1>
              <img className="d-block w-100 mb-3 rounded" src={et} alt=""/>
              <p className="text-white">Jeg startede med at gå til bueskydning mens jeg boede i Lyngby. Jeg har min egen bue og lige for tiden skyder jeg kun lidt i baghaven da der ikke er en klub i nærheden.</p>
            </div>
            <div className="col-md-4 bg-primary text-white border border-primary">
              <h1 className="text-white border border-primary bg-primary">Min bil</h1>
              <img className="d-block w-100 mb-3 rounded" src={to} alt=""/>
              <p className="text-white bg-primary border border-primary">Dette er min Citroën 2cv fra 1984. Den hedder smølfine og det er derfor den har de farver den har.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Application;