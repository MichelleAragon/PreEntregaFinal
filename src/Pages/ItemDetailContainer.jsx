import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="345"
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
          </CardActionArea>
        </Card>
      </Container>
    )
  );
};

export default ItemDetailContainer;
