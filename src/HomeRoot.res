module HomeRootQuery = %relay(`
  query HomeRootQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      # Compose the data dependencies of child components
      # by spreading their fragments:
      ...Issues_repository
    }
  }
`)

@react.component
let make = (~queryRef) => {
  let data = HomeRootQuery.usePreloaded(~queryRef, ())

  switch data.repository {
  | Some(repository) => <Issues repository={repository.fragmentRefs} />
  | None => React.null
  }
}
