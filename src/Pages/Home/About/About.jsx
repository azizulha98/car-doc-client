import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative lg:w-1/2">
        <img src={parson} alt="" className='w-5/6 rounded-xl' />
        <img src={parts} alt="" className='w-1/2 rounded-xl border-t-4 border-s-4 border-white absolute top-1/2 right-5' />
      </div>
      <div className="space-y-5 lg:w-1/2">
        <h2 className="text-xl font-bold text-[#FF3811]">About Us</h2>
        <h2 className="text-5xl text-[#151515] font-bold lg:mr-40">We are qualified & of experience in this field</h2>
        <div>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
        </div>
        <button className="btn btn-warning">Get More Info</button>
      </div>
    </div>
  );
};

export default About;