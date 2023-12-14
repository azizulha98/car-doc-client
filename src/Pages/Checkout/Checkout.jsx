import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleServices = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = user?.email;
    const massage = form.massage.value;

    const booking = {
      customerName: name,
      date, phone, email, massage, img,
      service_id: _id,
      service: title,
      price: price,
    }
    console.log(booking);
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
      
      
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('booking successfully')
        }
      })
  }
  return (
    <div className="card w-full shadow-2xl bg-base-100">
      <form onSubmit={handleServices} className="card-body">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input name="date" type="date" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Massage</span>
            </label>
            <input name="massage" type="text" placeholder="Massage" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input name="amount" type="text" defaultValue={'$' + price} className="input input-bordered " required />
          </div>

        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;