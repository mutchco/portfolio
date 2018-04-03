import { h, Component } from 'preact';
import { Router } from 'preact-router';

import './polyfill.js';

import Header from './header';
import Home from '../routes/home';

if (module.hot) {
	require('preact/debug');
}

class App extends Component {

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}

export default App;
