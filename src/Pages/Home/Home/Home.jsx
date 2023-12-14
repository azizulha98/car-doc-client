import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Product/Products";
import Schedule from "../Schedule/Schedule";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div className="space-y-5">
      <section><Banner /></section>
      <section><About /></section>
      <section><Services /></section>
      <section><Schedule /></section>
      <section><Products /></section>
      <section><Team /></section>
    </div>
  );
};

export default Home;