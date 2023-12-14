import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { singIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then(res => {
        const loggedInUser = res.user;
        const user = { email };
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/');
            }
          })
      })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 mr-20">
            <img src={loginImg} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl text-center font-bold">Login</h1>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className='flex'>
                <a className="text-xl text-center font-bold mr-5">Google</a>
                <a className="text-xl text-center font-bold">Google</a>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
              <p className='text-center mt-5'>New to car doctor <Link to='/register'>Sing Up</Link></p>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;