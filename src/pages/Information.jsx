import React from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ButtonFavourite.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieId } from '../Store/Slices/filmsThunk';
import { setFavouriteFilms } from '../Store/Slices/filmSlice';

function Information() {
    const { id } = useParams()

    const dispatch = useDispatch()
    const { film } = useSelector(state => state.films)

    useEffect(() => {
        dispatch(getMovieId(id))
    }, [id, dispatch])

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive)
    }

    // Verificar si film está definido antes de acceder a sus propiedades
    const posterPath = film?.poster_path;
    const title = film?.title;
    const overview = film?.overview;
    const genres = film?.genres;
    const voteAverage = film?.vote_average;
    const releaseDate = film?.release_date;
    const spokenLanguages = film?.spoken_languages;

    const { favouriteFilms } = useSelector(state => state.films)

    useEffect(() => {
        const favouriteFilm = { id, posterPath, title, overview, releaseDate }
        if (isActive && !favouriteFilms.some(film => film.id === id)) {
            dispatch(setFavouriteFilms(favouriteFilm))
        } else if (favouriteFilms.some(film => film.id === id)) {
            setIsActive(true)
        } 
    }, [isActive, favouriteFilms, id, posterPath, title, overview, releaseDate, dispatch])

    // Quito la barra principal para poder pasar la imagen por la url
    const cleanPosterPath = posterPath ? (posterPath.startsWith('/') ? posterPath.substring(1) : posterPath).replace(/\/+$/, '') : '';

    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
            <div className='flex-1'>
                {posterPath && (
                    <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="Image" className='w-full rounded-lg' />
                )}
            </div>
            <div className='flex-1'>
                {title && (
                    <>
                        <div className='flex flex-wrap gap-8'>
                            <h1 className='text-6xl text-[#1b2430] mb-1'>{title}</h1>
                            <button className='boton' onClick={handleClick}>
                                {isActive ? <HiHeart size={25} color="red" /> : <HiOutlineHeart size={25} />}
                            </button>
                        </div>
                        <h4 className='text-2xl mt-8 mb-4 text-[#0A12A6]'><b>CINEXPERIENCE</b></h4>
                        <p className='mb-4'><b className='text-[#1b2430]'>Overview</b><br />{overview}</p>
                        {genres && (
                            <div className='mb-4'><b className='text-[#1b2430]'>Genres</b><br />
                                <div className="flex flex-wrap justify-around">
                                    {genres.map((genre) => (
                                        <p key={genre.id} className='bg-[#0A12A6] p-2 font-semibold text-sm text-white rounded-3xl'>{genre.name}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                        <p className='mb-4'><b className='text-[#1b2430]'>Qualification</b><br />
                            <span className='font-semibold flex flex-wrap gap-2'>
                                <span>{voteAverage}</span>
                                <i className="fa-solid fa-star mt-1"></i>
                            </span>
                        </p>
                        <p className='mb-4'><b className='text-[#1b2430]'>Release date</b><br />
                            <span className='font-semibold'>{releaseDate}</span>
                        </p>
                        <p className=''><b className='text-[#1b2430]'>Language</b><br />
                            <span className='font-semibold'>{spokenLanguages && spokenLanguages.length > 0 ? spokenLanguages[0].name : ''}</span>
                        </p>

                        <Link className='block mt-6 bg-[#0A12A6] hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg text-center' 
                        to={`/buy/${title}/${cleanPosterPath}`}>
                            Buy now !
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Information;