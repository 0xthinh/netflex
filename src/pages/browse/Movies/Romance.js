import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const Romance = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Romance 💖" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default Romance;
