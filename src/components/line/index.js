import { h, Component } from 'preact';

import styles from './style';

class Line extends Component {

  render({ size }) {

    return (<div class={`${styles.mut_line}`} style={`height: ${size}px`}></div>)

  }

}

export default Line;
