import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const {productId} = useParams()
  const product = products.find((product) => product.id === productId)
  const {image, name} = product

  return (
    <section className='section product'>
      <img src={image} alt="product" style={{display: 'block', marginBottom: '1rem'}}/>
      <h3>{name}</h3>
      <Link to='/products' className="btn">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
