import TeamCard from "./TeamCard";


const Team = () => {
  return (
    <div>
      <div className="text-center space-y-2 mt-10">
        <h2 className="text-xl font-bold text-[#FF3811]">Team</h2>
        <h3 className="text-5xl text-[#151515] font-bold">Meet Our Team</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomize <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="my-5">
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;