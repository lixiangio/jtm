import fs from 'fs';
import path from 'path';
import queue from './queue.js';

export default async function loader(fullPath, container) {

  try {

    await import(fullPath);

  } catch (error) {

    // if (error.code === 'MODULE_NOT_FOUND') {
    //   throw error;
    // }
    
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {

      const dirList = fs.readdirSync(fullPath);

      for (const item of dirList) {

        container.before.splice(0);
        container.default.splice(0);
        container.after.splice(0);
        container.skip.splice(0);

        const itemPath = path.join(fullPath, item);

        await loader(itemPath, container);

      }
      
    } else {

      throw new Error(`${fullPath},${error}`);

    }

    return;

  }

  await queue(fullPath, container);

}