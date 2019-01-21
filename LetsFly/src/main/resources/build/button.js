const e = React.createElement;
class MyApp extends React.Component {
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
	             <form onSubmit={this.handleSubmit}>
	        	<label>Hello world, what’s your name:
	          		<input id="name" value={this.state.value} onChange={this.handleChange} />
	        	</label>
	        	<input type="submit" value="Go" />
	      	     </form>

		     <label>{this.state.hey}</label></div>
	  )
	}

}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(MyApp), domContainer);