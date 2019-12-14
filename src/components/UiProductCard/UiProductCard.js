// React
import React from "react"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// Material
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    minHeight: 420,
    minWidth: 275,
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    margin: "auto",
  },
  cardActions: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  buttonIcon: {
    paddingLeft: 10,
  },
  buttonTitle: {
    fontSize: 12,
    padding: "0px 10px",
  },
  media: {
    maxHeight: 200,
    width: "auto",
  },
})

const UiProductCard = ({
  description,
  handleClickAddToCart,
  image,
  price,
  title,
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        src={image}
        title={title}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component="h5"
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography variant="body2" component="p">
          {`R$ ${price}`}
        </Typography>
        <Fab
          color="primary"
          onClick={handleClickAddToCart}
          size="small"
          variant="extended"
        >
          <FontAwesomeIcon
            className={classes.buttonIcon}
            icon={faPlus}
            size="sm"
          />
          <Typography
            variant="button"
            component="span"
            className={classes.buttonTitle}
          >
            Add to Cart
          </Typography>
        </Fab>
      </CardActions>
    </Card>
  )
}

export { UiProductCard }
