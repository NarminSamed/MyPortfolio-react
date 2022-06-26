import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contactus = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  const serviceID = 'service_3y8mo1k'
  const templateID = 'template_iuy6v3i'
  const publicKEY = 'Ics7pEQTHxuPVs5eY'

    emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <div className='contacts'>
        <div className='text-center'>
            <h1>Contact Us</h1>
        </div>
        
    <div className='container'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            {/* username input */}
            <div class="text-center">
                <input
                 autoComplete="none"
                type="text"
                className='form-control'
                id="username"
                name="name"
                placeholder="Enter Username"/>
            </div>

            {/* email input */}
            <div class="text-center">
                <input
                autoComplete="none"
                type="email"
                className='form-control'
                id="email"
                name="email"
                placeholder="you@example.com"
                autocomplete="off"
                />
            </div>

             {/* phone input */}
            <div class="text-center">
                <input
                autoComplete="none"
                type="text"
                className='form-control'
                id="phone"
                name="phone"
                placeholder="Enter your telephone number"/>
            </div>

            {/* subject */}
         <div class="text-center">
                <input
                autoComplete="none"
                type="text"
                className='form-control'
                id="subject"
                name="subject"
                placeholder="Add a title"/>
            </div>

          </div>

         <div className='col-md-6 col-xs-12'>
          {/* message */}
          <div className='text-center'>
            <textarea
            type='text'
            className='form-control'
            placeholder='Your message here...'
            name="message"
            />
          </div>
          <button type='submit' className='contact-btn'>Contact us</button>
         </div>

        </div>
      </form>
    </div>

    </div>
  )
}

export default Contactus