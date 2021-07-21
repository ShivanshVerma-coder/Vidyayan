import React, { useEffect } from "react"
import WhyCoding from "./MidBodyComponents/WhyCoding"
import CourseCards from "./MidBodyComponents/CourseCards.js"
import Banner1 from "./MidBodyComponents/Banner1.js"
import LearningPath from "./MidBodyComponents/LearningPath.js"
import HowItWorks from "./MidBodyComponents/HowItWorks.js"
import { Box } from "@material-ui/core"

function MidBody() {
  return (
    <>
      <WhyCoding />
      <CourseCards />
      <Banner1 />
      <LearningPath />
      <HowItWorks />
    </>
  )
}

export default MidBody
