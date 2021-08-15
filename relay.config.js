module.exports = {
  src: './src',
  schema: require.resolve('@octokit/graphql-schema/schema.graphql'),
  artifactDirectory: './src/__generated__',
  customScalars: {
    Date: 'string',
    DateTime: 'string',
    GitObjectID: 'string',
    GitSSHRemote: 'string',
    GitTimestamp: 'string',
    HTML: 'string',
    PreciseDateTime: 'string',
    URI: 'string',
    X509Certificate: 'string',
  },
};
