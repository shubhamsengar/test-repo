module.exports = {
  branches: ['main'],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'chore', section: 'Chores' },
      { type: 'docs', hidden: true },
      { type: 'style', hidden: true },
      { type: 'refactor', section: 'Refactoring' },
      { type: 'perf', hidden: true },
      { type: 'test', hidden: true },
    ],
  },
  releaseRules: [
    { type: 'refactor', release: 'patch' },
    { breaking: true, release: 'minor' },
    { tag: 'Breaking', release: 'major' },
  ],
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

//   const { execSync } = require('child_process');
// module.exports = isDryRun() ? getDryRunConfig() : getCIConfig();

// function getDryRunConfig() {
//   return {
//     repositoryUrl: getLocalRepoUrl(),
//     branches: getCurrentBranch(),
//     plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator'],
//   };
// }

// function isDryRun() {
//   return process.argv.includes('--dry-run');
// }

// function getLocalRepoUrl() {
//   const topLevelDir = execSync('git rev-parse --show-toplevel').toString().trim();

//   return `file://${topLevelDir}/.git`;
// }

// function getCurrentBranch() {
//   return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
// }

// /**
//  * @type {import('semantic-release').GlobalConfig}
//  */
// function getCIConfig() {
//   return {
//     branches: ['main', 'chore/fix-semantic'],
//     preset: 'conventionalcommits',
//     presetConfig: {
//       types: [
//         { type: 'feat', section: 'Features' },
//         { type: 'fix', section: 'Bug Fixes' },
//         { type: 'chore', section: 'Chores' },
//         { type: 'docs', hidden: true },
//         { type: 'style', hidden: true },
//         { type: 'refactor', section: 'Refactoring' },
//         { type: 'perf', hidden: true },
//         { type: 'test', hidden: true },
//       ],
//     },
//     releaseRules: [
//       { type: 'refactor', release: 'patch' },
//       { breaking: true, release: 'minor' },
//       { tag: 'Breaking', release: 'major' },
//     ],
//     tagFormat: 'v${version}',
//     plugins: [
//       '@semantic-release/commit-analyzer',
//       '@semantic-release/release-notes-generator',
//       [
//         '@semantic-release/changelog',
//         {
//           changelogFile: `./CHANGELOG.md`,
//         },
//       ],
//       [
//         '@semantic-release/exec',
//         {
//           prepareCmd: `VERSION=\${nextRelease.version} npx -p replace-json-property rjp ./package.json version \${nextRelease.version} && npm i && echo nextVer=\${nextRelease.version} >> $GITHUB_OUTPUT`,
//         },
//       ],
//       [
//         '@semantic-release/git',
//         {
//           assets: [`package.json`, `package-lock.json`, `CHANGELOG.md`],
//           message: 'chore(release): -v${nextRelease.version} \n\n${nextRelease.notes}',
//         },
//       ],
//     ],
//   };
// }

  