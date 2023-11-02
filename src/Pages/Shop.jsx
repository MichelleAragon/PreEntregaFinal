import Box from "@mui/material/Box";

import { useShopingCartContext } from "../hooks/ShopingCartContext";
import ItemCart from "../components/ItemCart/ItemCart";

const Shop = () => {
  const [cart] = useShopingCartContext();
  return (
    <div className="shoping-container">
      {cart.map((item) => {
        return <ItemCart key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Shop;
