const API_KEY = '176a892fcea4ee25f41861a8ef5ec049';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
  fetchComedynMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
};

export default requests;
