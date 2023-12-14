import ServicesCard from "./ServicesCard";
import useServices from "../../../hooks/useServices";
const Services = () => {
  const services = useServices();
  return (
    <div>
      <div className="text-center space-y-2 mt-10">
        <h2 className="text-xl font-bold text-[#FF3811]">Service</h2>
        <h3 className="text-5xl text-[#151515] font-bold">Our Service Area</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomize <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          services.map(service => <ServicesCard key={service._id} service={service} />)
        }
      </div>
      <div className="flex items-center justify-center my-5">
        <button className="btn btn-outline btn-warning uppercase btn-sm">Moor Services</button>
      </div>
    </div>
  );
};

export default Services;