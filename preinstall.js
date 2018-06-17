const { exec } = require('child_process');

const [, , ...packages] = process.argv;

const command = packages
  .map(pkg => `(npm up -g ${pkg} && ${pkg} -h || npm i -g ${pkg})`)
  .join(' && ');

const child = exec(command);

child.stdout.on('data', data => console.log(data));
