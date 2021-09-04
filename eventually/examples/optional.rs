//! A tiny example showing how to use the [`optional::Aggregate`]

use eventually::optional::Aggregate as OptionalAggregate;
use std::future;

struct AssetPosition {
    x: f64,
    y: f64,
    z: f64,
}

struct UpdateAssetPosition {
    x: f64,
    y: f64,
    z: f64,
}

struct AssetPositionUpdated {
    x: f64,
    y: f64,
    z: f64,
}

struct AssetPositionOptionalAggregate;

impl OptionalAggregate for AssetPositionOptionalAggregate {
    type Id = &'static str;
    type State = AssetPosition;
    type Event = AssetPositionUpdated;
    type Command = UpdateAssetPosition;
    type Error = &'static str;

    fn apply_first(event: Self::Event) -> Result<Self::State, Self::Error> {
        let AssetPositionUpdated { x, y, z } = event;
        let state = AssetPosition { x, y, z };
        Ok(state)
    }

    fn apply_next(mut state: Self::State, event: Self::Event) -> Result<Self::State, Self::Error> {
        let AssetPositionUpdated { x, y, z } = event;
        state.x = x;
        state.y = y;
        state.z = z;
        Ok(state)
    }

    fn handle_first<'s, 'a: 's>(
        &'s self,
        _id: &'a Self::Id,
        command: Self::Command,
    ) -> futures::future::BoxFuture<'s, Result<Option<Vec<Self::Event>>, Self::Error>>
    where
        Self: Sized,
    {
        let UpdateAssetPosition { x, y, z } = command;
        let events = Some(vec![AssetPositionUpdated { x, y, z }]);
        Box::pin(future::ready(Ok(events)))
    }

    fn handle_next<'a, 's: 'a>(
        &'a self,
        _id: &'a Self::Id,
        _state: &'s Self::State,
        command: Self::Command,
    ) -> futures::future::BoxFuture<'a, Result<Option<Vec<Self::Event>>, Self::Error>>
    where
        Self: Sized,
    {
        let UpdateAssetPosition { x, y, z } = command;
        let events = Some(vec![AssetPositionUpdated { x, y, z }]);
        Box::pin(future::ready(Ok(events)))
    }
}

fn main() {
    let optional_aggregate = AssetPositionOptionalAggregate;
    let _aggregate = optional_aggregate.as_aggregate();
}
