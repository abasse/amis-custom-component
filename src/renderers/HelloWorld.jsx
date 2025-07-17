
const React = window.amisRequire("react");


export class HelloWroldField extends React.Component {
  render() {
    let {
      author,
      className,
      classnames: cx
    } = this.props

    return (
      <div className={cx('HelloWorld', className)}>
        <h1>Hello World</h1>
        <p className="author">
          { author }
        </p>
      </div>
    )
  }
}

export class HelloWorldRenderer extends HelloWroldField {}


// Register with AMIS
window.amisRequire("amis").Renderer({
  test: /(^|\/)hello-world/,
  type: "color-circle-component",
})(HelloWorldRenderer);


