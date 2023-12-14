import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(error=>console.error(error))
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 mr-20">
            <img src={loginImg} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl text-center font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Registration" />
              </div>
              <p className='text-center mt-5'>Have an account Please <Link to='/login'>Login</Link></p>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;