// React
import React from 'react'

// Material
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
        height: 200
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


export const UiNavbar = ({ label }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              {label}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}
