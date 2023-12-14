import cImg1 from '../../../assets/images/team/1.jpg'
import cImg2 from '../../../assets/images/team/2.jpg'
import cImg3 from '../../../assets/images/team/3.jpg'
const TeamCard = () => {
  return (
    <div className="w-full relative">
      <div className='flex gap-5 rounded-lg'>
        <div className="w-1/3">
          <div className="w-full shadow-lg rounded-lg bg-base-100 space-y-2">
            <figure><img src={cImg1} className='rounded-lg h-64 w-full' /></figure>
            <div className="text-center pb-10">
              <h2>Car Engine Plug</h2>
              <p>Engine Expert</p>
            </div>
          </div>
        </div>

        <div className="carousel-item w-1/3">
          <div className="w-full shadow-lg rounded-lg bg-base-100 space-y-2">
            <figure><img src={cImg2} className='rounded-lg h-64 w-full' /></figure>
            <div className="text-center pb-10">
              <h2>Car Engine Plug</h2>
              <p>Engine Expert</p>
            </div>
          </div>
        </div>

        <div className="carousel-item w-1/3">
          <div className="w-full shadow-lg rounded-lg bg-base-100 space-y-2">
            <figure><img src={cImg3} className='rounded-lg h-64 w-full' /></figure>
            <div className="text-center pb-10">
              <h2>Car Engine Plug</h2>
              <p>Engine Expert</p>
            </div>
          </div>
        </div>

       

      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
  );
};

export default TeamCard;