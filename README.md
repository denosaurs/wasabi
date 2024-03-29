# wasabi

This is a template repository for deno modules that want to use wasm. To use it
simply click the
["Use this template"](https://github.com/denosaurs/wasabi/generate) button to
generate a new repo with all the stuff you need to get started writing rust and
running it using wasm in deno.

## Prerequisites

| prerequisite                                            | installation                                             |
| ------------------------------------------------------- | -------------------------------------------------------- |
| [deno](https://deno.land/)                              | [deno_install](https://github.com/denoland/deno_install) |
| [rust](https://www.rust-lang.org/)                      | [rustup](https://www.rust-lang.org/tools/install)        |
| [rustfmt](https://github.com/rust-lang/rustfmt)         | `rustup component add rustfmt`                           |
| [rust-clippy](https://github.com/rust-lang/rust-clippy) | `rustup component add clippy`                            |
| [wasm-pack](https://rustwasm.github.io/wasm-pack/)      | `cargo install wasm-pack`                                |

## Structure

```
├── .github
│   ├── workflows
│   │   ├── checks.yml  - Performs deno lint, fmt and test
│   │   └── depsbot.yml - Checks the freshness of deno dependencies
│   └── FUNDING.yml     - The denosaurs funding file, omit if not denosaur
├── scripts             - A directory containing all development scripts
│   ├── _deps.ts        - All of the dependencies for the scripts
│   ├── _util.ts        - Utilities used in the scripts
│   ├── build.ts        - The build script for generating the wasm.js file
│   ├── clean.ts        - Removes all build data, often solving build issues
│   ├── fmt.ts          - Formats both typescript and rust ignoring build data
│   └── lint.ts         - Lints both typescript and rust ignoring build data
├── src                 - The rust part of the module
│   └── lib.rs          - The rust entry point
├── pkg                 - Ignored by .gitignore, used when building
├── target              - Ignored by .gitignore, used when building
├── .gitignore          - A standard .gitignore file for ignoring build directories
├── .rustfmt.toml       - The rustfmt configuration
├── Cargo.toml          - A file describing the rust part of the module
├── LICENSE             - A standard license file you are free to change to fit your needs
├── mod.ts              - The entry point for the deno module
├── README.md           - This readme file
├── test.ts             - Containing tests
└── wasm.js             - A js file containing the built wasm and some glue code generated by the build script
```

## Scripts

### build

```bash
$ deno run --unstable --allow-read --allow-write --allow-run scripts/build.ts
building rust                  ("wasm-pack build --target web --release")
read wasm                      (size: 1274 bytes)
compressed wasm using lz4      (reduction: 224 bytes, size: 1050 bytes)
encoded wasm using base64      (increase: 350 bytes, size: 1400 bytes)
read js                        (size: 1776 bytes)
inlined js and wasm            (size: 3357 bytes)
minified js                    (size reduction: 754 bytes, size: 2603 bytes)
writing output to file         (wasm.js)
final size is: 2603 bytes
```

### clean

```bash
$ deno run --unstable --allow-read --allow-write --allow-run scripts/clean.ts
cleaning cargo build           ("cargo clean")
removing pkg
```

### fmt

```bash
$ deno run --unstable --allow-run scripts/fmt.ts
formatting typescript          ("deno --unstable fmt scripts/ test_deps.ts test.ts mod.ts")
Checked 9 files
formatting rust                ("cargo fmt")
```

### lint

```bash
$ deno run --unstable --allow-run scripts/lint.ts
linting typescript             ("deno --unstable lint scripts test_deps.ts test.ts mod.ts")
Checked 9 files
linting rust                   ("cargo clippy -q")
```

## Testing

Requires the `wasm.js` file to be [built](#build) first.

```bash
$ deno test
running 1 tests
test add ... ok (2ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (2ms)
```

## Other

### Contribution

Pull request, issues and feedback are very welcome. Code style is formatted with
`deno fmt` and commit messages are done following
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec.

### Licence

Copyright 2020, Denosaurs. All rights reserved. MIT license.
