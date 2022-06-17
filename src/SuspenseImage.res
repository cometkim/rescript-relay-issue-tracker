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
    | Rejected(exn)

  type record = {
    mutable status: status,
    value: Promise.t<string>,
  }

  module Cache = {
    type t = Belt.HashMap.String.t<record>

    let make = () => {
      Belt.HashMap.String.make(~hintSize=100)
    }
  }

  @module("react")
  external getCacheForType: (~make: unit => Cache.t) => Cache.t = "unstable_getCacheForType"

  @inline
  let getCache = () => {
    getCacheForType(~make=Cache.make)
  }

  let read = (cache, src) => {
    let record = cache->Belt.HashMap.String.get(src)

    switch record {
    | None => {
        let thenable = Promise.make((resolve, reject) => {
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
        ->Promise.then(src => {
          record.status = Resolved(src)
          Promise.resolve(src)
        })
        ->Promise.catch(error => {
          record.status = Rejected(error)
          Promise.resolve(src)
        })
        ->ignore

        cache->Belt.HashMap.String.set(src, record)->ignore
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
let make = (~src, ~alt=?, ~className=?) => {
  ImageCache.getCache()->ImageCache.read(src)
  <img src ?alt ?className />
}
