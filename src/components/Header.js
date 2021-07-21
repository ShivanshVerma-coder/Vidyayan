import React, { useEffect } from "react"
import { Container, Box, Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import HeaderSVG from "./HeaderSVG"
import CoursesLogos from "./CoursesLogos"

const useStyles = makeStyles({
  container: {
    padding: "0 !important",
    margin: "0 !important",
    backgroundColor: "#EEE7E7",
  },
})

function Header() {
  const classes = useStyles()
  const matches600 = useMediaQuery("(max-width:600px)")
  const matches900 = useMediaQuery("(max-width:900px)")
  const matches1200 = useMediaQuery("(max-width:1200px)")
  return (
    <Container className={classes.container} maxWidth="false">
      <Box sx={{ bgcolor: "#EEE7E7" }} mt={7}>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={5} xs={12} flexShrink={10}>
            <Box mt={matches1200 ? (matches900 ? 1 : 6) : 12} p={3}>
              <Typography variant="h4" color="initial" sx={{ marginBottom: "25px" }}>
                <span style={{ color: "#FB5B16", fontWeight: "700" }}>Creating Future</span>
                <span style={{ fontWeight: "700" }}> Tech Leaders</span>{" "}
              </Typography>
              <Typography variant="h6" color="initial" sx={{ marginBottom: "35px", width: "80%" }}>
                Live coding classes for age 6 -15 to help your child learn to code
              </Typography>
              <Box textAlign="center">
                <Button size="large" variant="contained" color="primaryOrange" style={{ color: " white ", borderRadius: "10px", textTransform: "none" }}>
                  Join Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} textAlign={matches900 ? "center" : "end"} mt={matches900 ? 2 : 1}>
            <HeaderSVG matches600={matches600} />
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center" sx={{ color: "#FB5B16", fontWeight: "700" }} mb={4}>
        Cutting edge courses to make your child future ready
      </Box>
      <Box>
        <CoursesLogos />
      </Box>
    </Container>
  )
}

export default Header
