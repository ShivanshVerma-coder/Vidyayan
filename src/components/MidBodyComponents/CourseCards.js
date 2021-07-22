import React from "react"
import { useTheme } from "@material-ui/core/styles"
import { Container, Grid, Typography, Button, Box, Paper, MobileStepper, useMediaQuery } from "@material-ui/core"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import { makeStyles } from "@material-ui/styles"
import SingleCourseCard from "./SingleCourseCard"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { courseData } from "./courseData"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
console.log(courseData)

const useStyles = makeStyles({
  root: {},
})

function CourseCards() {
  const matches600 = useMediaQuery("(max-width:600px)")
  const matches900 = useMediaQuery("(max-width:900px)")
  const matches1100 = useMediaQuery("(max-width:1100px)")

  var data = matches1100 ? (matches600 ? courseData.dataBelow600 : courseData.dataAbove600) : courseData.dataAbove1100

  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = data.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Grid p={6} pt={8} sx={{ width: "100vw" }} pb={2}>
      <Grid item container xs={12} container justifyContent="space-evenly">
        <Box sx={{ flexGrow: 1 }} sx={{ backgroundColor: "transparent", width: "100vw" }}>
          <AutoPlaySwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
            {data.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Grid item container xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    {step.data1.map((singleData, newindex) => {
                      return (
                        <Grid item key={newindex}>
                          <SingleCourseCard data={singleData} />
                        </Grid>
                      )
                    })}
                  </Grid>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            sx={{ backgroundColor: "transparent", marginTop: "20px" }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default CourseCards
