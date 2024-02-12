import { getLastMovies, getMovieById, getPopularMovies, getSearchMovies } from "../../Services/films" 
import { setFilms, setFilmById } from "./filmSlice" 


//El thunk es una funcion que devuelve una accion asincrona
export const getSliderMovies = () => {
    return async (dispatch, getState) => {

        try {
            const res = await getPopularMovies();

            if (!res.ok) {
                //Notificar error con dispatch
                console.log(res.message)
            }
            const data = await res.json();
            const films = data.results;
            console.log(films)


            dispatch(setFilms({ films: films }))

        } catch (error) {
            //Notificar error con dispatch
            console.log(error.message)
        }

    }
}

export const getDefaultMovies = () => {
    return async (dispatch, getState) => {

        try {
            const res = await getLastMovies();

            if (!res.ok) {
                //Notificar error con dispatch
                console.log(res.message)
            }
            const data = await res.json();
            const films = data.results;
            console.log(films)


            dispatch(setFilms({ films: films }))

        } catch (error) {
            //Notificar error con dispatch
            console.log(error.message)
        }
    }
}

export const getMoviesByInput = (name_movie) => {
    return async (dispatch, getState) => {

        try {
            const res = await getSearchMovies(name_movie);

            if (!res.ok) {
                //Notificar error con dispatch
                console.log(res.message)
            }
            const data = await res.json();
            const films = data.results;
            console.log(films)


            dispatch(setFilms({ films: films }))

        } catch (error) {
            //Notificar error con dispatch
            console.log(error.message)
        }
    }
}

export const getMovieId = (id_movie) => {
    return async (dispatch, getState) => {

        try {
            const res = await getMovieById(id_movie);

            if (!res.ok) {
                //Notificar error con dispatch
                console.log(res.message)
            }
            const data = await res.json();
            console.log(data);

            dispatch(setFilmById({ film: data })) 

        } catch (error) {
            //Notificar error con dispatch
            console.log(error.message)
        }
    }
}