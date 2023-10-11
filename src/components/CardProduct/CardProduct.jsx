import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export const CardProduct = ({
  id,
  title,
  price,
  thumbnail,
  condition,
  onClick,
}) => {

  return (
    <Link to={`/item/${id}`}>
      <Card sx={{ width: 345 }} onClick={() => onClick(id)}>
        <CardMedia
          sx={{ height: 345 }}
          image={`https://http2.mlstatic.com/D_604790-${thumbnail}-V.webp`}
          title={title}
          thumbnail={thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {condition}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{price}</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    </Link>
  );
};

export default CardProduct;
