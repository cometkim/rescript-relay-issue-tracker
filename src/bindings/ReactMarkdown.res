type customComponentMap

type imageComponent = (
  ~src: string,
  ~alt: option<string>,
  ~className: option<string>,
) => React.element

@obj
external makeCustomComponentMap: (~image: imageComponent=?, unit) => customComponentMap = ""

let makeProps = (~children: string, ~components: option<customComponentMap>=?, ()) =>
  {
    "children": children,
    "components": components,
  }

@module("react-markdown")
external make: React.component<'a> = "default"
