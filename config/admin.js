module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97181c3c26e9fb8011cea9fd5d2fe82c'),
  },
});
