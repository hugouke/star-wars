import API from "./api";

/*
const sortByMainStrategy = function() {
  return function(x, y) {
    return x.specification.fund_main_strategy.name ===
      y.specification.fund_main_strategy.name
      ? 0
      : x.specification.fund_main_strategy.name >
        y.specification.fund_main_strategy.name
      ? 1
      : -1;
  };
};
*/

export const getPlanet = planet =>
  API.get("planets/" + planet).then(res => {
    return res.data;
  });

// Puxar quantidade de planetas
export const countPlanets = data =>
  API.get("planets/").then(res => {
    return res.data;
  });
