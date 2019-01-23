import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', greeting:null}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) {
	  this.setState({name: event.target.value})
	}
	handleSubmit(event) {
	    event.preventDefault();
	    fetch("/hello", {
	    	method: "POST",
	    	headers: {
	    		'Content-type':'application/json'
	    	},
	    	body: JSON.stringify({name:this.state.name})
	    })	
	    .then ((response) => {return response.text()})
	   	.then((response) => {
	   		this.setState ({greeting:{__html:response}});
	   	})
	   	.catch((error) => {
	   		console.log(error);
	   	})
  	}
	render() {
	  return (
	  <div>
	     <div>
          <form onSubmit={this.handleSubmit}>
	        	<label id="greeting">Hello world, what’s your name:</label>
	          	<input id="name" value={this.state.value} onChange={this.handleChange} />
	        	
        		<input id="goButton" type="submit" value="Go" />
      		</form>
        </div>
	     	<div id="result" dangerouslySetInnerHTML={this.state.greeting}/>
	  </div>
	  )
	}

}

export default App;
