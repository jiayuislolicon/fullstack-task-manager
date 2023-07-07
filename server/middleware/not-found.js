/*
 讓其他的 router 設定為 404
*/

const notFound = (_, res) =>
  res.status(404).send({ msg: 'Route does not exist' });

module.exports = notFound;
