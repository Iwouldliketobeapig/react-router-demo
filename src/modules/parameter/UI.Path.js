import React, { PureComponent } from 'react';
import hljs from 'highlight.js';

hljs.initHighlightingOnLoad()

export default class Parameter extends PureComponent {

  constructor (props) {
    super();
  }

  componentDidMount () {
    console.log(this.props.match);
  }
  
  render () {
    return (
      <div>
        <h5>这样写Link</h5>
        <pre>
          <code className="html">
            {`<Link to="/user/123456789">类'/user/:id'</Link>`}
          </code>
        </pre>
        <h5>这样写Route</h5>
        <pre>
          <code className="html">
            {`<Route path="/user/:id" component={ParameterPath}/>`}
          </code>
        </pre>
      </div>
    )
  }

}