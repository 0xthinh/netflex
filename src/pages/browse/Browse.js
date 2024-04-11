import React from "react";
import classes from "./Browse.module.css";
// import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header/Header";
import MovieLists from "./MovieLists";

function Browse() {
  const API_KEY = "e732c782fdd74cfa8e3ad7b4d93c0e2f";
  const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`,
  };

  return (
    <div className={classes.app}>
      <NavBar />
      <Header movies={requests.fetchNetflixOriginals} />
      <MovieLists movieLists={requests} />
    </div>
  );
}

export default Browse;
