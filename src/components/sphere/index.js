import { h, Component } from 'preact';

import styles from './style';

class Sphere extends Component {

  render(props) {

    const num = props.num;
    const styleClass = props['style-class'] || '';
    const circles = [];

    for (let i = 0; i < num; i++) {
     circles.push({});
    }

    return (<div class={`${styleClass}`}>
        {circles.map((c, idx) => {

          const _size = (100 / num) * (idx + 1)
          const position = (100 - _size) / 2;

          return (<div class={`${styles.mut_sphere} ${styleClass}`} style={`width: ${_size}%; height:${_size}%; top: ${position}%; left: ${position}%; z-index: ${10 - idx }; animation-delay: ${idx * 200}ms;`}></div>);
        })}
      </div>)

  }

}

export default Sphere;
