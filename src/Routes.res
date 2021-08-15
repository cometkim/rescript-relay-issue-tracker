let routes = RescriptRelayRouter.RouteFamily.make(
  ~matchUrl=url => {
    switch url.path {
    | list{} => Some(#Home)
    | list{"issue", issueId} => Some(#IssueDetail(issueId))
    | _ => None
    }
  },
  ~prepare=route => {
    switch route {
    | #Home => {
        RootLazy.preload()
        HomeRootLazy.preload()

        #Home(
          RootQuery_graphql.load(
            ~environment=RelayEnv.environment,
            ~variables={
              owner: Config.owner,
              name: Config.name,
            },
            ~fetchPolicy=StoreOrNetwork,
            (),
          ),
          HomeRootQuery_graphql.load(
            ~environment=RelayEnv.environment,
            ~variables={
              owner: Config.owner,
              name: Config.name,
            },
            ~fetchPolicy=StoreOrNetwork,
            (),
          ),
        )
      }
    | #IssueDetail(issueId) => {
        RootLazy.preload()
        IssueDetailRootLazy.preload()

        #IssueDetail(
          RootQuery_graphql.load(
            ~environment=RelayEnv.environment,
            ~variables={
              owner: Config.owner,
              name: Config.name,
            },
            ~fetchPolicy=StoreOrNetwork,
            (),
          ),
          IssueDetailRootQuery_graphql.load(
            ~environment=RelayEnv.environment,
            ~variables={
              id: issueId,
            },
            ~fetchPolicy=StoreOrNetwork,
            (),
          ),
        )
      }
    }
  },
  ~render=route => {
    switch route {
    | #Home(rootQueryRef, homeRootQueryRef) =>
      <RootLazy queryRef=rootQueryRef> <HomeRootLazy queryRef=homeRootQueryRef /> </RootLazy>
    | #IssueDetail(rootQueryRef, issueDetailQueryRef) =>
      <RootLazy queryRef=rootQueryRef>
        <IssueDetailRootLazy queryRef=issueDetailQueryRef />
      </RootLazy>
    }
  },
)

let routerContext = RescriptRelayRouter.make([routes])
