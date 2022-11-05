function parseTime() {
  return (req, res) => {
    let date = new Date(req.query?.iso);
    res.json({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    });
  };
}
function unixTime() {
  return (req, res) => {
    let date = new Date(req.query?.iso);
    res.json({
      unixtime: date.getTime(),
    });
  };
}
export { parseTime, unixTime };
