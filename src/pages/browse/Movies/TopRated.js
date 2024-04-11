import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const TopRated = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Top Rated 🌟" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default TopRated;
