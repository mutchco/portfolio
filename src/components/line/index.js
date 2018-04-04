import { h, Component } from 'preact';

import styles from './style';

class Line extends Component {

  render(props) {

  	const styleClass = props['style-class'] || '';

    return (<div class={`${styles.mut_line} ${styleClass}`} style={`height: ${props.size}px`}></div>)

  }

}

export default Line;
