import Box from "@mui/material/Box";

import { useShopingCartContext } from "../hooks/ShopingCartContext";
import ItemCart from "../components/ItemCart/ItemCart";

const Shop = () => {
  const [cart] = useShopingCartContext();

  const total = cart.reduce((acc, item) => acc + (item.qty * item.price), 0);
   console.log(total);


  return (
    <>
      <div className="shoping-container">
        {cart.map((item) => {
          return <ItemCart key={item.id} {...item} />;
        })}
      </div>
      <div>
        <span>{total}</span>
      </div>
    </>
  );
};

export default Shop;
