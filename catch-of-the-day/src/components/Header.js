import React,{Component} from "react";

class Header extends Component{
  render(){
    return(
      <div>
      <header className="top">
        <h1>Catch of the Day</h1>
      </header>
      <h3 className="tagline">
        <span>Fresh Daily</span>
      </h3>
      </div>
    )
  }
}

export default Header;