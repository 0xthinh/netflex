import React, { Fragment } from "react";
import Originals from "./Movies/Originals";
import Trending from "./Movies/Trending";
import TopRated from "./Movies/TopRated";
import Action from "./Movies/Action";
import Comedy from "./Movies/Comedy";
import Horror from "./Movies/Horror";
import Romance from "./Movies/Romance";
import Documentaries from "./Movies/Documentaries";

const MovieLists = (props) => {
  // const requests = {
  //   fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  //   fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
  //   fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  //   fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  //   fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  //   fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  //   fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  //   fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  //   fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`,
  // };

  const movieLists = props.movieLists;

  return (
    <Fragment>
      <Originals movies={movieLists.fetchNetflixOriginals} />;
      <Trending movies={movieLists.fetchTrending} />
      <TopRated movies={movieLists.fetchTopRated} />
      <Action movies={movieLists.fetchActionMovies} />
      <Comedy movies={movieLists.fetchComedyMovies} />
      <Horror movies={movieLists.fetchHorrorMovies} />
      <Romance movies={movieLists.fetchRomanceMovies} />
      <Documentaries movies={movieLists.fetchDocumentaries} />
    </Fragment>
  );
};

export default MovieLists;
