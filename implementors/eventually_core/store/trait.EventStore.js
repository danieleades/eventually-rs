(function() {var implementors = {};
implementors["eventually_postgres"] = [{"text":"impl&lt;Id, Event, Tls&gt; <a class=\"trait\" href=\"eventually_core/store/trait.EventStore.html\" title=\"trait eventually_core::store::EventStore\">EventStore</a> for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStore.html\" title=\"struct eventually_postgres::store::EventStore\">EventStore</a>&lt;Id, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Id as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Id as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.43/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Tls: <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.Stream\" title=\"type tokio_postgres::tls::MakeTlsConnect::Stream\">Stream</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.TlsConnect\" title=\"type tokio_postgres::tls::MakeTlsConnect::TlsConnect\">TlsConnect</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Tls as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html\" title=\"trait tokio_postgres::tls::MakeTlsConnect\">MakeTlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.MakeTlsConnect.html#associatedtype.TlsConnect\" title=\"type tokio_postgres::tls::MakeTlsConnect::TlsConnect\">TlsConnect</a> as <a class=\"trait\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.TlsConnect.html\" title=\"trait tokio_postgres::tls::TlsConnect\">TlsConnect</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/socket/struct.Socket.html\" title=\"struct tokio_postgres::socket::Socket\">Socket</a>&gt;&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/tls/trait.TlsConnect.html#associatedtype.Future\" title=\"type tokio_postgres::tls::TlsConnect::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":false,"types":["eventually_postgres::store::EventStore"]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id, Event&gt; <a class=\"trait\" href=\"eventually_core/store/trait.EventStore.html\" title=\"trait eventually_core::store::EventStore\">EventStore</a> for <a class=\"struct\" href=\"eventually_redis/struct.EventStore.html\" title=\"struct eventually_redis::EventStore\">EventStore</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Id as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["eventually_redis::store::EventStore"]}];
implementors["eventually_util"] = [{"text":"impl&lt;Id, Event&gt; <a class=\"trait\" href=\"eventually_core/store/trait.EventStore.html\" title=\"trait eventually_core::store::EventStore\">EventStore</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStore.html\" title=\"struct eventually_util::inmemory::EventStore\">EventStore</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["eventually_util::inmemory::store::EventStore"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()