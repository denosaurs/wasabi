# wasabi

This is a template repository for deno modules that want to use wasm. To use it simply click the
["Use this template"](https://github.com/denosaurs/wasabi/generate) button to generate a new repo
with all the stuff you need to get started writing rust and running it using wasm in deno.

## Prerequisites

- [deno](https://deno.land/)
- [rust](https://www.rust-lang.org/)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)

## Structure

```
├── .gitignore     - A standard .gitignore file for ignoring build directories
├── Cargo.toml     - A file describing the rust library being built
├── LICENSE        - A standard license file you are free to change to fit your needs
├── mod.ts         - The entry point for the deno module
├── README.md      - This readme file
├── test.ts        - Containing tests
├── wasm.js        - A js file containing the built wasm and some glue code
├── scripts        - A directory for all development scripts
│   └──build.ts    - The build script for generating the wasm.js file
├── src            - The rust libraries source code
│   └──lib.rs      - The rust libraries entry point
├── pkg            - Ignored by .gitignore, used when building
└── target         - Ignored by .gitignore, used when building
```

## Building

```bash
$ deno run --allow-read --allow-write --allow-run scripts/build.ts
```

OR

```bash
$ deno run -A scripts/build.ts
```

## Testing

Requires `wasm.js` to be built first.

```bash
$ deno run -A ./scripts/build.ts
$ deno test
```

## Other

### Contribution

Pull request, issues and feedback are very welcome. Code style is formatted with `deno fmt` and commit messages are done following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec.

### Licence

Copyright 2020, Denosaurs. All rights reserved. MIT license.
