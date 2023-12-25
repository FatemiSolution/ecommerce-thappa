import React from 'react'
import { Email,} from '../components'
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xdoqnbjw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div>
      <h1 className='justify-center flex items-center py-10 font-semiboldbold text-2xl'>We are always there to assist</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.85021429499!2d67.03934160000001!3d24.937172100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f86c370034b%3A0xf323b1ab8a972e02!2sFatemi%20Tailors!5e0!3m2!1sen!2s!4v1703428138485!5m2!1sen!2s" width='100%' height="400" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>

    </div>
    <div className='flex justify-center items-center'>
          <Email/>
    </div>
    </>
  )
}

export default Contact