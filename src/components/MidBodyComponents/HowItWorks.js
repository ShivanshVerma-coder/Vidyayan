import React from "react"
import { Typography, Grid, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import howItWorks from "./images/howItWorks.svg"

const useStyles = makeStyles({})
const data = [
  {
    head: "Book",
    subheading: " Book a free coding classes with us. You just need a laptop with good internet connectivity",
  },
  {
    head: "Book",
    subheading: " Book a free coding classes with us. You just need a laptop with good internet connectivity",
  },
  {
    head: "Book",
    subheading: " Book a free coding classes with us. You just need a laptop with good internet connectivity",
  },
  {
    head: "Book",
    subheading: " Book a free coding classes with us. You just need a laptop with good internet connectivity",
  },
  {
    head: "Book",
    subheading: " Book a free coding classes with us. You just need a laptop with good internet connectivity",
  },
]
const HowItWorks = () => {
  const matches600 = useMediaQuery("(max-width:600px)")
  const matches900 = useMediaQuery("(max-width:900px)")
  return (
    <Grid container mt={2} p={4}>
      <Grid item xs={12} mb={3}>
        <Typography variant="h5" color="initial" fontWeight="600" textAlign="center" color="#590BB2">
          How it Works
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item md={7} xs={12} p={matches900 ? 1 : 10} pb={0}>
          <img src={howItWorks} alt="how it works image" />
        </Grid>
        <Grid item md={5} xs={12} p={2}>
          {data.map((data, index) => {
            return (
              <Grid container mb={matches600 ? 4 : 3} key={index}>
                <Grid item xs={2} textAlign="start" textAlign={matches900 ? "" : "center"} sx={{ display: "flex" }}>
                  <Typography variant="h5" color="#FFF" style={{ width: "100%", padding: "0", paddingTop: "10px" }}>
                    <svg width="45" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="17.5" cy="18" rx="17.5" ry="18" fill="#590BB2"></ellipse>
                      <text x="10" y="25" fill="white">
                        {index + 1}
                      </text>
                    </svg>
                  </Typography>
                </Grid>
                <Grid item lg={7} md={9}>
                  <Typography variant="h6" color="initial" textAlign="start" fontWeight="600">
                    {data.head}
                  </Typography>
                  <Typography variant="subheading1" color="initial" textAlign="start">
                    {data.subheading}
                  </Typography>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HowItWorks
