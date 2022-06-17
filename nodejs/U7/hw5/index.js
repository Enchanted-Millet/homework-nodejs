const express = require('express');
const cors = require('cors');
const parseString = require('xml2js').parseString;
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

app.get('/getJson', async (req, res) => {
    await sleep(Math.floor(Math.random() * 5000));
    const person = [
        { id: 10, firstName: 'John', lastName: 'Doe' },
        { id: 5, firstName: 'Jack', lastName: 'Doe' },
        { id: 7, firstName: 'James', lastName: 'Doe' }
    ];
    person.sort((a, b) => a.id - b.id);
    res.json({ person });
});

app.get('/getXml', async (req, res) => {
    await sleep(Math.floor(Math.random() * 5000));
    const xmlString =
        '<persons><person><id>3</id><firstName>Jen</firstName><lastName>Doe</lastName></person> <person><id>6</id><firstName>Stephanie</firstName><lastName>Joe</lastName></person> <person><id>1</id><firstName>Victoria</firstName><lastName>Doe</lastName></person></persons>';
    parseString(xmlString, (err, result) => {
        const { person } = result.persons;
        person.sort((a, b) => +a.id[0] - +b.id[0]);
        res.json({ person: person.map(p => ({ id: +p.id[0], firstName: p.firstName[0], lastName: p.lastName[0] })) });
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
