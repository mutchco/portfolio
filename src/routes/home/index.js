import { h, Component } from 'preact';

import style from './style';
import content from './content';

import Circle from '../../components/circle';
import Title from '../../components/title';
import Line from  '../../components/line';
import Sphere from '../../components/sphere';

/** Class for home route */
class Home extends Component {

	constructor() {
		super();

		this.circles = [];
	}

	/**
    * CDM function, determines circle radius, calculates random positions of circles, triggers circle build
  */
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
		const maximum = columns * rows - rows;

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

	/**
    * Get random number between 0 and maxium with no duplicates
    * @param {Number[]} items - currently selected numbers, to prevent duplicates
    * @param {Number} maximum - the largest number the random can be
  */
	getRandom(items, maximum) {
		const random = this.getRandomWithin(0, maximum);

		if (items.indexOf(random) >= 0) {
			return this.getRandom(items, maximum);
		}

		return random;
	}

	/**
    * Get random number within min and max
    * @param {Number} min - The lowest number the random can be
    * @param {Number} max - the highest number the random can be
  */
  getRandomWithin(min, max) {
    return Math.floor(min + Math.random()*(max+1 - min))
  }

	/**
    * Render function
  */
	render() {

		return (
			<div class={style.mut_svg_container}>
				<Circle color={style.mut_circle_color_1} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title size='big' delay='0s'> Action Matrix </Title>
						<Title size='med' delay='0.2s'> Angular/.NET/NHibernate </Title>
						<Title size='small' delay='0.4s'> 2012-2015 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/actionmatrix.png' />
						<p>
							Action Matrix is the third iteration of an inventory control, routing and customer relations management software. It's targeted at the construction and waste management industry and has proven to reduce fuel costs by up to 25% through it's unique
				      routing system. The user-centric web app and accompanying Android app provide real-time information specific to the client, it uses a combination of NFC and RFID tags to identify inventory. It includes custom built hardware that relays information
				      from scales and RFID readers to the Android app.
						</p>
					</div>
					<Sphere num={4} style-class={content.mut_acm_sphere} />
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
					<div class={content.mut_far_linebox}>
						<Line size={24} />
						<Line size={24} />
						<Line size={24} />
						<Line size={24} />
						<Line size={24} />
						<Line size={24} />
						<Line size={24} />
						<Line size={24} />
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
					<Sphere num={3} style-class={content.mut_pay_sphere} />
				</Circle>
				<Circle color={style.mut_circle_color_4} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>

						<Title size='big' delay='0s'> Other Work </Title>
						<Title size='med' delay='0.2s'> web/android/print </Title>
						<Title size='small' delay='0.4s'> 2015-2018 </Title>
						<br />

						<div class={style.mut_row_wrapper}>
							<Title href='https://mutch.co' size='large' delay='0s'> mutch.co </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/mutchco.png' />
								<p>
									My biggest dilemna in web design is always intuitive navigation, I find modern navigation to often
									be clunky and encumbered. I decided that for my portfolio website I would make the duality of navigation and discovery front and center, instead of traditional navigation 
									paradigms. Each bubble represents a significant part of my career, they beg the user for interaction and only via curiosity (or maybe frustration) will the user 
									discover the content. The pastel colors and gentle animations are inspired by my love of minimalism and muted palletes.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title href='http://www.finwall.ca' size='large' delay='0s'> finwall.ca </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/finwall.png' />
								<p>
									Fin-Wall Site Services is a local, family owned company that has been thriving in Southern Alberta for over 25 years. For the design of this website I took inspiration 
									from the landscape and the era in which the company was founded. I used retro graphic design and strong typefaces that give the user a sense of what the company stands for. 
									For the design of the logo, I kept it simple and came up with a 2D rendition of the companies patented wall support technology, something the founding family remained proud of 
									through the whole lifetime of the company.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title size='large' delay='0s'> HQ mini </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/hqmini.png' />
								<img class={`${style.mut_list_image}`} src='/assets/hqmini2.png' />
								<p>
									HQ Mini is Android piece of the GPS Police puzzle, it allows companies to monitor their fleet of vehicles from anywhere in the world on almost any Android device. This app 
									used MapBox for itʼs map rendering and provided data points such as current speed and location of the vehicle as well as total engine hours in real-time to whomever in the company 
									had permission. It used REST apis and JWT authentication for backend communication.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title size='large' delay='0s'> Kurrent Motion </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/kurrentmotion.png' />
								<img class={`${style.mut_list_image}`} src='/assets/kurrentmotion2.png' />
								<p>
									Kurrent Motion is a hula hoop company that I had as a client during my tenure in New Zealand, I managed their branding, logo design and print media. I created this poster and 
									brochure to be used in cafes and ad boards. They feature simple design and imagery that focus on the nature of the client. I used playful and elegant typefaces that 
									have the same character as the circus roots the client was founded in.
								</p>
							</div>
						</div>

					</div>
				</Circle>
				<Circle color={style.mut_circle_color_3} ref={c => this.circles.push(c)}>
					<Title size='big'>Hi, Iʼm Tyler</Title>
					<img class={`${style.mut_list_image}`} src='/assets/tyler.jpg' />
					<p>
						I was born in Vancouver in 1990, Iʼve lived all over Western Canada and spent a few years in New Zealand.
					</p>
					<form onSubmit={this.emailSubmit}>
						<h4>Send me an email</h4>
						<input type='text' name='email' />
						<input type='text' name='name' />
						<textarea name='comment'></textarea>
					</form>
				</Circle>
				<div class={style.mut_footer}>
					<a href='https://github.com/mutchco/portfolio' target='_blank'>&copy; Tyler Mutch {(new Date()).getFullYear()}</a>
					<a href='https://preactjs.com/' target='_blank'>built with preact</a>
				</div>
			</div>
		);
	}
}

export default Home;