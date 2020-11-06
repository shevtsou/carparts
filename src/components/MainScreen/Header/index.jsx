import { Avatar, Badge } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
    FavoriteBorderOutlined,
    LocalMallOutlined
} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { default as React } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  },
  avatar: {
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.grey[300]}`,
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey[300],
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: theme.palette.grey[500],
    fontWeight: "bold",
    // [theme.breakpoints.up('md')]: {
    // },
  },
  searchButtonContainer: {
    flexGrow: 1,
  },
  favorites: {
      marginRight: theme.spacing(4),
  }
}));

const SearchButton = withStyles({
  root: {
    fontWeight: "bold",
    textTransform: "none",
  },
})(Button);

const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Carparts
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.searchButtonContainer}>
            <SearchButton variant="contained" color="primary" disableElevation>
              Search
            </SearchButton>
          </div>
          <div className={classes.favorites}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <LocalMallOutlined />
                </StyledBadge>
            </IconButton>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <FavoriteBorderOutlined />
                </StyledBadge>
            </IconButton>
          </div>
          <Avatar className={classes.avatar}>OP</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
