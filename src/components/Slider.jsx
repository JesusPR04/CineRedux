import React, { useState, useEffect } from 'react';
import chevronLeft from '../Images/chevron-left.svg';
import chevronRight from '../Images/chevron-right.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderMovies } from '../Store/Slices/filmsThunk';

function Slider() {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? films.length - 1 : curr - 1))

    const next = () =>
        setCurr((curr) => (curr === films.length - 1 ? 0 : curr + 1))

    const dispatch = useDispatch()
    const { films } = useSelector(state => state.films)

    useEffect(() => {
        dispatch(getSliderMovies())
    }, [])

    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
            <div className='flex-1'>
                <div className='overflow-hidden relative rounded-lg'>
                    <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                        {films?.map((f) => (
                            <img key={f.id} src={`https://image.tmdb.org/t/p/original${f.poster_path}`} alt={f.title} />
                        ))}
                    </div>
                    <div className='absolute inset-0 flex items-center justify-between p-4'>
                        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                            <img src={chevronLeft} className='w-10' />
                        </button>
                        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                            <img src={chevronRight} className='w-10' />
                        </button>
                    </div>

                    <div className="absolute bottom-4 right-0 left-0">
                        <div className="flex items-center justify-center gap-2">
                            {films?.map((_, i) => (
                                <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <h1 className='text-8xl text-[#1b2430] mb-1'>Popular Movies</h1>
                <h4 className='text-2xl mb-4 text-[#0A12A6]'><b>CINEXPERIENCE</b></h4>
                <p className='mb-4'>Explore the latest blockbusters and immerse yourself in a world of cinematic magic. From pulse-pounding action to heartwarming dramas, there's something for every movie lover. Join us for an unforgettable cinematic experience that will leave you on the edge of your seat.</p>
                <p className='mb-4'>Indulge in the excitement of exclusive showings and be the first to witness the biggest movies of the year. With our curated selection of popular titles, you'll discover new favorites and revisit timeless classics.</p>
                <p className=''>Book your tickets now and secure your seats for an epic movie adventure. Whether you're planning a solo outing or a family night out, our cinema offers the perfect setting for memorable moments and cinematic thrills.</p>
                <Link className='block mt-6 bg-[#0A12A6] text-center hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg' to='/movies'>
                    Movies
                </Link>
            </div>
        </div>
    )
}

export default Slider