import { h, Component } from 'preact';

import styles from './style';

/** Class representing an animated line */
class Line extends Component {

	/**
    * Render method adds style class
  */ 
  render(props) {

  	const styleClass = props['style-class'] || '';

    return (<div class={`${styles.mut_line} ${styleClass}`} style={`height: ${props.size}px`}></div>)

  }

}

export default Line;
