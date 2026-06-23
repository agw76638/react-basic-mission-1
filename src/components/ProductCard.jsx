import styles from './ProductCard.module.css';

function ProductCard({ products }) {
  return (
    <>
      {products.map(product => (
        <div key={product.id} className={styles.productcard}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.brand}</p>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
