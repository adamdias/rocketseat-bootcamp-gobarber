module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestampt: true,
    underscored: true,
    underscoredAll: true,
  },
};
