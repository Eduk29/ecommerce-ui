// React
import React from "react"

// Material
import { Menu, MenuItem } from "@material-ui/core"

export const UiMenu = ({ menuState }) => {
  const [state, setState] = React.useState(menuState)

  const handleClose = () => {
    setState(false)
  }

  return (
    <Menu
      id="simple-menu"
      anchorEl={state}
      keepMounted
      open={state}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  )
}
