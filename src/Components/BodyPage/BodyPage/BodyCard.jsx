import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import library from "../../../Json/books.json";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Cart } from "../../Container/Container";
import { SnackbarAlert } from "../../Container/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    padding: "10px",
    "@media (max-width:767px)": {
      marginTop: "40px",
    },
  },
  Box: {
    padding: "45px",
    "@media (max-width:767px)": {
      padding: "40px 15px 15px 0",
    },
    position: "relative",
    // top: '10%'
  },
  ModalHead: {
    backgroundColor: "brown",
  },
  Dialog: {
    "& .MuiDialog-paperWidthSm": {
      height: "25%",
      width: "25%",
    },
  },
  order: {
    paddingTop: "50px",
    justifyContent: "space-around",
    display: "flex",
  },
  Checkout: {
    display: "flex",
    borderRadius: "25px",
    border: "solid 1px brown",
    justifyContent: "space-between",
    width: "92px",
    height: "32px",
    padding: "2px 8px",
  },
  container:{
      justifyContent:"space-between",
      alignItems:"baseline",
      position:"relative"
  }
}));

function BodyCard({ books }) {
  const classes = useStyles();

  const [state, setState] = React.useState("Student");
  const [studentCard, setstudentCard] = React.useState([]);
  const [professorCard, setprofessorCard] = React.useState([]);
  const [color, setColor] = React.useState({
    disable: "grey",
    enable: "red",
  });
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [profCart, setprofCart] = React.useState([]);
  const [multiButton, setmultiButton] = React.useState(false);
  const [alertType, setAlertType] = React.useState("");
  const [snackBarMessage, setSnackBarMessage] = React.useState("");
  const [isSnackBarOpen, setOpenSnackBar] = React.useState(false);

  const handleChange = (event) => {
    const name = event.target.value;
    setState(name);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   if (cart.length > 3) {
  //     setOpenSnackBar(true);
  //     setSnackBarMessage("Student is not authorized to add more than 3 Books!");
  //     setmultiButton(false);
  //     setAlertType("info");
  //   }
  // }, [[cart, setCart]]);

  // Function to keep wishlist
  const wishlist = (e, value) => {
    if (state == "Student") {
      if (studentCard.indexOf(value) == -1) {
        setstudentCard((studentCard) => [...studentCard, value]);
      } else {
        //
      }
      if (e.target.style.fill == color["enable"]) {
        e.target.style.fill = color["disable"];
        let StudentRemove = studentCard.indexOf(value);
        studentCard.splice(StudentRemove, 1);

        // let professorRemove = professorCard.indexOf(value);
        // professorCard.splice(professorRemove, 1);
      } else {
        e.target.style.fill = color["enable"];
      }
    } else {
      if (professorCard.indexOf(value) == -1) {
        setprofessorCard((professorCard) => [...professorCard, value]);
      } else {
        //
      }
      if (e.target.style.fill == color["enable"]) {
        e.target.style.fill = color["disable"];
        // let StudentRemove = studentCard.indexOf(value);
        // studentCard.splice(StudentRemove, 1);

        let professorRemove = professorCard.indexOf(value);
        professorCard.splice(professorRemove, 1);
      } else {
        e.target.style.fill = color["enable"];
      }
    }
  };

  const Add = (e, value) => {
    if (state == "Student") {
      if (cart.length == 3) {
        setOpenSnackBar(true);
        setSnackBarMessage(
          "Student is not authorized to add more than 3 Books!"
        );
        setmultiButton(false);
        setAlertType("info");
      } else {
        if (cart.indexOf(value) == -1) {
          setCart((cart) => [...cart, value]);
          localStorage.setItem("studCartlength", cart.length + 1);
          localStorage.setItem("studCart", JSON.stringify(cart));
        } else {
          setOpenSnackBar(true);
          setSnackBarMessage("Book already added in the cart!");
          setmultiButton(false);
          setAlertType("info");
        }
      }
    } else {
      if (profCart.indexOf(value) == -1) {
        setprofCart((profCart) => [...profCart, value]);
        localStorage.setItem("profCartlength", profCart.length + 1);
        localStorage.setItem("profCart", JSON.stringify(profCart));
      } else {
        setOpenSnackBar(true);
        setSnackBarMessage("Book already added in the cart!");
        setmultiButton(false);
        setAlertType("info");
      }
    }
  };

  //   const CartAdd = (e ,value , id) => {

  //     if (id == 1) {
  //       setCart((cart) => cart - 1);
  //     } else {
  //       setCart((cart) => cart + 1);
  //     }
  //   };
  const hideSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <div>
      <SnackbarAlert
        isOpen={isSnackBarOpen}
        message={snackBarMessage}
        alertType={alertType}
        multibutton={multiButton}
        primaryClick={hideSnackBar}
      />
      <div className={classes.Box}>
        <Grid container>
          <Grid item xs={4} align-items-xs>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Choose your profession
              </InputLabel>
              <Select
                native
                value={state}
                onChange={handleChange}
                label="Profession"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"Student"}>Student</option>
                <option value={"Professor"}>Professor</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              WishList
            </Button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="simple-dialog-title"
              className={classes.Dialog}
              open={open}
            >
              <DialogTitle
                className={classes.ModalHead}
                id="simple-dialog-title"
              >
                WishList
              </DialogTitle>
              <ul className={classes.order}>
                <li>
                  <b>Student :</b>
                  {studentCard != undefined ? studentCard.length : 0}
                </li>
                <li>
                  <b>Professor :</b>
                  {professorCard != undefined ? professorCard.length : 0}
                </li>
              </ul>
            </Dialog>
          </Grid>
          <Grid xs={4}>
            <Cart
              profession={state}
              studCart={cart}
              cart={setCart}
              profcart={setprofCart}
              profCart={profCart}
            />
          </Grid>
        </Grid>

        <br />
        <Paper elevation={3} className={classes.paper}>
          <Grid xs={12} container className={classes.container}>
            {books.map((item, index) => {
              // console.log(item)
              return (
                <Card key={index} className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {item.imageLinks.thumbnail}
                      </Avatar>
                    }
                    title={item.title}
                    subheader={item.publishedDate}
                  />
                  <CardMedia
                    className={classes.media}
                    image={item.imageLinks.thumbnail}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      onClick={(e) => wishlist(e, item)}
                      aria-label="add to favorites"
                    >
                      <FavoriteIcon />
                    </IconButton>
                    {/* <IconButton
                          className={classes.Checkout}
                        >
                          <RemoveIcon style={{ cursor: "pointer" }} 
                          onClick={(e , id) => CartAdd(e, item, (id=1))}

                           />
                          {cart}
                          <AddIcon style={{ cursor: "pointer" }} 
                          onClick={(e , id) => CartAdd(e, item, (id=2))}
                          />
                        </IconButton> */}
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                    >
                      <button
                        onClick={(e) => Add(e, item)}
                        style={{
                          width: "140px",
                          float: "right",
                          // borderRadius: '50px',
                          background: "brown",
                          border: "none",
                          height: "40px",
                          textAlign: "center",
                          color: "#fff",
                          lineHeight: "40px",
                          cursor: "pointer",
                        }}
                      >
                        Add
                      </button>
                    </Grid>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </Paper>
      </div>

      {/* <Grid container>
       
      </Grid> */}
    </div>
  );
}

export default BodyCard;
