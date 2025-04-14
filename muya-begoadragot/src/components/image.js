import React from 'react'

function Image({image}) {
  return (
    <div className='p-2 shadow-md sm:w-1/4 md:w-1/4 lg:w-80  lg:m-2 h-64'>
        <img className='rounded-lg h-full' src={image.img}/>
    </div>
  )
}

export default Image