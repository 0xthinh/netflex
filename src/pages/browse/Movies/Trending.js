import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const Trending = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Trending 🔥" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default Trending;
