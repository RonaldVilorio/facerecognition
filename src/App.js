import React, { Component } from "react";
import "./App.css";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Logo from "./components/Logo/Logo";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "f563f3c6abaa4448bd4018085c74e145"
});
const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    };
  }
  onInputChange = e => {
    this.setState({ input: e.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(resp) {
        console.log(resp.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
