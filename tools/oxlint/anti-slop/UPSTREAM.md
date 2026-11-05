# anti-slop

Vendored from [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop) at `13909c9e07590f5a85d93c62712259fe14a883f7`.

- Plugin: `tools/oxlint/anti-slop/index.ts`
- Effect plugin is present at `tools/oxlint/anti-slop/effect/index.ts` and is not registered. This repo does not depend on Effect.
- `@oxlint/plugins` is pinned to `1.91.0`, the installed `oxlint` version at copy time.
- No local rule changes.
- The app `tsconfig.json` excludes this directory. The plugin is loaded by Oxlint, and upstream does not typecheck under this repo's strict flags.
