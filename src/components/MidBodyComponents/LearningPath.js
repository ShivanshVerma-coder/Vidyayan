import React from "react"
import { Typography, Grid, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import learningPath from "./images/learningPath.svg"
const useStyles = makeStyles({})

const LearningPath = () => {
  const matches600 = useMediaQuery("(max-width:600px)")
  return (
    <Grid container m={0} sx={{ backgroundColor: "#EAE7FB" }} p={matches600 ? 1 : 4}>
      <Grid xs={12} textAlign="center">
        <Typography variant="h5" color="#590BB2" fontWeight="700">
          Learning Path
        </Typography>
      </Grid>
      <Grid xs={12} textAlign="center">
        <img src={learningPath} alt="learningPath" />
      </Grid>
    </Grid>
  )
}

export default LearningPath
