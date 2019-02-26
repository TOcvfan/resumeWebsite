import React from 'react';
import './CV.css';


const CV = () => {
	return (
		<div>
		<div className="py-5 gradient-overlay text-center bg-secondary">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <div className="row">
		            <div className="col-md-12">
		            <input type="radio" id="show" name="group"/>   
					<input type="radio" id="hide" name="group" checked/>
						<h1 className="text-light" for="hide" id="hide">Resume</h1>
		              	<h1 className="text-light" for="show" id="show">Resume</h1>
		              	<p className="text-light" id="content"> 
		              	{`Jeg er Datamatiker, jeg kan arbejde med java, Database, web-sider og Android, jeg vil gerne arbejde med backend og Android, og jeg vil gerne lære mere om internet sikkerhed. Da jeg har en lidt andeledes baggrund så kan jeg komme med en anden
		              		              		                synsvinkel. Når jeg slapper af så laver jeg på min bil (en Citroën 2cv), eller spiller strategispil på computeren. `}</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="py-5 text-center bg-primary text-white">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h1 className="pb-3 text-white">Mit CV</h1>
		        </div>
		      </div>
		      <div className="row">
		        <div className="text-right col-md-6">
		          <div className="row my-5">
		            <div className="col-2 order-lg-2 col-2 text-center" ><i className="d-block fa fa-3x fa-laptop"></i></div>
		            <div className="col-10 text-lg-right text-left order-lg-1">
		              <h4 className="text-white" id="toggleIT">IT</h4>
		              <p id="IT">{`Java – threads, sockets, rest, arrays, security`}
		                <br/>{`Database – MySQL`}
		                <br/>{`Javascript – AngularJS, React`}
		                <br/>{`C – Arduino`}
		                <br/>{`Assembler – Arduino`}
		                <br/>{`Html og CSS`}
		                <br/>{`Git`}
		                <br/>{`Network – Wan and Lan`}
		                <br/>{`Openshift`}
		                <br/>{`Android – Android studio`}
		                <br/>{`ASP.NET MCV`}
		                <br/>{`Web-service – java, C#`}</p>
		            </div>
		          </div>
		          <div className="row my-5">
		            <div className="col-2 order-lg-2 col-2 text-center"><i className="d-block fa fa-4x fa-book"></i></div>
		            <div className="col-10 text-lg-right text-left order-lg-1">
		              <h4 className="text-white" id="toggleUddannelser">Uddannelser</h4>
		              <p id="Uddannelser">{`2014 – 2017 Datamatiker (mgl. hovedopgave)`}
		                <br/>{`2004 – 2008 Automekaniker`}
		                <br/>{`2001 – 2002 Handelsskolens grunduddannelse`}
		                <br/>{`1998 – 2001 Mærsk Skibsfører uddannelse (ikke afsluttet)`}</p>
		            </div>
		          </div>
		          <div className="row my-5">
		            <div className="col-2 order-lg-2 col-2 text-center"><i className="d-block fa  fa-comment-o fa-3x"></i></div>
		            <div className="col-10 text-lg-right text-left order-lg-1">
		              <h4 className="text-white" id="toggleSprog">Sprog</h4>
		              <p id="Sprog">{`Dansk – flydende`}
		                <br/>{`Engelsk – flydende`}
		                <br/>{`Svensk, Norsk – læse og forstå`} </p>
		            </div>
		          </div>
		        </div>
		        <div className="text-left col-md-6">
		          <div className="row my-5">
		            <div className="col-2 text-center"><i className="d-block fa fa-3x fa-floppy-o"></i></div>
		            <div className="col-10">
		              <h4 className="text-white" id="toggleErhvervserfaring">Erhvervserfaring</h4>
		              <p id="Erhvervserfaring">{`Mar. 2018 - Okt. 2018 ICO PAL (lagermedarbejder)`}
		                <br/>{`Aug. 2016 – jan. 2017 cBrain (6 mdr. praktik via uddannelsen)`}
		                <br/>{`App udvikling/ Selvbetjening værktøj til kommunerne`}
		                <br/>{`Webservice/ Analyseværktøj til SKAT’s program F2`}
		                <br/>{`Jun. 2009 – Okt. 2009 Lastbilchauffør`}
		                <br/>{`Jun. 1997 – Dec. 1997 Skoleskibet Danmark`} </p>
		            </div>
		          </div>
		          <div className="row my-5">
		            <div className="col-2 text-center"><i className="d-block mx-auto fa  fa-3x fa-car"></i></div>
		            <div className="col-10">
		              <h4 className="text-white" id="toggleKorekort">Kørekort</h4>
		              <p id="Korekort">{`B`}
		                <br/>{`C`}
		                <br/>{`Truck certifikat`}</p>
		            </div>
		          </div>
		          <div className="row my-5">
		            <div className="col-2 text-center"><i className="d-block fa  fa-heart-o fa-3x"></i></div>
		            <div className="col-10">
		              <h4 className="text-white" id="toggleInteresser">Interesser</h4>
		              <p id="Interesser">{`Computer, kodning og programmering`}
		                <br/>{`Bueskydning`}
		                <br/>{`Citroën A-modeller (2cv)`} </p>
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