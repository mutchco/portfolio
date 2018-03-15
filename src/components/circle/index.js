import { h, Component } from 'preact';

import style from './style';

let colors = Object.values(style).filter(item => (item.indexOf('color') > 0));
let anims = Object.values(style).filter(item => (item.indexOf('anim') > 0));

class Circle extends Component {

  constructor(opts) {
    super();

    this.clickHandler = this.clickHandler.bind(this);
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

  build(left, top) {

    this.top = top;
    this.left = left;
    this.color = colors.shift();
    this.anim = anims.shift();

    this.circle.classList.addMultiple(this.color, this.anim);
    this.circle.style.top = `${this.top}px`;
    this.circle.style.left = `${this.left}px`;
    this.circle.addEventListener('click', this.circleClick);

    window.setTimeout(function () {
      this.circle.classList.add(style.mut_circle_ready);
    }.bind(this), 25);

  }

  componentDidMount() {
    this.circle.setLocation = this.setLocation;
    this.circle.build = this.build;
    this.circle.addEventListener('click', this.clickHandler);
  }

  render({ children }) {

    return (
      <div class={`${style.mut_circle} ${style.mut_circle_closed}`} ref={c => this.circle = c}>
        <div class={style.mut_image_container}>
          <img src='/assets/expanded.png' />
          <div class={style.mut_gradient}></div>
        </div>
        {children}
      </div>
    );
  }

}

export default Circle;
