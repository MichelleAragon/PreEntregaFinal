import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const [counter] = useState(5);
  return (
    <>
      <Link to={`/Shop`}>
        <Button color="secondary">
          <AddShoppingCartIcon className="cart-widget" />
          <span>{counter}</span>
        </Button>
      </Link>
    </>
  );
};

export default CartWidget;
