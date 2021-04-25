import assert from 'assert';

const { strict: assertStrict } = assert;

// 断言包装器，为断言增加额外状态
const assertBox = {};

for (const name in assertStrict) {

   assertBox[name] = function (...arvg) {

      assertStrict[name](...arvg);
      this.state = true;

   }

}

export default assertBox;