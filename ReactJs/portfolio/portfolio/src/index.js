import React from 'react';
import ReactDOM from 'react-dom/client';
import Introduction from './components/introduction';
import Academics from './components/academics';
import Skills from './components/skills';
import PersonalDetails from './components/personal_details';

import './components/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <div className="portfolio">
        <header>
          <nav>
            <ul>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#personal-details">Personal Details</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Introduction></Introduction>
          <Academics></Academics>
          <Skills></Skills>
          <PersonalDetails></PersonalDetails>
        </main>
      </div>
);



