import React from 'react'
import cardWork from '../card-2.jpg'


const Experince = () => {
  return (
<div className='experience container'>
<div className='row experience-work'>
<div className="accordion col-md-6 col-xs-12" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        2012-2013
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong className='title'>Flexor, inc</strong> <br/><p>Prototyped an average of 25 new product features per year.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2013-2017
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong className='title'>Corend Systems</strong> <p>Responsible for full stack web development for all client projects.
        <br/> Increased customer satisfaction by 35% and customer retention by 40%.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        2018-2022
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong className='title'>Freelancer Developer</strong><p>Built an ecommerce webapp to sell potty training advent calendars.
        <br/>Designed a customer web form for a local dentit's office.</p>
      </div>
    </div>
  </div>
</div>
<div  className=' work col-md-6 col-xs-12'> 
  <img className='work-photo' src={cardWork} alt="work" />
</div>
</div>
</div>

  )
}

export default Experince