const ProductsCard = ({ product }) => {
  const { title, img, price } = product;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="px-5 pt-5 ">
        <figure className="bg-slate-200  py-5 rounded-xl">
          <img src={img} alt="Shoes" className="rounded-xl w-32 h-32 " />
        </figure>
      </div>
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
        <p>Price {price}</p>
      </div>
    </div>
  );
};

export default ProductsCard;