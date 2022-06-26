import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className='services'>
      <h1 className='py-5'>Our services</h1>
      <div className='container'>
        <div className='row'>
          {/* Google SEO xidmetleri */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faGoogle} className='icon' />
              </div>
              <h2>SEO</h2>
              <p>SEO is the process of taking steps to help a website or piece of content rank higher on Google.</p>
            </div>
          </div>

          {/* veb development ile elaqeli sahe */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faFileCode} className='icon' />
              </div>
              <h2>Web development</h2>
              <p>Web development refers to the building, creating, and maintaining of websites.</p>
            </div>
          </div>
   {/* Facebook Marketing */}
   <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faFacebookF} className='icon'/>
              </div>
              <h2>Facebook SMM</h2>
              <p>The best social marketing platforms like Facebook are used to post great customer engaging content.</p>
            </div>
          </div>

    {/* IT */}
   <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon icon={faDesktop} className='icon' />
              </div>
              <h2>IT, helpdesk</h2>
              <p>An IT help desk is a software platform that helps users solve their problems through a single point of contact.</p>
            </div>
          </div>      

        </div>
      </div>

    </div>
  )
}

export default Services