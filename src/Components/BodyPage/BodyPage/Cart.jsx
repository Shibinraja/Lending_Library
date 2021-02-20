import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  CartIcon: {
    position: "relative",
    display: "flex",
  },
  Circle: {
    background: "brown",
    width: " 15px",
    height: "15px",
    borderRadius: "50%",
    position: "absolute",
    top: "-7px",
    left: "15px",
  },
  Number: {
    position: "absolute",
    left: "0px",
    right: "0px",
    alignItems: "center",
    "& p": {
      color: "white",
      fontSize: "10px",
      fontWeight: "700",
      width: "100%",
      textAlign: "center",
      position: "absolute",
    },
  },
  Content: {
    position: "relative",
    display: "flex",
    top: "20px",
  },
  ModalHead: {
    backgroundColor: "brown",
    color: "white",
  },
}));

function Cart({ profession, studCart, profCart, cart, profcart }) {
  const classes = useStyles();
  const [studentCart, setstudentCart] = React.useState([]);
  const [professorCart, setprofessorCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  let studOrder = JSON.parse(localStorage.getItem("studCart"));
  let profOrder = JSON.parse(localStorage.getItem("profCart"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (profession == "Student") {
      let stud_cart = localStorage.getItem("studCartlength");
      setstudentCart(stud_cart);
    } else {
      let prof_cart = localStorage.getItem("profCartlength");
      setprofessorCart(prof_cart);
    }
  }, [profession, studCart, profCart]);

  const deleteStock = () => {
    if (profession == "Student") {
      localStorage.removeItem("studCart");
      localStorage.removeItem("studCartlength");
      setstudentCart(0);
      cart([]);
      setOpen(false);
    } else {
      localStorage.removeItem("profCart");
      localStorage.removeItem("profCartlength");
      setprofessorCart(0);
      profcart([]);
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.CartIcon}>
        <ShoppingCartIcon
          onClick={handleClickOpen}
          style={{ cursor: "pointer" }}
        />
        <div className={classes.Circle}>
          <div className={classes.Number}>
            {profession == "Student" ? (
              <p>{studentCart}</p>
            ) : (
              <p>{professorCart}</p>
            )}
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          className={classes.ModalHead}
        >
          {"Order Details"}
        </DialogTitle>
        <DialogContent className={classes.Content}>
          Total Books :{" "}
          {profession == "Student" ? (
            <h5>{studOrder != null ? studOrder.length + 1 : 0}</h5>
          ) : (
            <h5>{profOrder != null ? profOrder.length + 1 : 0}</h5>
          )}{" "}
          (In-Cart)
        </DialogContent>
        <DialogActions>
          <CardActions>
            <Button onClick={deleteStock} size="small">
              Delete
            </Button>
          </CardActions>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Cart;
