import React from 'react';

 function About() {
  return (
    <div>
      <div className='aboutMain'>
        <div className='personalInfo'>
        <i className="fa-solid fa-user userLogo"></i>
        <div className='userAbout'>
          <p >Valeh Gojayev</p>
          <p>E-mail : qocayevvaleh96@gmail.com</p>
          <p>Phone : +48-509-257-317</p>
        </div>
        </div>
        <div className='box'>
        <div className='studyInfo'>
        <i className="fa-solid fa-building-columns buildingLogo"></i>
        <p> <b><a href='http://asoiu.edu.az/az' target={'_blank'} rel="noreferrer">"ASOIU"</a></b> (Azerbaijan, bachelour)- Information Texnology</p>
        <p> <b><a href='https://vizja.pl/en/' target={'_blank'} rel="noreferrer">"AEH"</a></b> (Poland, master)- Process and Project management </p>
        </div>
        <div className='studyInfo'>
        <i className="fa-solid fa-code buildingLogo"></i>
        <p>HTML , CSS , JavaScript , Bootstrap , UI technologies , React.JS , Redux.JS , Algoritms</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;
