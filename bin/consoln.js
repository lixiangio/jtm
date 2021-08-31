const { stdout } = process;

export default {
  log(name) {

    stdout.write(`\n ${name}`);

  },
  success(name, timestamp, message = '') {

    const time = Date.now() - timestamp;

    stdout.clearLine();
    stdout.cursorTo(0);

    stdout.write(` \x1b[32m√ ${name} \x1b[39m(${time}ms) ${message}\x1b[30m`);

  },
  error(name, timestamp, message = '') {

    const time = Date.now() - timestamp;

    stdout.clearLine();
    stdout.cursorTo(0);
    stdout.write(` \x1b[31m× ${name} \x1b[39m(${time}ms) ${message}\x1b[30m`);

  }
}