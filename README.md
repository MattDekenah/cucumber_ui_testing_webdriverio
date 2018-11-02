# ßUI Testing

This mini UI test example is built on top of [Cucumber Boilerplate](README-CB.md).

It runs to check the selection of matching services from the venue service search page on Treatwell.

See `src/features`, `src/steps` (excl. `templates`) and `src/page-objects`.

To run:

1. Clone this repo.

2. Install dependencies (`yarn install`).

3. Start the local web server:

```sh
$ yarn run local-webserver
```

4. Run the tests:

```sh
$ yarn run wdio
```
