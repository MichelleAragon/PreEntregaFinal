import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [Item, setItem] = useState();

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  console.log(Item);
  return (
    Item && (
<Link to={`/Shop`}>
<Container maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="375"
              image={Item.pictures[0].secure_url}
              alt="item"
            />  
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Item.attributes[0].value_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Item.base_price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Item.warranty}
              </Typography>
            </CardContent>
            <Button variant="contained" size="medium" className="add-cart-btn">Add to cart</Button>
          </CardActionArea>
        </Card>
      </Container>
</Link>
    )
  );
};

export default ItemDetailContainer;
