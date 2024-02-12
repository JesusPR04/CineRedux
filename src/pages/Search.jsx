import React, { useEffect } from 'react';
import { useState } from 'react';
import img from '../Images/pelicula.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDefaultMovies, getMoviesByInput } from '../Store/Slices/filmsThunk';

function Search() {
    const [busqueda, setBusqueda] = useState('');

    function valorInput(e) {
        setBusqueda(e.target.value);
    }

    const dispatch = useDispatch()
    const { films } = useSelector(state => state.films)

    useEffect(() => {
        if (busqueda === "") {
            dispatch(getDefaultMovies())
        } else {
            dispatch(getMoviesByInput(busqueda))
        }
    }, [busqueda]); 

    return (
        <>
            <div className='flex flex-row justify-center gap-4'>
                <img className='w-28 h-28 mt-32 mb-1' src={img} alt="Search icon" />
                <h1 className='text-8xl text-center text-[#1b2430] mt-32 mb-1'>Movies</h1>
            </div>

            <div className="flex justify-center items-center">
                <form className="w-full max-w-lg">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" value={busqueda} onInput={valorInput} className="block w-full mt-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a movie." required />
                    </div>
                </form>
            </div>

            <div className='mt-10 flex flex-wrap justify-around max-w-full max-h-full'>
                {films.map((movie, i) => (
                    <Link key={i} to={`/information/${movie.id}`} className='cursor-pointer'>
                        <div key={movie.id} className="relative group overflow-hidden rounded-lg shadow-lg m-4 h-[500px] w-[300px]">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-white">
                                <h3 className="text-2xl font-semibold px-4 text-center">{movie.title}</h3>
                                <p className="text-sm font-semibold text-justify p-4">{movie.overview}</p>
                                <h3 className="text-xl font-semibold mb-4">{movie.release_date}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Search