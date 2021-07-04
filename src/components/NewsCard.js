import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const NewsCard = ({ article }) => {
  //i guess its not the best way to format date.... it works
  const dateString = "published at " + `${article.publishedAt}`.slice(0, 10); //only date without time

  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardHeader subheader={dateString} />
        <CardMedia
          className={classes.media}
          component="img"
          image={article.image}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {article.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            noWrap
            className={classes.heading}
          >
            {article.description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            target="_blank"
            href={article.url}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
