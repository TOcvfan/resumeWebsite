import React from 'react';


const Application = ({ age }) => {
  return (
    <div className='ma4 mt0'>
      <div className="py-5 gradient-overlay text-center bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-light">Om mig</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="pb-3 text-white">Er du fra en virksomhed der søger en stabil medarbejder?
            <br/>Så kig her!</h1>
              </div>
            </div>
            <div>
              <div>Jeg været igennem uddannelsen som Datamatiker.
          <br/>Jeg kan tilbyde kompetencer inden for
            <ul>
                <li>Java</li>
                <li>Android</li>
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript (AngularJS, NodeJS, JQuery, React)</li>
                <li>Linux</li>
                <li>ASP.NET</li>
                <li>Git/Tortoisehg</li>
                <li>Database</li>
            </ul>  
              Jeg vil gerne arbejde inden for frontend og backend og jeg har arbejdet I Netbeans, andriod studio og visual studio.
              Jeg er <em id="age">{age}</em> år og bor for tiden i Store Heddinge, men jeg har mulighed for at flytte hvis det skulle blive nødvendigt. 
              Under min uddannelse, tog jeg et semester i Madrid, så at flytte til et andet land er ikke fremmed for mig. Efter 
              folkeskolen tog jeg med Skoleskibet Danmark. Derefter har jeg forsøgt mig med forskellige uddannelser og I 2008 blev 
              jeg uddannet mekaniker, men jeg var ikke i stand til at finde et arbejde inden for faget. Til sidst besluttede jeg at 
              blive Datamatiker, da jeg altid har kunnet lide at arbejde med computer og har rodet en del med at lave regneprogrammer 
              i excel, og nu mener jeg at jeg har fundet min rettet hylde, da jeg nyder at lave programmer som andre kan bruge.
              Jeg har taget et kursus i ASP.NET MVC i august-september 2017
              Jeg kan godt arbejde selvstændigt, og jeg kan også arbejde i teams.
              <br/>
              <br/>Hvis i har spørgsmål til mig inden samtalen så skriv endelig.
              <br/>Jeg glæder mig til at høre fra jer.</div>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default Application;