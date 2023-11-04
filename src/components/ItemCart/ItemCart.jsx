
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ItemCart = ({ title, price, qty, thumbnail }) => {
  return (
    <Card className="card_container_cart_shop" sx={{ 
        width: 345,
         display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          height: 'auto',
          justifyItems: 'center', 
          alignItems: 'center',
        }}>
      <CardMedia
        sx={{ 
            height: 80, 
            width: 80
        }}

        image={thumbnail}
        title={title}


      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16, textAlign: 'left' }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16, textAlign: 'left' }}>
          Precio: {price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16, textAlign: 'left' }}>
          Cantidad: {qty}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 16, textAlign: 'left' }}>
          Sub-Total: {qty * price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCart;
