module IssueDetailRoot = %relay.deferredComponent(IssueDetailRoot.make)

let renderer = Routes.Root.IssueDetailRoot.Route.makeRenderer(
  ~prepareCode=_ => [IssueDetailRoot.preload()],
  ~prepare=({environment, id}) => {
    IssueDetailRootQuery_graphql.load(
      ~environment,
      ~variables={
        id: id,
      },
      ~fetchPolicy=StoreOrNetwork,
      (),
    )
  },
  ~render=props => {
    <IssueDetailRoot queryRef=props.prepared />
  },
  (),
)

