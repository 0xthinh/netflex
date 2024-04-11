import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const Comedy = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Comedy 🤣" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default Comedy;
