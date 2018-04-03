import { h, Component } from 'preact';

import style from './style';

class Title extends Component {

  open() {
    window.setTimeout(function () {
      this.container.classList.add(style.mut_title_ready);
    }.bind(this), 300);
  }

  close() {
    this.container.classList.remove(style.mut_title_ready);
  }

  componentDidMount() {
    this.base.open = this.open.bind(this);
    this.base.close = this.close.bind(this);
  }

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
