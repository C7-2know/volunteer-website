import React from 'react'
import 

function Card({book}) {
  return (
    <>
      <div className='rounded-lg bg-white shadow-lg m-4 sm:mx-1  flex flex-col items-center w-56 lg:w-80 '>
        <img src={book.img} alt="Card Image" className='w-full h-48 shadow-sm' />
        <div className='w-full flex flex-col justify-right w-64 p-3'>
          <p className='text-sm font-semibold border-b border-gray-500 pb-3 break-words'>Title of the book is this will be much long: {book.title}</p>
          <br/>
          <div className='justify-right p-1 m-1 mt-0'>
            <p className='text-gray-600'>Author: {book.author}</p>
            <p className='text-gray-600'>page: {book.page}</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Card