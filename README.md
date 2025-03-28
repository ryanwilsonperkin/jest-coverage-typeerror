Example showing how the use of `jest --coverage` can have runtime effects that cause a test failure.

The test will succeed when run with
```sh
jest
```
but will fail when run with
```sh
jest --coverage
```

This can be tested without cloning by running
```sh
npx github:ryanwilsonperkin/jest-coverage-typeerror
```
