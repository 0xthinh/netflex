import { Fragment } from "react";
import React from "react";
import classes from "./Originals.module.css";
import useRender from "../../../hooks/useRender";

const Originals = (props) => {
  const { displayMovieDetails, thumnailRender, detailsRender } = useRender(
    props.movies,
    "poster_path"
  );

  return (
    <Fragment>
      <div className={classes.originals}>{thumnailRender}</div>
      {displayMovieDetails && detailsRender}
    </Fragment>
  );
};
export default Originals;
