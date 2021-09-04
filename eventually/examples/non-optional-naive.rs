//! A tiny example with an initially unset state

use eventually::Aggregate;
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

struct AssetPositionAggregate;

impl Aggregate for AssetPositionAggregate {
    type Id = &'static str;
    type State = Option<AssetPosition>;
    type Event = AssetPositionUpdated;
    type Command = UpdateAssetPosition;
    type Error = &'static str;

    fn apply(state: Self::State, event: Self::Event) -> Result<Self::State, Self::Error> {
        let AssetPositionUpdated { x, y, z } = event;
        let new_state = if let Some(mut s) = state {
            s.x = x;
            s.y = y;
            s.z = z;
            s
        } else {
            AssetPosition { x, y, z }
        };

        Ok(Some(new_state))
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
