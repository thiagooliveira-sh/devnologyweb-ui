import { useState, useEffect } from "react";
import ProductItem from "../product-item/index";
import * as Styles from "./styles";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://devnology-alb-1825440527.sa-east-1.elb.amazonaws.com:3001/products/search?region=all"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();
        setProducts(data?.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Styles.Container>Carregando produtos...</Styles.Container>;
  }

  if (error) {
    return <Styles.Container>Erro: {error}</Styles.Container>;
  }

  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
  );
};

export default Products;