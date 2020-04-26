# Wait [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Promisified `setTimeout`

## Install

`npm i @iocmd/wait`

## Example

```js
await wait(console.log, 'hello');
// log "hello" in next loop

await wait(1000, console.log, 'hello');
// log "hello" in a second
```

## Related

- [hold-up](https://github.com/iocmd/hold-up "hold-up") - setInterval with promises, counter and error handling
- [currify](https://github.com/coderaiser/currify "currify") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single or more arguments

- [fullstore](https://github.com/coderaiser/fullstore "fullstore") - functional variables

- [wraptile](https://github.com/coderaiser/wraptile "wraptile") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of 2 functions, each with a any count of arguments

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/@iocmd/wait.svg?style=flat
[BuildStatusIMGURL]:        https://travis-ci.com/iocmd/wait.svg?branch=master
[DependencyStatusIMGURL]:   https://img.shields.io/david/iocmd/wait.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/@iocmd/wait "npm"
[BuildStatusURL]:           https://travis-ci.com/iocmd/wait  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/iocmd/wait "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/iocmd/wait?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/iocmd/wait/badge.svg?branch=master&service=github
