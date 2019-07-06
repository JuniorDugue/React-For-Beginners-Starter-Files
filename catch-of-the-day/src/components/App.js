import React, {Component} from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends Component{
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
          <Header tagline="Jr is cool!" />
          <Order/>
          <Inventory/>
        </div>
      </div>
    )
  }
}

export default App;