import React from 'react';
import nul from './Picture 2.jpg';
import et from './mig med bue.jpg';
import to from './bil2.jpg';

const Home = ({ age }) => {
  return (
    <div>
    <div>
    <div className="container-text">
      <h1>Velkommen til min side</h1>   
    </div>
  </div>
  <div>
    <div className="container">
            <div className="billederamme">
              <h1 className="overskift">Om mig</h1>
              <img className="size" src={nul} alt=""/>
              <p className="text">Jeg er halvt spanier og bor på stevns for tiden.
                <br/>Jeg er <em id="age">{age}</em> år og har ikke nogen børn og aldrig været gift, men det forsøger jeg dog at lave om på.&nbsp;</p>
            </div>
            <div className="billederamme">
              <h1 className="overskift">Bueskydning</h1>
              <img className="size" src={et} alt=""/>
              <p className="text">Jeg startede med at gå til bueskydning mens jeg boede i Lyngby. Jeg har min egen bue og lige for tiden skyder jeg kun lidt i baghaven da der ikke er en klub i nærheden.</p>
            </div>
            <div className="billederamme">
              <h1 className="overskift">Min bil</h1>
              <img className="size" src={to} alt=""/>
              <p className="text">Dette er min Citroën 2cv fra 1984. Den hedder smølfine og det er derfor den har de farver den har.</p>
            </div>
          </div>
        </div>
  </div>
  );
}

export default Home;