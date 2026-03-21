#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import readline from 'readline';

const success = message => console.log(`\u2705 ${message}`);
const error = message => console.log(`\u274C ${message}`);

const KEYS_TO_CHECK = ['DOTENV_PRIVATE_KEY', 'DOTENV_PRIVATE_KEY_DEV'];

const checkExistingSetup = () => {
  if (!fs.existsSync('.env.keys')) return null;

  try {
    const content = fs.readFileSync('.env.keys', 'utf8');
    const match = content.match(/DOTENV_PRIVATE_KEY_DEV=([a-f0-9]{64})/i);
    return match ? match[1] : null;
  } catch {
    return null;
  }
};

const promptForKey = async (keyName) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  return new Promise(resolve => {
    rl.question(`Paste ${keyName} value: `, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

const validateKey = (privateKey) => {
  if (!privateKey) {
    error('No key provided');
    return false;
  }

  if (!/^[a-f0-9]{64}$/i.test(privateKey)) {
    error('Invalid key format. Expected 64-character hex string.');
    return false;
  }

  return true;
};

const saveKeys = (keys) => {
  const content = `#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

${Object.entries(keys).map(([k, v]) => `${k}=${v}`).join('\n')}
`;
  fs.writeFileSync('.env.keys', content);
  success('Private keys saved to .env.keys');
};

const testDecryption = () => {
  if (!fs.existsSync('.env.dev')) {
    error('No .env.dev file found to test');
    return false;
  }

  try {
    execSync('npx dotenvx decrypt -f .env.dev --stdout', {
      encoding: 'utf8',
      stdio: 'ignore',
    });

    success('Decryption test passed');
    return true;
  } catch {
    error('Decryption test failed: Invalid private key');
    return false;
  }
};

const main = async () => {
  try {
    console.log('\uD83D\uDD10 dotenvx Development Setup (web)');
    console.log('='.repeat(40));
    console.log('');

    const existingKey = checkExistingSetup();

    if (existingKey && testDecryption()) {
      success('Development setup already configured');
      return;
    }

    console.log('To decrypt development secrets, you need the private keys.');
    console.log('Ask a team member or check your secure key storage.\n');

    const keys = {};
    for (const keyName of KEYS_TO_CHECK) {
      const key = await promptForKey(keyName);
      if (!validateKey(key)) process.exit(1);
      keys[keyName] = key;
    }

    saveKeys(keys);

    if (testDecryption()) {
      success('Development setup complete!');
      console.log('\n\uD83D\uDCDD Remember to restart: docker compose restart web\n');
    } else {
      error('Setup failed. Check your keys and try again.');
      process.exit(1);
    }
  } catch (err) {
    error(`Setup failed: ${err.message}`);
    process.exit(1);
  }
};

main();
