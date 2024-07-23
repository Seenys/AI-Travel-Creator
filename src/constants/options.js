export const SelectTravelerList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler in exploration",
    icon: "✈",
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveler in exploration",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving traveler in exploration",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seeks",
    icon: "😎",
    people: "+5 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of cost.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep const on the average side.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Do not worry about cost",
    icon: "👑",
  },
];

export const AI_PROMPT = (location, totalDays, traveler, budget) => {
  return `Generate travel plan for Location: ${location}, for ${totalDays} days for ${traveler} with a ${budget} budget, give me a hotels options list with HotelName, hotel address, price, hotel image url geo coordinates, rating, descriptions and suggest itinerary with placeName, place details, place image url, geo coordinates, ticket pricing, rating, time to travel each of the location for 3 days with each day plan with best time to visit in JSON format`;
};
