import React from 'react';

function Card(prop)
{
    return(
        <>
        <div className="cards">
          <div className="card">
              <img src={prop.imagesrc} alt="my image" className="card_img"></img>
              <div className="card_info">
                <span className="card_cat">{prop.title}</span>
                <h3 className="card_details">{prop.sname}</h3>
                <a href={prop.link} target="_blank">
                  <button>Watch Now</button>
                </a>  
              </div>
          </div>
        </div>
      </>
    );
}

export {Card};