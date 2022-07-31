import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import ArtTrackTwoToneIcon from "@mui/icons-material/ArtTrackTwoTone";
import { useNavigate, NavLink } from "react-router-dom";

import Drawercompp from "./Drawer";

const Navbar = ({ web3Handler, account }) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  //   console.log(theme);
  let navigate = useNavigate();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //   console.log(isMatch);

  const handleEtherRedirect = () => {
    window.open(`https://etherscan.io/address/${account}`, "_blank");
  };

  return (
    <AppBar sx={{ background: "#063970", position: "relative" }}>
      <Toolbar>
        <ArtTrackTwoToneIcon sx={{ transform: "scale(2)" }} />
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
              Artisan Marketplace
            </Typography>
            <Drawercompp />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab
                label="Home"
                onClick={() => {
                  navigate("/");
                }}
              />
              <Tab
                label="Create"
                onClick={() => {
                  navigate("/create");
                }}
              />
              <Tab
                label="My Listed Items"
                onClick={() => {
                  navigate("/my-listed-items");
                }}
              />
              <Tab
                label="My Purchases"
                onClick={() => {
                  navigate("/my-purchases");
                }}
              />
            </Tabs>

            {account ? (
              <Button
                variant="contained"
                onClick={() => {
                  handleEtherRedirect();
                }}
              >
                {account.slice(0, 5) + "..." + account.slice(38, 42)}
              </Button>
            ) : (
              <Button variant="contained" onClick={web3Handler}>
                Connect Wallet
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
