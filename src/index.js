import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card} from './Card';

ReactDOM.render(
  <>
  <div className="grid">
      <Card
        class="card1"
        imagesrc="https://picsum.photos/200/300" 
        title="An Amazon Web Series" 
        sname="Family Man"
        link="https://www.amazon.com/gp/video/detail/B08BYZMXSP/ref=atv_hm_hom_3_c_0z7Q22_brws_2_1"
      />
      <Card
        class="card2"
        imagesrc="https://picsum.photos/id/237/200/300" 
        title="An Amazon Web Series" 
        sname="Hidden Secret"
        link="https://www.amazon.com/gp/video/detail/B08DK1G84T/ref=atv_hm_hom_3_c_0z7Q22_brws_2_3"
      />
      <Card
        class="card3"
        imagesrc="https://picsum.photos/seed/picsum/200/300" 
        title="An Amazon Web Series" 
        sname="Patal Lok"
        link="https://www.amazon.com/Badlands/dp/B08BYYXFJL/ref=sr_1_1?dchild=1&keywords=Patal+lok&qid=1598974679&s=instant-video&sr=1-1"
      />
  </div>
  </>,
  document.getElementById('root')
);
