#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import argv from './argv.js';
import loader from './loader.js';
import consoln from './consoln.js';
import run from './run.js';
import test from '../symlink/index.js';

function getDate() {

  const nowDate = new Date()

  const hours = nowDate.getHours();

  const minutes = nowDate.getMinutes();

  const seconds = nowDate.getSeconds();

  return `${hours}:${minutes}:${seconds}`;

}

consoln.log(`\x1b[30m»»»»»»»»»»»»»»» ${getDate()} «««««««««««««««`);

const cwd = process.cwd();

const linkPath = `${cwd}/node_modules/jtm`;

try {

  fs.statSync(linkPath);

} catch (e) {

  const url = new URL('../symlink', import.meta.url);
  const testPath = decodeURI(url.pathname);

  fs.mkdirSync(`${cwd}/node_modules`, { recursive: true });
  fs.symlinkSync(testPath, linkPath, 'dir');

}

try {

  await import(`${cwd}/jtm.config.js`);

} catch (error) {

  if (error.code !== 'ERR_MODULE_NOT_FOUND') {
    throw error;
  }

}

if (argv.default.length === 0) {

  argv.default.push('./test/');

}

const { container, init } = test;

for (const item of argv.default) {

  const [jsPath, name] = item.split(":");

  const fullPath = path.join(cwd, jsPath);

  init(container);

  // 指定测试项名称
  if (name) {

    await import(fullPath);

    if (name) {

      for (const item of container.default) {

        if (item.name === name) {
          await run(fullPath, [
            ...container.before,
            item,
            ...container.after
          ]);
          break;
        }

      }

    }

  } else {

    await loader(fullPath, container);

  }

}

consoln.log('\n');