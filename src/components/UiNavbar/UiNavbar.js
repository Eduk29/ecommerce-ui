// React
import React from "react"

// Material
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { AccountCircle, Menu } from "@material-ui/icons"

// Components
import { UiMenu } from "../UiMenu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: 'white',
    margin: theme.spacing(1),
    fontWeight: 'bold'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const loginMenuItemList = [
  {
    id: 1,
    label: "Profile",
    handleClick: () => {
      console.log("Redirect to Profile Page")
    },
  },
  {
    id: 2,
    label: "Logout",
    handleClick: () => {
      console.log("Logout and redirect to Home Page")
    },
  },
]

export const UiNavbar = ({
  authenticatedUser,
  handleClickLoginButton,
  hasLoginButton,
  hasMenuButton,
  label,
  menuItemList
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null)
  const [loginAnchorEl, setLoginAnchorEl] = React.useState(null)
  const classes = useStyles()

  const handleOpenMenu = event => {
    setMenuAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setMenuAnchorEl(null)
  }

  const handleOpenLoginMenu = event => {
    setLoginAnchorEl(event.currentTarget)
  }

  const handleCloseLoginMenu = () => {
    setLoginAnchorEl(null)
  }

  const displayMenuButton = () => {
    return hasMenuButton && menuItemList.length > 0
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          { displayMenuButton() && (
            <div>
              <IconButton
                aria-label="menu"
                className={classes.menuButton}
                color="inherit"
                edge="start"
                onClick={handleOpenMenu}
              >
                <Menu />
              </IconButton>
              <UiMenu
                anchorEl={menuAnchorEl}
                handleClose={handleCloseMenu}
                menuItemList={menuItemList}
              />
            </div>
          )}
          <Typography variant="h5" className={classes.title}>
            {label}
          </Typography>
          {hasLoginButton && authenticatedUser && (
            <div>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                aria-label="account of current user"
                color="inherit"
                onClick={handleOpenLoginMenu}
              >
                <AccountCircle />
              </IconButton>
              <UiMenu
                anchorEl={loginAnchorEl}
                handleClose={handleCloseLoginMenu}
                menuItemList={loginMenuItemList}
              />
            </div>
          )}
          {hasLoginButton && !authenticatedUser && (
            <Button className={classes.button} onClick={handleClickLoginButton}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
