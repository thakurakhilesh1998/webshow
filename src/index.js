import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card} from './Card';
import {webData} from './webdata';

console.log(webData[0]);

ReactDOM.render(
  <>
  <h1 className="headings">
    Netflix Show
  </h1>
  <div className="grid">
      <Card
        class={webData[0].class}
        imagesrc={webData[0].imagesrc}
        title={webData[0].title} 
        sname={webData[0].sname}
        link={webData[0].link}
      />
       <Card
        class={webData[1].class}
        imagesrc={webData[1].imagesrc}
        title={webData[1].title} 
        sname={webData[1].sname}
        link={webData[0].link}
      />
       <Card
        class={webData[2].class}
        imagesrc={webData[2].imagesrc}
        title={webData[2].title} 
        sname={webData[2].sname}
        link={webData[2].link}
      />
       <Card
        class={webData[3].class}
        imagesrc={webData[3].imagesrc}
        title={webData[3].title} 
        sname={webData[3].sname}
        link={webData[3].link}
      />
       <Card
        class={webData[4].class}
        imagesrc={webData[4].imagesrc}
        title={webData[4].title} 
        sname={webData[4].sname}
        link={webData[4].link}
      />
  </div>
  </>,
  document.getElementById('root')
);
