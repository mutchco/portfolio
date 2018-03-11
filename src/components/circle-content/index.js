import { h, Component } from 'preact';

import Sphere from '../sphere';
import Line from '../line';
import Bubble from '../bubble';

import style from './style';

class CircleContent extends Component {

  render({ title, subtitle, description, img, color, children }) {

    const width = Math.max(window.innerWidth, window.innerHeight) / 2;
    const titleSize = width * 0.7;
    const size = width;

    return (
      <div class={`${style.mut_content_container} ${style.mut_content_acm}`}>

        <Sphere num={4} size={size} color={color.main} style={style.mut_acm_sphere} />

        <Line size={size} color={color.main} style={style.mut_acm_line} />

        <Bubble size={size / 2} color={color.accent} style={style.mut_acm_bubble} title='Action Matrix' subtitle='A FUCKING SUBTITLE' />

        <div class={style.mut_content_center} style={`height: ${size}px; width: ${size}px`}>
          <div class={`${style.mut_content_col} ${style.mut_text}`}>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <h6 style={`border-color: ${color.accent}`}>{description}</h6>
            <p class={style.mut_barcode}>action<br />matrix</p>
          </div>
          <div class={`${style.mut_line}`}  style={`background: ${color.main};`}></div>
          <div class={style.mut_content_col}>
            <img src={img} class={style.mut_image} />
            <div class={`${style.mut_text} ${style.mut_paragraph}`}>
              Text Text Text
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default CircleContent;
