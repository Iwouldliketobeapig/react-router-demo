import React, { PureComponent } from 'react';
import hljs from 'highlight.js';
import UITitleHljs from 'src/common/component/hljs/UI.TitleHljs';
import 'src/common/css/common.scss';

hljs.initHighlightingOnLoad()
const codeLink = `<ActiveNavLink
to={{
  path: "/parameter/state/123",
  state: {
    userName: '我愿是猪',
    email: 'woyuanshizhu@qq.com'
  }
}}
>
  通过state传值
</ActiveNavLink>`,
codeRoute = `<Route exact={true} path="/parameter/state" component={ParameterState} />`,
obtainParameter = `this.props.location.state.userName;
this.props.location.state.email;
`

export default class Parameter extends PureComponent {

  codeLink = codeLink;
  codeRoute = codeRoute;
  obtainParameter = obtainParameter;

  constructor (props) {
    super();
  }

  componentDidMount () {
    console.log(this.props.location.state);
    console.log(this.codeLink);
  }
  
  render () {
    return (
      <div>
        <h3 className="page-top-title">显示参数: {`userName: ${this.props.location.state.userName}， email: ${this.props.location.state.email}`}</h3>
        <UITitleHljs 
          title="这样写Link"
          code={this.codeLink}
          language="html"
        />
        <UITitleHljs 
          title="这样写Route"
          code={this.codeRoute}
          language="html"
        />
        <UITitleHljs
          title="ParameterState组件中这样获取"
          code={this.obtainParameter}
          language="javascript"
        />
      </div>
    )
  }

}