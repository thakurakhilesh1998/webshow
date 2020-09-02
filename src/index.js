import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card} from './Card';
import {webData} from './webdata';

ReactDOM.render(
  <>
  <h1 className="headings">
    Netflix Show
  </h1>
  <div className="grid">
  
  { 
    webData.map((data,index)=>{
      return (
        <Card
    class={data.class}
    imagesrc={data.imagesrc}
    title={data.title} 
    sname={data.sname}
    link={data.link}
  />
)
  }) }

  </div>
  </>,
  document.getElementById('root')
);
