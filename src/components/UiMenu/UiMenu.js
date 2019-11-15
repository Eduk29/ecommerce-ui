// React
import React from "react"

// Material
import { Menu, MenuItem } from "@material-ui/core"

export const UiMenu = ({ anchorEl, handleClose, menuItemList }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {menuItemList.map(item => (
        <MenuItem key={item.id} onClick={item.handleClick}>{item.label}</MenuItem>
      ))}
    </Menu>
  )
}
