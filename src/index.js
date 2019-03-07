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
		this.top = {value: 'EASY PEASY'};
		this.bottom = {value: 'LEMON SQUEEZY'};	
	}
	

	render(){
		return(
			<div id="main">
				Top: <input type="text" placeholder="Top" onChange={(msg) => this.top.value = msg}/> Bottom: <input type="text" placeholder="Bottom"/>
				<div className="doge">
					<h1 className="top">{this.top.value}</h1>
					<h1 className="bottom">{this.bottom.value}</h1>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <DogeMeme />,
  document.getElementById('root')
);