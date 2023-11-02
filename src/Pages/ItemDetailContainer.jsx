import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemQuantitySelector from "../components/ItemQuantitySelector/ItemQuantitySelector";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useShopingCartContext } from "../hooks/ShopingCartContext";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../components/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Item, setItem] = useState();
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useShopingCartContext();

  useEffect(() => {
    const getProductDetail = async () => {
      const { docs } = await getDocs(
        query(
          collection(db, "productsCollection"),
          where(documentId(), "==", id)
        )
      );
      const [detail] = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItem(detail);
    };
    getProductDetail();
  }, [id]);

  const handleClick = () => {
    setCart(
      cart.concat({
        item: id,
        qty,
        price: Item.base_price,
        title: Item.title,
        picture: Item.thumbnail_id,
        thumbnail: Item.thumbnail, 
      })
    );
  };

  return (
    Item && (
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="375"
            image={Item.pictures[0].secure_url}
            alt="item"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Item.attributes[0].value_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Item.base_price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Item.warranty}
            </Typography>
          </CardContent>
          <div className="purchases-container">
            <ItemQuantitySelector onSelect={setQty} qty={qty} />
            <Link to={`/Shop`}>
              <Button
                variant="contained"
                size="medium"
                className="add-cart-btn"
                onClick={handleClick}
              >
                Add to cart
              </Button>
              {/* <Button onClick={() => deleteItem(Item.id)}>Delete Item</Button> */}
            </Link>
          </div>
        </Card>
      </Container>
    )
  );
};

export default ItemDetailContainer;
