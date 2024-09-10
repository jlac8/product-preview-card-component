import ProductImage from "./ProductImage";
import ProductSell from "./ProductSell";

function ProductCard() {
  return (
    <article className="card">
      <ProductImage/>
      <ProductSell/>
    </article>
  )
}

export default ProductCard;
