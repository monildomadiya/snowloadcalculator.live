export const states = [
  { name: "New York", slug: "ny", topCities: [{ name: "New York City", slug: "new-york-city" }, { name: "Buffalo", slug: "buffalo" }, { name: "Rochester", slug: "rochester" }] },
  { name: "Pennsylvania", slug: "pa", topCities: [{ name: "Philadelphia", slug: "philadelphia" }, { name: "Pittsburgh", slug: "pittsburgh" }, { name: "Allentown", slug: "allentown" }] },
  { name: "Ohio", slug: "oh", topCities: [{ name: "Columbus", slug: "columbus" }, { name: "Cleveland", slug: "cleveland" }, { name: "Cincinnati", slug: "cincinnati" }] },
  { name: "Michigan", slug: "mi", topCities: [{ name: "Detroit", slug: "detroit" }, { name: "Grand Rapids", slug: "grand-rapids" }, { name: "Ann Arbor", slug: "ann-arbor" }] },
  { name: "Illinois", slug: "il", topCities: [{ name: "Chicago", slug: "chicago" }, { name: "Aurora", slug: "aurora" }, { name: "Naperville", slug: "naperville" }] },
  { name: "Massachusetts", slug: "ma", topCities: [{ name: "Boston", slug: "boston" }, { name: "Worcester", slug: "worcester" }, { name: "Springfield", slug: "springfield" }] },
  { name: "New Jersey", slug: "nj", topCities: [{ name: "Newark", slug: "newark" }, { name: "Jersey City", slug: "jersey-city" }, { name: "Paterson", slug: "paterson" }] },
  { name: "Colorado", slug: "co", topCities: [{ name: "Denver", slug: "denver" }, { name: "Colorado Springs", slug: "colorado-springs" }, { name: "Aurora", slug: "aurora" }] },
  { name: "Minnesota", slug: "mn", topCities: [{ name: "Minneapolis", slug: "minneapolis" }, { name: "St. Paul", slug: "st-paul" }, { name: "Rochester", slug: "rochester" }] },
  { name: "Wisconsin", slug: "wi", topCities: [{ name: "Milwaukee", slug: "milwaukee" }, { name: "Madison", slug: "madison" }, { name: "Green Bay", slug: "green-bay" }] },
  { name: "Indiana", slug: "in", topCities: [{ name: "Indianapolis", slug: "indianapolis" }, { name: "Fort Wayne", slug: "fort-wayne" }, { name: "Evansville", slug: "evansville" }] },
  { name: "Washington", slug: "wa", topCities: [{ name: "Seattle", slug: "seattle" }, { name: "Spokane", slug: "spokane" }, { name: "Tacoma", slug: "tacoma" }] }
];

export const getAllStates = () => states;
export const getStateBySlug = (slug) => states.find((s) => s.slug === slug);
