import { useNavigate } from "react-router-dom";
import { Button } from "..";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-trip");
  };
  return (
    <div className="flex  flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your New Adventure with AI:{" "}
        </span>
        Personalized Itineraries and much more.
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your Personal trip planner and travel creator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Button onClick={handleClick}>Get Started, its free</Button>
    </div>
  );
};

export default Hero;
