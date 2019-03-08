import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class DogeMeme extends React.Component{

	constructor(props){
		super(props);
		this.state = {top: 'TOP', bottom: 'DOWN'};
		this.changeTop = this.changeTop.bind(this);
		this.changeBottom = this.changeBottom.bind(this);
		this.erase = this.erase.bind(this);
	}

	changeTop(event){
		this.setState({top: event.target.value.toUpperCase()});
	}

	changeBottom(event){
		this.setState({bottom: event.target.value.toUpperCase()});
	}

	erase(){
		this.setState({top: 'TOP', bottom: 'BOTTOM'});
	}

	

	render(){
		return(
			<div id="main">
				Top: <input type="text" placeholder="Top" value={this.state.top} onChange={this.changeTop}/>
				Bottom: <input type="text" placeholder="Bottom" value={this.state.bottom} onChange={this.changeBottom}/>
				<button onClick={this.erase}>Erase</button>
				<div className="doge">
					<h1 className="top">{this.state.top}</h1>
					<h1 className="bottom">{this.state.bottom}</h1>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <DogeMeme />,
  document.getElementById('root')
);