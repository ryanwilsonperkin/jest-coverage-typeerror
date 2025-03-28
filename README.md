Example showing how the use of `jest --coverage` can have runtime effects that cause a test failure.

The test will succeed when run with
```sh
$ jest

 PASS  ./test.js
  ✓ should throw a TypeError (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.073 s, estimated 1 s
Ran all test suites.
```

but will fail when run with
```sh
$ jest --coverage

 FAIL  ./test.js
  ✕ should throw a TypeError (10 ms)

  ● should throw a TypeError

    expect(received).toThrow(expected)

    Expected message: "Cannot destructure property 'value' of 'o' as it is undefined."
    Received message: "Cannot destructure property 'value' of '((cov_23dwi37auj(...).s[0]++) , o)' as it is undefined."

          1 | // Will throw a TypeError if object 'o' does not have property 'value'
          2 | function accessProperty(o) {
        > 3 |   const {value} = o;
            |          ^
          4 |   return value;
          5 | }
          6 |

          at value (index.js:3:10)
          at accessProperty (test.js:4:16)
          at Object.toThrow (test.js:4:43)

      2 |
      3 | it("should throw a TypeError", () => {
    > 4 |   expect(() => accessProperty(undefined)).toThrow(
        |                                           ^
      5 |     new TypeError(
      6 |       "Cannot destructure property 'value' of 'o' as it is undefined."
      7 |     )

      at Object.toThrow (test.js:4:43)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   66.66 |      100 |     100 |   66.66 |
 index.js |   66.66 |      100 |     100 |   66.66 | 4
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.099 s, estimated 1 s
Ran all test suites.
```

This can be tested without cloning by running
```sh
npx github:ryanwilsonperkin/jest-coverage-typeerror
```
