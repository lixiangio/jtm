export interface Test {
  (name: string, func: Function): void
  /**
  * 跳过执行
  * @param {String} name 测试名
  * @param {Function} func 测试方法
  */
  skip(name: string, func: Function): void
  /**
  * 前置钩子
  * @param {String} name 测试名
  * @param {Function} func 测试方法
  */
  before(name: string, func: Function): void
  /**
  * 后置钩子
  * @param {String} name 测试名
  * @param {Function} func 测试方法
  */
  after(name: string, func: Function): void
  /** 初始化容器 */
  init(): void
}

declare module 'jtm' {
  export default Test
}