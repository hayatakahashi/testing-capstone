/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://jwfxpdwh:laGl7jm-LS1luACMeQ6CMZkzntP9hYeJ@bubble.db.elephantsql.com/jwfxpdwh",
  DATABASE_URL_DEVELOPMENT = "postgres://bpxgvvwi:tToCK2DxTEkDyjNl3G4xPY5n62izQIqQ@bubble.db.elephantsql.com/bpxgvvwi",
  DATABASE_URL_TEST = "postgres://papsbxug:esXn2hIswaXhHhmo78bwsvmw5IKgRDwS@bubble.db.elephantsql.com/papsbxug",
  DATABASE_URL_PREVIEW = "postgres://bpxgvvwi:tToCK2DxTEkDyjNl3G4xPY5n62izQIqQ@bubble.db.elephantsql.com/bpxgvvwi",
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