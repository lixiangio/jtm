import run from './run.js';

export default async function (fullPath, container) {

  await run(fullPath, [
    ...container.before,
    ...container.default,
    ...container.after,
  ]);

  for (const item of container.skip) {
    console.log(`\n \x1b[33m▪ ${item.name}\x1b[30m`);
  }

}