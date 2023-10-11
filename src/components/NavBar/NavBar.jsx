import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "./../../assets/logo-nan-removebg-preview.png";
import { CartWidget } from "../CartWidget/CartWidget";
import PositionedMenu from "../PositionedMenu/PositionedMenu";

const NavBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="nav">
          <PositionedMenu/>
          <img src={logo} className="logo-nan" />
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
