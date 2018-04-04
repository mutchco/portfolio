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
    * Send email to myself
  */
  sendEmail() {

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
							My first forray into enterprise software was with a piece of inventory control, routing and customer relations management software. It was built under my company 
							"MutchCo Developments" and targeted at the construction and waste management sector. It proved to reduce fuel costs with it's unique routing system that relied on 
							an algorithm built to try and solve the travelling salesperson problem. It used NFC and RFID tags to provide rigid inventory control which was routed through custom 
							hardware, to an Android phone and back to the server side in real-time. It had three major version releases over three years and is still in use today.
						</p>
					</div>
					<Sphere num={4} style-class={content.mut_acm_sphere} />
				</Circle>
				<Circle color={style.mut_circle_color_5} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title href='https://www.farcast.com' size='big' delay='0s'> Farcast </Title>
						<Title size='med' delay='0.2s'> Android/node.js/react </Title>
						<Title size='small' delay='0.4s'> 2015-2016 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/farcast.png' />
						<p>
							Farcast is a new podcasting platform that focuses on both the podcaster and the listener. It uses a subscription-based monetization model that reduces the dependence 
							on advertising while also providing key insights about the audience. During my tenure with Farcast I wrote some of my favorite code of my career. This included a 
							recommendation service that used a four-dimensional graph and postgis spatial queries to provide the user with fast, rich recommendations based on their and other's 
							listening habits. It was also my first time building a JWT based authentication system that had to communicate with multiple different clients, including the Android 
							app that I had a huge hand in deisgning and building. Our design language was simple, monochrome and straight forward giving way to the art of the podcaster while also 
							making clear minimalist statement.
						</p>
					</div>
					<div class={`${content.mut_linebox} ${content.mut_far_linebox}`}>
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
					  	Paywallz is a SaaS based paywall that allows publishers to monetize a multitude of different content with minimal setup, from magazines to webinars we faced a huge number 
					  	challenges while building this platform in an agile, rapid cycle. The most arduous of these challenges was building the external JavaScript widget that was loaded onto the 
					  	publisher's website, this was solved with vanilla JavaScript, AWS CloudFront and a lot of CORS testing. I was also responsible for building the backend API/service that
					  	handled the payments for all subscriptions by communicating with our payment processor Stripe. Lastly I also provisioned and maintained the AWS infrastructure and 
					  	CI/CD (Jenkins, CircleCI) for the entire platform.
						</p>
					</div>
					<Sphere num={4} style-class={content.mut_pay_sphere} />
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
									My biggest dilemna in web design is always intuitive navigation: I find modern navigation styles too often come across as
									clunky and cumbersome. As opposed to these traditional navigation paradigms, I decided that my portfolio website would highlight the duality of navigation and discovery. Each bubble represents a significant part of my career: they beg the user for interaction and only via curiosity (or maybe frustration) will the user 
									discover the content beneath. The pastel colors and gentle animations are inspired by my love of minimalism and muted palletes.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title href='http://www.finwall.ca' size='large' delay='0s'> finwall.ca </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/finwall.png' />
								<p>
									Fin-Wall Site Services is a local, family owned company that has been thriving in Southern Alberta for over 25 years. For the design of this website I took inspiration 
									from the landscape and the era in which the company was founded. I used retro graphic design and strong typefaces that give the user a sense of the company's values. 
									I kept the design of the logo simple and came up with a 2D rendition of the company's patented wall-support technology, something the founding family has remained proud of 
									throughout the lifetime of the company.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title size='large' delay='0s'> HQ mini </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/hqmini.png' />
								<img class={`${style.mut_list_image}`} src='/assets/hqmini2.png' />
								<p>
									HQ Mini is the Android piece of the GPS Police puzzle, it allows companies to monitor their fleet of vehicles from anywhere in the world on almost any Android device. This app 
									used MapBox for itʼs map rendering and provided data points such as current speed and location of the vehicle as well as total engine hours in real-time to whomever in the company 
									had permission. It used REST APIs and JWT authentication for backend communication.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title size='large' delay='0s'> Kurrent Motion </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/kurrentmotion.png' />
								<img class={`${style.mut_list_image}`} src='/assets/kurrentmotion2.png' />
								<p>
									Kurrent Motion is a hula hoop company I had as a client during my time in New Zealand. I managed their branding, logo design and print media. This poster and 
									brochure were created to be used in cafes and on ad boards. They feature a simple design and imagery that focuses on the active nature of the client. I used playful and elegant typefaces that 
									have the same character as the circus roots the client was founded in.
								</p>
							</div>
						</div>

					</div>
				</Circle>
				<Circle color={style.mut_circle_color_3} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title href='mailto:tyler@mutch.co' size='big'>Hi, Iʼm Tyler</Title>
						<Title size='med'>(tyler@mutch.co)</Title>
						<img class={`${style.mut_list_image}`} src='/assets/tyler.jpg' />
						<p>
							I was born in Vancouver in 1990, Iʼve lived all over Western Canada and spent a few years in New Zealand.
						</p>
					</div>
					<div class={`${content.mut_linebox} ${content.mut_about_linebox}`}>
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
				<div class={style.mut_footer}>
					<a href='https://github.com/mutchco/portfolio' target='_blank'>&copy; Tyler Mutch {(new Date()).getFullYear()}</a>
					<a href='https://preactjs.com/' target='_blank'>built with preact</a>
				</div>
			</div>
		);
	}
}

export default Home;
