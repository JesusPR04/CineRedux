import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { setShopping } from '../Store/Slices/shoppingSlice';

function Buy() {
    const { title, posterPath } = useParams()

    const dispatch = useDispatch()

    const [ticket, setTicket] = useState(0)
    function numTickects(e) {
        setTicket(e.target.value)
    }

    const [room, setRoom] = useState('')
    function roomType(e) {
        setRoom(e.target.value)
    }

    const [schedule, setSchedule] = useState('')
    function scheduleValue(e) {
        setSchedule(e.target.value)
    } 

    function confirmShop() {
        const shopping = {title, ticket, room, schedule}
        dispatch(setShopping(shopping))
    }

    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
                <div className='flex-1'>
                    {posterPath && (
                        <img src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt="Image" className='w-full rounded-lg' />
                    )}
                </div> 

                <div className="flex-1">
                    <h1 className='text-6xl text-[#1b2430] text-center'>{title}</h1>
                    <form className=" mt-11 flex flex-col gap-4 items-cente max-w-xs px-4 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md mx-auto">
                        <label className="flex flex-col">
                            <span className="mb-1">Tickets:</span>
                            <input type="number" name="tickets" onInput={numTickects} value={ticket} className="w-full border border-gray-300 rounded-md p-2" />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-1">Room Type:</span>
                            <select name="roomType" onChange={roomType} value={room} className="w-full border border-gray-300 rounded-md p-2">
                                <option value="">Select a room type</option>
                                <option value="2D">2D</option>
                                <option value="3D">3D</option>
                                <option value="IMAX">IMAX</option>
                            </select>
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-1">Time:</span>
                            <select name="time" value={schedule} onChange={scheduleValue} className="w-full border border-gray-300 rounded-md p-2">
                                <option value="">Select a time</option>
                                <option value="14:00">14:00</option>
                                <option value="16:00">16:00</option>
                                <option value="18:00">18:00</option>
                                <option value="20:00">20:00</option>
                                <option value="22:00">22:00</option>
                            </select>
                        </label>
                        <Link className="block mt-6 bg-[#0A12A6] hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg text-center"
                        to="/shopping"
                        onClick={confirmShop}>
                            Confirm
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Buy