type root

@val @return(nullable)
external getElementById: string => option<Dom.element> = "document.getElementById"

@module("react-dom")
external createRoot: Dom.element => root = "createRoot"

@send external render: (root, React.element) => unit = "render"

let renderRootAtElementWithId = (content, id) =>
  switch getElementById(id) {
  | None =>
    raise(
      Invalid_argument(
        "ReactDomExperimental.renderRootAtElementWithId: no element of id " ++
        id ++ " found in the HTML.",
      ),
    )
  | Some(element) => createRoot(element)->render(content)
  }
