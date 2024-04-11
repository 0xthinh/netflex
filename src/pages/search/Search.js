import React, { useState } from "react";
import NavBar from "../browse/NavBar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import classes from "./Search.module.css";

const Search = () => {
  const [enteredInput, setEnterInput] = useState();

  const getInput = (value) => {
    setEnterInput(value);
  };

  return (
    <div className={classes.app}>
      <NavBar />
      <SearchForm onGetInput={getInput} />
      <ResultList enteredInput={enteredInput} />
    </div>
  );
};

export default Search;
