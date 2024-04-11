import React from "react";
import { useState, useEffect, Fragment } from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  // Navbar's search bar change color
  const [scrollIsOver100px, setScrollIsOver100px] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScrollIsOver100px(true);
      } else {
        setScrollIsOver100px(false);
      }
    });
  }, [scrollIsOver100px]);
  return (
    <Fragment>
      <div
        style={scrollIsOver100px ? { backgroundColor: "black" } : {}}
        className={classes.navbar}
      >
        <span
          className={classes.title}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          NETFLEX
        </span>
        <span
          className={classes.icon}
          onClick={() => {
            window.location.href = "/search";
          }}
        >
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </span>
      </div>
    </Fragment>
  );
};

export default NavBar;
