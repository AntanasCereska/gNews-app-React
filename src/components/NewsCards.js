import NewsCard from "./NewsCard";

import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const NewsCards = ({ data }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((article) => (
          <Grid item key={article.title} xs={6} md={4} lg={4}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsCards;
