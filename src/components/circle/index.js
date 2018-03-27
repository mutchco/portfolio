import { h, Component } from 'preact';

import style from './style';

const anims = Object.values(style).filter(item => (item.indexOf('anim') > 0));

class Circle extends Component {

  constructor(opts) {
    super();

    this.clickHandler = this.clickHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  clickHandler() {

    this.base.classList.replace(style.mut_circle_closed, style.mut_circle_opening);
    this.base.classList.remove(this.anim);

    setTimeout(function () {
      this.base.classList.replace(style.mut_circle_opening, style.mut_circle_frank);
    }.bind(this), 2);

    setTimeout(function () {
      document.body.classList.addMultiple(this.color, style.mut_body_close_shown, style.mut_body_light);
    }.bind(this), 50);

    setTimeout(function() {
      this.base.classList.replace(style.mut_circle_frank, style.mut_circle_open);
    }.bind(this), 200);

    document.getElementById('mut_close_button').onclick = this.closeHandler.bind(this);

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].open && this.items[i].open();
    }
  }

  closeHandler() {

    this.base.classList.replace(style.mut_circle_open, style.mut_circle_closing);

    setTimeout(function () {
      this.base.classList.replace(style.mut_circle_closing, this.anim);
    }.bind(this), 300);

    window.setTimeout(function () {
      this.base.classList.addMultiple(style.mut_circle_closed);
      document.body.classList.removeMultiple(this.color, style.mut_body_close_shown, style.mut_body_light);
    }.bind(this), 1);

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].open && this.items[i].close();
    }
  }

  build(left, top) {

    this.top = top;
    this.left = left;
    this.anim = anims.shift();

    this.base.classList.add(this.anim);
    this.base.style.top = `${this.top}px`;
    this.base.style.left = `${this.left}px`;
    this.base.addEventListener('click', this.baseClick);

    window.setTimeout(function () {
      this.base.classList.add(style.mut_circle_ready);
    }.bind(this), 25);

  }

  componentDidMount() {
    this.base.setLocation = this.setLocation;
    this.base.build = this.build;
    this.base.addEventListener('click', this.clickHandler);
    this.items = this.base.querySelectorAll('.mut_item');
  }

  render({ color, children }) {

    this.color = color;

    return (
      <div class={`${style.mut_circle} ${style.mut_circle_closed} ${color}`}>
        {children}
      </div>
    );
  }

}

export default Circle;
