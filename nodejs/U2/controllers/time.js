function parseTime() {
    return (req, res) => {
        const date = new Date(req.query?.iso);
        res.json({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });
    };
}

function unixTime() {
    return (req, res) => {
        const date = new Date(req.query?.iso);
        res.json({
            unixtime: date.getTime()
        });
    };
}

module.exports = {
    parseTime,
    unixTime
};
