const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
console.log(config)
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connectionString: process.env.DATABASE_URL,
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
      options: {
        ssl: false,
      },
    },
    debug: false,
  },
});
