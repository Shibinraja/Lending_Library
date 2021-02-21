import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  Header:{
      color:"white"
  }
});

function Header() {
  const classes = useStyles();

  const exit =  () =>{
    localStorage.clear()
    window.reload()
  }

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-style navbar-dark bg-dark">
          <div className="navbar-header ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarid"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Typography className={classes.Header} variant="h5" gutterBottom>
              <i>Lending Library</i>
            </Typography>
          </div>
          <div className="collapse navbar-right navbar-collapse" id="navbarid">
            <h3 id="name"></h3>
            <ul className="navbar-nav ml-auto navrbar-right">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={exit} href="/">
                  Exit
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
