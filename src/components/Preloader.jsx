import React from 'react'
import preloader from '../elements/reload3.svg'

const Preloader = () => {
  return (
    <div className='preloader'>
      <img src={preloader} />
    </div>
  )
}

export { Preloader }
