import { h, Component } from 'preact';
import { Router } from 'preact-router';

import './polyfill.js';

import Header from './header';
import Home from '../routes/home';

if (module.hot) {
	require('preact/debug');
}

class App extends Component {

	componentDidMount() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	  ga('create', '***YOUR ID HERE****', 'auto');
	  ga('send', 'pageview');
	}

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
