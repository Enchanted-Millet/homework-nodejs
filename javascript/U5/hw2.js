const coords = [
    { id: 'a', value: '31,49' },
    { id: 'b', value: '44,67' },
    { id: 'c', value: '93,6' },
    { id: 'd', value: '20,16' },
    { id: 'e', value: '68,53' },
    { id: 'f', value: '71,8' },
    { id: 'g', value: '61,90' },
    { id: 'h', value: '34,97' },
    { id: 'i', value: '21,63' },
    { id: 'j', value: '19,84' },
    { id: 'k', value: '0,81' },
    { id: 'l', value: '6,76' },
    { id: 'm', value: '43,64' },
    { id: 'n', value: '18,64' },
    { id: 'o', value: '10,61' },
    { id: 'p', value: '37,27' },
    { id: 'q', value: '44,88' },
    { id: 'r', value: '75,63' },
    { id: 's', value: '99,46' },
    { id: 't', value: '28,51' },
    { id: 'u', value: '88,79' },
    { id: 'v', value: '47,21' },
    { id: 'w', value: '18,66' },
    { id: 'x', value: '84,100' },
    { id: 'y', value: '75,92' },
    { id: 'z', value: '32,33' }
];

function calcDistance(origin = [], destination = []) {
    const [x1, y1] = origin;
    const [x2, y2] = destination;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function findClosestToFarthest(x, y) {
    // 1. calculate all distance between each node to the input one
    // 2. store the result in a data structure like {id: 'a', dist: }
    // 3. sort it from smallest to largest by distance value

    const result = coords.map(({ id, value }) => ({
        id,
        dist: calcDistance(
            [x, y],
            value.split(',').map(val => +val)
        )
    }));
    result.sort((a, b) => {
        return a.dist - b.dist
    });
    console.log(result);
}

findClosestToFarthest(6, 33)