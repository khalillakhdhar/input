import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "teste ",age:12, remarque:"" };
  }
 evaluer() {
  if(this.state.age >18)
  {
    alert("majeur");
  }
  else
  alert("mineur");
  
}
  render() {
    return (
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <h1>{this.state.inputText}</h1>
        <p> age: {this.state.age} </p>
        <input
          value={this.state.inputText}
          onChange={(e) => this.setState({ inputText: e.target.value })}
        /><br/>
            <input type="number"
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <button onClick={this.evaluer()}>Click me</button>
      </div>
    );
  }
}

export default App;