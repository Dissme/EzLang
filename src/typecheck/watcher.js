export class Watcher {
  deps = new Map();
  vals = new WeakMap();

  addDep(scope, key, callback) {
    const val = this.getVal(scope, key);
    if (val) return callback(val);
    const target = this.deps.get(scope) || this.deps.set(scope, {}).get(scope);
    (target[key] || (target[key] = [])).push(callback);
  }

  getVal(scope, key) {
    return this.vals.get(scope)?.[key];
  }

  call(scope, key, value) {
    const target = this.deps.get(scope);
    if (!target) return;
    if (!(key in target)) return;
    while (target[key].length) {
      target[key].pop()(value);
    }
  }

  resolve(scope, key, value) {
    const target = this.vals.get(scope) || this.vals.set(scope, {}).get(scope);
    if (key in target) throw "重复的赋值";
    target[key] = value;
    this.call(scope, key, value);
  }

  finish() {
    // todo 处理依赖图 没resolve掉的依赖报错
  }
}
