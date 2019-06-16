import React from "react";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    padding: 20,
    justifyContent: "space-around"
  },
  gridList: {
   // width: 900,
    //height: 380,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

export default function Story(props) {
  const classes = useStyles(props);
  const { story, onBack } = props;
  return (
    <div className={classes.root}>
      <Typography
        component="h3"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {story.title}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        component="p"
      >
        {story.abstract}
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        color="textSecondary"
        component="p"
      >
        {story.byline} - {story.published_date}
      </Typography>
      <GridList className={classes.gridList} justify="center" direction="row">
        {story.media.map(imgdata => (
          <GridListTile
            key={imgdata["media-metadata"][0].url}
            cols={2}
            rows={2}
          >
            <img src={imgdata["media-metadata"][0].url} alt={imgdata.caption} />
            <GridListTileBar
              title={imgdata.caption}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
      <Typography align="center">
        <Button color="primary"
          variant="contained"
          component="span"
          onClick={() => onBack(null)}
        >
          Back
        </Button>
      </Typography>
    </div>
  );
}
