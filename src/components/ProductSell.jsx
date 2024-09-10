import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import AddCart from "./AddCart";

function ProductSell() {
  return(
    <div>
      <ProductDescription/>
      <ProductPrice/>
      <AddCart/>
    </div>
  )
}

export default ProductSell;
