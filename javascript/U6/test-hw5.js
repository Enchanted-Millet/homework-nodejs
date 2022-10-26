const Benchmark = require('benchmark');
const { reverseWords, reverseWords2 } = require('./hw5');
const suite = new Benchmark.Suite();

const sentence = 'the sky is blue';

// add tests
suite
    .add('reverse words #1', function () {
        reverseWords(sentence);
    })
    .add('reverse words #2', function () {
        reverseWords2(sentence);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ async: true });
