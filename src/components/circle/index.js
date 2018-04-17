import { h, Component } from 'preact';

import style from './style';

/** @constant {Array[]} anims - Animation css classes*/
const anims = Object.keys(style).map(e => style[e]).filter(item => (item.indexOf('anim') > 0));

/** Class representing a floating circle  */
class Circle extends Component {

  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  /**
    * Click handler to open the circle
  */
  clickHandler() {

    // Remove animation class
    this.base.classList.remove(this.anim);

    requestAnimationFrame(() => {

      //Replace closed class with open class
      this.base.classList.replace(style.mut_circle_closed, style.mut_circle_opening);

      //Show the close button and change header font if circle is light
      if (this.light === true) {
        document.body.classList.add(style.mut_body_light);
      }

      document.body.classList.add(style.mut_body_close_shown);


      requestAnimationFrame(() => {
        //Replace opening class with frank class (intermediary)
        this.base.classList.replace(style.mut_circle_opening, style.mut_circle_frank);
      });

      setTimeout(() => {
        //Replace frank class with open class
        this.base.classList.replace(style.mut_circle_frank, style.mut_circle_open);
      }, 200);

      //Add the close handler for this circle to close button
      document.getElementById('mut_close_button').onclick = this.closeHandler.bind(this);

      //Trigger open events on all children where they exist
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].open && this.items[i].open();
      }

      gtag('event', 'navigation', {
        'event_category' : 'bubble-open',
        'event_label' : this.name
      });
    });
  }

  /**
    * Close handler for the circle
  */ 
  closeHandler() {
 
    //Replace open class with closing class
    this.base.classList.replace(style.mut_circle_open, style.mut_circle_closing);

    requestAnimationFrame(() => {

      //Add fred class (intermediary)
      this.base.classList.add(style.mut_circle_fred);

      requestAnimationFrame(() => {

        //Add closed class to circle
        this.base.classList.add(style.mut_circle_closed);
        this.base.classList.removeMultiple(style.mut_circle_closing, style.mut_circle_fred);

        //Hide close button and change header color back
        if (this.light === true) {
          document.body.classList.remove(style.mut_body_light);
        }
        
        document.body.classList.remove(style.mut_body_close_shown);
      });

    });

    //Trigger close events on all children that have it
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].close && this.items[i].close();
    }
  }

  /**
    * Build the circle with the top and left coordinates
    * @param {Number} left - the left position (in pixels) for the circle 
    * @param {Number} top - the top position (in pixels) for the circle 
  */ 
  build(left, top) {

    this.top = top;
    this.left = left;
    this.anim = anims.shift();

    this.base.style.top = `${this.top}px`;
    this.base.style.left = `${this.left}px`;

    //Show circle
    requestAnimationFrame(() => {
      this.base.classList.add(style.mut_circle_closed);

      //Add animation class
      setTimeout(() => {
        this.base.classList.add(this.anim)
      }, 100)
    });

  }

  /**
    * CDM function, add event listeners and get children with 'mut_item' class
  */ 
  componentDidMount() {
    this.base.build = this.build;
    this.base.addEventListener('click', this.clickHandler);
    this.items = this.base.querySelectorAll('.mut_item');
  }

  /**
    * Render function, accepts props containing color and children
  */ 
  render({ name, light, color, children }) {

    this.name = name;
    this.light = light;
    this.color = color;

    const styleClass = `${style.mut_circle} ${color}` + (this.light === false ? ' ' + style.mut_circle_light : '');

    return (
      <div class={styleClass}>
        {children}
      </div>
    );
  }

}

export default Circle;
