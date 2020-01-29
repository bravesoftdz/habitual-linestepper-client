import React from 'react'

import './aboutPanel.css'
import TickerTape from '../ticker/TickerTape'

export const AboutPanel = () => {
  return (
    <div className="about-root">
      <div className="pink-box">
        <h1>Hi, I'm Ben.</h1>
        <p style={{marginTop: 0}}>I am currently a Senior Front-End Developer at ANS Group, Manchester, UK.</p>
      </div>
      <TickerTape />
    </div>
  );
};
