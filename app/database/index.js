const { Pool } = require('pg');
const config = require('../config');

exports.start = async function () {
  const host = config.get('PGHOST');
  const port = config.get('PGPORT');
  const database = config.get('PGDB');
  const user = config.get('PGUSER');
  const password = config.get('PGPASS');

  this.pool = new Pool({ host, port, database, user, password });
  console.log(`Database ${this.pool.options.database} connected`);
};

exports.close = async function () {
  await this.pool.end();
};

exports.query = async function (q, data) {
  return this.pool.query(q, data);
};
