import { AppBar, fabClasses, Toolbar, Typography } from "@mui/material";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MovingIcon from "@mui/icons-material/Moving";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha, useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import React from "react";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import GetAppIcon from "@mui/icons-material/GetApp";
// import Login from "../components/Login";
// import More from "./More";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssistantIcon from "@mui/icons-material/Assistant";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemData = [
    {
      // img: require('../component/images/topOffer.webp'),
      title: "Top Offers",
    },
    {
      // img: img2,
      title: "Grocery",
    },
    {
      // img: img3,
      title: "Mobiles",
    },
    {
      // img: img4,
      title: "Fashion",
    },
    {
      // img: img5,
      title: "Electronics",
    },
    {
      // img: img6,
      title: "Home",
    },
    {
      // img: img7,
      title: "Appliances",
    },
    {
      // img: img8,
      title: "Travel",
    },
    {
      // img: img9,
      title: "Beauty, Toys & More",
    },
    {
      // img: img10,
      title: "2-Wheelers",
    },
  ];
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                className="menu"
                sx={{ height: "100%" }}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  style={{
                    background: "#1976d2",
                    color: "#fff",
                    marginTop: "-8px",
                  }}
                >
                  <PersonIcon sx={{ paddingRight: 2 }} />
                  Login and SignUp
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MovingIcon sx={{ paddingRight: 2 }} />
                  SuperCoin Zone
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <StarPurple500Icon sx={{ paddingRight: 2 }} />
                  Flipkard Plus Zone
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <DashboardIcon sx={{ paddingRight: 2 }} />
                  All Categories
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <CardGiftcardIcon sx={{ paddingRight: 2 }} />
                  Trending Stores
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LensBlurIcon sx={{ paddingRight: 2 }} />
                  More on Flipkart
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <GTranslateIcon sx={{ paddingRight: 2 }} />
                  Choose Language
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div></div>
          )}
          <Box
            component="img"
            className="logo"
            alt="Your logo."
            src="images/logo3.jpg"
            sx={{ marginLeft: { xs: 0, sm: 1, md: 10 } }}
          />
          <AddBoxIcon
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              marginLeft: { xs: 3, sm: 3 },
            }}
          />
          <StyledInputBase
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              margin: { md: 2 },
            }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            style={{ backgroundColor: "white", color: "gray", width: "350px" }}
          />
          <SearchIconWrapper
            sx={{ marginLeft: { xs: "none", sm: "none", md: 58, lg: 58 } }}
          >
            <SearchIcon
              style={{ color: "#1976d2" }}
              sx={{ display: { xs: "none", sm: "none", md: "none" } }}
            />
          </SearchIconWrapper>
          <ShoppingCartIcon
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              marginLeft: { xs: 2, sm: 2 },
            }}
          />
          <Tippy content={<div style={{ color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssistantIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Flipkart Plus Zone" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddTaskIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Orders" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Wishlist" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ViewStreamIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Rewards" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CardGiftcardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Gift Cards" />
        <Divider />
      </ListItemButton>
    </div>} interactive={true}>
            <Button
              sx={{
                marginLeft: { xs: 2, sm: 2, md: 0 },
                display: { xs: "none", sm: "block", md: "block" },
              }}
              variant="contained"
              style={{ backgroundColor: "white", color: "#1976d2" }}
            >
              <b>Login</b>
            </Button>
          </Tippy>
          <Typography
            sx={{ ml: 3, display: { xs: "block", sm: "none", md: "none" } }}
          >
            Login
          </Typography>
          <Typography
            sx={{ ml: 6, display: { xs: "none", sm: "block", md: "block" } }}
          >
            <b>Become a Seller</b>
          </Typography>
          <Tippy content={
              <div style={{ color: "black" }}>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Notification Preferences" />
                <Divider />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LiveHelpIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="24*7 Customer care" />
                <Divider />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MovingIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Advertise" />
                <Divider />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <GetAppIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Download App" />
                <Divider />
              </ListItemButton>
            </div>} interactive={true}>
            <Typography
              sx={{ ml: 6, display: { xs: "none", sm: "block", md: "block" } }}
            >
              <b>More</b>
            </Typography>
          </Tippy>
          <KeyboardArrowDownIcon
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          />
          <ShoppingCartIcon
            sx={{ ml: 7, display: { xs: "none", sm: "block", md: "block" } }}
          />
          <Typography
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            Card
          </Typography>
        </Toolbar>
        <Search
          style={{ backgroundColor: "white" }}
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            margin: { xs: 2, sm: "none", md: "none" },
            width: { xs: 300, sm: "none", md: "none" },
          }}
        >
          <SearchIcon
            className="search"
            style={{ color: "gray" }}
            sx={{ marginBottom: { xs: -1, sm: -1 }, marginLeft: { xs: -4 } }}
          />
          <StyledInputBase
            placeholder="Search for Products, Brands and More"
            inputProps={{ "aria-label": "search" }}
            style={{ color: "gray" }}
            sx={{ marginLeft: { xs: -6 } }}
          />
        </Search>
      </AppBar>

      <ImageList cols={10}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.src}
            sx={{ paddingLeft: { xs: 5, sm: 5, md: 0, lg: 0 } }}
          >
            {/* <img
              style={{ width: "100%", height: "100px" }}
              src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            /> */}
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
export default Navbar;