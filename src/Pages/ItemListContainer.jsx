import { useEffect, useState } from "react";
import { CardProduct } from "../components/CardProduct/CardProduct";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [category] = useState("MLA1055");
  const [limitByCategories] = useState(20);

  useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${category}&limit=${limitByCategories}&offset=0`
    )
      .then((response) => response.json())
      .then((response) => setProducts(response.results));
  }, []);

  let categorySelected = products.filter((product) => {
    return product.category_id === category;
  });

  const handleProductClick = (id) => {
    
  };

  return (
    <div className="userSection">
      {categorySelected.map((product) => (
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





 
