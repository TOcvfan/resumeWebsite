import React from 'react';
import SprogIco from './sprog.svg';
import DriverIco from './bil.png';
import WorkIco from './arbejde.png';
import HobbiesIco from './hobbier.png';
import PcIco from './pc.png';
import UddIco from './uddannelse.png';

const CV = () => {
	return (
		<div>
		<div>
		    <div>
		      <div>
		        <div>
		          <div>
		            <div>
		              	<h1>Resume</h1>
		              	<p className="text"> 
		              	Jeg er Datamatiker, jeg kan arbejde med java, Database, web-sider og Android, jeg vil gerne arbejde med backend og 
		              	Android, og jeg vil gerne lære mere om internet sikkerhed. Da jeg har en lidt andeledes baggrund så kan jeg komme med en anden
		              	synsvinkel. Når jeg slapper af så laver jeg på min bil (en Citroën 2cv), eller spiller strategispil på computeren.</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div>
		    <div>
		      <div>
		        <div>
		          <h1>Mit CV</h1>
		        </div>
		      </div>
		      <div className="container">
		        <div>
		          <div>
		            <div><img src={PcIco} className="IT"  alt="IT"/></div>
		            <div>
		              <h4 id="toggleIT">IT</h4>
		              <p id="IT" className="text">Java – threads, sockets, rest, arrays, security
		                <br/>Database – MySQL
		                <br/>Javascript – AngularJS, React
		                <br/>C – Arduino
		                <br/>Assembler – Arduino
		                <br/>Html og CSS
		                <br/>Git
		                <br/>Network – Wan and Lan
		                <br/>Openshift
		                <br/>Android – Android studio
		                <br/>ASP.NET MCV
		                <br/>Web-service – java, C#</p>
		            </div>
		          </div>
		          <div>
		            <div><img src={UddIco} className="education" alt="Uddannelser"/></div>
		            <div>
		              <h4 id="toggleUddannelser">Uddannelser</h4>
		              <p id="Uddannelser" className="text">2014 – 2017 Datamatiker (mgl. hovedopgave)
		                <br/>2004 – 2008 Automekaniker
		                <br/>2001 – 2002 Handelsskolens grunduddannelse
		                <br/>1998 – 2001 Mærsk Skibsfører uddannelse (ikke afsluttet)</p>
		            </div>
		          </div>
		          <div>
		            <div><img src={SprogIco} className="sprog" alt="Sprog"/></div>
		            <div>
		              <h4 id="toggleSprog">Sprog</h4>
		              <p id="Sprog" className="text">Dansk – flydende
		                <br/>Engelsk – flydende
		                <br/>Svensk, Norsk – læse og forstå </p>
		            </div>
		          </div>
		        </div>
		        <div>
		          <div>
		            <div><img src={WorkIco} className="erhvervserfaring" alt="Erhvervserfaring"/></div>
		            <div>
		              <h4 id="toggleErhvervserfaring">Erhvervserfaring</h4>
		              <p id="Erhvervserfaring" className="text">Mar. 2018 - Okt. 2018 ICO PAL (lagermedarbejder)
		                <br/>Aug. 2016 – jan. 2017 cBrain (6 mdr. praktik via uddannelsen)
		                <br/>App udvikling/ Selvbetjening værktøj til kommunerne
		                <br/>Webservice/ Analyseværktøj til SKAT’s program F2
		                <br/>Jun. 2009 – Okt. 2009 Lastbilchauffør
		                <br/>Jun. 1997 – Dec. 1997 Skoleskibet Danmark </p>
		            </div>
		          </div>
		          <div>
		            <div><img src={DriverIco} className="driver" alt="Kørekort"/></div>
		            <div>
		              <h4 id="toggleKorekort">Kørekort</h4>
		              <p id="Korekort" className="text">B
		                <br/>C
		                <br/>Truck certifikat</p>
		            </div>
		          </div>
		          <div>
		            <div><img src={HobbiesIco} className="hobbies" alt="Interesser"/></div>
		            <div>
		              <h4 id="toggleInteresser">Interesser</h4>
		              <p id="Interesser" className="text">Computer, kodning og programmering
		                <br/>Bueskydning
		                <br/>Citroën A-modeller (2cv) </p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		);
	}


export default CV;