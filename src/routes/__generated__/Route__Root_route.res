// @generated
// This file is autogenerated from `routes.json`, do not edit manually.
@live
let makeLink = () => {
  `/`
}

@inline
let routePattern = "/"

@live
let isRouteActive = ({pathname}: RelayRouter.Bindings.History.location, ~exact: bool=false, ()): bool => {
  RelayRouter.Internal.matchPathWithOptions({"path": routePattern, "end": exact}, pathname)->Belt.Option.isSome
}

@live
let useIsRouteActive = (~exact=false, ()) => {
  let location = RelayRouter.Utils.useLocation()
  React.useMemo2(() => isRouteActive(location, ~exact, ()), (location, exact))
}
@live
type subRoute = [#HomeRoot]

@live
let useActiveSubRoute = (): option<[#HomeRoot]> => {
  let location = RelayRouter.Utils.useLocation()
  React.useMemo1(() => {
    let {pathname} = location
    if RelayRouter.Internal.matchPath("/", pathname)->Belt.Option.isSome {
      Some(#HomeRoot)
    } else {
      None
    }
  }, [location])
}

@live
type prepareProps = {
  environment: RescriptRelay.Environment.t,
  location: RelayRouter.Bindings.History.location,
}

let makeRouteKey = (
  ~pathParams: Js.Dict.t<string>,
  ~queryParams: RelayRouter.Bindings.QueryParams.t
): string => {
  ignore(pathParams)
  ignore(queryParams)

  "Root:"


}

@live
let makePrepareProps = (. 
  ~environment: RescriptRelay.Environment.t,
  ~pathParams: Js.Dict.t<string>,
  ~queryParams: RelayRouter.Bindings.QueryParams.t,
  ~location: RelayRouter.Bindings.History.location,
): prepareProps => {
  ignore(pathParams)
  ignore(queryParams)
  {
    environment: environment,

    location: location,
  }
}

@live
type renderProps<'prepared> = {
  childRoutes: React.element,
  prepared: 'prepared,
  environment: RescriptRelay.Environment.t,
  location: RelayRouter.Bindings.History.location,
}

@live
type renderers<'prepared> = {
  prepare: prepareProps => 'prepared,
  prepareCode: option<(. prepareProps) => array<RelayRouter.Types.preloadAsset>>,
  render: renderProps<'prepared> => React.element,
}

@obj
external makeRenderer: (
  ~prepare: prepareProps => 'prepared,
  ~prepareCode: prepareProps => array<RelayRouter.Types.preloadAsset>=?,
  ~render: renderProps<'prepared> => React.element,
  unit
) => renderers<'prepared> = ""

