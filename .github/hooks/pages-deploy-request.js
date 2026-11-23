const fs = require('node:fs');
const { spawnSync } = require('node:child_process');

let input;
try {
  input = JSON.parse(fs.readFileSync(0, 'utf8'));
} catch (error) {
  console.error('Unable to read the Copilot prompt:', error.message);
  process.exit(2);
}

if (typeof input?.prompt !== 'string') {
  console.error('The Copilot hook input does not contain a prompt.');
  process.exit(2);
}

if (input.prompt.trim().toLowerCase() === 'deploy to github') {
  const result = spawnSync('bash', ['.github/hooks/pages-deploy.sh'], {
    stdio: 'inherit',
  });
  if (result.error) {
    console.error('Unable to start the GitHub Pages deployment:', result.error.message);
    process.exit(2);
  }
  if (result.status !== 0) {
    process.exit(2);
  }
}
