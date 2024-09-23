module.exports = {
  branches: ['main'],
  preset: 'conventionalcommits',
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `./CHANGELOG.md`,
      },
    ],
  ],
  };
  