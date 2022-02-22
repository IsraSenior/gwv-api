module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'gwv-api'),
      user: env('DATABASE_USERNAME', 'israsenior'),
      password: env('DATABASE_PASSWORD', '<Yolo1822name="israsenior"/>'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
