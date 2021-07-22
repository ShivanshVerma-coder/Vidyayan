import React from "react"
import { Grid, Button, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import banner2 from "./images/banner2.svg"

const Banner1 = () => {
  const matches700 = useMediaQuery("(max-width:700px)")
  const matches376 = useMediaQuery("(max-width:376px)")
  return (
    <Grid container mb={3}>
      <Grid item xs={12} textAlign="center">
        <Button elevation={0} disableRipple>
          <img src={banner2} alt="" width={matches700 ? (matches376 ? "300" : "361") : "691"} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Banner1
