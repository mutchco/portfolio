import { h, Component } from 'preact';

import styles from './style';

class Bubble extends Component {

  render({ title, subtitle, size, color, style }) {

    const titleSize = size / 14;
    const subtitleSize = size /28;

    return (
      <div class={`${styles.mut_bubble} ${style}`} style={`width: ${size}px; height: ${size}px; background: ${color}`}>
        <h4 style={`font-size: ${titleSize}px`}>{ title || 'Title' } </h4>
        <h5 style={`font-size: ${subtitleSize}px`}>{ subtitle || 'Subtitle' } </h5>
      </div>
    );

  }

}

export default Bubble;
