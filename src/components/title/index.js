import { h, Component } from 'preact';

import style from './style';

/** Class representing an animated title */
class Title extends Component {

  /**
    * Brings the title content into view
  */ 
  open = () => {
    window.setTimeout(() => {
      this.setState({ open: true });
    }, 300);
  };

  /**
    * Hides the content from view
  */ 
  close = () => {
    this.setState({ open: false });
  };

  /**
    * CDM method, adds open and close methods to base element
  */
  componentDidMount() {
    this.base.open = this.open;
    this.base.close = this.close;
  }

  /**
    * Render method, sets font-size, animation delay and sets content as
    * an anchor tag or span based on href prop
  */ 
  render({ size, delay, href, children }, { open }) {

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

    if (open === true) {
      classes.push(style.mut_title_ready);
    }

    return (
      <div class={classes.join(' ')} style={`transition-delay: ${delay}`}>
        {children}
        {content}
      </div>
    );

  }
}

export default Title;
