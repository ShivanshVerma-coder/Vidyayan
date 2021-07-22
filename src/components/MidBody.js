import React, { useEffect } from "react"
import WhyCoding from "./MidBodyComponents/WhyCoding"
import CourseCards from "./MidBodyComponents/CourseCards.js"
import Banner1 from "./MidBodyComponents/Banner1.js"
import Banner2 from "./MidBodyComponents/Banner2.js"
import LearningPath from "./MidBodyComponents/LearningPath.js"
import HowItWorks from "./MidBodyComponents/HowItWorks.js"
import { Box } from "@material-ui/core"

function MidBody() {
  return (
    <Box sx={{ backgroundColor: "#EEE7E7" }}>
      <WhyCoding />
      <CourseCards />
      <Banner1 />
      <LearningPath />
      <HowItWorks />
      <Banner2 />
    </Box>
  )
}

export default MidBody
