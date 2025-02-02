<br />

<div align="center">
    <img alt="Eventually" src = "./resources/logo.png" width = 300>
</div>

<br />

<div align="center">
    <strong>
        Event Sourcing for Rust
    </strong>
</div>

<br />

<div align="center">
    <!-- Testing pipeline -->
    <a href="https://github.com/get-eventually/eventually-rs/actions?query=workflow%3A%22Rust+%28stable%29%22">
        <img alt="GitHub Workflow Status"
        src="https://img.shields.io/github/actions/workflow/status/get-eventually/eventually-rs/ci.yml?branch=main&style=flat-square">
    </a>
    <!-- Codecov -->
    <a href="https://codecov.io/gh/get-eventually/eventually-rs">
            <img alt="Codecov"
            src="https://img.shields.io/codecov/c/github/get-eventually/eventually-rs?style=flat-square">
    </a>
    <!-- Crates.io -->
    <a href="https://crates.io/crates/eventually">
        <img alt="Crates.io"
        src="https://img.shields.io/crates/v/eventually?style=flat-square">
    </a>
    <!-- Github pages docs -->
    <a href="https://get-eventually.github.io/eventually-rs/eventually">
        <img alt="latest main docs"
        src="https://img.shields.io/badge/docs-main-important?style=flat-square" />
    </a>
    <!-- Docs.rs -->
    <a href="https://docs.rs/eventually">
        <img alt="docs.rs docs"
        src="https://img.shields.io/badge/dynamic/json?style=flat-square&color=blue&label=docs.rs&query=%24.crate.newest_version&url=https%3A%2F%2Fcrates.io%2Fapi%2Fv1%2Fcrates%2Feventually" />
    </a>
    <!-- License -->
    <a href="https://github.com/get-eventually/eventually-rs/blob/main/LICENSE">
        <img alt="GitHub license"
        src="https://img.shields.io/github/license/eventually-rs/eventually-rs?style=flat-square">
    </a>
    <!-- Matrix -->
    <a href="https://matrix.to/#/#get-eventually:matrix.org">
        <img alt="Matrix Chat"
        src="https://img.shields.io/matrix/get-eventually:matrix.org?logo=matrix&style=flat-square">
    </a>
</div>

<br />


Collection of traits and other utilities to help you build your Event-sourced applications in Rust.

## Installation

> ⚠️ **v0.5.0 is under active development**: Breaking changes are expected. If you are using `eventually` as a git dependency you should use a pinned version!

Add `eventually` into your project dependencies:

```toml
[dependencies]
eventually = { version = "0.5.0", features = ["full"], git = "https://github.com/get-eventually/eventually-rs" }
```

### Note on semantic versioning

This library is **actively being developed**, and prior to `v1` release the following [Semantic versioning]()
is being adopted:

* Breaking changes are tagged with a new `MINOR` release
* New features, patches and documentation are tagged with a new `PATCH` release

## What is Event Sourcing?

Before diving into the crate's internals, you may be wondering what Event Sourcing is.

From [eventstore.com](https://eventstore.com/) introduction:

>Event Sourcing is an architectural pattern that is gaining popularity as a method for building modern systems. Unlike traditional databases which only store and update the current state of data, event-sourced systems store all changes as an immutable series of events in the order that they occurred and current state is derived from that event log.

## How does `eventually-rs` support Event Sourcing?

`eventually` exposes all the necessary abstraction to model your
Domain Entities (in lingo, _Aggregates_) using Domain Events, and
to save these Events using an _Event Store_ (the append-only event log).

For more information, [check out the crate documentation](https://docs.rs/eventually).

You can also take a look at the [`bank-accounting`](https://github.com/get-eventually/eventually-rs/tree/main/examples/bank-accounting) example,
showcasing Event-sourced application for a generic (and simple) Bank Accounting bounded context.

### Event Store backends

`eventually-rs` provides the necessary abstractions for modeling and interacting
with an Event Store.

These are the following officially-supported backend implementations:
* [`eventually::event::store::InMemory`](./eventually/src/event/store.rs): simple inmemory Event Store implementation, using `std::collections::HashMap`,
* [`eventually-postgres`](./eventually-postgres): Event Store and Aggregate Root Repository implementations for PostgreSQL databases.

## Contributing

You want to contribute to `eventually-rs` but you don't know where to start?

First of all, thank you for considering contributing ❤️

You can head over our [`CONTRIBUTING`](./CONTRIBUTING.md) section to know
how to contribute to the project, and — in case you don't have a clear idea what
to contribute — what is most needed needed from contributors.

## License

This project is licensed under the [MIT license](LICENSE).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in `eventually-rs` by you, shall be licensed as MIT, without any additional terms or conditions.
