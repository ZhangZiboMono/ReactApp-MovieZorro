export const api = '0024eb9775f2825b640ad89122fb3860'

const baseURl = `https://api.themoviedb.org/3`

export const mountURL = `${baseURl}/trending/movie/week?api_key=${api}`
export const changeURL = `${baseURl}/search/movie?query=`
export const fallBackURL = `${baseURl}/trending/movie/week?api_key=${api}`
export const genreURL = `${baseURl}/genre/movie/list?language=en-US&api_key=${api}`