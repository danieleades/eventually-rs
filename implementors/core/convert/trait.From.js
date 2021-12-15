(function() {var implementors = {};
implementors["eventually"] = [{"text":"impl&lt;T, R, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S&gt; for <a class=\"struct\" href=\"eventually/aggregate/struct.EventSourcedRepository.html\" title=\"struct eventually::aggregate::EventSourcedRepository\">EventSourcedRepository</a>&lt;T, R, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually/aggregate/trait.Aggregate.html\" title=\"trait eventually::aggregate::Aggregate\">Aggregate</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"eventually/aggregate/trait.Root.html\" title=\"trait eventually::aggregate::Root\">Root</a>&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"eventually/event/trait.Store.html\" title=\"trait eventually::event::Store\">Store</a>&lt;StreamId = T::<a class=\"type\" href=\"eventually/aggregate/trait.Aggregate.html#associatedtype.Id\" title=\"type eventually::aggregate::Aggregate::Id\">Id</a>, Event = T::<a class=\"type\" href=\"eventually/aggregate/trait.Aggregate.html#associatedtype.Event\" title=\"type eventually::aggregate::Aggregate::Event\">Event</a>&gt;,&nbsp;</span>","synthetic":false,"types":["eventually::aggregate::EventSourcedRepository"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"eventually/message/struct.Message.html\" title=\"struct eventually::message::Message\">Message</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually/message/trait.Payload.html\" title=\"trait eventually::message::Payload\">Payload</a>,&nbsp;</span>","synthetic":false,"types":["eventually::message::Message"]}];
implementors["eventually_postgres"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/error/struct.Error.html\" title=\"struct tokio_postgres::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"eventually_postgres/store/enum.Error.html\" title=\"enum eventually_postgres::store::Error\">Error</a>","synthetic":false,"types":["eventually_postgres::store::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RunError&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.7/tokio_postgres/error/struct.Error.html\" title=\"struct tokio_postgres::error::Error\">Error</a>&gt;&gt; for <a class=\"enum\" href=\"eventually_postgres/store/enum.Error.html\" title=\"enum eventually_postgres::store::Error\">Error</a>","synthetic":false,"types":["eventually_postgres::store::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()