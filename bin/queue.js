import run from './run.js';
import consoln from './consoln.js';

export default async function (fullPath, container) {

  await run(fullPath, [
    ...container.before,
    ...container.default,
    ...container.after,
  ]);

  for (const item of container.skip) {
    consoln.log(`\n \x1b[33m▪ ${item.name}\x1b[30m`);
  }

}