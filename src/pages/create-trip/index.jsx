import { Button, Input } from "@/components";
import { SelectBudgetOptions, SelectTravelerList } from "@/constants/options";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const OnClickCreateTrip = () => {
    if (formData.noOfDays < 1 || formData.noOfDays > 10) {
      toast.warning("The number of days should be between 1 and 10");
      return;
    }
    if (
      !formData.noOfTravelers ||
      !formData.budget ||
      !formData.destination ||
      !formData.noOfDays
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    toast.success("Trip created successfully");
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        🌲⛺🌲 Tell us your travel preferences 🌲⛺🌲
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        just provide some basic information, and out trip planner will create
        your custom plan.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("destination", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            Placeholder="Ex.3"
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is your budged</h2>
          <div className="grid grid-cols-3 gap-5 mt-3">
            {SelectBudgetOptions.map((item) => (
              <div
                key={item.id}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg flex flex-col justify-center items-center ${
                  formData.budget === item.id && "border-blue-500 shadow-lg"
                }`}
                onClick={() => handleInputChange("budget", item.id)}
              >
                <h2 className="mb-4 text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is your budged</h2>
          <div className="grid grid-cols-3 gap-5 mt-3">
            {SelectTravelerList.map((item) => (
              <div
                key={item.id}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg flex flex-col justify-center items-center ${
                  formData.noOfTravelers === item.id &&
                  "border-blue-500 shadow-lg"
                }`}
                onClick={() => handleInputChange("noOfTravelers", item.id)}
              >
                <h2 className="mb-4 text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end  flex">
        <Button onClick={OnClickCreateTrip} className="mt-10">
          Create Trip
        </Button>
      </div>
    </div>
  );
};

export default CreateTrip;
