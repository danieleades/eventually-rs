use std::{env, path::PathBuf};

fn main() {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());

    tonic_build::configure()
        .file_descriptor_set_path(out_dir.join("bankaccouting_descriptor.bin"))
        .build_server(true)
        .build_client(false)
        .compile(
            &["proto/bank_accounting.proto", "proto/bank_account.proto"],
            &["proto"],
        )
        .unwrap();
}
