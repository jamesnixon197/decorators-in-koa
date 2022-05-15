module.exports = {
  repositoryUrl: 'https://github.com/jamesnixon197/koa-and-decorators.git',
  debug: true,
  plugins: [
    ['@semantic-release/commit-analyzer', {
      "releaseRules": [
        {"type": "docs", "scope":"README", "release": "patch"},
      ]
    }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['lib/**/*.js', 'package.json', 'yarn.lock'],
        message: 'chore(release): ${nextRelease.version}',
      },
    ],
  ],
};
