module.exports = {
  name: 'default',
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root0000',
  database: 'TestDB',
  charset: 'UTF8_GENERAL_CI',
  timezone: 'local',
  synchronize: true,
  logging: false,
  extra: {
    connectionLimit: 50,
  },
  entities: [
    process.env.NODE_ENV === 'development'
      ? 'src/models/**/*.ts'
      : 'build/models/**/*.js'
  ],
  cli: {
    entitiesDir: 'src/models',
  },
};
