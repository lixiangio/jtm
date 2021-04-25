# jtm

如果你用过ava、tap，会发现它们的执行速度真的很慢。特别是ava慢的难以置信，且大量占用CPU，导致糟糕的开发体验。

tape性能还不错，但它依然是个半成品，需要自行扩充，而且必须使用end()方法来结束测试代码，这样做似乎显得有些多余。


### 特性

* 启动和执行速度超快

* 轻量无依赖

* 使用ava测试代码风格，部分兼容ava测试代码

* 仅使用node.js内置的assert断言模块


### 示例

```js
import test from 'jtm';

test('hello', t => {

   t.deepEqual({ a: 1 }, { a: 1 });

   t.equal(true, true);

})

test('async', async t => {

   t.equal(true, true);

   t.ok(true);

})
```

### 安装

全局安装，运行时自动注入依赖包

```
npm install jtm -g
```


### 命令行参数使用

jtm命令在无参数时默认执行test目录下的所有.js测试文件。

```sh
# 未指定路径时，默认执行./test/目录下的所有.js文件
jtm

# 执行指定目录下的全部.js文件
jtm ./test/abc/

# 执行完整路径的单个.js文件
jtm ./test/abc.js

# 执行完整路径的单个.js文件，且仅执行指定名称的最小测试单元
jtm ./test/index.js:hello
```