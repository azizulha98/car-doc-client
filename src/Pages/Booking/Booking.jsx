import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/booking?email=${user?.email}`
  // const url = `http://localhost:5000/booking?email=${user?.email}`
  useEffect(() => {
    // axios.get(url, { withCredentials: true })
    //   .then(res => {
    //     setBooks(res.data)
    //   })
    axiosSecure.get(url)
    .then(res=>setBooks(res.data))
  }, [url, axiosSecure])
  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successful');
            const remaining = books.filter(book => book._id !== id);
            setBooks(remaining);
          }
        })
    }
  }
  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'confirm' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = books.filter(book => book._id !== id);
          const updated = books.find(book => book._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBooks(newBookings);
        }
      })
  }

  return (
    <div>
      <h2>Book it{books.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>service</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map(book =>
                <BookingRow
                  key={book._id}
                  book={book}
                  handleDelete={handleDelete}
                  handleBookingConfirm={handleBookingConfirm}
                />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;