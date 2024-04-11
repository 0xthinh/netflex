import React, { useState } from "react";
import classes from "./SearchForm.module.css";
import { useEffect } from "react";

const SearchForm = (props) => {
  const [enteredInput, setEnteredInput] = useState();

  useEffect(() => {
    props.onGetInput("");
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onGetInput(enteredInput);
  };

  const changeInputHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  const resetFormHandler = () => {
    setEnteredInput("");
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.input}>
        <input
          type="text"
          value={enteredInput || ""}
          onChange={changeInputHandler}
        />
        <span className={classes.icon}>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </span>
      </div>

      <div className={classes.buttons}>
        <button
          type="submit"
          className={classes.reset}
          onClick={resetFormHandler}
        >
          RESET
        </button>
        <button type="submit" className={classes.submit}>
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
