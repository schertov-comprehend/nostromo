import React, { Component } from 'react';
class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', hey:''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) {
	  this.setState({name: event.target.value})
	}
	handleSubmit(event) {
	    event.preventDefault();
	    this.setState ({hey:'Hello ' + this.state.name});
  	}
	render() {
	  return (


		  <div>
		     <div>
	             <form onSubmit={this.handleSubmit}>
	        	<label>Hello world, what’s your name:
	          		<input id="name" value={this.state.value} onChange={this.handleChange} />
	        	</label>
	        	<input type="submit" value="Go" />
	      	     </form>
	             </div>
		     <div><h1>{this.state.hey}</h1></div>
		  </div>
	  )
	}

}

export default MyApp;
