import Button from '@mui/material/Button';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

export const CartWidget = () => {
  const [counter] = useState(5);
  return (
    <>
      <Button color="secondary" className="cart-widget">
        <AddShoppingCartIcon />
        <span className="notifications">{counter}</span>
      </Button>
    </>
  );
};

export default CartWidget;