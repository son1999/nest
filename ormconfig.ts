module.exports = {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "nest",
    synchronize: false,
    logging: false,
    entities: ["dist/**/entities/*.entity.js"],
    migrations: ["dist/**/databases/migrations/*.js"],
    cli: {
      entitiesDir: "src/**",
      migrationsDir: "src/databases/migrations",
    }
  }
  