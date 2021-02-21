import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles(() => ({
  Footer: {
    width: "100%",
    background: "#343a40",
    padding: "20px 3%",
    color: "#fff",
    marginDown:"100%"
  },
  logo: {
    maxWidth: "25%",
    marginTop: "5%",
  },
  compliance: {
    width: "100%",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.Footer}>
      <Grid container>
        <Grid item md={3}>
          <br />
          <p style={{ fontSize: "12px", marginTop: "30px" }}>
            © All Rights Reserved
          </p>
        </Grid>
        <Grid item md={3}>
          <h4
            style={{ color: "#841bb1", marginTop: "30px", fontWeight: "500" }}
          >
            About Library
          </h4>
          <p style={{ fontSize: "12px", width: "80%", textAlign: "justify" }}>
            Library A library is a curated collection of sources of information
            and similar resources, selected by experts and made accessible to a
            defined community for reference or borrowing, often in a quiet
            environment conducive to study.
          </p>
          <small>www.library.com</small>
        </Grid>

        <Grid item md={2}>
          <h4
            style={{ color: "#841bb1", fontWeight: "500", marginTop: "30px" }}
          >
            Social Links
          </h4>
          <p style={{ fontSize: "12px" }}>
            {" "}
            <a target="_blank" href="https://www.facebook.com">
              <FacebookIcon />
            </a>{" "}
            <a
              target="_blank"
              href="https://www.instagram.com"
            >
              <InstagramIcon />
            </a>{" "}
            <a
              target="_blank"
              href="https://www.youtube.com"
            >
              <YouTubeIcon />
            </a>{" "}
          </p>
        </Grid>

        <Grid item md={4}>
          <h4
            style={{ color: "#841bb1", fontWeight: "500", marginTop: "30px" }}
          >
            Helpful Links
          </h4>
          <p style={{ fontSize: "12px" }}>
            <p>Terms & Conditions</p>
            <br />
            <br />
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
