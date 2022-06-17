let (_cleanup, routerContext) = RelayRouter.Router.make(
  ~routes=RouteDeclarations.make(~prepareDisposeTimeout=5 * 60 * 1000, ()),
  ~environment=RelayEnv.environment,
  ~routerEnvironment=RelayRouter.RouterEnvironment.makeBrowserEnvironment(),
)
