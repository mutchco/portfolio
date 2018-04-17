import { h, Component } from 'preact';

import style from './style';
import content from './content';

import Circle from '../../components/circle';
import Title from '../../components/title';
import Line from  '../../components/line';
import Sphere from '../../components/sphere';
import EmailModal from '../../components/email-modal';
import Ripple from '../../components/ripple';

/** Class for home route */
class Home extends Component {

	constructor() {
		super();

		this.circles = [];
	}

  /**
    * Handles window resize, rebuilding the circle graph
  */ 
	onResize = () => {
		this.buildCircleGraph();
	};

  /**
    * Handles modal open
  */ 
	onModalOpen = () => {
		this.setState({ modal: true });
	};

  /**
    * Handles modal close
    * @param {Event} event - The touch/click event
  */ 
	onModalClose = event => {
		if (['mut_overlay', 'mut_overlay_close', 'mut_overlay_close_svg', 'mut_overlay_close_path'].indexOf(event.target.id) >= 0) {
			this.setState({ modal: false });
		}
	};

	/**
    * CDM function, calls graph build and adds resize listener
  */
	componentDidMount() {
		this.buildCircleGraph();
		window.addEventListener('resize', this.onResize);
	}

	/**
    * CWU function, removes resize listener
  */
  componentWillUnmount() {
  	window.removeEventListener('resize', this.onResize);
  }

