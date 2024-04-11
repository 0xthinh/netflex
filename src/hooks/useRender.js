import { useState, useEffect } from "react";
import React from "react";
import useFetch from "./useFetch";
import classes from "../Layout/CategoryRender.module.css";
import YouTube from "react-youtube";

const useRender = (movieAPI, thumbnailType = "backdrop_path") => {
  const API_KEY = "e732c782fdd74cfa8e3ad7b4d93c0e2f";
  const { sendRequest: getVideos } = useFetch();
  const { sendRequest: fetchMovies } = useFetch();
  const [displayMovieDetails, setDisplayMovieDetails] = useState(false);
  const [categorizedMovies, setCategorizedMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [videoKey, setVideoKey] = useState("");

  // Render movies
  useEffect(() => {
    const renderMovies = (data) => {
      setCategorizedMovies(data.results);
    };

    fetchMovies(movieAPI, renderMovies);
  }, []);

  // Execute Click event on Images
  // Get ID to render details

  const showMovieDetails = (movieId) => {
    const [chosenMovie] = categorizedMovies.filter(
      (item) => item.id === movieId
    );

    setDisplayMovieDetails((prev) => {
      if (movieDetails.id && movieDetails.id === chosenMovie.id) {
        return !prev;
      } else if (prev.id !== chosenMovie.id) {
        return true;
      }
    });

    setMovieDetails({
      id: chosenMovie.id,
      name: chosenMovie["original_title"] || chosenMovie["original_name"],
      releaseDate: chosenMovie["release_date"],
      vote: chosenMovie["vote_average"],
      overview: chosenMovie.overview,
      img_path:
        thumbnailType === "backdrop_path"
          ? chosenMovie["backdrop_path"]
          : chosenMovie["poster_path"],
      thumbnail_path: chosenMovie["backdrop_path"],
    });
  };

  // Get video from API
  const filterChosenVideo = (data) => {
    const videoArr = data.results;

    let chosenVideoObject = videoArr.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );

    if (!chosenVideoObject) {
      chosenVideoObject = videoArr.find(
        (video) => video.site === "YouTube" && video.type === "Teaser"
      );
    }

    setVideoKey(chosenVideoObject.key);
  };

  const failToFetchVideo = () => {
    setVideoKey(null);
  };

  if (displayMovieDetails) {
    getVideos(
      `https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=${API_KEY}`,
      // `https://api.themoviedb.org/3/movie/114461/videos?api_key=e732c782fdd74cfa8e3ad7b4d93c0e2f`,
      filterChosenVideo,
      failToFetchVideo
    );
  }

  const imgPath =
    thumbnailType === "backdrop_path" ? "backdrop_path" : "poster_path";
  const classType = thumbnailType === "backdrop_path" ? "backdrop" : "poster";

  const thumnailRender = categorizedMovies.map((movie) => (
    <img
      key={movie.id}
      id={movie.id}
      src={`https://image.tmdb.org/t/p/w185${movie[imgPath]}`}
      className={classes[classType]}
      onClick={() => showMovieDetails(movie.id)}
    />
  ));

  // Details section constructor
  const detailsRender = (
    <div className={classes.details}>
      <div className={classes.text}>
        <h2>{movieDetails.name}</h2>
        <div>
          <p>Release Date: {movieDetails.releaseDate}</p>
          <p>Vote: {movieDetails.vote} / 10</p>
        </div>
        <p>{movieDetails.overview}</p>
      </div>
      <div className={classes.trailer}>
        {videoKey && (
          <YouTube
            videoId={videoKey}
            opts={{
              // height: "400",
              width: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        )}

        {!videoKey && (
          <img
            src={`https://image.tmdb.org/t/p/w1280${movieDetails["thumbnail_path"]}`}
            // src={`https://image.tmdb.org/t/p/w1280/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg`}
          />
        )}
      </div>
    </div>
  );

  // return (
  //   <Fragment>
  //     <h2 className={classes.title}>Xu hướng</h2>
  //     <div className={classes.trending}>{thumnailRender}</div>
  //     {displayMovieDetails && detailsRender}
  //   </Fragment>
  // );

  return { displayMovieDetails, thumnailRender, detailsRender };
};
export default useRender;
