//! A tiny example with an initially unset state

use eventually::Aggregate;
use std::future;

#[derive(Default)]
struct AssetPosition(Option<Coordinates>);

impl AssetPosition {
    fn update(&mut self, x: f64, y: f64, z: f64) {
        self.0 = Some(Coordinates { x, y, z })
    }
}

struct Coordinates {
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

struct AssetPositionAggregate;

impl Aggregate for AssetPositionAggregate {
    type Id = &'static str;
    type State = AssetPosition;
    type Event = AssetPositionUpdated;
    type Command = UpdateAssetPosition;
    type Error = &'static str;

    fn apply(mut state: Self::State, event: Self::Event) -> Result<Self::State, Self::Error> {
        let AssetPositionUpdated { x, y, z } = event;
        state.update(x, y, z);
        Ok(state)
    }

    fn handle<'a, 's: 'a>(
        &'a self,
        _id: &'s Self::Id,
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
    let _aggregate = AssetPositionAggregate;
}
