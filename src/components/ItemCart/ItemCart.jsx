
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ItemCart = ({ title, price, qty, thumbnail }) => {
  return (
    <Card sx={{ 
        width: 345,
         display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          height: 'auto',
          justifyItems: 'center' 
        }}>
      <CardMedia
        sx={{ 
            height: 80, 
            width: 80,
            gridTemplateColumns: '1fr'
        }}

        image={thumbnail}
        title={title}

      />
      <CardContent 
      sx={{ 
        gridTemplateColumns: 'auto'
      }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16 }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16 }}>
          Precio: {price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16 }}>
          Cantidad: {qty}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16 }}>
          Total: {qty * price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCart;
