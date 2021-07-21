import React, { useEffect } from "react"
import { Container, Box, Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import HeaderSVG from "./HeaderSVG"

const useStyles = makeStyles({
  container: {
    border: "1px solid red",
    padding: "0 !important",
    margin: "0 !important",
  },
  headersvg: {
    // display: "none",
  },
})
const newtheme = createTheme({
  palette: {
    primaryOrange: {
      main: "#FB5B16",
    },
  },
})

function Header() {
  const classes = useStyles()
  const matches600 = useMediaQuery("(max-width:600px)")
  const matches900 = useMediaQuery("(max-width:900px)")
  return (
    <ThemeProvider theme={newtheme}>
      <Container className={classes.container} maxWidth="false">
        <Box sx={{ bgcolor: "#EEE7E7", minHeight: "100vh" }}>
          <Grid container>
            <Grid item md={5} xs={12} flexShrink={10}>
              <Box mt={matches600 ? 1 : 10} p={4}>
                <Typography variant="h4" color="initial" sx={{ marginBottom: "25px" }}>
                  <span style={{ color: "#FB5B16", fontWeight: "700" }}>Creating Future</span> Tech Leaders{" "}
                </Typography>
                <Typography variant="h6" color="initial" sx={{ marginBottom: "52px", width: "100%" }}>
                  Live coding classes for age 6 -15 to help your child learn to code
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" color="primaryOrange" style={{ color: " white " }}>
                    Join Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7} xs={12} textAlign={matches900 ? "center" : "end"}>
              <HeaderSVG matches600={matches600} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Header
