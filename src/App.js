import React from "react";
import "./css/App.css";
import { getPlanet, countPlanets } from "./components/planets";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      count: 0
    };
  }

  componentDidMount() {
    // Contar quantidade de planetas
    countPlanets().then(data => {
      this.setState({
        count: data.count
      });
      this.randPlanet();
    });
  }

  // Escolher planeta aleatório
  randPlanet = () => {
    let planet = Math.round(Math.random() * this.state.count);
    if (planet === 0) planet = 1;
    this.setState({
      loading: true
    });
    getPlanet(planet).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        planet: data
      });
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <div className="loading">
            <i className="mdi mdi-reload"></i> Carregando ...
          </div>
        ) : (
          <div>
            <div className="content">
              <div className="title">
                <h1>{this.state.planet.name}</h1>
              </div>
              <div className="info">
                <p>POPULATION: {this.state.planet.population}</p>
                <p>TERRAIN: {this.state.planet.terrain}</p>
                <p>CLIMATE: {this.state.planet.climate}</p>
              </div>
              <p>Featured in {this.state.planet.films.length} films</p>
            </div>
            <button className="next" onClick={() => this.randPlanet()}>
              NEXT
            </button>
          </div>
        )}
      </div>
    );
  }
}
