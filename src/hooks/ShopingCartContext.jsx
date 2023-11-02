import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ShopingCartContext = createContext();

export const useShopingCartContext = () => useContext(ShopingCartContext)

export const ShopingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <ShopingCartContext.Provider value={[cart, setCart]}>
      {children}
    </ShopingCartContext.Provider>
  );
};
