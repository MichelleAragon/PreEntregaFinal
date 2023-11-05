import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };
const initialState = {
  name: "",
  lastName: "",
  email: "",
  number: "",
};

export const LogIn = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    setValues(initialState);
    setPurchaseID(docRef.id);
    ///alert(docRef.id);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
          <div>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Login</h1>
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            bgcolor: "#ededee",
            display: "flex",
            flexDirection: "column",
            mt: 5,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleOnSubmit}
        >
          <Input
            placeholder="Name"
            inputProps={ariaLabel}
            value={values.name}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Last Name"
            inputProps={ariaLabel}
            value={values.lastName}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Email"
            inputProps={ariaLabel}
            value={values.email}
            onChange={handleOnChange}
            required
          />
          <Input placeholder="Phone" inputProps={ariaLabel} />
          <Button variant="contained" size="large" onSubmit={handleOnSubmit}>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;
