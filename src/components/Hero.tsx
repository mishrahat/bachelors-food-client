import hero from "../assets/hero-section/hero.png";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-start py-48 h-screen">
      <div>
        <h1 className="lg:text-8xl text-5xl font-bold text-red-950">
          Bachelors Meal <br /> On Door!
        </h1>
      </div>
      <div>
        <img
          src={hero}
          className="w-full max-h-[600px] object-cover"
          alt="this is hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
