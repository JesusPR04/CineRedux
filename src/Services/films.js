const SLIDER_API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=8db114e117dd9d4009bbd6b5ca97617f'

export const getPopularMovies = () => {
    return fetch(SLIDER_API_URL)
}

const LASTMOVIES_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8db114e117dd9d4009bbd6b5ca97617f'

export const getLastMovies = () => {
    return fetch(LASTMOVIES_API_URL)
}

const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8db114e117dd9d4009bbd6b5ca97617f'

export const getSearchMovies = (SEARCH) => {
    return fetch(`${SEARCH_API_URL}&query=${SEARCH}`)
}

export const getMovieById = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8db114e117dd9d4009bbd6b5ca97617f`)
}