import { useEffect, useState } from "react";
import { CardProduct } from "../components/CardProduct/CardProduct";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "productsCollection"))
      );
      const docs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        fb_id: doc.id,
      }));
      setProducts(docs);
    };
    getProducts();
  }, []);


  const handleProductClick = (id) => {};

  return (
    <div className="userSection">
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          <CardProduct
            onClick={handleProductClick}
            id={product.id}
            title={product.title}
            condition={product.condition}
            price={product.price}
            thumbnail={product.thumbnail_id}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
