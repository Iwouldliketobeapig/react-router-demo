import React, { PureComponent } from 'react';
import hljs from 'highlight.js';
import style from './path.module.scss';
import UITitleHljs from 'src/common/component/hljs/UI.TitleHljs';

hljs.initHighlightingOnLoad()

export default class Parameter extends PureComponent {

  constructor (props) {
    super();
  }
  
  render () {
    return (
      <div className={style.path}>
        <h3>显示id: {this.props.match.params.id}</h3>
        <UITitleHljs 
          title="这样写Link"
          code={`<Link to="/parameter/123456789">类'/user/:id'</Link>`}
          language="html"
        />
        <UITitleHljs 
          title="这样写Route"
          code={`<Route path="/parameter/:id" component={ParameterPath}/>`}
          language="html"
        />
        <UITitleHljs
          title="在ParameterPath组件中这样获取"
          code="this.props.match.params.id"
          language="javascript"
        />
      </div>
    )
  }

}