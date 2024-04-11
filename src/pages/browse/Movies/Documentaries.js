import CategoryRender from "../../../Layout/CategoryRender";
import React, { Fragment } from "react";

const Documentaries = (props) => {
  return (
    <Fragment>
      <CategoryRender title="Documentaries 🎞️" movieAPI={props.movies} />;
    </Fragment>
  );
};

export default Documentaries;
