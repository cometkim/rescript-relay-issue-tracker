module Root = %relay.deferredComponent(Root.make)

let renderer = Routes.Root.Route.makeRenderer(
  ~prepareCode=_ => [Root.preload()],
  ~prepare=({environment}) => {
    RootQuery_graphql.load(
      ~environment,
      ~variables={
        owner: Config.owner,
        name: Config.name,
      },
      ~fetchPolicy=StoreOrNetwork,
      (),
    )
  },
  ~render=props => {
    <Root queryRef=props.prepared> {props.childRoutes} </Root>
  },
  (),
)