  /**
    * Determines circle radius, calculates random positions of circles, triggers circle build
  */
	buildCircleGraph() {
  	const width = this.base.offsetWidth;
		const height = this.base.offsetHeight;
		const _height = window.innerHeight;

		let circleRadius;

		if (width <= 480 || _height <= 480) {
			circleRadius = 28;
		} else if (width <= 768 || _height <= 768) {
			circleRadius = 32;
		} else if (width <= 1200 || _height <= 1200) {
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
	render({}, { modal }) {

		return (
			<div class={style.mut_svg_container}>
				<Circle name='ActionMatrix' light={true} color={style.mut_circle_color_1} ref={c => this.circles.push(c)}>
					<Sphere num={4} style-class={content.mut_acm_sphere} />
					<div class={style.mut_content_wrapper}>
						<Title size='big' delay='0s'> Action Matrix </Title>
						<Title size='med' delay='0.2s'> Angular/.NET/NHibernate </Title>
						<Title size='small' delay='0.4s'> 2012-2015 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/actionmatrix.png' />
						<p>
							My first foray into enterprise software was with a piece of inventory control, routing and customer relations management software. It was built under my company 
							"MutchCo Developments" and targeted at the construction and waste management sector. It was proven to reduce fuel costs with its unique routing system that relied on 
							an algorithm built to try and solve the travelling salesperson problem. It used NFC and RFID tags to provide a rigid inventory control which was routed through custom 
							hardware to an Android phone and back to the server side in real-time. It had three major version releases over three years and is still in use today.
						</p>
						<button type='button' onClick={this.onModalOpen}>
							<Ripple />
							Get ahold of me
						</button>
					</div>
				</Circle>
				<Circle name='Farcast' light={true} color={style.mut_circle_color_5} ref={c => this.circles.push(c)}>
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
					<div class={style.mut_content_wrapper}>
						<Title href='https://www.farcast.com' size='big' delay='0s'> Farcast </Title>
						<Title size='med' delay='0.2s'> Android/node.js/react </Title>
						<Title size='small' delay='0.4s'> 2015-2016 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/farcast.png' />
						<p>
							Farcast is a new podcasting platform that focuses on both the podcaster and the listener. It uses a subscription-based monetization model that reduces the dependence 
							on advertising while also providing key insights about the audience. During my tenure with Farcast I wrote some of my favorite code of my career. This included a 
							recommendation service that used a four-dimensional graph and PostGIS spatial queries to provide the user with fast, rich recommendations based on their and otherʼs 
							listening habits. It was also my first time building a JWT-based authentication system that had to communicate with multiple different clients, including the Android 
							app that I had a huge hand in designing and building. Our design language was simple, monochrome and straight-forward, giving way to the podcastʼs album art while also 
							making a clear minimalist statement.
						</p>
						<button type='button' onClick={this.onModalOpen}>
							<Ripple />
							Drop me a line
						</button>
					</div>
				</Circle>
				<Circle name='Paywallz' light={true} color={style.mut_circle_color_2} ref={c => this.circles.push(c)}>
					<Sphere num={4} style-class={content.mut_pay_sphere} />
					<div class={style.mut_content_wrapper}>
						<Title href='https://www.paywallz.com' size='big' delay='0s'> Paywallz </Title>
						<Title size='med' delay='0.2s'> node.js/javascript/stripe.js </Title>
						<Title size='small' delay='0.4s'> 2015-2016 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/paywallz.png' />
						<p>		
					  	Paywallz is a SaaS based paywall that allows publishers to monetize a multitude of different content with minimal setup, from magazines to webinars. We faced a huge number of
					  	challenges while building this platform in an agile, rapid cycle. The most arduous of these challenges was building the external JavaScript widget that was loaded onto the 
					  	publisherʼs website, this was solved with vanilla JavaScript, AWS CloudFront and a lot of CORS testing. I was also responsible for building the backend API/service that
					  	handled the payments for all subscriptions by communicating with our payment processor Stripe. Lastly, I also provisioned and maintained the AWS infrastructure and 
					  	CI/CD (Jenkins, CircleCI) for the entire platform.
						</p>
						<button type='button' onClick={this.onModalOpen}>
							<Ripple />
							Shoot me a message
						</button>
					</div>
				</Circle>
				<Circle name='Other' light={true} color={style.mut_circle_color_4} ref={c => this.circles.push(c)}>
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
									My biggest dilemna in web design has always been intuitive navigation: I find modern navigation styles too often come across as
									clunky and cumbersome. Instead of shying away from this problem, I decided that my portfolio website would highlight the duality of navigation and discovery. 
									Each bubble represents a significant part of my career: they beg the user for interaction and only via curiosity (or maybe frustration) will the user 
									discover the content beneath. The pastel colors and gentle animations are inspired by my love of minimalism and muted palletes.
								</p>
							</div>
							<Line style-class={content.mut_other_line} size={24} />

							<Title href='http://www.finwall.ca' size='large' delay='0s'> finwall.ca </Title>
							<div class={`${style.mut_row}`}>
								<img class={`${style.mut_list_image}`} src='/assets/finwall.png' />
								<p>
									Fin-Wall Site Services is a local, family owned company that has been thriving in Southern Alberta for over 25 years. For the design of this website I took inspiration 
									from the landscape and the era in which the company was founded. I used retro graphic design and strong typefaces that give the user a sense of the companyʼs values. 
									I kept the design of the logo simple and came up with a 2D rendition of the company's patented wall-support technology, something the founding family has remained proud of 
									throughout their lifetime.
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
									brochure were created to be used in cafes and on ad boards, they feature a simple design and imagery that focuses on the active nature of the client's work. I used playful 
									and elegant typefaces that have the same character as the circus roots the client emerged from.
								</p>
							</div>
						</div>

					</div>
				</Circle>
				<Circle name='ActionMatrix' light={false} color={style.mut_circle_color_3} ref={c => this.circles.push(c)}>
					<div class={`${style.mut_content_wrapper} ${style.mut_content_fix}`}>
						<Title size='big' delay='0s'>Hi, Iʼm Tyler</Title>
						<img class={`${style.mut_list_image}`} src='/assets/tyler.jpg' />
						<p>
							I was born in Vancouver in 1990 which is where I started to develop my design aesthetic influenced by Canadian West Coast styles and forms. In my early 20ʼs I spent 4 years 
							living in New Zealand and traveled throughout Japan and Peru which had a lasting impact on the way I approach web design. I pride myself on my minimalist, muted, succinct 
							designs and straight-forward user experiences. Iʼm self-taught in JavaScript, C#, golang and Java and continue to thrive in the fast paced nature of each ecosystem. Iʼm a capable 
							software developer with 7 years experience in the industry which began in 2011 while working as an analyst in Calgary AB, from there I started my own company and 
							saw it through until 2016 when I moved back to Calgary. Since moving back Iʼve worked for startups and freelanced, during which time Iʼve continued to hone my design skills. 
							The collective problems we face in the industry (and my morning coffee) are what get me up in the morning, and the anticipation of solving these same problems makes me excited for the 
							future.
						</p>
						<button type='button' onClick={this.onModalOpen}>
							<Ripple />
							Send me an email
						</button>
					</div>
				</Circle>
				<Circle name='Oireas' light={false} color={style.mut_circle_color_6} ref={c => this.circles.push(c)}>
					<div class={style.mut_content_wrapper}>
						<Title href='https://www.oireas.com' size='big' delay='0s'> Oireas.com </Title>
						<Title size='med' delay='0.2s'> preact/AWS Lambda </Title>
						<Title size='small' delay='0.4s'> 2018 </Title>
						<img class={`${style.mut_circle_image} mut_item`} src='/assets/oireas.png' />
						<p></p>
						<button type='button' onClick={this.onModalOpen}>
							<Ripple />
							Get in touch
						</button>
					</div>
				</Circle>
				<div class={style.mut_footer}>
					<a href='https://github.com/mutchco/portfolio' target='_blank'>&copy; Tyler Mutch {(new Date()).getFullYear()}</a>
					<a href='https://preactjs.com/' target='_blank'>built with preact</a>
				</div>
				<EmailModal open={modal} onClose={this.onModalClose} />
			</div>
		);
	}
}

export default Home;
