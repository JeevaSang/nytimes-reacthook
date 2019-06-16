import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  root: {
    height: "100%",
    padding: 20
  },
  itemText: {
    paddingTop: 10
  },
  inline: {
    display: "inline"
  },
  paper: {
    paddingBottom: 50
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default function StoryList(props) {
  const classes = useStyles(props);
  const { stories, onStory } = props;
  return (
    <div className={classes.root}>
      <Paper square className={classes.paper}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              NY Times Most Popular
            </Typography>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {stories.map((story, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} />
              </ListItemAvatar>
              <ListItemText
                className={classes.itemText}
                primary={story.title}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondary={
                  <React.Fragment>
                    <Grid container component={"span"}>
                      <Grid item xs component={"span"}>
                        <Typography
                          component={"span"}
                          gutterBottom
                          variant="body2"
                        >
                          {story.byline}
                        </Typography>
                      </Grid>
                      <Grid item component={"span"}>
                        <Typography
                          component={"span"}
                          gutterBottom
                          variant="body2"
                        >
                          <CalendarTodayIcon />
                          {story.published_date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="Get Full details"
                  onClick={() => onStory(story)}
                >
                  <KeyboardArrowRight />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
