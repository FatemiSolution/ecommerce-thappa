import React from 'react'
import {Button} from '../components'
function ErrorPage() {
  return (
    <div className='flex justify-center flex-col items-center h-96'>
      <h1 className='text-7xl font-bold py-3'>404</h1>
      <h2 className='text-xl font-semibold py-3'>UH OH! You're lost.</h2>
      <p  className='px-3 flex text-center py-3'>The page you are looking for doesnt exist. Click the below Button to got back to the home page.</p>
      <Button navigates='/' />
    </div>
  )
}

export default ErrorPage