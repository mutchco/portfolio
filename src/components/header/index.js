import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

class Header extends Component {

	render() {

		return (
			<header class={style.mut_header}>
        <svg id='mut_close_button'>
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
				<h1>Tyler<br />Mutch</h1>
				<h2>node.js/Web/Android/.NET/AWS</h2>
			</header>
		);
	}
}

export default Header;