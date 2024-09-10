import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import AddCart from "./AddCart";

function ProductSell() {
  return(
    <div className="card__sell">
      <ProductDescription/>
      <ProductPrice/>
      <AddCart/>
    </div>
  )
}

export default ProductSell;
