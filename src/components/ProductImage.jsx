function ProductImage() {
  return (
    <picture>
      <source media="(min-width: 700px)" srcSet="public/image-product-desktop.jpg"/>
      <img className="card__image" src="public/image-product-mobile.jpg" alt="Image Product"/>
    </picture>
  )
}

export default ProductImage;
