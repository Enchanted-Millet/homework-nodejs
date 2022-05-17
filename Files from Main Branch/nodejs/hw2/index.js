const axios = require('axios').default;
const express = require('express');
const https = require('https');
const matrixRouter = require('./routes/hw1');
const timeRouter = require('./routes/hw2');

const app = express();
const port = process.env.PORT || 8888;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'ExpressJS', message: 'For homework' });
});

app.use('/matrix', matrixRouter);
app.use('/time', timeRouter);

// hw 2-1
app.post('/hw2-1/:letters', (req, res) => {
    res.send(req.params.letters.toUpperCase());
});

// hw 2-2
app.get('/api/async/:url1/:url2/:url3', (req, res) => {
    let { url1, url2, url3 } = req.params;
    url1 = `https://www.${url1}`;
    url2 = `https://www.${url2}`;
    url3 = `https://www.${url3}`;

    const fetchURL = url => {
        return axios.get(url);
    };

    //! The order of the promise array is preserved upon completion of this method.
    Promise.all([fetchURL(url1), fetchURL(url2), fetchURL(url3)])
        .then(data => {
            data.forEach((result, idx) => console.log(`=====${idx}=====\n`, result.data.substring(0, 255), '\n'));
        })
        .catch(err => console.error(err))
        .finally(() => res.send('finished'));

    // https
    //     .request(url1, response => {
    //         response.on('data', chunk => {
    //             process.stdout.write(chunk);
    //         });

    //         response.on('end', () => {
    //             // url1 finished;
    //             https
    //                 .request(url2, response2 => {
    //                     response2.on('data', chunk => {
    //                         process.stdout.write(chunk);
    //                     });
    //                     response2.on('end', () => {
    //                         // url2 finished
    //                         https
    //                             .request(url3, response3 => {
    //                                 response3.on('data', chunk => {
    //                                     process.stdout.write(chunk);
    //                                 });
    //                                 response3.on('end', () => {
    //                                     // url3 finished
    //                                     res.send('all done');
    //                                 });
    //                             })
    //                             .end();
    //                     });
    //                 })
    //                 .end();
    //         });
    //     })
    //     .end();
});

app.use((req, res) => {
    res.status(404).send('404 not found');
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
