import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import classes from "./ResultList.module.css";

const ResultList = (props) => {
  const [resultArr, setResultArr] = useState([]);
  const API_KEY = "e732c782fdd74cfa8e3ad7b4d93c0e2f";

  const queryAPI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${props.enteredInput}&language=en-US`;

  const { sendRequest } = useFetch();

  useEffect(() => {
    const renderResult = (data) => {
      setResultArr(data.results);
      if (props.enteredInput === "") {
        setResultArr([]);
      }
    };

    sendRequest(queryAPI, renderResult);
  }, [props.enteredInput]);

  // JSX rendered to DOM
  const thumnailRender = resultArr.map((movie) => (
    <img
      key={movie.id}
      id={movie.id}
      src={`https://image.tmdb.org/t/p/w185${movie["poster_path"]}`}
      className={movie["poster_path"] ? classes.poster : classes.hidden}
      // onClick={() => showMovieDetails(movie.id)}
    />
  ));

  return (
    <div className={classes.results}>
      <h2 className={classes.title}>Search Results ✅</h2>
      <div className={classes.thumbnails}>{thumnailRender}</div>
    </div>
  );
};

export default ResultList;
