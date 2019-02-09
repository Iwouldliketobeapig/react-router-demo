import React, { PureComponent } from 'react';
import style from './titleHljs.module.scss';
import Hljs from './UI.Hljs';

export default class Header extends PureComponent {

  render () {
    return (
      <>
        <h5 className={style.title}>{this.props.title}</h5>
        <Hljs className={style.hljs} code={this.props.code} language={this.props.language} />
      </>
    )
  }
}