import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const Horror = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Horror 👻" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default Horror;
