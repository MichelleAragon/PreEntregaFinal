import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useShopingCartContext } from "../hooks/ShopingCartContext";
import ItemCart from "../components/ItemCart/ItemCart";

const Shop = () => {
  const [cart] = useShopingCartContext();
  console.log(cart);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 5,
          width: 500,
          height: 600,
        },
      }}
    >
      <Paper elevation={3}>
      <ItemCart/>
      </Paper>
    </Box>
  );
};

export default Shop;
