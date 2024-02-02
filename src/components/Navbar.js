import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
    const appBarStyle = {
        backgroundColor: '#22223b',
    };
    const centerText = {
        display: 'flex',
        justifyContent: 'center',
      };
    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
      };
    return(
        <AppBar position="static" style={appBarStyle}>
            <Toolbar style={centerText}>
                <Typography variant="h5" style={titleStyle}>Top Courses</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;