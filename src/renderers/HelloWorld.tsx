import { Renderer, RendererProps } from "amis-core";
import React from "react";
import { CustomBaseSchema, schemaType } from "../Schema";


export interface HelloWorldSchema extends CustomBaseSchema {
  type: schemaType.HELLOWORLD;

  author?: string;
}

export interface HelloWorldProps
  extends RendererProps,
    Omit<HelloWorldSchema, 'type' | 'className'> {}


export class HelloWroldField extends React.Component<HelloWorldProps> {
  render(): React.ReactNode {
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
@Renderer({
  type: schemaType.HELLOWORLD
})
export class HelloWorldRenderer extends HelloWroldField {}



