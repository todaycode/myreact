import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px'
  },
  media: {
    height: 140
  }
});

export default function GitUserCard(props) {
  const classes = useStyles();
  const { user } = props;

  return (
    <Card className={classes.root} onClick={e => window.open(user.html_url,'_blank')}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={user.avatar_url}
          title={user.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.html_url}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
