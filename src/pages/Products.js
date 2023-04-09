import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <>
      <section className='section'>
       {products.map(product => {
        return (
          <article key={product.id}>
            <h2>{product.name}</h2>
            <Link to={`/products/${product.id}`}>More info</Link>
          </article>
        )
       })}
      </section>
    </>
  );
};

export default Products;
