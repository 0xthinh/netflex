import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import classes from "./Header.module.css";

const Header = (props) => {
  // Create backdrop

  const [imgUrl, setImgUrl] = useState("");

  const { sendRequest: fetchMovies } = useFetch();

  useEffect(() => {
    const selectRandomMovie = (data) => {
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];

      setImgUrl(randomMovie);
    };

    fetchMovies(props.movies, selectRandomMovie);
  }, []);

  return (
    <div className={classes.overview}>
      <div className={classes.overlay}></div>
      <img
        className={classes.image}
        src={`https://image.tmdb.org/t/p/w780${imgUrl["backdrop_path"]}`}
        alt="backdrop"
      />
      <div className={classes.description}>
        <h2>{imgUrl.name}</h2>
        <p>{imgUrl.overview}</p>
        <div className={classes.buttons}>
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
