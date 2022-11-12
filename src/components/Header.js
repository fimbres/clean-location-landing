import React from 'react'
import Mapa from '../images/mapa.png'

function Header() {
  return (
    <div className='min-h-screen bg-stone-900 pt-24'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-2 min-h-screen">
            <div className="p-4 flex justify-center content-center flex-wrap">
                <div className="">
                    <h1 className="w-full text-start text-white font-bold text-4xl">Find your next</h1>
                    <h1 className="w-full text-start text-white font-bold text-4xl">Destination witouth</h1>
                    <h1 className="w-full text-start text-white font-bold text-4xl">Pollution</h1>
                </div>
                <div className="w-full flex justify-center items-center mt-8">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download The App</button>
                    <button type="button" class="text-white hover:text-white border border-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:focus:ring-yellow-900">See More</button>
                </div>
            </div>
            <div className="p-4 flex items-center justify-center">
                <div className="mt-22 w-96 h-96 bg-green-400 rounded-full flex justify-center items-center">
                    <img className="w-52" src={Mapa}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header