const express = require('express');
const reqPromise = require('request-promise');

const app = express();

const PORT = 3031;

// RESTFUL API Routes
app.get('/api/schedule', (req, res) => {
    const requestOption = {
        uri: "http://radioppidunia/api/schedules",
        headers: {
            Accept: 'application/json'
        },
        json: true
    };

    reqPromise(requestOption)
        .then((data => {
            res.json({
                messages: [{ text: data.text }]
            })
        }))
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));