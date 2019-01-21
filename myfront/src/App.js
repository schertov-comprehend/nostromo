import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'z', hey:''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) {
	  this.setState({value: event.target.value})
	}
	handleSubmit(event) {
	    event.preventDefault();
	    this.setState ({hey:'Hello ' + this.state.value});
  	}
	render() {
	  return (
	  <div>
	     <div>
             <form onSubmit={this.handleSubmit}>
        	<label>Name:
          		<input value={this.state.value} onChange={this.handleChange} />
        	</label>
        	<input type="submit" value="Submit" />
      	     </form>
             </div>
	     <div><h1>{this.state.hey}</h1></div>
	  </div>
	  )
	}

}

export default App;
