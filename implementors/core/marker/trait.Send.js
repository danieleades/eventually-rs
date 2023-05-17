(function() {var implementors = {
"bank_accounting":[["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/application/struct.Service.html\" title=\"struct bank_accounting::application::Service\">Service</a>&lt;R&gt;",1,["bank_accounting::application::Service"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/application/struct.OpenBankAccount.html\" title=\"struct bank_accounting::application::OpenBankAccount\">OpenBankAccount</a>",1,["bank_accounting::application::OpenBankAccount"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/application/struct.DepositInBankAccount.html\" title=\"struct bank_accounting::application::DepositInBankAccount\">DepositInBankAccount</a>",1,["bank_accounting::application::DepositInBankAccount"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/application/struct.SendTransferToBankAccount.html\" title=\"struct bank_accounting::application::SendTransferToBankAccount\">SendTransferToBankAccount</a>",1,["bank_accounting::application::SendTransferToBankAccount"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/domain/struct.Transaction.html\" title=\"struct bank_accounting::domain::Transaction\">Transaction</a>",1,["bank_accounting::domain::Transaction"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"bank_accounting/domain/enum.BankAccountEvent.html\" title=\"enum bank_accounting::domain::BankAccountEvent\">BankAccountEvent</a>",1,["bank_accounting::domain::BankAccountEvent"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"bank_accounting/domain/enum.BankAccountError.html\" title=\"enum bank_accounting::domain::BankAccountError\">BankAccountError</a>",1,["bank_accounting::domain::BankAccountError"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/domain/struct.BankAccount.html\" title=\"struct bank_accounting::domain::BankAccount\">BankAccount</a>",1,["bank_accounting::domain::BankAccount"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/domain/struct.BankAccountRoot.html\" title=\"struct bank_accounting::domain::BankAccountRoot\">BankAccountRoot</a>",1,["bank_accounting::domain::BankAccountRoot"]],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/grpc/struct.BankAccountingApi.html\" title=\"struct bank_accounting::grpc::BankAccountingApi\">BankAccountingApi</a>&lt;R&gt;",1,["bank_accounting::grpc::BankAccountingApi"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/bank_accounting_server/struct.BankAccountingServer.html\" title=\"struct bank_accounting::proto::bank_accounting_server::BankAccountingServer\">BankAccountingServer</a>&lt;T&gt;",1,["bank_accounting::proto::bank_accounting_server::BankAccountingServer"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.WasOpened.html\" title=\"struct bank_accounting::proto::event::WasOpened\">WasOpened</a>",1,["bank_accounting::proto::event::WasOpened"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.DepositWasRecorded.html\" title=\"struct bank_accounting::proto::event::DepositWasRecorded\">DepositWasRecorded</a>",1,["bank_accounting::proto::event::DepositWasRecorded"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.TransferWasSent.html\" title=\"struct bank_accounting::proto::event::TransferWasSent\">TransferWasSent</a>",1,["bank_accounting::proto::event::TransferWasSent"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.TransferWasReceived.html\" title=\"struct bank_accounting::proto::event::TransferWasReceived\">TransferWasReceived</a>",1,["bank_accounting::proto::event::TransferWasReceived"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.TransferWasDeclined.html\" title=\"struct bank_accounting::proto::event::TransferWasDeclined\">TransferWasDeclined</a>",1,["bank_accounting::proto::event::TransferWasDeclined"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.TransferWasConfirmed.html\" title=\"struct bank_accounting::proto::event::TransferWasConfirmed\">TransferWasConfirmed</a>",1,["bank_accounting::proto::event::TransferWasConfirmed"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.WasClosed.html\" title=\"struct bank_accounting::proto::event::WasClosed\">WasClosed</a>",1,["bank_accounting::proto::event::WasClosed"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/event/struct.WasReopened.html\" title=\"struct bank_accounting::proto::event::WasReopened\">WasReopened</a>",1,["bank_accounting::proto::event::WasReopened"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"bank_accounting/proto/event/enum.Event.html\" title=\"enum bank_accounting::proto::event::Event\">Event</a>",1,["bank_accounting::proto::event::Event"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/struct.OpenBankAccountRequest.html\" title=\"struct bank_accounting::proto::OpenBankAccountRequest\">OpenBankAccountRequest</a>",1,["bank_accounting::proto::OpenBankAccountRequest"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/struct.OpenBankAccountResponse.html\" title=\"struct bank_accounting::proto::OpenBankAccountResponse\">OpenBankAccountResponse</a>",1,["bank_accounting::proto::OpenBankAccountResponse"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/struct.DepositInBankAccountRequest.html\" title=\"struct bank_accounting::proto::DepositInBankAccountRequest\">DepositInBankAccountRequest</a>",1,["bank_accounting::proto::DepositInBankAccountRequest"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/struct.DepositInBankAccountResponse.html\" title=\"struct bank_accounting::proto::DepositInBankAccountResponse\">DepositInBankAccountResponse</a>",1,["bank_accounting::proto::DepositInBankAccountResponse"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/struct.Transaction.html\" title=\"struct bank_accounting::proto::Transaction\">Transaction</a>",1,["bank_accounting::proto::Transaction"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"bank_accounting/proto/struct.Event.html\" title=\"struct bank_accounting::proto::Event\">Event</a>",1,["bank_accounting::proto::Event"]]],
"eventually":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually/aggregate/repository/enum.GetError.html\" title=\"enum eventually::aggregate::repository::GetError\">GetError</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually::aggregate::repository::GetError"]],["impl&lt;E, SE, AE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually/aggregate/repository/enum.EventSourcedError.html\" title=\"enum eventually::aggregate::repository::EventSourcedError\">EventSourcedError</a>&lt;E, SE, AE&gt;<span class=\"where fmt-newline\">where\n    AE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    SE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually::aggregate::repository::EventSourcedError"]],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/aggregate/repository/struct.EventSourced.html\" title=\"struct eventually::aggregate::repository::EventSourced\">EventSourced</a>&lt;T, S&gt;",1,["eventually::aggregate::repository::EventSourced"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/aggregate/struct.Root.html\" title=\"struct eventually::aggregate::Root\">Root</a>&lt;T&gt;",1,["eventually::aggregate::Root"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/command/test/struct.Scenario.html\" title=\"struct eventually::command::test::Scenario\">Scenario</a>",1,["eventually::command::test::Scenario"]],["impl&lt;Id, Evt&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/event/store/struct.InMemory.html\" title=\"struct eventually::event::store::InMemory\">InMemory</a>&lt;Id, Evt&gt;<span class=\"where fmt-newline\">where\n    Evt: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["eventually::event::store::InMemory"]],["impl&lt;T, StreamId, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/event/store/struct.Tracking.html\" title=\"struct eventually::event::store::Tracking\">Tracking</a>&lt;T, StreamId, Event&gt;",1,["eventually::event::store::Tracking"]],["impl&lt;Id, Evt&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/event/struct.Persisted.html\" title=\"struct eventually::event::Persisted\">Persisted</a>&lt;Id, Evt&gt;<span class=\"where fmt-newline\">where\n    Evt: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually::event::Persisted"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually/event/enum.VersionSelect.html\" title=\"enum eventually::event::VersionSelect\">VersionSelect</a>",1,["eventually::event::VersionSelect"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually/event/enum.StreamVersionExpected.html\" title=\"enum eventually::event::StreamVersionExpected\">StreamVersionExpected</a>",1,["eventually::event::StreamVersionExpected"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/message/struct.Envelope.html\" title=\"struct eventually::message::Envelope\">Envelope</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually::message::Envelope"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/serde/json/struct.Json.html\" title=\"struct eventually::serde::json::Json\">Json</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually::serde::json::Json"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/serde/prost/struct.MessageSerde.html\" title=\"struct eventually::serde::prost::MessageSerde\">MessageSerde</a>&lt;T&gt;",1,["eventually::serde::prost::MessageSerde"]],["impl&lt;T, Inner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/tracing/struct.InstrumentedAggregateRepository.html\" title=\"struct eventually::tracing::InstrumentedAggregateRepository\">InstrumentedAggregateRepository</a>&lt;T, Inner&gt;",1,["eventually::tracing::InstrumentedAggregateRepository"]],["impl&lt;T, StreamId, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/tracing/struct.InstrumentedEventStore.html\" title=\"struct eventually::tracing::InstrumentedEventStore\">InstrumentedEventStore</a>&lt;T, StreamId, Event&gt;",1,["eventually::tracing::InstrumentedEventStore"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually/version/struct.ConflictError.html\" title=\"struct eventually::version::ConflictError\">ConflictError</a>",1,["eventually::version::ConflictError"]]],
"eventually_postgres":[["impl&lt;T, OutT, OutEvt, TSerde, EvtSerde&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_postgres/aggregate/struct.Repository.html\" title=\"struct eventually_postgres::aggregate::Repository\">Repository</a>&lt;T, OutT, OutEvt, TSerde, EvtSerde&gt;<span class=\"where fmt-newline\">where\n    EvtSerde: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    OutEvt: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    OutT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    TSerde: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually_postgres::aggregate::Repository"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually_postgres/aggregate/enum.GetError.html\" title=\"enum eventually_postgres::aggregate::GetError\">GetError</a>",1,["eventually_postgres::aggregate::GetError"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually_postgres/aggregate/enum.SaveError.html\" title=\"enum eventually_postgres::aggregate::SaveError\">SaveError</a>",1,["eventually_postgres::aggregate::SaveError"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually_postgres/event/enum.StreamError.html\" title=\"enum eventually_postgres::event::StreamError\">StreamError</a>",1,["eventually_postgres::event::StreamError"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually_postgres/event/enum.AppendError.html\" title=\"enum eventually_postgres::event::AppendError\">AppendError</a>",1,["eventually_postgres::event::AppendError"]],["impl&lt;Id, Evt, OutEvt, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_postgres/event/struct.Store.html\" title=\"struct eventually_postgres::event::Store\">Store</a>&lt;Id, Evt, OutEvt, S&gt;<span class=\"where fmt-newline\">where\n    Evt: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    OutEvt: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["eventually_postgres::event::Store"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()