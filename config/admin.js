module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e49c231690b8ed635b0744e742fe4e89'),
  },
});
