import { h, Component } from 'preact';

import style from './style';
import content from './content';

import Circle from '../../components/circle';
import CircleContent from '../../components/circle-content';

import Bubble from '../../components/bubble';
import Line from  '../../components/line';
import Sphere from '../../components/sphere';

export default class Home extends Component {

	constructor() {
		super();

		this.circles = [];
	}

	componentDidMount() {

		const width = this.container.offsetWidth;
		const height = this.container.offsetHeight;

		let circleRadius;

		if (width <= 480) {
			circleRadius = 28;
		} else if (width <= 768) {
			circleRadius = 32;
		} else if (width <= 1200) {
			circleRadius = 48;
		} else {
			circleRadius = 52;
		}

		const desiredCell = Math.floor((circleRadius * 2) + (circleRadius * 2 * 0.3));
		let maximumColums = 16;
		let maximumRows = 16;

		let currentColumns = 0;
		let currentRows = 0;

		while (currentColumns < desiredCell && maximumColums > 0) {
			currentColumns = width / maximumColums;
			--maximumColums;
		}

		while (currentRows < desiredCell && maximumRows > 0) {
			currentRows = width / maximumRows;
			--maximumRows;
		}

		const maximum = maximumColums * maximumRows;

		let items = [];
		for (let i = 0; i < this.circles.length; i++) {

			const random = this.getRandom(items, maximum);
			const x = random % maximumColums;
			const y = Math.round(random / maximumColums);
			const top = y * currentRows;
			const left = x * currentColumns;

			items.push(random)
			this.circles[i].build(left, top);
		}
	}

	getRandom(items, maximum) {
		const random = this.getRandomWithin(0, maximum);

		if (items.indexOf(random) >= 0) {
			return this.getRandom(items, maximum);
		}

		return random;
	}

  getRandomWithin(min, max) {
    return Math.floor(min + Math.random()*(max+1 - min))
  }


	render() {

		const viewportSize = Math.max(window.innerWidth, window.innerHeight);
		const sphereSize =viewportSize / 2;
		const bubbleSize = viewportSize / 4;

		const size = Math.max(window.innerWidth, window.innerHeight) / 4;

		return (
			<div class={style.mut_svg_container} ref={c => this.container = c}>
				<Circle ref={c => this.circles.push(c)}>
					<Sphere num={4} size={sphereSize} style={content.mut_acm_sphere} />
				</Circle>
				<Circle ref={c => this.circles.push(c)}></Circle>
				<Circle ref={c => this.circles.push(c)}></Circle>
				<Circle ref={c => this.circles.push(c)}></Circle>
				<Circle ref={c => this.circles.push(c)}></Circle>
			</div>
		);
	}
}
