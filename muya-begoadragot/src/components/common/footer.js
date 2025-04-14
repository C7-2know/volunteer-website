import React from 'react'

function Footer() {
  return (

    <footer className="bg-gray-800 dark:bg-light text-white p-4">
        <div className="container mx-auto text-center flex flex-col gap-8">
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-white hover:text-gray-400 border border-red-450 rounded-lg"> facebook </a>
                <a href="#" className="text-white hover:text-gray-400 border border-red-450 rounded-lg"> youtube</a>
                <a href="#" className="text-white hover:text-gray-400 border border-red-450 rounded-lg">telegram</a>
                <a href="#" className="text-white hover:text-gray-400 border border-red-450 rounded-lg">twitter</a>
            </div>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </footer>

  )
}

export default Footer