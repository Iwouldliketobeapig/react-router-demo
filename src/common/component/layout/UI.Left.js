import React, { PureComponent } from 'react';
import style from './left.module.scss';
import { withRouter } from 'react-router';
import ActiveNavLink from './UI.ActiveNavLink';

export default withRouter(class Header extends PureComponent {

  render () {
    return (
      <div className={style.header}>
        <h1>react-router-demo</h1>
        <div className={style['header-program']}>
          <h2>传参</h2>
          <ActiveNavLink to="/parameter/id/123456789">类'/user/:id'</ActiveNavLink>
          <ActiveNavLink
            to={{
              pathname: "/parameter/state",
              state: {
                userName: '我愿是猪',
                email: 'woyuanshizhu@qq.com'
              }
            }}

          >
            通过state传值
          </ActiveNavLink>
        </div>
      </div>
    )
  }
});