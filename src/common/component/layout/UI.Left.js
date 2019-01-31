import React, { PureComponent } from 'react';
import style from './left.module.scss';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {

  render () {
    return (
      <div className={style.header}>
        <h1>teat</h1>
        <div className={style['header-program']}>
          <h2>传参</h2>
          <Link to="/user/123456789">类'/user/:id'</Link>
        </div>
      </div>
    )
  }
}