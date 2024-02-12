import React from 'react'
import img from '../Images/pelicula.png'
import { useSelector } from 'react-redux'

function Shopping() {
  const { shopping } = useSelector(state => state.shopping)

  return (
    <>
      <div className='flex flex-row justify-center gap-4'>
        <img className='w-28 h-28 mt-32 mb-1' src={img} alt="Search icon" />
        <h1 className='text-8xl text-center text-[#1b2430] mt-32 mb-1'>Your shopping</h1>
      </div>

      {shopping.length === 0 ? (
        <div className='mt-32 w-full'>
          <p className='text-4xl text-center text-[#1b2430]'>
            Here you can watch your tickets
          </p>
        </div>
      ) : (
        <div className='mt-10 flex flex-wrap justify-around max-w-full max-h-full'>
          {shopping.map((shop, i) => (
            <div key={i} className=" mt-11 flex flex-col gap-4 items-cente max-w-xs px-4 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md mx-auto">
              <h3 className="text-2xl font-semibold px-4 text-center text-[#1b2430] mb-4">{shop.title}</h3>
              <p className="text-xl mb-4 text-[#1b2430]">Number of tickets <span className='font-semibold px-4'>{shop.ticket}</span></p>
              <p className="text-xl mb-4 text-[#1b2430]">Room <span className='font-semibold ml-28'>{shop.room}</span></p>
              <p className="text-xl mb-4 text-[#1b2430]">Schedule <span className='font-semibold ml-16'>{shop.schedule}</span></p>
              <hr className="w-full border-2 rounded-lg border-[#1b2430]" />
              <p className="text-xl mb-4 text-[#1b2430]">Cost <span className='font-semibold ml-28'>20 $</span></p>
            </div>
          ))}
        </div>
      )
      }
    </>
  )
}

export default Shopping