import React, { PureComponent } from 'react';
import style from './activeNavLink.module.scss';
import { NavLink } from 'react-router-dom';

export default class Header extends PureComponent {

  render () {
    return (
      <NavLink activeClassName={style.active} {...this.props}/>
    )
  }
}