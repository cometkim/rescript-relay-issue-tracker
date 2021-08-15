type root

@module("react-dom")
external createRoot: Dom.element => root = "createRoot"

@send external render: (root, React.element) => unit = "render"

let renderRootAtElementWithId: (React.element, string) => unit
