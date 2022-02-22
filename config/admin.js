module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '31195420cd52c43df9a12c03144a347d'),
  },
});
