// target object
let target = {
  title: "ひと",
  isShow: true,
};

// proxy target object
// params1: target object
// params2: handler object, watch and modify target
let proxy = new Proxy(target, {
  get(target, p, receiver) {
    console.log(target, p, receiver);
    // return target[p];
    // Reflect 优化 Object 一些操作方法及合理的返回 Object 操作返回的结果
    return Reflect.get(target, p, receiver);
  },
  set(target, p, val, receiver) {
    console.log(target, p, val, receiver);
    // target[p] = val;
    return Reflect.set(target, p, val, receiver);
  },
  deleteProperty(target, p) {
    // delete target[p];
    return Reflect.deleteProperty(target, p);
  },
});

console.log(proxy.title);
proxy.title = "にんげん";
console.log(proxy.title);
console.log(target.title);
