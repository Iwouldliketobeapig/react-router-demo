import React, { PureComponent } from 'react';

export default class Header extends PureComponent {

  render () {
    return (
      <pre className={this.props.className}>
        <code className={this.props.language}>
          {this.props.code}
        </code>
      </pre>
    )
  }
}