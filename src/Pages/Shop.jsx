import { useShopingCartContext } from "../hooks/ShopingCartContext";
import ItemCart from "../components/ItemCart/ItemCart";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Shop = () => {
  const [cart] = useShopingCartContext();

  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
  console.log(total);

  return cart && cart.length > 0 ? (
    <div className="container-shop">
      <Link to={"/"}>
        <Button variant="contained" size="large" sx={{ mt: 10 }}>
          Go Home
        </Button>
      </Link>
      <div className="shoping-container">
        {cart.map((item) => {
          return <ItemCart key={item.id} {...item} />;
        })}
      </div>
      <Link to={"/Login"}>
        <Button variant="contained" size="large" sx={{ mt: 10 }}>
          Buy: {total}
        </Button>
      </Link>
    </div>
  ) : (
    <Link to={"/"}>
      <Button variant="contained" size="large" sx={{ mt: 10 }}>
        Go Home
      </Button>
    </Link>
  );
};

export default Shop;
