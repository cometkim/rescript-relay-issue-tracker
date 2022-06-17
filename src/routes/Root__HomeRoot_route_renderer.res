module HomeRoot = %relay.deferredComponent(HomeRoot.make)

let renderer = Routes.Root.HomeRoot.Route.makeRenderer(
  ~prepareCode=_ => [HomeRoot.preload()],
  ~prepare=({environment}) => {
    HomeRootQuery_graphql.load(
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
    <HomeRoot queryRef=props.prepared />
  },
  (),
)

