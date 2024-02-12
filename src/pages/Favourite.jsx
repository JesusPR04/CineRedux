import React from 'react'
import img from '../Images/pelicula.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Favourite() {
    const { favouriteFilms } = useSelector(state => state.films)

    return (
        <>
            <div className='flex flex-row justify-center gap-4'>
                <img className='w-28 h-28 mt-32 mb-1' src={img} alt="Search icon" />
                <h1 className='text-8xl text-center text-[#1b2430] mt-32 mb-1'>Favourite Movies</h1>
            </div>

            {favouriteFilms.length === 0 ? (
                <div className='mt-32 w-full'>
                    <p className='text-4xl text-center text-[#1b2430]'>
                        Here you can watch your favorite movies
                    </p>
                </div>
            ) : (
                <div className='mt-10 flex flex-wrap justify-around max-w-full max-h-full'>
                    {favouriteFilms.map((movie, i) => (
                        <Link key={i} to={`/information/${movie.id}`} className='cursor-pointer'>
                            <div key={movie.id} className="relative group overflow-hidden rounded-lg shadow-lg m-4 h-[500px] w-[300px]">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                                    alt={movie.title}
                                    className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-white">
                                    <h3 className="text-2xl font-semibold px-4 text-center">{movie.title}</h3>
                                    <p className="text-sm font-semibold text-justify p-4">{movie.overview}</p>
                                    <h3 className="text-xl font-semibold mb-4">{movie.releaseDate}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )
            }
        </>
    )
}

export default Favourite