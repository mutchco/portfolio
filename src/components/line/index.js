import { h, Component } from 'preact';

import styles from './style';

class Line extends Component {

  render({ size, color, style }) {

    return (<div class={`${styles.mut_line} ${style}`} style={`height: ${size}px; background: ${color}`}></div>)

  }

}

export default Line;
