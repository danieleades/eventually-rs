(function() {var implementors = {};
implementors["eventually"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually/aggregate/struct.AggregateRootFactory.html\" title=\"struct eventually::aggregate::AggregateRootFactory\">AggregateRootFactory</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually/aggregate/trait.Aggregate.html\" title=\"trait eventually::aggregate::Aggregate\">Aggregate</a>,&nbsp;</span>","synthetic":false,"types":["eventually::aggregate::AggregateRootFactory"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Store:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually/repository/struct.Repository.html\" title=\"struct eventually::repository::Repository\">Repository</a>&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually/aggregate/trait.Aggregate.html\" title=\"trait eventually::aggregate::Aggregate\">Aggregate</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: <a class=\"trait\" href=\"eventually/store/trait.EventStore.html\" title=\"trait eventually::store::EventStore\">EventStore</a>&lt;SourceId = T::<a class=\"type\" href=\"eventually/aggregate/trait.Aggregate.html#associatedtype.Id\" title=\"type eventually::aggregate::Aggregate::Id\">Id</a>, Event = T::<a class=\"type\" href=\"eventually/aggregate/trait.Aggregate.html#associatedtype.Event\" title=\"type eventually::aggregate::Aggregate::Event\">Event</a>&gt;,&nbsp;</span>","synthetic":false,"types":["eventually::repository::Repository"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually/store/enum.Select.html\" title=\"enum eventually::store::Select\">Select</a>","synthetic":false,"types":["eventually::store::Select"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually/store/enum.Expected.html\" title=\"enum eventually::store::Expected\">Expected</a>","synthetic":false,"types":["eventually::store::Expected"]},{"text":"impl&lt;SourceId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually/store/struct.Persisted.html\" title=\"struct eventually::store::Persisted\">Persisted</a>&lt;SourceId, T&gt;","synthetic":false,"types":["eventually::store::Persisted"]},{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually/util/inmemory/struct.EventStore.html\" title=\"struct eventually::util::inmemory::EventStore\">EventStore</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,&nbsp;</span>","synthetic":false,"types":["eventually::util::inmemory::store::EventStore"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually/util/optional/struct.IntoAggregate.html\" title=\"struct eventually::util::optional::IntoAggregate\">IntoAggregate</a>&lt;A&gt;","synthetic":false,"types":["eventually::util::optional::IntoAggregate"]}];
implementors["eventually_postgres"] = [{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Tls:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStore.html\" title=\"struct eventually_postgres::store::EventStore\">EventStore</a>&lt;Id, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tls: <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.Stream\" title=\"type tokio_postgres::tls::MakeTlsConnect::Stream\">Stream</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.TlsConnect\" title=\"type tokio_postgres::tls::MakeTlsConnect::TlsConnect\">TlsConnect</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.TlsConnect\" title=\"type tokio_postgres::tls::MakeTlsConnect::TlsConnect\">TlsConnect</a> as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.TlsConnect.html\" title=\"trait tokio_postgres::tls::TlsConnect\">TlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.TlsConnect.html#associatedtype.Future\" title=\"type tokio_postgres::tls::TlsConnect::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":false,"types":["eventually_postgres::store::EventStore"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"eventually_postgres/subscriber/enum.SubscriberError.html\" title=\"enum eventually_postgres::subscriber::SubscriberError\">SubscriberError</a>","synthetic":false,"types":["eventually_postgres::subscriber::SubscriberError"]},{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_postgres/subscriber/struct.EventSubscriber.html\" title=\"struct eventually_postgres::subscriber::EventSubscriber\">EventSubscriber</a>&lt;Id, Event&gt;","synthetic":false,"types":["eventually_postgres::subscriber::EventSubscriber"]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_redis/struct.EventStore.html\" title=\"struct eventually_redis::EventStore\">EventStore</a>&lt;Id, Event&gt;","synthetic":false,"types":["eventually_redis::store::EventStore"]},{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_redis/struct.EventSubscriber.html\" title=\"struct eventually_redis::EventSubscriber\">EventSubscriber</a>&lt;Id, Event&gt;","synthetic":false,"types":["eventually_redis::subscriber::EventSubscriber"]},{"text":"impl&lt;Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Event:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_redis/struct.PersistentSubscription.html\" title=\"struct eventually_redis::PersistentSubscription\">PersistentSubscription</a>&lt;Id, Event&gt;","synthetic":false,"types":["eventually_redis::subscription::PersistentSubscription"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_redis/struct.Builder.html\" title=\"struct eventually_redis::Builder\">Builder</a>","synthetic":false,"types":["eventually_redis::Builder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"eventually_redis/struct.BuilderWithSourceName.html\" title=\"struct eventually_redis::BuilderWithSourceName\">BuilderWithSourceName</a>","synthetic":false,"types":["eventually_redis::BuilderWithSourceName"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()