/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */ //a //b //c

require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL="postgres://virmeude:4auIJt_asUhQ2v7NWbbv1vFpkASdE2oG@jelani.db.elephantsql.com/virmeude",
  DATABASE_URL_DEVELOPMENT = "postgres://dbefqedb:CFxQxUqGDLztjLE5HBaFcAibKlwjkuDf@jelani.db.elephantsql.com/dbefqedb",
  DATABASE_URL_TEST = "postgres://cmepkyhq:xnI8JYu9f-590TxNh5HpMDNWhsoBYxzE@jelani.db.elephantsql.com/cmepkyhq",
  DATABASE_URL_PREVIEW = "postgres://pcdtangz:XuDGSc0XsUlebcD3ZOR_6dR4SxX8aSj8@jelani.db.elephantsql.com/pcdtangz",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};