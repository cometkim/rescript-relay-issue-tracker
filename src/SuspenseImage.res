module Image = {
  type t
  type onload = unit => unit
  type onerror = exn => unit

  @new external make: unit => t = "Image"

  @set external setSource: (t, string) => unit = "src"
  @set external setOnLoad: (t, onload) => unit = "onload"
  @set external setOnError: (t, onerror) => unit = "onerror"
}

module ImageCache = {
  @val external throw: 'a => unit = "throw"

  type status =
    | Pending
    | Resolved(string)
    | Rejected(Js.Promise.error)

  type record = {
    mutable status: status,
    value: Js.Promise.t<string>,
  }

  type t = Belt.Map.String.t<record>

  @module("react")
  external get: (unit => t) => t = "unstable_getCacheForType"

  let make = () => {
    Belt.Map.String.empty
  }

  let read = (cache, src) => {
    let record = cache->Belt.Map.String.get(src)

    switch record {
    | None => {
        let thenable = Js.Promise.make((~resolve, ~reject) => {
          let image = Image.make()
          image->Image.setOnLoad(_ => resolve(. src))
          image->Image.setOnError(exn => reject(. exn))
          image->Image.setSource(src)
        })

        let record = {
          status: Pending,
          value: thenable,
        }

        thenable
        |> Js.Promise.then_(src => {
          record.status = Resolved(src)
          Js.Promise.resolve(src)
        })
        |> Js.Promise.catch(error => {
          record.status = Rejected(error)
          Js.Promise.resolve(src)
        })
        |> ignore

        cache->Belt.Map.String.set(src, record)->ignore
      }
    | Some(record) =>
      switch record {
      | {status: Resolved(_), _} => ()
      | {status: Rejected(error), _} => throw(error)
      | {status: Pending, value} => throw(value)
      }
    }
  }
}

@react.component
let make = (~src, ~alt, ~className) => {
  let cache = ImageCache.get(ImageCache.make)
  cache->ImageCache.read(src)

  <img src alt className />
}
