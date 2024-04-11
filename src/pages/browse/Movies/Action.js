import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const Action = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Action ✴️" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default Action;
