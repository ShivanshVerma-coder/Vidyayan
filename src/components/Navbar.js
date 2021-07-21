import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import { shadows } from "@material-ui/system"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FB5B16 !important",
  },
})

function Navbar() {
  const classes = useStyles()
  return (
    <Box container component={Grid} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ top: "0" }} className={classes.root}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Vidyayan
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
