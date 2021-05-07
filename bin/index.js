#!/usr/bin/env node

import path from 'path';
import argv from './argv.js';
import loader from './loader.js';
import test from '../index.js';
import consoln from './consoln.js';

function getDate() {

  const nowDate = new Date()

  const hours = nowDate.getHours();

  const minutes = nowDate.getMinutes();

  const seconds = nowDate.getSeconds();

  return `${hours}:${minutes}:${seconds}`;

};

consoln.log(`\x1b[30m»»»»»»»»»»»»»»» ${getDate()} «««««««««««««««`);

const cwd = process.cwd();

const { container, init } = test;

async function main() {
  
  try {

    await import(`${cwd}/jtm.config.js`);

  } catch (error) {

    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }

  }

  if (argv.default.length === 0) {

    argv.default.push('./test/');

  }

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
          };

        }

      }

    } else {

      await loader(fullPath, container);

    }

  }

  consoln.log('\n');

}

main();
