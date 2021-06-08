const { AWS_S3_BUCKET = 'http://localhost:3000' } = process.env;

exports.config = {
  url: AWS_S3_BUCKET
};
