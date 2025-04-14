import React from 'react'
import Card from '../../components/card'
import Image from '../../components/image'

function LandingPage() {
  const book = {
    img:"/bg.jpg",
    title:"book title",
    author:"book author",
    page:"248"
  }

  const images=[
    {img:"bg.jpg"},{img:"bg.jpg"},{img:"bg.jpg"},{img:"bg.jpg"},{img:"bg.jpg"},{img:"bg.jpg"}
  ]
  return (
    <div className='h-content w-100 flex flex-col justify-center items-center gap-3'>
      <div id="welcome" className='justify-center items-center gap-8 p-16 flex sm:flex-row flex-col bg-red-100 w-full'>
       <div className="justify-items-center shadow-sm flex flex-col ">
        <h1 className='font-bold text-80'> Welcome to the Landing page</h1>
        <p> This is the landing page of the application </p>
        <p> This is the landing page of the application </p>
       </div>
       <img className='sm:w-1/2 md-1/4 sm:h-80 h-48 w-full ' src='/bg.jpg'/>

      </div>
      <br/>
      <div id='library' className=' flex flex-col m-1 border border-green-450 w-full md:px-32 lg:px-32 py-8 border border-red-500 '>
        <div className='flex flex-col items-center'>
          <h3 className='font-bold '>Biete metshaft</h3>
          <p>this neeus kifil is some bla bla text </p>
        </div>
        <div className='flex flex-wrap border border-red-400 w-full justify-center'>
          <Card book={book}/>
          <Card book={book}/>
          <Card book={book}/>
          <Card book={book}/>
        </div>
      </div>
      <br/>
      <div id="it_design" className='p-8 border border-red-400 sm:px-2 md:px-32 lg:px-48 w-full'>
        <div className='flex flex-col sm:items-center'>
          <h3 className='text-semibold'>IT Design</h3>
          <p>this is the IT design section </p>
        </div>
        <div className='flex flex-wrap border border-red-400 w-full justify-first mt-2'>
          {images.map((x,index)=>
          <Image image={x}/>)}
        </div>
      </div>
      <div id='begoadragot' className=' flex flex-col m-1 mb-4 border border-green-450 w-full md:px-32 lg:px-48 py-8 lg:py-16'>
        <div className='pl-16'>
          <h3 className='font-bold '>Bego adragot</h3>
          <p>this neeus kifil is some bla bla text </p>
        </div>
        <div className='flex flex-wrap w-full border'>
          <Card book={book}/>
          <Card book={book}/>
          <Card book={book}/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage  