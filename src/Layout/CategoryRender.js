import { Fragment } from "react";
import React from "react";
import classes from "./CategoryRender.module.css";
import useRender from "../hooks/useRender";

const CategoryRender = (props) => {
  const { displayMovieDetails, thumnailRender, detailsRender } = useRender(
    props.movieAPI
  );

  return (
    <Fragment>
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.category}>{thumnailRender}</div>
      {displayMovieDetails && detailsRender}
    </Fragment>
  );
};
export default CategoryRender;
