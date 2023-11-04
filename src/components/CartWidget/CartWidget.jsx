import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useShopingCartContext } from "../../hooks/ShopingCartContext";


export const CartWidget = () => {
  const [cart, setCart] = useShopingCartContext();
  console.log(cart);
  return (
    <>
      <Link to={`/Shop`}>
        <Button color="secondary">
          <AddShoppingCartIcon className="cart-widget" />
          <span>{cart.length}</span>
        </Button>
      </Link>
    </>
  );
};

export default CartWidget;
