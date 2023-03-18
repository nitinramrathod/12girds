import React from 'react';
import WorkCards from './WorkCards'
import Works from './workpage/workpageApi';

const Container =() => {
  

  return (<>

    <section className='header'>
      <div className="container px-4 p-sm-0">

        <div className="text">
          <h3 className='header-headline'>
            Pixel perfection is what you get.
          </h3>
          <p className='header-text'>Scroll down to explore some of our best arts and culture websites ↓
          </p>

        </div>

      </div>
    </section>
    <section className='img-section'>
      <div className="container px-4 p-sm-0">
        <div className="row">

          {
            Works.map((detail)=>{
              return  <WorkCards key={detail.card_no} cardNo = {detail.card_no}/>
            })
          }

        </div>      
        



      </div>
    </section>






  </>
  )
}

export default Container;
