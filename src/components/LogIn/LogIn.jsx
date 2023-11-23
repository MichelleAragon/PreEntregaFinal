import Button from '@mui/material/Button';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MessageSuccess from '../MessageSuccess/MessageSuccess';
import { useShopingCartContext } from '../../hooks/ShopingCartContext';

// const ariaLabel = { "aria-label": "description" };
const initialState = {
  name: "",
  lastname: "",
  email: ""
};
const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};
export const LogIn = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const [cart] = useShopingCartContext();

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), { ...values, products: cart });
    setValues(initialState);
    setPurchaseID(docRef.id);
  };

  return (
      <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Shop</h1>
      <form className="FormContainer" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="Lastname"
          style={{ margin: 10, width: 400 }}
          name="lastname"
          value={values.lastname}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          required
        />
        <Button type="submit" variant="contained" size="large">BUY</Button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default LogIn;
