import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSpeedometer from "react-d3-speedometer"

class App extends Component {
  state = {
    speed : 250
  };

 speedUp = () => {
   console.log("Speeding Up!", this.state.speed)
   this.setState({speed: this.state.speed + 5});
 }

 slowDown = () => {
  console.log("Slowing Down...", this.state.speed)
  this.setState({speed: this.state.speed - 5});
}

  render(){

    return (
      <div className="App">
        <header className="App-header">
         
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.speedUp} className="btn btn-primary btn-md speedbt">Speed Up!</button>
          <button onClick={this.slowDown} className="btn btn-primary">Slow Down...</button>
         
         <div className="speedo">
          <h1 className="speednum">{this.state.speed}</h1>
          <ReactSpeedometer
            maxValue={500}
            value={this.state.speed}
            needleColor="red"
            startColor="green"
            segments={5}
            endColor="red"
            textColor="grey"
           />
           
         </div>  
         
     
        </header>
        
      </div>
    );
    }  
}

export default App;
