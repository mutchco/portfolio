import { h, Component } from 'preact';

import style from './style';
import content from './content';

import Circle from '../../components/circle';
import Title from '../../components/title';
import Line from  '../../components/line';
import Sphere from '../../components/sphere';

export default class Home extends Component {

	constructor() {
		super();

		this.circles = [];
	}

	componentDidMount() {

		const width = this.base.offsetWidth;
		const height = this.base.offsetHeight;

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

		const desiredCell = circleRadius * 2.5;
		const columns = Math.floor(width / desiredCell);
		const rows = Math.floor(height / desiredCell);
		const maximum = columns * rows;

		console.log(desiredCell, columns, rows);

		let items = [];
		for (let i = 0; i < this.circles.length; i++) {

			const random = this.getRandom(items, maximum);
			const x = random % columns;
			const y = Math.round(random / columns);
			const top = y * desiredCell;
			const left = x * desiredCell;

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

		return (
			<div class={style.mut_svg_container}>
				<Circle color={style.mut_circle_color_1} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title size='big' delay='0s'> Action Matrix </Title>
						<Title size='med' delay='0.2s'> Angular/.NET/NHibernate </Title>
						<Title size='small' delay='0.4s'> 2012-2015 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/expanded.png' />
						<p>
							Action Matrix is the third iteration of an inventory control, routing and customer relations management software. It's targeted at the construction and waste management industry and has proven to reduce fuel costs by up to 25% through it's unique
				      routing system. The user-centric web app and accompanying Android app provide real-time information specific to the client, it uses a combination of NFC and RFID tags to identify inventory. It includes custom built hardware that relays information
				      from scales and RFID readers to the Android app.
						</p>
					</div>
					<Sphere num={4} styleClass={content.mut_acm_sphere} />
				</Circle>
				<Circle color={style.mut_circle_color_5} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title size='big' delay='0s'> Farcast </Title>
						<Title size='med' delay='0.2s'> Android/node.js/react </Title>
						<Title size='small' delay='0.4s'> 2015-2016 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/farcast.png' />
						<p>
							Farcast is a new podcasting platform that focuses on both the podcaster and the listener. It uses a subscription-based monetization model that reduces the dependence on advertising while also providing key insights about the audience. With Farcast I focused
				      on building out the Android portion of their platform while also managing the development of several key backend services such as authentication, messaging and media recommendations.
						</p>
					</div>
				</Circle>
				<Circle color={style.mut_circle_color_2} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title size='big' delay='0s'> Paywallz </Title>
						<Title size='med' delay='0.2s'> node.js/javascript/stripe.js </Title>
						<Title size='small' delay='0.4s'> 2015-2016 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/paywallz.png' />
						<p>		
				      Paywallz is a SaaS based paywall that allows publishers to monetize a multitude of different content with minimal setup. With Paywallz I was responsible for building the payemnt processing service as well as the external JavaScript that is loaded onto
				      the publishers website in order to block specific content. I also managed all AWS infrastructure and CI/CD for the entire platform.
						</p>
					</div>
				</Circle>
				<Circle color={style.mut_circle_color_4} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title size='big' delay='0s'> Other Work </Title>
						<Title size='med' delay='0.2s'> Android/node.js/react/Print media </Title>
						<Title size='small' delay='0.4s'> 2015-2018 </Title>
						<br />
						<Title size='large' delay='0s'> Fin-Wall Website </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/finex.png' />
						<br />
						<Title size='large' delay='0s'> HQ mini </Title>
						<img class={`mut_item`} src='/assets/hq4.png' />
					</div>
				</Circle>
				<Circle color={style.mut_circle_color_3} ref={c => this.circles.push(c)}></Circle>
				</div>
			);
		}
	}
