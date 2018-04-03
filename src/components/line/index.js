import { h, Component } from 'preact';

import styles from './style';

class Line extends Component {

  render(props) {

    return (<div class={`${styles.mut_line} ${props['style-class']}`} style={`height: ${props.size}px`}></div>)

  }

}

export default Line;
