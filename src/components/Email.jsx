import React from 'react'
// import { useRef } from 'react';
import { Button, Input,TextArea } from './index'
import { useForm, ValidationError } from '@formspree/react';
function Email() {
    
    const [state, handleSubmit] = useForm("xdoqnbjw");
    if (state.succeeded) {
        return <p>Thankyou for contacting we will get back to you soon</p>;
    }
  return (
    <div className='flex flex-col'>
        <h1 className='justify-center flex items-center py-4 font-semiboldbold text-2xl'>Contact Us</h1>

      <form onSubmit={handleSubmit} className='flex  justify-center flex-col items-start'>

            <Input type='text' label='username:' 
            classname='ml-10'
            placeholder='username:' name='username' id='username' required autoComplete='off' />
             <ValidationError 
                prefix="Username" 
                field="username"
                errors={state.errors}
               
      />
            <Input type='email' label='Email Address:' placeholder='Email Address' name='email' required autoComplete='off' id='email' />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <TextArea label='message:' id='message' name='message' cols='27' rows='8' />
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
           <Button children='submit' className='ml-60' disabled={state.submitting}  type='submit'/> 
        </form>  
    </div>
  )
}

export default Email