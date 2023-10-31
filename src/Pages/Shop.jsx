// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// //firebase
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../firebase/firebaseConfig";

// import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

// const styles = {
//   containerShop: {
//     textAlign: "center",
//     paddingTop: 20,
//   },
// };

// const initialState = {
//   name: "",
//   lastName: "",
//   city: "",
// };

const Shop = () => {
  // const [values, setValues] = useState(initialState);
  // const [purchaseID, setPurchaseID] = useState("");

  // const handleOnChange = (e) => {
  //   const { value, name } = e.target;
  //   setValues({ ...values, [name]: value });
  // };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   const docRef = await addDoc(collection(db, "purchasesCollection"), {
  //     values,
  //   });
  //   setValues(initialState);
  //   setPurchaseID(docRef.id);
    ///alert(docRef.id);
    return (
      <div>
        ESTOY EN SHOP PAGE
      </div>
    )
  };

//   return (
//     <div style={styles.containerShop}>
//       <h1 style={{ color: "black" }}>Shop</h1>
//       <form className="FormContainer" onSubmit={handleOnSubmit}>
//         <TextField
//           placeholder="Name"
//           style={{ margin: 10, width: 400 }}
//           name="name"
//           value={values.name}
//           onChange={handleOnChange}
//           required
//         />
//         <TextField
//           placeholder="Last Name"
//           style={{ margin: 10, width: 400 }}
//           name="lastName"
//           value={values.lastName}
//           onChange={handleOnChange}
//           required
//         />
//         <TextField
//           placeholder="City"
//           style={{ margin: 10, width: 400 }}
//           name="city"
//           value={values.city}
//           onChange={handleOnChange}
//           required
//         />
//         <button className="btnASendAction">Send</button>
//       </form>
//       {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
//     </div>
//   );
// };

export default Shop;
