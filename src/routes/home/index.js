import { h, Component } from 'preact';

import style from './style';
import content from './content';

import Circle from '../../components/circle';
import CircleContent from '../../components/circle-content';

import Bubble from '../../components/bubble';
import Line from  '../../components/line';
import Sphere from '../../components/sphere';

const colors = {
	blue: {
		main: '#778beb',
		accent: '#f7d794',
		light: true
	},
	green: {
		main: '#63cdda',
		accent: '#778beb',
		light: true
	},
	yellow: {
		main: '#f7d794',
		accent: '#63cdda'
	},
	orange: {
		main: '#f3a683',
		accent: '#f7d794',
		light: true
	},
	red: {
		main: '#ea8685',
		accent: '#f3a683',
		light: true
	}
};

export default class Home extends Component {

	constructor() {
		super();

		this.circles = [];

		this.init = this.init.bind(this);
	}

	componentDidMount() {
		this.init();
	}


	init() {

		const width = this.container.clientWidth;
		const height = this.container.clientHeight;

		const innerWidth = width * 0.5;
		const innerHeight = height * 0.5;

		const top = (height - innerHeight) / 2;
		const left = (width - innerWidth) / 2;
		const right = left + innerWidth;
		const bottom = (top + innerHeight);

		const defs = { top, left, right, bottom };

		window.setTimeout(function () {

			const _circles = [];

			for (let i = 0; i < this.circles.length; i++) {

				const circle = this.circles[i]
					.setLocation(_circles, defs)
					.build();

				_circles.push(circle);
			}

		}.bind(this), 1);
	}


	render() {

		const viewportSize = Math.max(window.innerWidth, window.innerHeight);
		const sphereSize =viewportSize / 2;
		const bubbleSize = viewportSize / 4;

		const size = Math.max(window.innerWidth, window.innerHeight) / 4;

		return (
			<div class={style.mut_svg_container} ref={c => this.container = c}>
				<Circle color={colors.blue} ref={c => this.circles.push(c)}>
					<Sphere num={4} size={sphereSize} color={colors.blue.main} style={content.mut_acm_sphere} />
				</Circle>
				<Circle color={colors.green} ref={c => this.circles.push(c)}>

				</Circle>
				<Circle color={colors.yellow} ref={c => this.circles.push(c)}>

				</Circle>
				<Circle color={colors.orange} ref={c => this.circles.push(c)}>

				</Circle>
				<Circle color={colors.red} ref={c => this.circles.push(c)}>

				</Circle>
			</div>
		);
	}
}
