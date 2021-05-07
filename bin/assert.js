import assert from 'assert';

const { strict: assertStrict } = assert;

// 断言包装器，为断言增加额外状态
const assertBox = {
   sleep(time = 0) {
      return new Promise(resolve => setTimeout(resolve, time))
   }
};

for (const name in assertStrict) {

   assertBox[name] = function (...arvg) {

      assertStrict[name](...arvg);
      this.state = true;

   }

}

export default assertBox;