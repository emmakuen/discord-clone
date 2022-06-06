import * as React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { colors } from "../../../constants";
import { MoreVert } from "@mui/icons-material";
import { logout } from "../../../utils/auth";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{ color: colors.text }}
        onClick={handleMenuOpen}
      >
        <MoreVert sx={{ fontSize: "2.4rem" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout} sx={{ fontSize: "1.4rem" }}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
