import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";

const ItemCart = () => {
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia sx={{ height: 50 }} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TITULO
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Precio: 
        </Typography>
        <ItemQuantitySelector />
        <Typography gutterBottom variant="h5" component="div">
          Total:
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCart;
