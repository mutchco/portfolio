import { h, Component } from 'preact';

import style from './style';

const colors = [style.mut_circle_color_1, style.mut_circle_color_2, style.mut_circle_color_3, style.mut_circle_color_4, style.mut_circle_color_5];
const anims = [style.mut_circle_anim_1, style.mut_circle_anim_2, style.mut_circle_anim_3, style.mut_circle_anim_4, style.mut_circle_anim_5];

class Circle extends Component {

  constructor(opts) {
    super();

    this.clickHandler = this.clickHandler.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  clickHandler() {

    this.circle.classList.add(style.mut_circle_opening);
    this.circle.classList.remove(this.anim);

    setTimeout(function () {
      this.circle.classList.add(style.mut_circle_frank);
      this.circle.classList.remove(style.mut_circle_opening);
    }.bind(this), 2);

    window.setTimeout(function () {
      document.body.classList.addMultiple(this.color, style.mut_body_close_shown);
    }.bind(this), 50);

    setTimeout(function() {
      this.circle.classList.add(style.mut_circle_open);
      this.circle.classList.remove(style.mut_circle_frank);
    }.bind(this), 300);

    document.getElementById('mut_close_button').onclick = this.closeHandler.bind(this);
  }

  closeHandler() {

    this.starting = true;
    this.circle.className = style.mut_circle;
    this.circle.style.transition = 'none';
    this.circle.style.transform = 'scale(25)';
    this.circle.style.width = (this.radius * 2) + 'px';
    this.circle.style.height = (this.radius * 2) + 'px';
    this.circle.style.position = 'fixed';
    this.circle.style.zIndex = 10;
    this.circle.style.borderRadius = '50%';

    setTimeout(function () {
      this.circle.style.transition = 'all 0.2s ease-out';
      this.circle.style.transform = `translate(${this.x}px, ${this.y}px)`;
  		document.body.style.background = '#f7f1e3';
      if (this.color.light) {
        this.circle.dispatchEvent(new CustomEvent('toggleLight', { detail: true, bubbles: true }));
      }
      this.circle.dispatchEvent(new CustomEvent('toggleClose', { detail: false, bubbles: true  }));
    }.bind(this), 1);

    setTimeout(function() {
      this.circle.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
      this.circle.style.zIndex = 1;
    }.bind(this), 100);

    setTimeout(function () {
      this.circle.dispatchEvent(new Event('start'));
      this.starting = false;
    }.bind(this), 200);
  }

  setLocation(circles, defs) {

    this.defs = defs;
    this.x = this.getRandomWithin(defs.left, defs.right);
    this.y = this.getRandomWithin(defs.top, defs.bottom);

    for (let i = 0; i < circles.length; i++) {
      if(this.detectCollision(circles[i]) === true) {
        return this.setLocation(circles, defs);
      }
    }

    return this;
  }

  detectCollision(otherCircle) {

    const factor = this.radius * 3;

		const top = otherCircle.y - factor;
		const bottom = otherCircle.y + factor;
		const left = otherCircle.x - factor;
		const right = otherCircle.x + factor;

		return this.y > top && this.y < bottom && this.x > left && this.x < right;
	}

  getRandomWithin(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  build() {

    this.color = colors[this.getRandomWithin(1, 6) - 1];
    this.anim = anims[this.getRandomWithin(1, 6) - 1];

    this.circle.classList.addMultiple(this.color, this.anim);
    this.circle.style.top = `${this.y}px`;
    this.circle.style.left = `${this.x}px`;
    this.circle.addEventListener('click', this.circleClick);

    window.setTimeout(function () {
      this.circle.classList.add(style.mut_circle_ready);
    }.bind(this), 25);

    return { x: this.x, y: this.y };
  }

  componentDidMount() {
    this.circle.setLocation = this.setLocation;
    this.circle.build = this.build;
    this.circle.addEventListener('click', this.clickHandler);
  }

  render({ children }) {

    return (
      <div class={style.mut_circle} ref={c => this.circle = c}>
        {children}
      </div>
    );
  }

}

export default Circle;
