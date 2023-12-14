import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions text-[#FF3811]">
          <p>Price {price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-sm">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;