import { h, Component } from 'preact';

import style from './style';

/** Class representing an animated title */
class Title extends Component {

  /**
    * Brings the title content into view
  */ 
  open = () => {
    window.setTimeout(function () {
      this.container.classList.add(style.mut_title_ready);
    }.bind(this), 300);
  };

  /**
    * Hides the content from view
  */ 
  close = () => {
    this.container.classList.remove(style.mut_title_ready);
  };

  /**
    * Render method, sets font-size, animation delay and sets content as
    * an anchor tag based on href prop
  */ 
  render({ size, delay, href, children }) {

    let content;
    let classes = [style.mut_title, 'mut_item'];

    switch (size) {
      case 'small':
        classes.push(style.mut_small_title);
        break;
      case 'med':
        classes.push(style.mut_med_title);
        break;
      case 'large':
        classes.push(style.mut_large_title);
        break;
      case 'big':
        classes.push(style.mut_big_title);
        break;
    }

    if (!!href) {
      content = (<a href={href} target='_blank' ref={s => this.span = s}>{children}</a>);
    } else {
      content = (<span ref={s => this.span = s}>{children}</span>);
    }


    return (
      <div class={classes.join(' ')} ref={c => this.container = c} style={`transition-delay: ${delay}`}>
        {children}
        {content}
      </div>
    );

  }
}

export default Title;
