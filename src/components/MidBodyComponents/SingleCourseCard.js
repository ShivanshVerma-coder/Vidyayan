import React from "react"
import { Typography, Card, CardActionArea, CardActions, CardContent, Button, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({})

const SingleCourseCard = (props) => {
  return (
    <Card>
      <CardActionArea>
        <img src={props.data.fileName} alt="" />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" color="#7E57C2" fontWeight="600" textAlign="center" component="div">
          {props.data.subtitle}
        </Typography>
      </CardContent>
      <Divider color="black" />
      <CardActions>
        <Button size="subtitle1" color="primary" sx={{ flex: "1", textAlign: "center" }}>
          Know more
        </Button>
      </CardActions>
    </Card>
  )
}

export default SingleCourseCard
