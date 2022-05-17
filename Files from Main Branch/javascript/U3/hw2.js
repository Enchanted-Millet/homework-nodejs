// 1
let first, second, all;
all = [first, second] = [1, 2, 3, 4];
console.log(all, first, second);

// 2
let [one, [twoA, twoB]] = [1, [2, 2.5], 3];
console.log(one, twoA, twoB);

// 3
let data = {
    name: 'destructuring assignment',
    type: 'extension',
    impl: [
        { engine: 'spidermonkey', version: 1.7 },
        { engine: 'rhino', version: 1.7 }
    ]
};
let {
    name: feature,
    impl: [{ engine: impl1, version: v1 }, { engine: impl2 }]
} = data;
console.log(feature);
console.log(impl1, v1);
console.log(impl2);
