import { h, Component } from 'preact';

import style from './style';

let colors = Object.values(style).filter(item => (item.indexOf('color') > 0));
let anims = Object.values(style).filter(item => (item.indexOf('anim') > 0));

class Circle extends Component {

  constructor(opts) {
    super();

    this.clickHandler = this.clickHandler.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  clickHandler() {

    this.circle.classList.replace(style.mut_circle_closed, style.mut_circle_opening);
    this.circle.classList.remove(this.anim);

    setTimeout(function () {
      this.circle.classList.replace(style.mut_circle_opening, style.mut_circle_frank);
    }.bind(this), 2);

    setTimeout(function () {
      document.body.classList.addMultiple(this.color, style.mut_body_close_shown);
      if (this.luminance > 0.279) {
        document.body.classList.add(style.mut_body_light);
      } else {
        document.body.classList.remove(style.mut_body_light);
      }
    }.bind(this), 50);

    setTimeout(function() {
      this.circle.classList.replace(style.mut_circle_frank, style.mut_circle_open);
    }.bind(this), 200);

    document.getElementById('mut_close_button').onclick = this.closeHandler.bind(this);
  }

  closeHandler() {

    this.circle.classList.replace(style.mut_circle_open, style.mut_circle_closing);

    setTimeout(function () {
      this.circle.classList.replace(style.mut_circle_closing, this.anim);
    }.bind(this), 300);

    window.setTimeout(function () {
      this.circle.classList.addMultiple(style.mut_circle_closed);
      document.body.classList.remove(this.color);
      document.body.classList.remove(style.mut_body_close_shown);
      document.body.classList.remove(style.mut_body_light);
    }.bind(this), 1);
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

    const factor = Math.max(window.innerWidth, window.innerHeight) / 8;

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

    this.color = colors.shift();
    this.anim = anims.shift();

    this.circle.classList.addMultiple(this.color, this.anim);
    this.circle.style.top = `${this.y}px`;
    this.circle.style.left = `${this.x}px`;
    this.circle.addEventListener('click', this.circleClick);

    window.setTimeout(function () {
      this.circle.classList.add(style.mut_circle_ready);

      let rgb = window.getComputedStyle(this.circle, null).getPropertyValue('background-color');

      if (rgb.indexOf('rgb') >= 0) {
        rgb = rgb.split('(')[1].split(')')[0].split(',');
        rgb = { r: rgb[0], g: rgb[1], b: rgb[2] };
      } else {
        rgb = this.hexToRgb(this.circle.style.backgroundColor);
      }

      for (let c in rgb) {
        let v = rgb[c] / 255;
        if (v < 0.03928) {
          v = v / 12.92;
        } else {
          v = ((v + 0.055) / 1.055) ^ 2.4
        }
        rgb[c] = v;
      }

      this.luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;

    }.bind(this), 25);

    return { x: this.x, y: this.y };
  }

  hexToRgb(hex) {
    const r = hex >> 16;
    const g = hex >> 8 & 0xFF;
    const b = hex & 0xFF;
    return {r,g,b};
}


  componentDidMount() {
    this.circle.setLocation = this.setLocation;
    this.circle.build = this.build;
    this.circle.addEventListener('click', this.clickHandler);
  }

  render({ children }) {

    return (
      <div class={`${style.mut_circle} ${style.mut_circle_closed}`} ref={c => this.circle = c}>
        {children}
      </div>
    );
  }

}

export default Circle;
