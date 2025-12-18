"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
  var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
  var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
  var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
  var __runInitializers = (array, flags, self, value) => {
    for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
    return value;
  };
  var __decorateElement = (array, flags, name, decorators, target, extra) => {
    var fn, it2, done, ctx, access, k2 = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
    var j = k2 > 3 ? array.length + 1 : k2 ? s ? 1 : 2 : 0, key = __decoratorStrings[k2 + 5];
    var initializers = k2 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
    var desc = k2 && (!p && !s && (target = target.prototype), k2 < 5 && (k2 > 3 || !p) && __getOwnPropDesc(k2 < 4 ? target : { get [name]() {
      return __privateGet(this, extra);
    }, set [name](x3) {
      return __privateSet(this, extra, x3);
    } }, name));
    k2 ? p && k2 < 4 && __name(extra, (k2 > 2 ? "set " : k2 > 1 ? "get " : "") + name) : __name(target, name);
    for (var i = decorators.length - 1; i >= 0; i--) {
      ctx = __decoratorContext(k2, name, done = {}, array[3], extraInitializers);
      if (k2) {
        ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x3) => __privateIn(target, x3) : (x3) => name in x3 };
        if (k2 ^ 3) access.get = p ? (x3) => (k2 ^ 1 ? __privateGet : __privateMethod)(x3, target, k2 ^ 4 ? extra : desc.get) : (x3) => x3[name];
        if (k2 > 2) access.set = p ? (x3, y) => __privateSet(x3, target, y, k2 ^ 4 ? extra : desc.set) : (x3, y) => x3[name] = y;
      }
      it2 = (0, decorators[i])(k2 ? k2 < 4 ? p ? extra : desc[key] : k2 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k2 ^ 4 || it2 === void 0) __expectFn(it2) && (k2 > 4 ? initializers.unshift(it2) : k2 ? p ? extra = it2 : desc[key] = it2 : target = it2);
      else if (typeof it2 !== "object" || it2 === null) __typeError("Object expected");
      else __expectFn(fn = it2.get) && (desc.get = fn), __expectFn(fn = it2.set) && (desc.set = fn), __expectFn(fn = it2.init) && initializers.unshift(fn);
    }
    return k2 || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k2 ^ 4 ? extra : desc : target;
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/@jyostudio/list/dist/list.js
  var g = "##INNER_TYPE##";
  var L = "@@INNER_TYPE@@";
  var b = "##INNER_THROW_FN##";
  var F = "##INNER_TYPE_FN##";
  function R(i, e) {
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (R(i, e[n])) return true;
      return false;
    }
    if (e?.[F]?.(i)) return true;
    if (typeof e != "function") return e === "*" && i !== null || e === "..." || e === null && i === null || e === typeof i;
    let t = typeof i;
    return t === "number" && e === Number || t === "string" && e === String || t === "boolean" && e === Boolean || t === "symbol" && e === Symbol || t === "bigint" && e === BigInt || t === "undefined" && e === void 0 ? true : e === Object ? t === "object" : (t === "function" || t === "object") && i instanceof e ? i?.[L] && e?.[g] ? i[L] === e[g] : true : false;
  }
  function E(i) {
    if (i === null) return "null";
    if (i === "*") return "(\u4EFB\u610F)";
    let e = typeof i;
    if (!["function", "object"].includes(e)) return e[0].toUpperCase() + e.slice(1);
    let t = (i?.name || i?.constructor?.name || "(\u672A\u77E5)").split(" ").pop();
    return [g, L].forEach((n) => {
      i?.[n] && (t += `<${E(i?.[n])}>`);
    }), e === "function" && t === "anonymous" ? "(\u533F\u540D)" : t;
  }
  function C(i, e, t) {
    let n = i.stack.split(`
`).splice(3), s = "", a = `
`, o = "";
    n.forEach((l, y, r) => {
      let T2 = l.trim().split(" "), d2 = T2.length === 3 ? T2[1] : "(\u533F\u540D)", h = d2.split(".").pop();
      r[y] = { fullMethodName: d2, methodName: h, link: T2.length === 3 ? T2[2] : T2[1] }, y ? a += `${h}	${r[y].link}
` : o = h;
    });
    let c = e.filter((l) => l.length > 0 && l[l.length - 1] === "..." ? t.length >= l.length - 1 : l.length === t.length);
    if (!c.length) throw s += `\u65B9\u6CD5 ${o} \u4E0D\u5B58\u5728 ${t.length} \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002`, s += a, new Error(s);
    let f = false;
    if (c.forEach((l) => {
      l.forEach((y, r) => {
        if (!R(t[r], y)) {
          let T2 = Array.isArray(y) ? y.map(E).join("\u3001") : E(y);
          s += `${f ? `
` : ""}\u53C2\u6570${r + 1}\uFF1A\u9884\u671F ${T2} \u4F46\u5F97\u5230 ${E(t[r])}\u3002`, Array.isArray(y) ? y.forEach((d2, h) => {
            typeof d2?.[b] == "function" && (s += `${h === 0 ? `
\u9644\u52A0\u4FE1\u606F\uFF1A
` : ""}\u5C1D\u8BD5\u65B9\u6848${r + 1} - ${d2[b]?.(t[r])}`);
          }) : typeof y?.[b] == "function" && (s += `
\u9644\u52A0\u4FE1\u606F\uFF1A
\u5C1D\u8BD5\u65B9\u6848${r + 1} - ${y[b]?.(t[r])}`), f = true;
        }
      });
    }), f) throw s = `\u65B9\u6CD5 ${o} \u8C03\u7528\u9519\u8BEF
${s}`, s += a, new Error(s);
  }
  function x() {
    let i = [], e = [], t = [], n = null;
    function s(...o) {
      if (n) return n.apply(this, o);
      C(new Error(), i, o);
    }
    function a() {
      let o = arguments.length;
      if (!i.length) return s.apply(this, arguments);
      t: for (let c = 0; c < i.length; c++) {
        let f = i[c], l = t[c], y = f.length;
        if (l.length !== o && !l.rest || o === 0 && y && f[0] !== "..." || l.rest && o < y - 1) continue;
        let r = arguments, T2 = false;
        for (let d2 = 0; d2 < o; d2++) {
          let h = f[d2] || f[y - 1];
          if (h === "...") continue;
          let v = r[d2];
          if (h === "*" && v !== null) continue;
          let m = typeof v;
          if (!(m === "number" && h === Number) && !(m === "string" && h === String) && !(m === "boolean" && h === Boolean) && !(m === "function" && h === Function) && !(m === "object" && h === Object) && !R(v, h)) {
            if (h && typeof h["\u21C4"] == "function") {
              let S2 = h["\u21C4"](v);
              if (R(S2, h)) {
                if (!T2) {
                  r = new Array(o);
                  for (let N = 0; N < o; N++) r[N] = arguments[N];
                  T2 = true;
                }
                r[d2] = S2;
                continue;
              }
            }
            continue t;
          }
        }
        if (!T2) switch (o) {
          case 0:
            return e[c].call(this);
          case 1:
            return e[c].call(this, r[0]);
          case 2:
            return e[c].call(this, r[0], r[1]);
          case 3:
            return e[c].call(this, r[0], r[1], r[2]);
          case 4:
            return e[c].call(this, r[0], r[1], r[2], r[3]);
          case 5:
            return e[c].call(this, r[0], r[1], r[2], r[3], r[4]);
          case 6:
            return e[c].call(this, r[0], r[1], r[2], r[3], r[4], r[5]);
          case 7:
            return e[c].call(this, r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
          case 8:
            return e[c].call(this, r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
          case 9:
            return e[c].call(this, r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
          case 10:
            return e[c].call(this, r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9]);
        }
        return e[c].apply(this, r);
      }
      return s.apply(this, arguments);
    }
    return a.add = function(o, c) {
      if (!Array.isArray(o)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
      if (typeof c != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
      for (let f = 0; f < o.length; f++) if (o[f] === "..." && f !== o.length - 1) throw new SyntaxError(`${"..."} \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002`);
      return i.forEach((f) => {
        if (f.length === o.length) {
          for (let l = 0; l < f.length; l++) if (f[l] !== o[l]) return;
          throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
        }
      }), i.push(o), e.push(c), t.push({ length: o.length, rest: o[o.length - 1] === "..." }), a;
    }, a.any = function(o) {
      if (n) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
      if (typeof o != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
      return n = o, a;
    }, a;
  }
  var u = x().add([], function() {
    return x();
  }).add([Array, Function], function(i, e) {
    let t = x();
    return t.add(i, e), t;
  });
  var w = class {
    static T(e) {
      throw new Error("Method not implemented.");
    }
  };
  var _a, _b, _t, _e, _s, _o, _i, _c, _r, _i_instances, a_fn, n_fn;
  var I = (_c = class extends w {
    constructor(...e) {
      super();
      __privateAdd(this, _i_instances);
      __privateAdd(this, _t, []);
      __privateAdd(this, _e, null);
      __privateAdd(this, _s, null);
      __privateAdd(this, _o, /* @__PURE__ */ new Map());
      __privateAdd(this, _i, null);
      __publicField(this, _a, function* () {
        for (let e = 0; e < __privateGet(this, _t).length; e++) yield __privateGet(this, _t)[e];
      });
      return __privateGet(_c, _r).apply(this, e), __privateMethod(this, _i_instances, a_fn).call(this);
    }
    get length() {
      return __privateGet(this, _t).length;
    }
    get [Symbol.isConcatSpreadable]() {
      return true;
    }
    get [(_b = Symbol.toStringTag, _a = Symbol.iterator, _b)]() {
      return `List<${__privateGet(this, _e).name}>`;
    }
    static T(...e) {
      let t = /* @__PURE__ */ new WeakMap();
      return _c.T = u([Function], function(n) {
        let s = t.get(n);
        return !s && t.set(n, s = new Proxy(_c, { get: (a, o, c) => o === "##INNER_TYPE##" ? n : Reflect.get(a, o, c), construct: (a, o) => new a(n, ...o) })), s;
      }), _c.T(...e);
    }
    add(...e) {
      return __privateGet(this, _e) === Number ? this.add = function(t) {
        if (typeof t != "number") throw new Error(`\u53C2\u6570\u4E0D\u5339\u914D: \u671F\u671B Number, \u5B9E\u9645\u662F ${typeof t}`);
        __privateGet(this, _t).push(t);
      } : __privateGet(this, _e) === String ? this.add = function(t) {
        if (typeof t != "string") throw new Error(`\u53C2\u6570\u4E0D\u5339\u914D: \u671F\u671B String, \u5B9E\u9645\u662F ${typeof t}`);
        __privateGet(this, _t).push(t);
      } : __privateGet(this, _e) === Boolean ? this.add = function(t) {
        if (typeof t != "boolean") throw new Error(`\u53C2\u6570\u4E0D\u5339\u914D: \u671F\u671B Boolean, \u5B9E\u9645\u662F ${typeof t}`);
        __privateGet(this, _t).push(t);
      } : this.add = u([[__privateGet(this, _e), null]], function(t) {
        __privateGet(this, _t).push(t);
      }), this.add(...e);
    }
    addRange(...e) {
      return _c.prototype.addRange = u([[Array, _c]], function(t) {
        for (let n of t) this.add(n);
      }).any(function(...t) {
        for (let n of t) this.add(n);
      }), this.addRange(...e);
    }
    asReadOnly(...e) {
      let t = ["add", "addRange", "insert", "insertRange", "remove", "removeAt", "removeAll", "removeRange", "clear", "reverse", "sort", "asReadOnly"];
      return _c.prototype.asReadOnly = u([], function() {
        return new Proxy(this, { get: (n, s, a) => {
          if (typeof s == "string" && t.includes(s)) throw new Error(`\u65E0\u6CD5\u8BBF\u95EE\u53EA\u8BFB\u5217\u8868\u4E0A\u7684\u65B9\u6CD5 ${s}\u3002`);
          return __privateGet(this, _s)[s];
        }, set: (n, s, a, o) => {
          throw new Error(`\u65E0\u6CD5\u5728\u53EA\u8BFB\u5217\u8868\u4E0A\u8BBE\u7F6E\u5C5E\u6027 ${String(s)}\u3002`);
        } });
      }), this.asReadOnly(...e);
    }
    concat(...e) {
      return _c.prototype.concat = u([[Array, _c]], function(t) {
        let n = new _c(__privateGet(this, _e));
        for (let s of this) n.add(s);
        for (let s of t) n.add(s);
        return n;
      }), this.concat(...e);
    }
    clear(...e) {
      return _c.prototype.clear = u([], function() {
        __privateSet(this, _t, []);
      }), this.clear(...e);
    }
    clone(...e) {
      return _c.prototype.clone = u([], function() {
        return new _c(__privateGet(this, _e), this);
      }), this.clone(...e);
    }
    contains(...e) {
      return this.contains = u([__privateGet(this, _e)], function(t) {
        return __privateGet(this, _t).includes(t);
      }), this.contains(...e);
    }
    convertAll(...e) {
      return _c.prototype.convertAll = u([Function, Function], function(t, n) {
        let s = new _c(t);
        for (let a = 0; a < __privateGet(this, _t).length; a++) s.add(n(__privateGet(this, _t)[a]));
        return s;
      }), this.convertAll(...e);
    }
    copyTo(...e) {
      return _c.prototype.copyTo = u().add([Array], function(t) {
        __privateGet(this, _t).forEach((n, s) => {
          t[s] = n;
        });
      }).add([Array, Number], function(t, n) {
        __privateGet(this, _t).forEach((s, a) => {
          t[n + a] = s;
        });
      }).add([Array, Number, Number], function(t, n, s) {
        for (let a = 0; a < s; a++) t[n + a] = __privateGet(this, _t)[a];
      }), this.copyTo(...e);
    }
    exists(...e) {
      return _c.prototype.exists = u([Function], function(t) {
        return __privateGet(this, _t).some(t);
      }), this.exists(...e);
    }
    findAll(...e) {
      return _c.prototype.findAll = u([Function], function(t) {
        let n = new _c(__privateGet(this, _e));
        for (let s = 0; s < __privateGet(this, _t).length; s++) t(__privateGet(this, _t)[s]) && n.add(__privateGet(this, _t)[s]);
        return n;
      }), this.findAll(...e);
    }
    forEach(...e) {
      return _c.prototype.forEach = u([Function], function(t) {
        __privateGet(this, _t).forEach(t);
      }), this.forEach(...e);
    }
    find(...e) {
      return _c.prototype.find = u([Function], function(t) {
        return __privateGet(this, _t).find(t);
      }), this.find(...e);
    }
    findIndex(...e) {
      return _c.prototype.findIndex = u([Function], function(t) {
        return __privateGet(this, _t).findIndex(t);
      }), this.findIndex(...e);
    }
    findLast(...e) {
      return _c.prototype.findLast = u([Function], function(t) {
        __privateGet(this, _t).reverse();
        let n = __privateGet(this, _t).find(t);
        return __privateGet(this, _t).reverse(), n;
      }), this.findLast(...e);
    }
    findLastIndex(...e) {
      return _c.prototype.findLastIndex = u([Function], function(t) {
        __privateGet(this, _t).reverse();
        let n = __privateGet(this, _t).findIndex(t);
        return __privateGet(this, _t).reverse(), n === -1 ? -1 : __privateGet(this, _t).length - 1 - n;
      }), this.findLastIndex(...e);
    }
    getInnerType(...e) {
      return _c.prototype.getInnerType = u([], function() {
        return __privateGet(this, _e);
      }), this.getInnerType(...e);
    }
    insert(...e) {
      return this.insert = u([Number, [__privateGet(this, _e), null]], function(t, n) {
        __privateMethod(this, _i_instances, n_fn).call(this, t), __privateGet(this, _t).splice(t, 0, n);
      }), this.insert(...e);
    }
    insertRange(...e) {
      return _c.prototype.insertRange = u([Number, [Array, _c]], function(t, n) {
        __privateMethod(this, _i_instances, n_fn).call(this, t);
        for (let s of n) this.insert(t++, s);
      }).add([Number, "..."], function(t, ...n) {
        __privateMethod(this, _i_instances, n_fn).call(this, t);
        for (let s of n) this.insert(t++, s);
      }), this.insertRange(...e);
    }
    indexOf(...e) {
      return this.indexOf = u([__privateGet(this, _e)], function(t) {
        return __privateGet(this, _t).indexOf(t);
      }), this.indexOf(...e);
    }
    lastIndexOf(...e) {
      return this.lastIndexOf = u([__privateGet(this, _e)], function(t) {
        return __privateGet(this, _t).lastIndexOf(t);
      }), this.lastIndexOf(...e);
    }
    remove(...e) {
      return this.remove = u([__privateGet(this, _e)], function(t) {
        let n = __privateGet(this, _t).indexOf(t);
        return n !== -1 ? (__privateGet(this, _t).splice(n, 1), true) : false;
      }), this.remove(...e);
    }
    removeAt(...e) {
      return _c.prototype.removeAt = u([Number], function(t) {
        __privateMethod(this, _i_instances, n_fn).call(this, t), __privateGet(this, _t).splice(t, 1);
      }), this.removeAt(...e);
    }
    removeAll(...e) {
      return _c.prototype.removeAll = u([Function], function(t) {
        let n = 0;
        for (let s = __privateGet(this, _t).length - 1; s >= 0; s--) t(__privateGet(this, _t)[s]) && (__privateGet(this, _t).splice(s, 1), n++);
        return n;
      }), this.removeAll(...e);
    }
    removeRange(...e) {
      return _c.prototype.removeRange = u([Number, Number], function(t, n) {
        __privateMethod(this, _i_instances, n_fn).call(this, t), __privateMethod(this, _i_instances, n_fn).call(this, t + n - 1), __privateGet(this, _t).splice(t, n);
      }), this.removeRange(...e);
    }
    reverse(...e) {
      return _c.prototype.reverse = u([], function() {
        __privateGet(this, _t).reverse();
      }).add([Number, Number], function(t, n) {
        __privateMethod(this, _i_instances, n_fn).call(this, t), __privateMethod(this, _i_instances, n_fn).call(this, t + n - 1);
        let s = __privateGet(this, _t).splice(t, n);
        s.reverse(), __privateGet(this, _t).splice(t, 0, ...s);
      }), this.reverse(...e);
    }
    slice(...e) {
      return _c.prototype.slice = u().add([Number, Number], function(t, n) {
        return new _c(__privateGet(this, _e), __privateGet(this, _t).slice(t, n));
      }), this.slice(...e);
    }
    sort(...e) {
      return _c.prototype.sort = u().add([], function() {
        __privateGet(this, _t).sort();
      }).add([Function], function(t) {
        __privateGet(this, _t).sort(t);
      }), this.sort(...e);
    }
    toArray(...e) {
      return _c.prototype.toArray = u([], function() {
        return __privateGet(this, _t).slice();
      }), this.toArray(...e);
    }
    trueForAll(...e) {
      return _c.prototype.trueForAll = u([Function], function(t) {
        return __privateGet(this, _t).every(t);
      }), this.trueForAll(...e);
    }
    join(...e) {
      return _c.prototype.join = u().add([], function() {
        return __privateGet(this, _t).join();
      }).add([String], function(t) {
        return __privateGet(this, _t).join(t);
      }), this.join(...e);
    }
    toString(...e) {
      return _c.prototype.toString = u().any(function(...t) {
        return __privateGet(this, _t).toString();
      }), this.toString(...e);
    }
  }, _t = new WeakMap(), _e = new WeakMap(), _s = new WeakMap(), _o = new WeakMap(), _i = new WeakMap(), _r = new WeakMap(), _i_instances = new WeakSet(), a_fn = function() {
    return __privateSet(this, _s, new Proxy(this, { get: (e, t, n) => {
      if (t === "@@INNER_TYPE@@") return __privateGet(this, _e);
      if (typeof t == "string") {
        let a = t.charCodeAt(0);
        if (a >= 48 && a <= 57) {
          let o = Number(t);
          if (Number.isInteger(o) && o >= 0) return __privateGet(this, _t)[o];
        }
      }
      let s = Reflect.get(e, t, e);
      if (s !== void 0) {
        if (typeof s == "function") {
          let a = __privateGet(this, _o).get(t);
          return a || (a = s.bind(this), __privateGet(this, _o).set(t, a)), a;
        }
        return s;
      }
    }, set: (e, t, n, s) => {
      if (typeof t == "string") {
        let a = t.charCodeAt(0);
        if (a >= 48 && a <= 57) {
          let o = Number(t);
          if (Number.isInteger(o) && o >= 0) {
            if (o >= __privateGet(this, _t).length) throw new Error(`\u7D22\u5F15 ${t} \u8D85\u51FA\u8303\u56F4\uFF0C\u5217\u8868\u957F\u5EA6\u4E3A ${__privateGet(this, _t).length}\u3002`);
            return __privateGet(this, _i) || __privateSet(this, _i, u([__privateGet(this, _e)], () => {
            })), __privateGet(this, _i).call(this, n), __privateGet(this, _t)[o] = n, true;
          }
        }
      }
      throw new Error(`\u65E0\u6CD5\u5728\u6B64\u5217\u8868\u4E0A\u8BBE\u7F6E\u5C5E\u6027 ${String(t)}\u3002`);
    } }));
  }, n_fn = function(e) {
    if (e < 0) throw new Error(`\u7D22\u5F15 ${e} \u8D85\u51FA\u8303\u56F4\uFF0C\u7D22\u5F15\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E 0\u3002`);
    if (e >= __privateGet(this, _t).length) throw new Error(`\u7D22\u5F15 ${e} \u8D85\u51FA\u8303\u56F4\uFF0C\u5217\u8868\u957F\u5EA6\u4E3A ${__privateGet(this, _t).length}\u3002`);
  }, __privateAdd(_c, _r, function(...e) {
    return __privateSet(_c, _r, u().add([Function], function(t) {
      __privateSet(this, _e, t);
    }).add([Function, [Array, _c.T(typeof e?.[0] == "function" ? e[0] : class {
    })]], function(t, n) {
      __privateSet(this, _e, t);
      for (let s of n) this.add(s);
    }).add([Function, Number], function(t, n) {
      __privateSet(this, _e, t);
      let s;
      t === Number ? s = 0 : t === String ? s = "" : t === Boolean ? s = false : t === BigInt ? s = BigInt(0) : t === Symbol ? s = /* @__PURE__ */ Symbol() : s = null;
      for (let a = 0; a < n; a++) this.add(t?.["##STRUCT_CONSTRUCTOR##"]?.() || s);
    })), __privateGet(_c, _r).call(this, ...e);
  }), _c);

  // node_modules/@jyostudio/overload/src/constant.js
  var ANY_STR = "*";
  var REST_STR = "...";
  var TYPE_CONVERT_STR = "\u21C4";
  var INNER_TYPE_FATHER = "##INNER_TYPE##";
  var INNER_TYPE_SON = "@@INNER_TYPE@@";
  var INNER_THROW_FN = "##INNER_THROW_FN##";
  var INNER_TYPE_FN = "##INNER_TYPE_FN##";

  // node_modules/@jyostudio/overload/src/index.js
  function matchType(param, type) {
    if (Array.isArray(type)) {
      for (let i = 0; i < type.length; i++) {
        if (matchType(param, type[i])) {
          return true;
        }
      }
      return false;
    }
    if (type?.[INNER_TYPE_FN]?.(param)) {
      return true;
    }
    if (typeof type !== "function") {
      if (type === ANY_STR && param !== null || type === REST_STR || type === null && param === null || type === typeof param) {
        return true;
      }
      return false;
    }
    const typeOfParam = typeof param;
    if (typeOfParam === "number" && type === Number) return true;
    if (typeOfParam === "string" && type === String) return true;
    if (typeOfParam === "boolean" && type === Boolean) return true;
    if (typeOfParam === "symbol" && type === Symbol) return true;
    if (typeOfParam === "bigint" && type === BigInt) return true;
    if (typeOfParam === "undefined" && type === void 0) return true;
    if (type === Object) return typeOfParam === "object";
    if ((typeOfParam === "function" || typeOfParam === "object") && param instanceof type) {
      if (param?.[INNER_TYPE_SON] && type?.[INNER_TYPE_FATHER]) {
        return param[INNER_TYPE_SON] === type[INNER_TYPE_FATHER];
      }
      return true;
    }
    return false;
  }
  function getTypeName(param) {
    if (param === null) {
      return "null";
    }
    if (param === ANY_STR) {
      return "(\u4EFB\u610F)";
    }
    const paramType = typeof param;
    if (!["function", "object"].includes(paramType)) {
      return paramType[0].toUpperCase() + paramType.slice(1);
      ;
    }
    let className = (param?.name || param?.constructor?.name || "(\u672A\u77E5)").split(" ").pop();
    [INNER_TYPE_FATHER, INNER_TYPE_SON].forEach((v) => {
      if (param?.[v]) {
        className += `<${getTypeName(param?.[v])}>`;
      }
    });
    if (paramType === "function" && className === "anonymous") {
      return "(\u533F\u540D)";
    }
    return className;
  }
  function throwStackInfo(err, types, args) {
    const stackList = err.stack.split("\n").splice(3);
    let errorMessage = "";
    let formattedStack = "\n";
    let errorMethodName = "";
    stackList.forEach((stackLine, index, arr) => {
      const parts = stackLine.trim().split(" ");
      const fullMethodName = parts.length === 3 ? parts[1] : `(\u533F\u540D)`;
      const methodName = fullMethodName.split(".").pop();
      arr[index] = {
        fullMethodName,
        methodName,
        link: parts.length === 3 ? parts[2] : parts[1]
      };
      if (!index) {
        errorMethodName = methodName;
      } else {
        formattedStack += `${methodName}	${arr[index].link}
`;
      }
    });
    const matchingTypes = types.filter((v) => {
      if (v.length > 0 && v[v.length - 1] === REST_STR) {
        return args.length >= v.length - 1;
      }
      return v.length === args.length;
    });
    if (!matchingTypes.length) {
      errorMessage += `\u65B9\u6CD5 ${errorMethodName} \u4E0D\u5B58\u5728 ${args.length} \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002`;
      errorMessage += formattedStack;
      throw new Error(errorMessage);
    }
    let hasError = false;
    matchingTypes.forEach((matchingType) => {
      matchingType.forEach((expectedType, i) => {
        if (!matchType(args[i], expectedType)) {
          const expectedTypeNames = Array.isArray(expectedType) ? expectedType.map(getTypeName).join("\u3001") : getTypeName(expectedType);
          errorMessage += `${hasError ? "\n" : ""}\u53C2\u6570${i + 1}\uFF1A\u9884\u671F ${expectedTypeNames} \u4F46\u5F97\u5230 ${getTypeName(args[i])}\u3002`;
          if (Array.isArray(expectedType)) {
            expectedType.forEach((type, index) => {
              if (typeof type?.[INNER_THROW_FN] === "function") {
                errorMessage += `${index === 0 ? "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n" : ""}\u5C1D\u8BD5\u65B9\u6848${i + 1} - ${type[INNER_THROW_FN]?.(args[i])}`;
              }
            });
          } else if (typeof expectedType?.[INNER_THROW_FN] === "function") {
            errorMessage += `
\u9644\u52A0\u4FE1\u606F\uFF1A
\u5C1D\u8BD5\u65B9\u6848${i + 1} - ${expectedType[INNER_THROW_FN]?.(args[i])}`;
          }
          hasError = true;
        }
      });
    });
    if (hasError) {
      errorMessage = `\u65B9\u6CD5 ${errorMethodName} \u8C03\u7528\u9519\u8BEF
${errorMessage}`;
      errorMessage += formattedStack;
      throw new Error(errorMessage);
    }
  }
  function createOverload() {
    const TYPES = [];
    const FNS = [];
    const OPTIONS = [];
    let anyFn = null;
    function runAny(...args) {
      if (anyFn) {
        return anyFn.apply(this, args);
      }
      throwStackInfo(new Error(), TYPES, args);
    }
    function overload() {
      const paramsLength = arguments.length;
      if (!TYPES.length) {
        return runAny.apply(this, arguments);
      }
      loop: for (let i = 0; i < TYPES.length; i++) {
        const types = TYPES[i];
        const options = OPTIONS[i];
        const typesLength = types.length;
        if (options.length !== paramsLength && !options.rest || paramsLength === 0 && typesLength && types[0] !== REST_STR) {
          continue;
        }
        if (options.rest && paramsLength < typesLength - 1) {
          continue;
        }
        let args = arguments;
        let hasConverted = false;
        for (let j = 0; j < paramsLength; j++) {
          const type = types[j] || types[typesLength - 1];
          if (type === REST_STR) continue;
          const param = args[j];
          if (type === ANY_STR && param !== null) continue;
          const typeOfParam = typeof param;
          if (typeOfParam === "number" && type === Number) continue;
          if (typeOfParam === "string" && type === String) continue;
          if (typeOfParam === "boolean" && type === Boolean) continue;
          if (typeOfParam === "function" && type === Function) continue;
          if (typeOfParam === "object" && type === Object) continue;
          if (!matchType(param, type)) {
            if (type && typeof type[TYPE_CONVERT_STR] === "function") {
              const convert = type[TYPE_CONVERT_STR](param);
              if (matchType(convert, type)) {
                if (!hasConverted) {
                  args = new Array(paramsLength);
                  for (let k2 = 0; k2 < paramsLength; k2++) {
                    args[k2] = arguments[k2];
                  }
                  hasConverted = true;
                }
                args[j] = convert;
                continue;
              }
            }
            continue loop;
          }
        }
        if (!hasConverted) {
          switch (paramsLength) {
            case 0:
              return FNS[i].call(this);
            case 1:
              return FNS[i].call(this, args[0]);
            case 2:
              return FNS[i].call(this, args[0], args[1]);
            case 3:
              return FNS[i].call(this, args[0], args[1], args[2]);
            case 4:
              return FNS[i].call(this, args[0], args[1], args[2], args[3]);
            case 5:
              return FNS[i].call(this, args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return FNS[i].call(this, args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return FNS[i].call(this, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            case 8:
              return FNS[i].call(this, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
            case 9:
              return FNS[i].call(this, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
            case 10:
              return FNS[i].call(this, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
          }
        }
        return FNS[i].apply(this, args);
      }
      return runAny.apply(this, arguments);
    }
    overload.add = function(types, fn) {
      if (!Array.isArray(types)) {
        throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
      }
      if (typeof fn !== "function") {
        throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
      }
      for (let i = 0; i < types.length; i++) {
        if (types[i] === REST_STR && i !== types.length - 1) {
          throw new SyntaxError(`${REST_STR} \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002`);
        }
      }
      TYPES.forEach((key) => {
        if (key.length !== types.length) {
          return;
        }
        for (let i = 0; i < key.length; i++) {
          if (key[i] !== types[i]) return;
        }
        throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
      });
      TYPES.push(types);
      FNS.push(fn);
      OPTIONS.push({
        length: types.length,
        rest: types[types.length - 1] === REST_STR
      });
      return overload;
    };
    overload.any = function(fn) {
      if (anyFn) {
        throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
      }
      if (typeof fn !== "function") {
        throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
      }
      anyFn = fn;
      return overload;
    };
    return overload;
  }
  var src_default = createOverload().add([], function() {
    return createOverload();
  }).add([Array, Function], function(types, fn) {
    const result = createOverload();
    result.add(types, fn);
    return result;
  });

  // node_modules/@jyostudio/overload/dist/decorator.js
  var S = "##INNER_TYPE##";
  var $ = "@@INNER_TYPE@@";
  var R2 = "##INNER_THROW_FN##";
  var Y = "##INNER_TYPE_FN##";
  function A(r, n) {
    if (Array.isArray(n)) {
      for (let u2 = 0; u2 < n.length; u2++) if (A(r, n[u2])) return true;
      return false;
    }
    if (n?.[Y]?.(r)) return true;
    if (typeof n != "function") return n === "*" && r !== null || n === "..." || n === null && r === null || n === typeof r;
    let o = typeof r;
    return o === "number" && n === Number || o === "string" && n === String || o === "boolean" && n === Boolean || o === "symbol" && n === Symbol || o === "bigint" && n === BigInt || o === "undefined" && n === void 0 ? true : n === Object ? o === "object" : (o === "function" || o === "object") && r instanceof n ? r?.[$] && n?.[S] ? r[$] === n[S] : true : false;
  }
  function b2(r) {
    if (r === null) return "null";
    if (r === "*") return "(\u4EFB\u610F)";
    let n = typeof r;
    if (!["function", "object"].includes(n)) return n[0].toUpperCase() + n.slice(1);
    let o = (r?.name || r?.constructor?.name || "(\u672A\u77E5)").split(" ").pop();
    return [S, $].forEach((u2) => {
      r?.[u2] && (o += `<${b2(r?.[u2])}>`);
    }), n === "function" && o === "anonymous" ? "(\u533F\u540D)" : o;
  }
  function k(r, n, o) {
    let u2 = r.stack.split(`
`).splice(3), c = "", a = `
`, e = "";
    u2.forEach((f, h, t) => {
      let E2 = f.trim().split(" "), N = E2.length === 3 ? E2[1] : "(\u533F\u540D)", l = N.split(".").pop();
      t[h] = { fullMethodName: N, methodName: l, link: E2.length === 3 ? E2[2] : E2[1] }, h ? a += `${l}	${t[h].link}
` : e = l;
    });
    let i = n.filter((f) => f.length > 0 && f[f.length - 1] === "..." ? o.length >= f.length - 1 : f.length === o.length);
    if (!i.length) throw c += `\u65B9\u6CD5 ${e} \u4E0D\u5B58\u5728 ${o.length} \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002`, c += a, new Error(c);
    let s = false;
    if (i.forEach((f) => {
      f.forEach((h, t) => {
        if (!A(o[t], h)) {
          let E2 = Array.isArray(h) ? h.map(b2).join("\u3001") : b2(h);
          c += `${s ? `
` : ""}\u53C2\u6570${t + 1}\uFF1A\u9884\u671F ${E2} \u4F46\u5F97\u5230 ${b2(o[t])}\u3002`, Array.isArray(h) ? h.forEach((N, l) => {
            typeof N?.[R2] == "function" && (c += `${l === 0 ? `
\u9644\u52A0\u4FE1\u606F\uFF1A
` : ""}\u5C1D\u8BD5\u65B9\u6848${t + 1} - ${N[R2]?.(o[t])}`);
          }) : typeof h?.[R2] == "function" && (c += `
\u9644\u52A0\u4FE1\u606F\uFF1A
\u5C1D\u8BD5\u65B9\u6848${t + 1} - ${h[R2]?.(o[t])}`), s = true;
        }
      });
    }), s) throw c = `\u65B9\u6CD5 ${e} \u8C03\u7528\u9519\u8BEF
${c}`, c += a, new Error(c);
  }
  function I2() {
    let r = [], n = [], o = [], u2 = null;
    function c(...e) {
      if (u2) return u2.apply(this, e);
      k(new Error(), r, e);
    }
    function a() {
      let e = arguments.length;
      if (!r.length) return c.apply(this, arguments);
      t: for (let i = 0; i < r.length; i++) {
        let s = r[i], f = o[i], h = s.length;
        if (f.length !== e && !f.rest || e === 0 && h && s[0] !== "..." || f.rest && e < h - 1) continue;
        let t = arguments, E2 = false;
        for (let N = 0; N < e; N++) {
          let l = s[N] || s[h - 1];
          if (l === "...") continue;
          let m = t[N];
          if (l === "*" && m !== null) continue;
          let _ = typeof m;
          if (!(_ === "number" && l === Number) && !(_ === "string" && l === String) && !(_ === "boolean" && l === Boolean) && !(_ === "function" && l === Function) && !(_ === "object" && l === Object) && !A(m, l)) {
            if (l && typeof l["\u21C4"] == "function") {
              let O = l["\u21C4"](m);
              if (A(O, l)) {
                if (!E2) {
                  t = new Array(e);
                  for (let w2 = 0; w2 < e; w2++) t[w2] = arguments[w2];
                  E2 = true;
                }
                t[N] = O;
                continue;
              }
            }
            continue t;
          }
        }
        if (!E2) switch (e) {
          case 0:
            return n[i].call(this);
          case 1:
            return n[i].call(this, t[0]);
          case 2:
            return n[i].call(this, t[0], t[1]);
          case 3:
            return n[i].call(this, t[0], t[1], t[2]);
          case 4:
            return n[i].call(this, t[0], t[1], t[2], t[3]);
          case 5:
            return n[i].call(this, t[0], t[1], t[2], t[3], t[4]);
          case 6:
            return n[i].call(this, t[0], t[1], t[2], t[3], t[4], t[5]);
          case 7:
            return n[i].call(this, t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          case 8:
            return n[i].call(this, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]);
          case 9:
            return n[i].call(this, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
          case 10:
            return n[i].call(this, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9]);
        }
        return n[i].apply(this, t);
      }
      return c.apply(this, arguments);
    }
    return a.add = function(e, i) {
      if (!Array.isArray(e)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
      if (typeof i != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
      for (let s = 0; s < e.length; s++) if (e[s] === "..." && s !== e.length - 1) throw new SyntaxError(`${"..."} \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002`);
      return r.forEach((s) => {
        if (s.length === e.length) {
          for (let f = 0; f < s.length; f++) if (s[f] !== e[f]) return;
          throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
        }
      }), r.push(e), n.push(i), o.push({ length: e.length, rest: e[e.length - 1] === "..." }), a;
    }, a.any = function(e) {
      if (u2) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
      if (typeof e != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
      return u2 = e, a;
    }, a;
  }
  var d = I2().add([], function() {
    return I2();
  }).add([Array, Function], function(r, n) {
    let o = I2();
    return o.add(r, n), o;
  });
  var T = /* @__PURE__ */ new WeakMap();
  function x2(r) {
    return T.has(r) || T.set(r, d([r], function() {
    })), function(n, o) {
      let u2 = T.get(r);
      return function(...c) {
        return u2?.(...c), n.call(this, ...c);
      };
    };
  }
  function H(r) {
    return function(n, o) {
      let u2;
      return function(...c) {
        if (!u2) {
          let e = r();
          T.has(e) || T.set(e, d([e], function() {
          })), u2 = T.get(e);
        }
        return u2?.(...c), n.call(this, ...c);
      };
    };
  }

  // src/math-helper.ts
  var MathHelper = class _MathHelper {
    constructor() {
      throw new Error("MathHelper \u7C7B\u4E0D\u80FD\u88AB\u5B9E\u4F8B\u5316\u3002");
    }
    /**
     * 呈现数学常量 e。
     */
    static get e() {
      return 2.71828175;
    }
    /**
     * 呈现以 10 为底 e 的对数。
     */
    static get log10e() {
      return 0.4342945;
    }
    /**
     * 呈现以 2 为底 e 的对数。
     */
    static get log2e() {
      return 1.442695;
    }
    /**
     * 呈现 pi 的值。
     */
    static get pi() {
      return 3.14159274;
    }
    /**
     * 呈现 pi 除以二的值。
     */
    static get piOver2() {
      return 1.57079637;
    }
    /**
     * 呈现 pi 除以四的值。
     */
    static get piOver4() {
      return 0.7853982;
    }
    /**
     * 呈现 2π 的值。
     */
    static get twoPi() {
      return 6.28318548;
    }
    static barycentric(...params) {
      _MathHelper.barycentric = src_default(
        [Number, Number, Number, Number, Number],
        (value1, value2, value3, amount1, amount2) => value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2
      );
      return _MathHelper.barycentric.apply(this, params);
    }
    static catmullRom(...params) {
      _MathHelper.catmullRom = src_default([Number, Number, Number, Number, Number], function(value1, value2, value3, value4, amount) {
        const amountSquared = amount * amount;
        const amountCubed = amountSquared * amount;
        return 0.5 * (2 * value2 + (value3 - value1) * amount + (2 * value1 - 5 * value2 + 4 * value3 - value4) * amountSquared + (3 * value2 - value1 - 3 * value3 + value4) * amountCubed);
      });
      return _MathHelper.catmullRom.apply(this, params);
    }
    static clamp(...params) {
      _MathHelper.clamp = src_default([Number, Number, Number], (value, min, max) => Math.min(Math.max(value, min), max));
      return _MathHelper.clamp.apply(this, params);
    }
    static distance(...params) {
      _MathHelper.distance = src_default([Number, Number], (value1, value2) => Math.abs(value1 - value2));
      return _MathHelper.distance.apply(this, params);
    }
    static hermite(...params) {
      _MathHelper.hermite = src_default([Number, Number, Number, Number, Number], function(value1, tangent1, value2, tangent2, amount) {
        const sCubed = amount * amount * amount;
        const sSquared = amount * amount;
        return amount === 0 ? value1 : amount === 1 ? value2 : (2 * value1 - 2 * value2 + tangent2 + tangent1) * sCubed + (3 * value2 - 3 * value1 - 2 * tangent1 - tangent2) * sSquared + tangent1 * amount + value1;
      });
      return _MathHelper.hermite.apply(this, params);
    }
    static lerp(...params) {
      _MathHelper.lerp = src_default([Number, Number, Number], (value1, value2, amount) => value1 + (value2 - value1) * amount);
      return _MathHelper.lerp.apply(this, params);
    }
    static max(...params) {
      _MathHelper.max = src_default([Number, Number], (value1, value2) => Math.max(value1, value2));
      return _MathHelper.max.apply(this, params);
    }
    static min(...params) {
      _MathHelper.min = src_default([Number, Number], (value1, value2) => Math.min(value1, value2));
      return _MathHelper.min.apply(this, params);
    }
    static smoothStep(...params) {
      _MathHelper.smoothStep = src_default([Number, Number, Number], (value1, value2, amount) => _MathHelper.hermite(value1, 0, value2, 0, _MathHelper.clamp(amount, 0, 1)));
      return _MathHelper.smoothStep.apply(this, params);
    }
    static toDegrees(...params) {
      _MathHelper.toDegrees = src_default([Number], (radians) => radians * 57.29577793714917);
      return _MathHelper.toDegrees.apply(this, params);
    }
    static toRadians(...params) {
      _MathHelper.toRadians = src_default([Number], (degrees) => degrees * 0.017453293);
      return _MathHelper.toRadians.apply(this, params);
    }
    static wrapAngle(...params) {
      _MathHelper.wrapAngle = src_default([Number], function(angle) {
        const { pi, twoPi } = _MathHelper;
        if (angle > -pi && angle <= pi) return angle;
        angle %= twoPi;
        if (angle <= -pi) return angle + twoPi;
        if (angle > pi) return angle - twoPi;
        return angle;
      });
      return _MathHelper.wrapAngle.apply(this, params);
    }
    static isPowerOfTwo(...params) {
      _MathHelper.isPowerOfTwo = src_default([Number], (value) => value > 0 && (value & value - 1) === 0);
      return _MathHelper.isPowerOfTwo.apply(this, params);
    }
    static floorPowerOfTwo(...params) {
      _MathHelper.floorPowerOfTwo = src_default([Number], function(value) {
        if (value === 1) return 0;
        let result = value - 1;
        result |= result >> 1;
        result |= result >> 2;
        result |= result >> 4;
        result |= result >> 8;
        result |= result >> 16;
        result += 1;
        if (result > value) return result >> 1;
        return result;
      });
      return _MathHelper.floorPowerOfTwo.apply(this, params);
    }
  };

  // node_modules/@jyostudio/enum/src/index.js
  var _a2, _value, _description, __constructor;
  _a2 = Symbol.iterator;
  var _Enum = class _Enum {
    constructor(...params) {
      __privateAdd(this, _value);
      __privateAdd(this, _description, "");
      __publicField(this, _a2, function* () {
        yield __privateGet(this, _value);
      });
      return __privateGet(_Enum, __constructor).apply(this, params);
    }
    get description() {
      return __privateGet(this, _description);
    }
    get valNumber() {
      return Number(__privateGet(this, _value));
    }
    get valString() {
      return "" + (__privateGet(this, _value) || "");
    }
    get valBoolean() {
      return !!__privateGet(this, _value);
    }
    get valObject() {
      return Object(__privateGet(this, _value));
    }
    static getAll(...params) {
      _Enum.getAll = src_default().add([], function() {
        const list = [];
        const allNames = Object.getOwnPropertyNames(this);
        for (let i = 0; i < allNames.length; i++) {
          if (allNames[i] === "prototype") {
            continue;
          }
          const p = this[allNames[i]];
          if (typeof p === "object" && p instanceof _Enum) {
            list.push(p);
          }
        }
        return list;
      });
      return _Enum.getAll.apply(this, params);
    }
    static getByValue(...params) {
      function getFn(value, typeConvter) {
        const allEnum = this.getAll();
        for (let i = allEnum.length; i--; ) {
          if (allEnum[i][typeConvter] === value) {
            return allEnum[i];
          }
        }
        return null;
      }
      ;
      _Enum.getByValue = src_default().add([Number], function(value) {
        return getFn.call(this, value, "valNumber");
      }).add([String], function(value) {
        return getFn.call(this, value, "valString");
      }).add([Boolean], function(value) {
        return getFn.call(this, value, "valBoolean");
      }).add([_Enum], function(value) {
        return this.getByValue(value.valNumber);
      }).add([Object], function(value) {
        return getFn.call(this, value, "valObject");
      });
      return _Enum.getByValue.apply(this, params);
    }
    static getByDescription(...params) {
      _Enum.getByDescription = src_default().add(
        [String],
        /**
         * @this {typeof Enum}
         * @param {String} value - 描述
         * @returns {Enum | null}
         */
        function(value) {
          let allEnum = this.getAll();
          for (let i = allEnum.length; i--; ) {
            if (allEnum[i].description === value) {
              return allEnum[i];
            }
          }
          return null;
        }
      );
      return _Enum.getByDescription.apply(this, params);
    }
    static set(...params) {
      _Enum.set = src_default().add(
        [Object],
        /**
         * @this {typeof Enum}
         * @param {Object} map - 枚举表
         */
        function(map) {
          for (const key in map) {
            const value = new this(map[key], key);
            Reflect.defineProperty(this, key, {
              writable: false,
              enumerable: true,
              configurable: false,
              value
            });
          }
          Object.freeze(this);
        }
      );
      return _Enum.set.apply(this, params);
    }
    valueOf() {
      return __privateGet(this, _value);
    }
  };
  _value = new WeakMap();
  _description = new WeakMap();
  __constructor = new WeakMap();
  __privateAdd(_Enum, __constructor, function(...params) {
    __privateSet(_Enum, __constructor, src_default().add(
      [],
      /**
       * @this {Enum}
       */
      function() {
        __privateSet(this, _value, /* @__PURE__ */ Symbol());
      }
    ).add(
      [_Enum],
      /**
       * @this {Enum}
       * @param {Enum} value - 枚举对象
       */
      function(value) {
        __privateSet(this, _value, __privateGet(value, _value));
      }
    ).add(
      ["*"],
      /**
       * @this {Enum}
       * @param {*} value - 枚举值
       */
      function(value) {
        __privateSet(this, _value, value);
      }
    ).add(
      [_Enum, String],
      /**
       * @this {Enum}
       * @param {Enum} value - 枚举对象
       * @param {String} description - 描述
       */
      function(value, description) {
        __privateSet(this, _value, __privateGet(value, _value));
        __privateSet(this, _description, description);
      }
    ).add(
      ["*", String],
      /**
       * @this {Enum}
       * @param {*} value - 枚举值
       * @param {String} description - 描述
       */
      function(value, description) {
        __privateSet(this, _value, value);
        __privateSet(this, _description, description);
      }
    ));
    return __privateGet(_Enum, __constructor).apply(this, params);
  });
  var Enum = _Enum;

  // src/containment-type.ts
  var _ContainmentType = class _ContainmentType extends Enum {
  };
  _ContainmentType.set({
    disjoint: 0,
    contains: 1,
    intersects: 2
  });
  var ContainmentType = _ContainmentType;

  // src/plane-intersection-type.ts
  var _PlaneIntersectionType = class _PlaneIntersectionType extends Enum {
  };
  _PlaneIntersectionType.set({
    front: 0,
    back: 1,
    intersecting: 2
  });
  var PlaneIntersectionType = _PlaneIntersectionType;

  // src/quaternion.ts
  var CONSTRUCTOR_SYMBOL = /* @__PURE__ */ Symbol("constructor");
  var _w_dec, _z_dec, _y_dec, _x_dec, _x, _init, _y, _z, _w;
  var _Quaternion = class _Quaternion {
    constructor(...params) {
      __runInitializers(_init, 5, this);
      /**
       * 四元数矢量色差的 x 值。
       */
      __privateAdd(this, _x, 0);
      /**
       * 四元数矢量色差的 y 值。
       */
      __privateAdd(this, _y, 0);
      /**
       * 四元数矢量色差的 z 值。
       */
      __privateAdd(this, _z, 0);
      /**
       * 四元数的旋转组件。
       */
      __privateAdd(this, _w, 0);
      _Quaternion[CONSTRUCTOR_SYMBOL].apply(this, params);
    }
    /**
     * 返回呈现无旋转的 Quaternion。
     */
    static get identity() {
      return new _Quaternion(0, 0, 0, 1);
    }
    /**
     * 获取四元数矢量色差的 x 值。
     */
    get x() {
      return __privateGet(this, _x);
    }
    set x(value) {
      __privateSet(this, _x, value);
    }
    /**
     * 获取四元数矢量色差的 y 值。
     */
    get y() {
      return __privateGet(this, _y);
    }
    set y(value) {
      __privateSet(this, _y, value);
    }
    /**
     * 获取四元数矢量色差的 z 值。
     */
    get z() {
      return __privateGet(this, _z);
    }
    set z(value) {
      __privateSet(this, _z, value);
    }
    /**
     * 获取四元数的旋转组件。
     */
    get w() {
      return __privateGet(this, _w);
    }
    set w(value) {
      __privateSet(this, _w, value);
    }
    /**
     * 结构化构造函数。
     * @returns Quaternion 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _Quaternion();
    }
    static [(_x_dec = [x2(Number)], _y_dec = [x2(Number)], _z_dec = [x2(Number)], _w_dec = [x2(Number)], CONSTRUCTOR_SYMBOL)](...params) {
      _Quaternion[CONSTRUCTOR_SYMBOL] = src_default().add([], function() {
      }).add([Number, Number, Number, Number], function(x3, y, z, w2) {
        __privateSet(this, _x, x3);
        __privateSet(this, _y, y);
        __privateSet(this, _z, z);
        __privateSet(this, _w, w2);
      }).add([Vector3, Number], function(vectorPart, scalarPart) {
        __privateSet(this, _x, vectorPart.x);
        __privateSet(this, _y, vectorPart.y);
        __privateSet(this, _z, vectorPart.z);
        __privateSet(this, _w, scalarPart);
      });
      return _Quaternion[CONSTRUCTOR_SYMBOL].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _x);
      yield __privateGet(this, _y);
      yield __privateGet(this, _z);
      yield __privateGet(this, _w);
    }
    static add(...params) {
      _Quaternion.add = src_default().add([_Quaternion, _Quaternion], function(quaternion1, quaternion2) {
        return new _Quaternion(
          __privateGet(quaternion1, _x) + __privateGet(quaternion2, _x),
          __privateGet(quaternion1, _y) + __privateGet(quaternion2, _y),
          __privateGet(quaternion1, _z) + __privateGet(quaternion2, _z),
          __privateGet(quaternion1, _w) + __privateGet(quaternion2, _w)
        );
      }).add([_Quaternion, _Quaternion, _Quaternion], function(quaternion1, quaternion2, result) {
        __privateSet(result, _x, __privateGet(quaternion1, _x) + __privateGet(quaternion2, _x));
        __privateSet(result, _y, __privateGet(quaternion1, _y) + __privateGet(quaternion2, _y));
        __privateSet(result, _z, __privateGet(quaternion1, _z) + __privateGet(quaternion2, _z));
        __privateSet(result, _w, __privateGet(quaternion1, _w) + __privateGet(quaternion2, _w));
      });
      return _Quaternion.add.apply(this, params);
    }
    static concatenate(...params) {
      _Quaternion.concatenate = src_default().add([_Quaternion, _Quaternion], function(value1, value2) {
        const x1 = __privateGet(value1, _x), y1 = __privateGet(value1, _y), z1 = __privateGet(value1, _z), w1 = __privateGet(value1, _w);
        const x22 = __privateGet(value2, _x), y2 = __privateGet(value2, _y), z2 = __privateGet(value2, _z), w2 = __privateGet(value2, _w);
        return new _Quaternion(
          x22 * w1 + x1 * w2 + (y2 * z1 - z2 * y1),
          y2 * w1 + y1 * w2 + (z2 * x1 - x22 * z1),
          z2 * w1 + z1 * w2 + (x22 * y1 - y2 * x1),
          w2 * w1 - (x22 * x1 + y2 * y1 + z2 * z1)
        );
      }).add([_Quaternion, _Quaternion, _Quaternion], function(value1, value2, result) {
        const x1 = __privateGet(value1, _x), y1 = __privateGet(value1, _y), z1 = __privateGet(value1, _z), w1 = __privateGet(value1, _w);
        const x22 = __privateGet(value2, _x), y2 = __privateGet(value2, _y), z2 = __privateGet(value2, _z), w2 = __privateGet(value2, _w);
        __privateSet(result, _x, x22 * w1 + x1 * w2 + (y2 * z1 - z2 * y1));
        __privateSet(result, _y, y2 * w1 + y1 * w2 + (z2 * x1 - x22 * z1));
        __privateSet(result, _z, z2 * w1 + z1 * w2 + (x22 * y1 - y2 * x1));
        __privateSet(result, _w, w2 * w1 - (x22 * x1 + y2 * y1 + z2 * z1));
      });
      return _Quaternion.concatenate.apply(this, params);
    }
    static conjugate(...params) {
      _Quaternion.conjugate = src_default().add([_Quaternion], function(value) {
        return new _Quaternion(-__privateGet(value, _x), -__privateGet(value, _y), -__privateGet(value, _z), __privateGet(value, _w));
      }).add([_Quaternion, _Quaternion], function(value, result) {
        __privateSet(result, _x, -__privateGet(value, _x));
        __privateSet(result, _y, -__privateGet(value, _y));
        __privateSet(result, _z, -__privateGet(value, _z));
        __privateSet(result, _w, __privateGet(value, _w));
      });
      return _Quaternion.conjugate.apply(this, params);
    }
    static createFromAxisAngle(...params) {
      _Quaternion.createFromAxisAngle = src_default().add([Vector3, Number], function(axis, angle) {
        const x3 = axis.x, y = axis.y, z = axis.z;
        const half = angle * 0.5;
        const sin = Math.sin(half);
        const cos = Math.cos(half);
        return new _Quaternion(
          x3 * sin,
          y * sin,
          z * sin,
          cos
        );
      }).add([Vector3, Number, _Quaternion], function(axis, angle, result) {
        const x3 = axis.x, y = axis.y, z = axis.z;
        const half = angle * 0.5;
        const sin = Math.sin(half);
        const cos = Math.cos(half);
        __privateSet(result, _x, x3 * sin);
        __privateSet(result, _y, y * sin);
        __privateSet(result, _z, z * sin);
        __privateSet(result, _w, cos);
      });
      return _Quaternion.createFromAxisAngle.apply(this, params);
    }
    static createFromRotationMatrix(...params) {
      _Quaternion.createFromRotationMatrix = src_default().add([Matrix], function(matrix) {
        const scale = matrix.m11 + matrix.m22 + matrix.m33;
        let sqrt, half;
        const result = new _Quaternion();
        if (scale > 0) {
          sqrt = Math.sqrt(scale + 1);
          __privateSet(result, _w, sqrt * 0.5);
          sqrt = 0.5 / sqrt;
          __privateSet(result, _x, (matrix.m23 - matrix.m32) * sqrt);
          __privateSet(result, _y, (matrix.m31 - matrix.m13) * sqrt);
          __privateSet(result, _z, (matrix.m12 - matrix.m21) * sqrt);
        } else if (matrix.m11 >= matrix.m22 && matrix.m11 >= matrix.m33) {
          sqrt = Math.sqrt(1 + matrix.m11 - matrix.m22 - matrix.m33);
          half = 0.5 / sqrt;
          __privateSet(result, _x, 0.5 * sqrt);
          __privateSet(result, _y, (matrix.m12 + matrix.m21) * half);
          __privateSet(result, _z, (matrix.m13 + matrix.m31) * half);
          __privateSet(result, _w, (matrix.m23 - matrix.m32) * half);
        } else if (matrix.m22 > matrix.m33) {
          sqrt = Math.sqrt(1 + matrix.m22 - matrix.m11 - matrix.m33);
          half = 0.5 / sqrt;
          __privateSet(result, _x, (matrix.m21 + matrix.m12) * half);
          __privateSet(result, _y, 0.5 * sqrt);
          __privateSet(result, _z, (matrix.m32 + matrix.m23) * half);
          __privateSet(result, _w, (matrix.m31 - matrix.m13) * half);
        } else {
          sqrt = Math.sqrt(1 + matrix.m33 - matrix.m11 - matrix.m22);
          half = 0.5 / sqrt;
          __privateSet(result, _x, (matrix.m31 + matrix.m13) * half);
          __privateSet(result, _y, (matrix.m32 + matrix.m23) * half);
          __privateSet(result, _z, 0.5 * sqrt);
          __privateSet(result, _w, (matrix.m12 - matrix.m21) * half);
        }
        return result;
      }).add([Matrix, _Quaternion], function(matrix, result) {
        const scale = matrix.m11 + matrix.m22 + matrix.m33;
        let sqrt, half;
        if (scale > 0) {
          sqrt = Math.sqrt(scale + 1);
          __privateSet(result, _w, sqrt * 0.5);
          sqrt = 0.5 / sqrt;
          __privateSet(result, _x, (matrix.m23 - matrix.m32) * sqrt);
          __privateSet(result, _y, (matrix.m31 - matrix.m13) * sqrt);
          __privateSet(result, _z, (matrix.m12 - matrix.m21) * sqrt);
        } else if (matrix.m11 >= matrix.m22 && matrix.m11 >= matrix.m33) {
          sqrt = Math.sqrt(1 + matrix.m11 - matrix.m22 - matrix.m33);
          half = 0.5 / sqrt;
          __privateSet(result, _x, 0.5 * sqrt);
          __privateSet(result, _y, (matrix.m12 + matrix.m21) * half);
          __privateSet(result, _z, (matrix.m13 + matrix.m31) * half);
          __privateSet(result, _w, (matrix.m23 - matrix.m32) * half);
        } else if (matrix.m22 > matrix.m33) {
          sqrt = Math.sqrt(1 + matrix.m22 - matrix.m11 - matrix.m33);
          half = 0.5 / sqrt;
          __privateSet(result, _x, (matrix.m21 + matrix.m12) * half);
          __privateSet(result, _y, 0.5 * sqrt);
          __privateSet(result, _z, (matrix.m32 + matrix.m23) * half);
          __privateSet(result, _w, (matrix.m31 - matrix.m13) * half);
        } else {
          sqrt = Math.sqrt(1 + matrix.m33 - matrix.m11 - matrix.m22);
          half = 0.5 / sqrt;
          __privateSet(result, _x, (matrix.m31 + matrix.m13) * half);
          __privateSet(result, _y, (matrix.m32 + matrix.m23) * half);
          __privateSet(result, _z, 0.5 * sqrt);
          __privateSet(result, _w, (matrix.m12 - matrix.m21) * half);
        }
      });
      return _Quaternion.createFromRotationMatrix.apply(this, params);
    }
    static createFromYawPitchRoll(...params) {
      _Quaternion.createFromYawPitchRoll = src_default().add([Number, Number, Number], function(yaw, pitch, roll) {
        const halfRoll = roll * 0.5;
        const halfPitch = pitch * 0.5;
        const halfYaw = yaw * 0.5;
        const sinRoll = Math.sin(halfRoll);
        const cosRoll = Math.cos(halfRoll);
        const sinPitch = Math.sin(halfPitch);
        const cosPitch = Math.cos(halfPitch);
        const sinYaw = Math.sin(halfYaw);
        const cosYaw = Math.cos(halfYaw);
        return new _Quaternion(
          cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll,
          sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll,
          cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll,
          cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll
        );
      }).add([Number, Number, Number, _Quaternion], function(yaw, pitch, roll, result) {
        const halfRoll = roll * 0.5;
        const halfPitch = pitch * 0.5;
        const halfYaw = yaw * 0.5;
        const sinRoll = Math.sin(halfRoll);
        const cosRoll = Math.cos(halfRoll);
        const sinPitch = Math.sin(halfPitch);
        const cosPitch = Math.cos(halfPitch);
        const sinYaw = Math.sin(halfYaw);
        const cosYaw = Math.cos(halfYaw);
        __privateSet(result, _x, cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll);
        __privateSet(result, _y, sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll);
        __privateSet(result, _z, cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll);
        __privateSet(result, _w, cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll);
      });
      return _Quaternion.createFromYawPitchRoll.apply(this, params);
    }
    static divide(...params) {
      _Quaternion.divide = src_default().add([_Quaternion, _Quaternion], function(quaternion1, quaternion2) {
        const q1x = __privateGet(quaternion1, _x), q1y = __privateGet(quaternion1, _y), q1z = __privateGet(quaternion1, _z), q1w = __privateGet(quaternion1, _w);
        const q2x = __privateGet(quaternion2, _x), q2y = __privateGet(quaternion2, _y), q2z = __privateGet(quaternion2, _z), q2w = __privateGet(quaternion2, _w);
        const q2MagnitudeSquared = quaternion2.lengthSquared();
        const inverseQ2Magnitude = 1 / q2MagnitudeSquared;
        const inverseQ2x = -q2x * inverseQ2Magnitude;
        const inverseQ2y = -q2y * inverseQ2Magnitude;
        const inverseQ2z = -q2z * inverseQ2Magnitude;
        const inverseQ2w = q2w * inverseQ2Magnitude;
        const crossProductYz = q1y * inverseQ2z - q1z * inverseQ2y;
        const crossProductZx = q1z * inverseQ2x - q1x * inverseQ2z;
        const crossProductXy = q1x * inverseQ2y - q1y * inverseQ2x;
        const dotProduct = q1x * inverseQ2x + q1y * inverseQ2y + q1z * inverseQ2z;
        return new _Quaternion(
          q1x * inverseQ2w + inverseQ2x * q1w + crossProductYz,
          q1y * inverseQ2w + inverseQ2y * q1w + crossProductZx,
          q1z * inverseQ2w + inverseQ2z * q1w + crossProductXy,
          q1w * inverseQ2w - dotProduct
        );
      }).add([_Quaternion, _Quaternion, _Quaternion], function(quaternion1, quaternion2, result) {
        const q1x = __privateGet(quaternion1, _x), q1y = __privateGet(quaternion1, _y), q1z = __privateGet(quaternion1, _z), q1w = __privateGet(quaternion1, _w);
        const q2x = __privateGet(quaternion2, _x), q2y = __privateGet(quaternion2, _y), q2z = __privateGet(quaternion2, _z), q2w = __privateGet(quaternion2, _w);
        const q2MagnitudeSquared = quaternion2.lengthSquared();
        const inverseQ2Magnitude = 1 / q2MagnitudeSquared;
        const inverseQ2x = -q2x * inverseQ2Magnitude;
        const inverseQ2y = -q2y * inverseQ2Magnitude;
        const inverseQ2z = -q2z * inverseQ2Magnitude;
        const inverseQ2w = q2w * inverseQ2Magnitude;
        const crossProductYz = q1y * inverseQ2z - q1z * inverseQ2y;
        const crossProductZx = q1z * inverseQ2x - q1x * inverseQ2z;
        const crossProductXy = q1x * inverseQ2y - q1y * inverseQ2x;
        const dotProduct = q1x * inverseQ2x + q1y * inverseQ2y + q1z * inverseQ2z;
        __privateSet(result, _x, q1x * inverseQ2w + inverseQ2x * q1w + crossProductYz);
        __privateSet(result, _y, q1y * inverseQ2w + inverseQ2y * q1w + crossProductZx);
        __privateSet(result, _z, q1z * inverseQ2w + inverseQ2z * q1w + crossProductXy);
        __privateSet(result, _w, q1w * inverseQ2w - dotProduct);
      });
      return _Quaternion.divide.apply(this, params);
    }
    static dot(...params) {
      _Quaternion.dot = src_default().add([_Quaternion, _Quaternion], function(quaternion1, quaternion2) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        return x1 * x22 + y1 * y2 + z1 * z2 + w1 * w2;
      });
      return _Quaternion.dot.apply(this, params);
    }
    static inverse(...params) {
      _Quaternion.inverse = src_default().add([_Quaternion], function(quaternion) {
        const x3 = __privateGet(quaternion, _x), y = __privateGet(quaternion, _y), z = __privateGet(quaternion, _z), w2 = __privateGet(quaternion, _w);
        const x22 = x3 * x3, y2 = y * y, z2 = z * z, w22 = w2 * w2;
        const num = 1 / (x22 + y2 + z2 + w22);
        return new _Quaternion(
          -x3 * num,
          -y * num,
          -z * num,
          w2 * num
        );
      }).add([_Quaternion, _Quaternion], function(quaternion, result) {
        const x3 = __privateGet(quaternion, _x), y = __privateGet(quaternion, _y), z = __privateGet(quaternion, _z), w2 = __privateGet(quaternion, _w);
        const x22 = x3 * x3, y2 = y * y, z2 = z * z, w22 = w2 * w2;
        const num = 1 / (x22 + y2 + z2 + w22);
        __privateSet(result, _x, -x3 * num);
        __privateSet(result, _y, -y * num);
        __privateSet(result, _z, -z * num);
        __privateSet(result, _w, w2 * num);
      });
      return _Quaternion.inverse.apply(this, params);
    }
    static lerp(...params) {
      _Quaternion.lerp = src_default().add([_Quaternion, _Quaternion, Number], function(quaternion1, quaternion2, amount) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        const weight = 1 - amount;
        const sign = _Quaternion.dot(quaternion1, quaternion2) >= 0 ? 1 : -1;
        const interpolate = (v1, v2) => weight * v1 + sign * amount * v2;
        const result = new _Quaternion(
          interpolate(x1, x22),
          interpolate(y1, y2),
          interpolate(z1, z2),
          interpolate(w1, w2)
        );
        _Quaternion.normalize(result, result);
        return result;
      }).add([_Quaternion, _Quaternion, Number, _Quaternion], function(quaternion1, quaternion2, amount, result) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        const weight = 1 - amount;
        const sign = _Quaternion.dot(quaternion1, quaternion2) >= 0 ? 1 : -1;
        const interpolate = (v1, v2) => weight * v1 + sign * amount * v2;
        __privateSet(result, _x, interpolate(x1, x22));
        __privateSet(result, _y, interpolate(y1, y2));
        __privateSet(result, _z, interpolate(z1, z2));
        __privateSet(result, _w, interpolate(w1, w2));
        _Quaternion.normalize(result, result);
      });
      return _Quaternion.lerp.apply(this, params);
    }
    static multiply(...params) {
      _Quaternion.multiply = src_default().add([_Quaternion, Number], function(quaternion1, scaleFactor) {
        return new _Quaternion(
          __privateGet(quaternion1, _x) * scaleFactor,
          __privateGet(quaternion1, _y) * scaleFactor,
          __privateGet(quaternion1, _z) * scaleFactor,
          __privateGet(quaternion1, _w) * scaleFactor
        );
      }).add([_Quaternion, Number, _Quaternion], function(quaternion1, scaleFactor, result) {
        __privateSet(result, _x, __privateGet(quaternion1, _x) * scaleFactor);
        __privateSet(result, _y, __privateGet(quaternion1, _y) * scaleFactor);
        __privateSet(result, _z, __privateGet(quaternion1, _z) * scaleFactor);
        __privateSet(result, _w, __privateGet(quaternion1, _w) * scaleFactor);
      }).add([_Quaternion, _Quaternion], function(quaternion1, quaternion2) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        const yz = y1 * z2 - z1 * y2;
        const zx = z1 * x22 - x1 * z2;
        const xy = x1 * y2 - y1 * x22;
        const xyz = x1 * x22 + y1 * y2 + z1 * z2;
        return new _Quaternion(
          x1 * w2 + x22 * w1 + yz,
          y1 * w2 + y2 * w1 + zx,
          z1 * w2 + z2 * w1 + xy,
          w1 * w2 - xyz
        );
      }).add([_Quaternion, _Quaternion, _Quaternion], function(quaternion1, quaternion2, result) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        const yz = y1 * z2 - z1 * y2;
        const zx = z1 * x22 - x1 * z2;
        const xy = x1 * y2 - y1 * x22;
        const xyz = x1 * x22 + y1 * y2 + z1 * z2;
        __privateSet(result, _x, x1 * w2 + x22 * w1 + yz);
        __privateSet(result, _y, y1 * w2 + y2 * w1 + zx);
        __privateSet(result, _z, z1 * w2 + z2 * w1 + xy);
        __privateSet(result, _w, w1 * w2 - xyz);
      });
      return _Quaternion.multiply.apply(this, params);
    }
    static negate(...params) {
      _Quaternion.negate = src_default().add([_Quaternion], function(quaternion) {
        return new _Quaternion(-__privateGet(quaternion, _x), -__privateGet(quaternion, _y), -__privateGet(quaternion, _z), -__privateGet(quaternion, _w));
      }).add([_Quaternion, _Quaternion], function(quaternion, result) {
        __privateSet(result, _x, -__privateGet(quaternion, _x));
        __privateSet(result, _y, -__privateGet(quaternion, _y));
        __privateSet(result, _z, -__privateGet(quaternion, _z));
        __privateSet(result, _w, -__privateGet(quaternion, _w));
      });
      return _Quaternion.negate.apply(this, params);
    }
    static normalize(...params) {
      _Quaternion.normalize = src_default().add([_Quaternion], function(quaternion) {
        const factor = 1 / Math.sqrt(__privateGet(quaternion, _x) ** 2 + __privateGet(quaternion, _y) ** 2 + __privateGet(quaternion, _z) ** 2 + __privateGet(quaternion, _w) ** 2);
        return new _Quaternion(
          __privateGet(quaternion, _x) * factor,
          __privateGet(quaternion, _y) * factor,
          __privateGet(quaternion, _z) * factor,
          __privateGet(quaternion, _w) * factor
        );
      }).add([_Quaternion, _Quaternion], function(quaternion, result) {
        const factor = 1 / Math.sqrt(__privateGet(quaternion, _x) ** 2 + __privateGet(quaternion, _y) ** 2 + __privateGet(quaternion, _z) ** 2 + __privateGet(quaternion, _w) ** 2);
        __privateSet(result, _x, __privateGet(quaternion, _x) * factor);
        __privateSet(result, _y, __privateGet(quaternion, _y) * factor);
        __privateSet(result, _z, __privateGet(quaternion, _z) * factor);
        __privateSet(result, _w, __privateGet(quaternion, _w) * factor);
      });
      return _Quaternion.normalize.apply(this, params);
    }
    static slerp(...params) {
      _Quaternion.slerp = src_default().add([_Quaternion, _Quaternion, Number], function(quaternion1, quaternion2, amount) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        let dotProduct = _Quaternion.dot(quaternion1, quaternion2);
        const isNegative = dotProduct < 0;
        dotProduct = isNegative ? -dotProduct : dotProduct;
        let scale0, scale1;
        if (dotProduct > 0.999999) {
          scale1 = 1 - amount;
          scale0 = isNegative ? -amount : amount;
        } else {
          const angle = Math.acos(dotProduct);
          const sinAngle = 1 / Math.sin(angle);
          scale1 = Math.sin((1 - amount) * angle) * sinAngle;
          scale0 = Math.sin(amount * angle) * sinAngle;
          isNegative && (scale0 = -scale0);
        }
        const interpolate = (a, b3) => scale1 * a + scale0 * b3;
        return new _Quaternion(
          interpolate(x1, x22),
          interpolate(y1, y2),
          interpolate(z1, z2),
          interpolate(w1, w2)
        );
      }).add([_Quaternion, _Quaternion, Number, _Quaternion], function(quaternion1, quaternion2, amount, result) {
        const x1 = __privateGet(quaternion1, _x), y1 = __privateGet(quaternion1, _y), z1 = __privateGet(quaternion1, _z), w1 = __privateGet(quaternion1, _w);
        const x22 = __privateGet(quaternion2, _x), y2 = __privateGet(quaternion2, _y), z2 = __privateGet(quaternion2, _z), w2 = __privateGet(quaternion2, _w);
        let dotProduct = _Quaternion.dot(quaternion1, quaternion2);
        const isNegative = dotProduct < 0;
        dotProduct = isNegative ? -dotProduct : dotProduct;
        let scale0, scale1;
        if (dotProduct > 0.999999) {
          scale1 = 1 - amount;
          scale0 = isNegative ? -amount : amount;
        } else {
          const angle = Math.acos(dotProduct);
          const sinAngle = 1 / Math.sin(angle);
          scale1 = Math.sin((1 - amount) * angle) * sinAngle;
          scale0 = Math.sin(amount * angle) * sinAngle;
          isNegative && (scale0 = -scale0);
        }
        const interpolate = (a, b3) => scale1 * a + scale0 * b3;
        __privateSet(result, _x, interpolate(x1, x22));
        __privateSet(result, _y, interpolate(y1, y2));
        __privateSet(result, _z, interpolate(z1, z2));
        __privateSet(result, _w, interpolate(w1, w2));
      });
      return _Quaternion.slerp.apply(this, params);
    }
    static subtract(...params) {
      _Quaternion.subtract = src_default().add([_Quaternion, _Quaternion], function(quaternion1, quaternion2) {
        return new _Quaternion(
          __privateGet(quaternion1, _x) - __privateGet(quaternion2, _x),
          __privateGet(quaternion1, _y) - __privateGet(quaternion2, _y),
          __privateGet(quaternion1, _z) - __privateGet(quaternion2, _z),
          __privateGet(quaternion1, _w) - __privateGet(quaternion2, _w)
        );
      }).add([_Quaternion, _Quaternion, _Quaternion], function(quaternion1, quaternion2, result) {
        __privateSet(result, _x, __privateGet(quaternion1, _x) - __privateGet(quaternion2, _x));
        __privateSet(result, _y, __privateGet(quaternion1, _y) - __privateGet(quaternion2, _y));
        __privateSet(result, _z, __privateGet(quaternion1, _z) - __privateGet(quaternion2, _z));
        __privateSet(result, _w, __privateGet(quaternion1, _w) - __privateGet(quaternion2, _w));
      });
      return _Quaternion.subtract.apply(this, params);
    }
    static ["-"](...params) {
      _Quaternion["-"] = src_default([_Quaternion], function(other) {
        return _Quaternion.negate(other);
      });
      return _Quaternion["-"].apply(this, params);
    }
    ["+"](...params) {
      _Quaternion.prototype["+"] = src_default([_Quaternion], function(other) {
        return _Quaternion.add(this, other);
      });
      return _Quaternion.prototype["+"].apply(this, params);
    }
    ["-"](...params) {
      _Quaternion.prototype["-"] = src_default([_Quaternion], function(other) {
        return _Quaternion.subtract(this, other);
      });
      return _Quaternion.prototype["-"].apply(this, params);
    }
    ["*"](...params) {
      _Quaternion.prototype["*"] = src_default().add([_Quaternion], function(other) {
        return _Quaternion.multiply(this, other);
      }).add([Number], function(scaleFactor) {
        return _Quaternion.multiply(this, scaleFactor);
      });
      return _Quaternion.prototype["*"].apply(this, params);
    }
    ["/"](...params) {
      _Quaternion.prototype["/"] = src_default([_Quaternion], function(other) {
        return _Quaternion.divide(this, other);
      });
      return _Quaternion.prototype["/"].apply(this, params);
    }
    ["=="](...params) {
      _Quaternion.prototype["=="] = src_default([_Quaternion], function(other) {
        return this.equals(other);
      });
      return _Quaternion.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _Quaternion.prototype["!="] = src_default([_Quaternion], function(other) {
        return !this.equals(other);
      });
      return _Quaternion.prototype["!="].apply(this, params);
    }
    conjugate(...params) {
      _Quaternion.prototype.conjugate = src_default([], function() {
        __privateSet(this, _x, -__privateGet(this, _x));
        __privateSet(this, _y, -__privateGet(this, _y));
        __privateSet(this, _z, -__privateGet(this, _z));
      });
      return _Quaternion.prototype.conjugate.apply(this, params);
    }
    length(...params) {
      _Quaternion.prototype.length = src_default([], function() {
        return Math.sqrt(__privateGet(this, _x) ** 2 + __privateGet(this, _y) ** 2 + __privateGet(this, _z) ** 2 + __privateGet(this, _w) ** 2);
      });
      return _Quaternion.prototype.length.apply(this, params);
    }
    lengthSquared(...params) {
      _Quaternion.prototype.lengthSquared = src_default([], function() {
        return __privateGet(this, _x) ** 2 + __privateGet(this, _y) ** 2 + __privateGet(this, _z) ** 2 + __privateGet(this, _w) ** 2;
      });
      return _Quaternion.prototype.lengthSquared.apply(this, params);
    }
    normalize(...params) {
      _Quaternion.prototype.normalize = src_default([], function() {
        const num = 1 / Math.sqrt(__privateGet(this, _x) ** 2 + __privateGet(this, _y) ** 2 + __privateGet(this, _z) ** 2 + __privateGet(this, _w) ** 2);
        __privateSet(this, _x, __privateGet(this, _x) * num);
        __privateSet(this, _y, __privateGet(this, _y) * num);
        __privateSet(this, _z, __privateGet(this, _z) * num);
        __privateSet(this, _w, __privateGet(this, _w) * num);
      });
      return _Quaternion.prototype.normalize.apply(this, params);
    }
    equals(...params) {
      _Quaternion.prototype.equals = src_default([_Quaternion], function(other) {
        return __privateGet(this, _x) === __privateGet(other, _x) && __privateGet(this, _y) === __privateGet(other, _y) && __privateGet(this, _z) === __privateGet(other, _z) && __privateGet(this, _w) === __privateGet(other, _w);
      }).any(() => false);
      return _Quaternion.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _Quaternion.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Quaternion.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Quaternion 的 JSON 表示形式。
     * @returns 当前 Quaternion 的 JSON 表示形式。
     */
    toJSON() {
      return {
        x: __privateGet(this, _x),
        y: __privateGet(this, _y),
        z: __privateGet(this, _z),
        w: __privateGet(this, _w)
      };
    }
  };
  _init = __decoratorStart(null);
  _x = new WeakMap();
  _y = new WeakMap();
  _z = new WeakMap();
  _w = new WeakMap();
  __decorateElement(_init, 3, "x", _x_dec, _Quaternion);
  __decorateElement(_init, 3, "y", _y_dec, _Quaternion);
  __decorateElement(_init, 3, "z", _z_dec, _Quaternion);
  __decorateElement(_init, 3, "w", _w_dec, _Quaternion);
  __decoratorMetadata(_init, _Quaternion);
  var Quaternion = _Quaternion;

  // src/vector3.ts
  var CONSTRUCTOR_SYMBOL2 = /* @__PURE__ */ Symbol("constructor");
  var _z_dec2, _y_dec2, _x_dec2, _x2, _init2, _y2, _z2;
  var _Vector3 = class _Vector3 {
    constructor(...params) {
      __runInitializers(_init2, 5, this);
      /**
       * 矢量的 x 色差。
       */
      __privateAdd(this, _x2, 0);
      /**
       * 矢量的 y 色差。
       */
      __privateAdd(this, _y2, 0);
      /**
       * 矢量的 z 色差。
       */
      __privateAdd(this, _z2, 0);
      _Vector3[CONSTRUCTOR_SYMBOL2].apply(this, params);
    }
    /**
     * 返回在右手坐标系 (0, 0, 1) 中指定向后方向的单位 Vector3。
     */
    static get backward() {
      return new _Vector3(0, 0, 1);
    }
    /**
     * 返回指定向下方向 (0, −1, 0) 的单位 Vector3。
     */
    static get down() {
      return new _Vector3(0, -1, 0);
    }
    /**
     * 返回在右手坐标系 (0, 0,−1) 中指定向前方向的单位 Vector3。
     */
    static get forward() {
      return new _Vector3(0, 0, -1);
    }
    /**
     * 返回指定向左方向 (−1, 0, 0) 的单位 Vector3。
     */
    static get left() {
      return new _Vector3(-1, 0, 0);
    }
    /**
     * 返回所有组件为一体的 Vector3。
     */
    static get one() {
      return new _Vector3(1, 1, 1);
    }
    /**
     * 返回指向右侧 (1, 0, 0) 的单位 Vector3。
     */
    static get right() {
      return new _Vector3(1, 0, 0);
    }
    /**
     * 返回 x 单位 Vector3 (1, 0, 0)。
     */
    static get unitX() {
      return new _Vector3(1, 0, 0);
    }
    /**
     * 返回 y 单位 Vector3 (0, 1, 0)。
     */
    static get unitY() {
      return new _Vector3(0, 1, 0);
    }
    /**
     * 返回 z 单位 Vector3 (0, 0, 1)。
     */
    static get unitZ() {
      return new _Vector3(0, 0, 1);
    }
    /**
     * 返回一个指定向上方向 (0, 1, 0) 的单位矢量。
     */
    static get up() {
      return new _Vector3(0, 1, 0);
    }
    /**
     * 返回所有组件均设置为零的 Vector3。
     */
    static get zero() {
      return new _Vector3(0, 0, 0);
    }
    /**
     * 获取矢量的 x 色差。
     */
    get x() {
      return __privateGet(this, _x2);
    }
    set x(value) {
      __privateSet(this, _x2, value);
    }
    /**
     * 获取矢量的 y 色差。
     */
    get y() {
      return __privateGet(this, _y2);
    }
    set y(value) {
      __privateSet(this, _y2, value);
    }
    /**
     * 获取矢量的 z 色差。
     */
    get z() {
      return __privateGet(this, _z2);
    }
    set z(value) {
      __privateSet(this, _z2, value);
    }
    /**
     * 结构化构造函数。
     * @returns Vector3 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return _Vector3.zero;
    }
    static [(_x_dec2 = [x2(Number)], _y_dec2 = [x2(Number)], _z_dec2 = [x2(Number)], CONSTRUCTOR_SYMBOL2)](...params) {
      _Vector3[CONSTRUCTOR_SYMBOL2] = src_default().add([], function() {
      }).add([Number], function(value) {
        __privateSet(this, _x2, value);
        __privateSet(this, _y2, value);
        __privateSet(this, _z2, value);
      }).add([Number, Number, Number], function(x3, y, z) {
        __privateSet(this, _x2, x3);
        __privateSet(this, _y2, y);
        __privateSet(this, _z2, z);
      }).add([Vector2, Number], function(value, z) {
        __privateSet(this, _x2, value.x);
        __privateSet(this, _y2, value.y);
        __privateSet(this, _z2, z);
      });
      return _Vector3[CONSTRUCTOR_SYMBOL2].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _x2);
      yield __privateGet(this, _y2);
      yield __privateGet(this, _z2);
    }
    static add(...params) {
      _Vector3.add = src_default().add([_Vector3, _Vector3], function(value1, value2) {
        return new _Vector3(
          __privateGet(value1, _x2) + __privateGet(value2, _x2),
          __privateGet(value1, _y2) + __privateGet(value2, _y2),
          __privateGet(value1, _z2) + __privateGet(value2, _z2)
        );
      }).add([_Vector3, _Vector3, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, __privateGet(value1, _x2) + __privateGet(value2, _x2));
        __privateSet(result, _y2, __privateGet(value1, _y2) + __privateGet(value2, _y2));
        __privateSet(result, _z2, __privateGet(value1, _z2) + __privateGet(value2, _z2));
      });
      return _Vector3.add.apply(this, params);
    }
    static barycentric(...params) {
      _Vector3.barycentric = src_default().add([_Vector3, _Vector3, _Vector3, Number, Number], function(value1, value2, value3, amount1, amount2) {
        return new _Vector3(
          MathHelper.barycentric(__privateGet(value1, _x2), __privateGet(value2, _x2), __privateGet(value3, _x2), amount1, amount2),
          MathHelper.barycentric(__privateGet(value1, _y2), __privateGet(value2, _y2), __privateGet(value3, _y2), amount1, amount2),
          MathHelper.barycentric(__privateGet(value1, _z2), __privateGet(value2, _z2), __privateGet(value3, _z2), amount1, amount2)
        );
      }).add([_Vector3, _Vector3, _Vector3, Number, Number, _Vector3], function(value1, value2, value3, amount1, amount2, result) {
        __privateSet(result, _x2, MathHelper.barycentric(__privateGet(value1, _x2), __privateGet(value2, _x2), __privateGet(value3, _x2), amount1, amount2));
        __privateSet(result, _y2, MathHelper.barycentric(__privateGet(value1, _y2), __privateGet(value2, _y2), __privateGet(value3, _y2), amount1, amount2));
        __privateSet(result, _z2, MathHelper.barycentric(__privateGet(value1, _z2), __privateGet(value2, _z2), __privateGet(value3, _z2), amount1, amount2));
      });
      return _Vector3.barycentric.apply(this, params);
    }
    static catmullRom(...params) {
      _Vector3.catmullRom = src_default().add([_Vector3, _Vector3, _Vector3, _Vector3, Number], function(value1, value2, value3, value4, amount) {
        return new _Vector3(
          MathHelper.catmullRom(__privateGet(value1, _x2), __privateGet(value2, _x2), __privateGet(value3, _x2), __privateGet(value4, _x2), amount),
          MathHelper.catmullRom(__privateGet(value1, _y2), __privateGet(value2, _y2), __privateGet(value3, _y2), __privateGet(value4, _y2), amount),
          MathHelper.catmullRom(__privateGet(value1, _z2), __privateGet(value2, _z2), __privateGet(value3, _z2), __privateGet(value4, _z2), amount)
        );
      }).add([_Vector3, _Vector3, _Vector3, _Vector3, Number, _Vector3], function(value1, value2, value3, value4, amount, result) {
        __privateSet(result, _x2, MathHelper.catmullRom(__privateGet(value1, _x2), __privateGet(value2, _x2), __privateGet(value3, _x2), __privateGet(value4, _x2), amount));
        __privateSet(result, _y2, MathHelper.catmullRom(__privateGet(value1, _y2), __privateGet(value2, _y2), __privateGet(value3, _y2), __privateGet(value4, _y2), amount));
        __privateSet(result, _z2, MathHelper.catmullRom(__privateGet(value1, _z2), __privateGet(value2, _z2), __privateGet(value3, _z2), __privateGet(value4, _z2), amount));
      });
      return _Vector3.catmullRom.apply(this, params);
    }
    static clamp(...params) {
      _Vector3.clamp = src_default().add([_Vector3, _Vector3, _Vector3], function(value1, min, max) {
        return new _Vector3(
          MathHelper.clamp(__privateGet(value1, _x2), __privateGet(min, _x2), __privateGet(max, _x2)),
          MathHelper.clamp(__privateGet(value1, _y2), __privateGet(min, _y2), __privateGet(max, _y2)),
          MathHelper.clamp(__privateGet(value1, _z2), __privateGet(min, _z2), __privateGet(max, _z2))
        );
      }).add([_Vector3, _Vector3, _Vector3, _Vector3], function(value1, min, max, result) {
        __privateSet(result, _x2, MathHelper.clamp(__privateGet(value1, _x2), __privateGet(min, _x2), __privateGet(max, _x2)));
        __privateSet(result, _y2, MathHelper.clamp(__privateGet(value1, _y2), __privateGet(min, _y2), __privateGet(max, _y2)));
        __privateSet(result, _z2, MathHelper.clamp(__privateGet(value1, _z2), __privateGet(min, _z2), __privateGet(max, _z2)));
      });
      return _Vector3.clamp.apply(this, params);
    }
    static cross(...params) {
      _Vector3.cross = src_default().add([_Vector3, _Vector3], function(vector1, vector2) {
        const x1 = __privateGet(vector1, _x2), y1 = __privateGet(vector1, _y2), z1 = __privateGet(vector1, _z2);
        const x22 = __privateGet(vector2, _x2), y2 = __privateGet(vector2, _y2), z2 = __privateGet(vector2, _z2);
        const x3 = y1 * z2 - y2 * z1;
        const y = -(x1 * z2 - x22 * z1);
        const z = x1 * y2 - x22 * y1;
        return new _Vector3(x3, y, z);
      }).add([_Vector3, _Vector3, _Vector3], function(vector1, vector2, result) {
        const x1 = __privateGet(vector1, _x2), y1 = __privateGet(vector1, _y2), z1 = __privateGet(vector1, _z2);
        const x22 = __privateGet(vector2, _x2), y2 = __privateGet(vector2, _y2), z2 = __privateGet(vector2, _z2);
        __privateSet(result, _x2, y1 * z2 - y2 * z1);
        __privateSet(result, _y2, -(x1 * z2 - x22 * z1));
        __privateSet(result, _z2, x1 * y2 - x22 * y1);
      });
      return _Vector3.cross.apply(this, params);
    }
    static distance(...params) {
      _Vector3.distance = src_default().add([_Vector3, _Vector3], function(value1, value2) {
        const x1 = __privateGet(value1, _x2), y1 = __privateGet(value1, _y2), z1 = __privateGet(value1, _z2);
        const x22 = __privateGet(value2, _x2), y2 = __privateGet(value2, _y2), z2 = __privateGet(value2, _z2);
        return Math.sqrt((x1 - x22) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
      });
      return _Vector3.distance.apply(this, params);
    }
    static distanceSquared(...params) {
      _Vector3.distanceSquared = src_default().add([_Vector3, _Vector3], function(value1, value2) {
        const x1 = __privateGet(value1, _x2), y1 = __privateGet(value1, _y2), z1 = __privateGet(value1, _z2);
        const x22 = __privateGet(value2, _x2), y2 = __privateGet(value2, _y2), z2 = __privateGet(value2, _z2);
        return (x1 - x22) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;
      });
      return _Vector3.distanceSquared.apply(this, params);
    }
    static divide(...params) {
      _Vector3.divide = src_default().add([_Vector3, Number], function(value1, value2) {
        const factor = 1 / value2;
        return new _Vector3(
          __privateGet(value1, _x2) * factor,
          __privateGet(value1, _y2) * factor,
          __privateGet(value1, _z2) * factor
        );
      }).add([_Vector3, Number, _Vector3], function(value1, value2, result) {
        const factor = 1 / value2;
        __privateSet(result, _x2, __privateGet(value1, _x2) * factor);
        __privateSet(result, _y2, __privateGet(value1, _y2) * factor);
        __privateSet(result, _z2, __privateGet(value1, _z2) * factor);
      }).add([_Vector3, _Vector3], function(value1, value2) {
        return new _Vector3(
          __privateGet(value1, _x2) / __privateGet(value2, _x2),
          __privateGet(value1, _y2) / __privateGet(value2, _y2),
          __privateGet(value1, _z2) / __privateGet(value2, _z2)
        );
      }).add([_Vector3, _Vector3, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, __privateGet(value1, _x2) / __privateGet(value2, _x2));
        __privateSet(result, _y2, __privateGet(value1, _y2) / __privateGet(value2, _y2));
        __privateSet(result, _z2, __privateGet(value1, _z2) / __privateGet(value2, _z2));
      });
      return _Vector3.divide.apply(this, params);
    }
    static dot(...params) {
      _Vector3.dot = src_default().add([_Vector3, _Vector3], function(vector1, vector2) {
        const x1 = __privateGet(vector1, _x2), y1 = __privateGet(vector1, _y2), z1 = __privateGet(vector1, _z2);
        const x22 = __privateGet(vector2, _x2), y2 = __privateGet(vector2, _y2), z2 = __privateGet(vector2, _z2);
        return x1 * x22 + y1 * y2 + z1 * z2;
      });
      return _Vector3.dot.apply(this, params);
    }
    static hermite(...params) {
      _Vector3.hermite = src_default().add([_Vector3, _Vector3, _Vector3, _Vector3, Number], function(value1, tangent1, value2, tangent2, amount) {
        return new _Vector3(
          MathHelper.hermite(__privateGet(value1, _x2), __privateGet(tangent1, _x2), __privateGet(value2, _x2), __privateGet(tangent2, _x2), amount),
          MathHelper.hermite(__privateGet(value1, _y2), __privateGet(tangent1, _y2), __privateGet(value2, _y2), __privateGet(tangent2, _y2), amount),
          MathHelper.hermite(__privateGet(value1, _z2), __privateGet(tangent1, _z2), __privateGet(value2, _z2), __privateGet(tangent2, _z2), amount)
        );
      }).add([_Vector3, _Vector3, _Vector3, _Vector3, Number, _Vector3], function(value1, tangent1, value2, tangent2, amount, result) {
        __privateSet(result, _x2, MathHelper.hermite(__privateGet(value1, _x2), __privateGet(tangent1, _x2), __privateGet(value2, _x2), __privateGet(tangent2, _x2), amount));
        __privateSet(result, _y2, MathHelper.hermite(__privateGet(value1, _y2), __privateGet(tangent1, _y2), __privateGet(value2, _y2), __privateGet(tangent2, _y2), amount));
        __privateSet(result, _z2, MathHelper.hermite(__privateGet(value1, _z2), __privateGet(tangent1, _z2), __privateGet(value2, _z2), __privateGet(tangent2, _z2), amount));
      });
      return _Vector3.hermite.apply(this, params);
    }
    static lerp(...params) {
      _Vector3.lerp = src_default().add([_Vector3, _Vector3, Number], function(value1, value2, amount) {
        return new _Vector3(
          MathHelper.lerp(__privateGet(value1, _x2), __privateGet(value2, _x2), amount),
          MathHelper.lerp(__privateGet(value1, _y2), __privateGet(value2, _y2), amount),
          MathHelper.lerp(__privateGet(value1, _z2), __privateGet(value2, _z2), amount)
        );
      }).add([_Vector3, _Vector3, Number, _Vector3], function(value1, value2, amount, result) {
        __privateSet(result, _x2, MathHelper.lerp(__privateGet(value1, _x2), __privateGet(value2, _x2), amount));
        __privateSet(result, _y2, MathHelper.lerp(__privateGet(value1, _y2), __privateGet(value2, _y2), amount));
        __privateSet(result, _z2, MathHelper.lerp(__privateGet(value1, _z2), __privateGet(value2, _z2), amount));
      });
      return _Vector3.lerp.apply(this, params);
    }
    static max(...params) {
      _Vector3.max = src_default().add([_Vector3, _Vector3], function(value1, value2) {
        return new _Vector3(
          Math.max(__privateGet(value1, _x2), __privateGet(value2, _x2)),
          Math.max(__privateGet(value1, _y2), __privateGet(value2, _y2)),
          Math.max(__privateGet(value1, _z2), __privateGet(value2, _z2))
        );
      }).add([_Vector3, _Vector3, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, Math.max(__privateGet(value1, _x2), __privateGet(value2, _x2)));
        __privateSet(result, _y2, Math.max(__privateGet(value1, _y2), __privateGet(value2, _y2)));
        __privateSet(result, _z2, Math.max(__privateGet(value1, _z2), __privateGet(value2, _z2)));
      });
      return _Vector3.max.apply(this, params);
    }
    static min(...params) {
      _Vector3.min = src_default().add([_Vector3, _Vector3], function(value1, value2) {
        return new _Vector3(
          Math.min(__privateGet(value1, _x2), __privateGet(value2, _x2)),
          Math.min(__privateGet(value1, _y2), __privateGet(value2, _y2)),
          Math.min(__privateGet(value1, _z2), __privateGet(value2, _z2))
        );
      }).add([_Vector3, _Vector3, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, Math.min(__privateGet(value1, _x2), __privateGet(value2, _x2)));
        __privateSet(result, _y2, Math.min(__privateGet(value1, _y2), __privateGet(value2, _y2)));
        __privateSet(result, _z2, Math.min(__privateGet(value1, _z2), __privateGet(value2, _z2)));
      });
      return _Vector3.min.apply(this, params);
    }
    static multiply(...params) {
      _Vector3.multiply = src_default().add([_Vector3, Number], function(value1, value2) {
        return new _Vector3(
          __privateGet(value1, _x2) * value2,
          __privateGet(value1, _y2) * value2,
          __privateGet(value1, _z2) * value2
        );
      }).add([_Vector3, Number, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, __privateGet(value1, _x2) * value2);
        __privateSet(result, _y2, __privateGet(value1, _y2) * value2);
        __privateSet(result, _z2, __privateGet(value1, _z2) * value2);
      }).add([_Vector3, _Vector3], function(value1, value2) {
        return new _Vector3(
          __privateGet(value1, _x2) * __privateGet(value2, _x2),
          __privateGet(value1, _y2) * __privateGet(value2, _y2),
          __privateGet(value1, _z2) * __privateGet(value2, _z2)
        );
      }).add([_Vector3, _Vector3, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, __privateGet(value1, _x2) * __privateGet(value2, _x2));
        __privateSet(result, _y2, __privateGet(value1, _y2) * __privateGet(value2, _y2));
        __privateSet(result, _z2, __privateGet(value1, _z2) * __privateGet(value2, _z2));
      });
      return _Vector3.multiply.apply(this, params);
    }
    static negate(...params) {
      _Vector3.negate = src_default().add([_Vector3], function(value) {
        return new _Vector3(-__privateGet(value, _x2), -__privateGet(value, _y2), -__privateGet(value, _z2));
      }).add([_Vector3, _Vector3], function(value, result) {
        __privateSet(result, _x2, -__privateGet(value, _x2));
        __privateSet(result, _y2, -__privateGet(value, _y2));
        __privateSet(result, _z2, -__privateGet(value, _z2));
      });
      return _Vector3.negate.apply(this, params);
    }
    static normalize(...params) {
      _Vector3.normalize = src_default().add([_Vector3], function(value) {
        const factor = 1 / Math.sqrt(__privateGet(value, _x2) ** 2 + __privateGet(value, _y2) ** 2 + __privateGet(value, _z2) ** 2);
        return new _Vector3(__privateGet(value, _x2) * factor, __privateGet(value, _y2) * factor, __privateGet(value, _z2) * factor);
      }).add([_Vector3, _Vector3], function(value, result) {
        const factor = 1 / Math.sqrt(__privateGet(value, _x2) ** 2 + __privateGet(value, _y2) ** 2 + __privateGet(value, _z2) ** 2);
        __privateSet(result, _x2, __privateGet(value, _x2) * factor);
        __privateSet(result, _y2, __privateGet(value, _y2) * factor);
        __privateSet(result, _z2, __privateGet(value, _z2) * factor);
      });
      return _Vector3.normalize.apply(this, params);
    }
    static reflect(...params) {
      _Vector3.reflect = src_default().add([_Vector3, _Vector3], function(vector, normal) {
        const dotProduct = __privateGet(vector, _x2) * __privateGet(normal, _x2) + __privateGet(vector, _y2) * __privateGet(normal, _y2) + __privateGet(vector, _z2) * __privateGet(normal, _z2);
        const factor = 2 * dotProduct;
        return new _Vector3(
          __privateGet(vector, _x2) - __privateGet(normal, _x2) * factor,
          __privateGet(vector, _y2) - __privateGet(normal, _y2) * factor,
          __privateGet(vector, _z2) - __privateGet(normal, _z2) * factor
        );
      }).add([_Vector3, _Vector3, _Vector3], function(vector, normal, result) {
        const dotProduct = __privateGet(vector, _x2) * __privateGet(normal, _x2) + __privateGet(vector, _y2) * __privateGet(normal, _y2) + __privateGet(vector, _z2) * __privateGet(normal, _z2);
        const factor = 2 * dotProduct;
        __privateSet(result, _x2, __privateGet(vector, _x2) - __privateGet(normal, _x2) * factor);
        __privateSet(result, _y2, __privateGet(vector, _y2) - __privateGet(normal, _y2) * factor);
        __privateSet(result, _z2, __privateGet(vector, _z2) - __privateGet(normal, _z2) * factor);
      });
      return _Vector3.reflect.apply(this, params);
    }
    static smoothStep(...params) {
      _Vector3.smoothStep = src_default().add([_Vector3, _Vector3, Number], function(value1, value2, amount) {
        return new _Vector3(
          MathHelper.smoothStep(__privateGet(value1, _x2), __privateGet(value2, _x2), amount),
          MathHelper.smoothStep(__privateGet(value1, _y2), __privateGet(value2, _y2), amount),
          MathHelper.smoothStep(__privateGet(value1, _z2), __privateGet(value2, _z2), amount)
        );
      }).add([_Vector3, _Vector3, Number, _Vector3], function(value1, value2, amount, result) {
        __privateSet(result, _x2, MathHelper.smoothStep(__privateGet(value1, _x2), __privateGet(value2, _x2), amount));
        __privateSet(result, _y2, MathHelper.smoothStep(__privateGet(value1, _y2), __privateGet(value2, _y2), amount));
        __privateSet(result, _z2, MathHelper.smoothStep(__privateGet(value1, _z2), __privateGet(value2, _z2), amount));
      });
      return _Vector3.smoothStep.apply(this, params);
    }
    static subtract(...params) {
      _Vector3.subtract = src_default().add([_Vector3, _Vector3], function(value1, value2) {
        return new _Vector3(
          __privateGet(value1, _x2) - __privateGet(value2, _x2),
          __privateGet(value1, _y2) - __privateGet(value2, _y2),
          __privateGet(value1, _z2) - __privateGet(value2, _z2)
        );
      }).add([_Vector3, _Vector3, _Vector3], function(value1, value2, result) {
        __privateSet(result, _x2, __privateGet(value1, _x2) - __privateGet(value2, _x2));
        __privateSet(result, _y2, __privateGet(value1, _y2) - __privateGet(value2, _y2));
        __privateSet(result, _z2, __privateGet(value1, _z2) - __privateGet(value2, _z2));
      });
      return _Vector3.subtract.apply(this, params);
    }
    static transform(...params) {
      _Vector3.transform = src_default().add([_Vector3, Matrix], function(position, matrix) {
        const px = __privateGet(position, _x2), py = __privateGet(position, _y2), pz = __privateGet(position, _z2);
        const x3 = px * matrix.m11 + py * matrix.m21 + pz * matrix.m31 + matrix.m41;
        const y = px * matrix.m12 + py * matrix.m22 + pz * matrix.m32 + matrix.m42;
        const z = px * matrix.m13 + py * matrix.m23 + pz * matrix.m33 + matrix.m43;
        return new _Vector3(x3, y, z);
      }).add([_Vector3, Matrix, _Vector3], function(position, matrix, result) {
        const px = __privateGet(position, _x2), py = __privateGet(position, _y2), pz = __privateGet(position, _z2);
        __privateSet(result, _x2, px * matrix.m11 + py * matrix.m21 + pz * matrix.m31 + matrix.m41);
        __privateSet(result, _y2, px * matrix.m12 + py * matrix.m22 + pz * matrix.m32 + matrix.m42);
        __privateSet(result, _z2, px * matrix.m13 + py * matrix.m23 + pz * matrix.m33 + matrix.m43);
      }).add([_Vector3, Quaternion], function(value, rotation) {
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const vx = __privateGet(value, _x2), vy = __privateGet(value, _y2), vz = __privateGet(value, _z2);
        const x3 = 2 * (ry * vz - rz * vy);
        const y = 2 * (rz * vx - rx * vz);
        const z = 2 * (rx * vy - ry * vx);
        return new _Vector3(
          vx + x3 * rw + (ry * z - rz * y),
          vy + y * rw + (rz * x3 - rx * z),
          vz + z * rw + (rx * y - ry * x3)
        );
      }).add([_Vector3, Quaternion, _Vector3], function(value, rotation, result) {
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const vx = __privateGet(value, _x2), vy = __privateGet(value, _y2), vz = __privateGet(value, _z2);
        const x3 = 2 * (ry * vz - rz * vy);
        const y = 2 * (rz * vx - rx * vz);
        const z = 2 * (rx * vy - ry * vx);
        __privateSet(result, _x2, vx + x3 * rw + (ry * z - rz * y));
        __privateSet(result, _y2, vy + y * rw + (rz * x3 - rx * z));
        __privateSet(result, _z2, vz + z * rw + (rx * y - ry * x3));
      }).add([I.T(_Vector3), Number, Matrix, I.T(_Vector3), Number, Number], function(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        for (let i = 0; i < length; i++) {
          const v = sourceArray[sourceIndex + i];
          const x3 = __privateGet(v, _x2), y = __privateGet(v, _y2), z = __privateGet(v, _z2);
          destinationArray[destinationIndex + i] = new _Vector3(
            x3 * matrix.m11 + y * matrix.m21 + z * matrix.m31 + matrix.m41,
            x3 * matrix.m12 + y * matrix.m22 + z * matrix.m32 + matrix.m42,
            x3 * matrix.m13 + y * matrix.m23 + z * matrix.m33 + matrix.m43
          );
        }
      }).add([I.T(_Vector3), Number, Quaternion, I.T(_Vector3), Number, Number], function(sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        const { x: rx, y: ry, z: rz, w: rw } = rotation;
        for (let i = 0; i < length; i++) {
          const v = sourceArray[sourceIndex + i];
          const px = __privateGet(v, _x2), py = __privateGet(v, _y2), pz = __privateGet(v, _z2);
          const x3 = 2 * (ry * pz - rz * py);
          const y = 2 * (rz * px - rx * pz);
          const z = 2 * (rx * py - ry * px);
          destinationArray[destinationIndex + i] = new _Vector3(
            px + x3 * rw + (ry * z - rz * y),
            py + y * rw + (rz * x3 - rx * z),
            pz + z * rw + (rx * y - ry * x3)
          );
        }
      }).add([I.T(_Vector3), Matrix, I.T(_Vector3)], function(sourceArray, matrix, destinationArray) {
        _Vector3.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
      }).add([I.T(_Vector3), Quaternion, I.T(_Vector3)], function(sourceArray, rotation, destinationArray) {
        _Vector3.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
      });
      return _Vector3.transform.apply(this, params);
    }
    static transformNormal(...params) {
      _Vector3.transformNormal = src_default().add([_Vector3, Matrix], function(normal, matrix) {
        const nx = __privateGet(normal, _x2), ny = __privateGet(normal, _y2), nz = __privateGet(normal, _z2);
        const x3 = nx * matrix.m11 + ny * matrix.m21 + nz * matrix.m31;
        const y = nx * matrix.m12 + ny * matrix.m22 + nz * matrix.m32;
        const z = nx * matrix.m13 + ny * matrix.m23 + nz * matrix.m33;
        return new _Vector3(x3, y, z);
      }).add([_Vector3, Matrix, _Vector3], function(normal, matrix, result) {
        const nx = __privateGet(normal, _x2), ny = __privateGet(normal, _y2), nz = __privateGet(normal, _z2);
        __privateSet(result, _x2, nx * matrix.m11 + ny * matrix.m21 + nz * matrix.m31);
        __privateSet(result, _y2, nx * matrix.m12 + ny * matrix.m22 + nz * matrix.m32);
        __privateSet(result, _z2, nx * matrix.m13 + ny * matrix.m23 + nz * matrix.m33);
      }).add([I.T(_Vector3), Number, Matrix, I.T(_Vector3), Number, Number], function(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        for (let i = 0; i < length; i++) {
          const v = sourceArray[sourceIndex + i];
          const x3 = __privateGet(v, _x2), y = __privateGet(v, _y2), z = __privateGet(v, _z2);
          destinationArray[destinationIndex + i] = new _Vector3(
            x3 * matrix.m11 + y * matrix.m21 + z * matrix.m31,
            x3 * matrix.m12 + y * matrix.m22 + z * matrix.m32,
            x3 * matrix.m13 + y * matrix.m23 + z * matrix.m33
          );
        }
      }).add([I.T(_Vector3), Matrix, I.T(_Vector3)], function(sourceArray, matrix, destinationArray) {
        _Vector3.transformNormal(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
      });
      return _Vector3.transformNormal.apply(this, params);
    }
    static ["-"](...params) {
      _Vector3["-"] = src_default([_Vector3], function(other) {
        return _Vector3.negate(other);
      });
      return _Vector3["-"].apply(this, params);
    }
    ["+"](...params) {
      _Vector3.prototype["+"] = src_default([_Vector3], function(other) {
        return _Vector3.add(this, other);
      });
      return _Vector3.prototype["+"].apply(this, params);
    }
    ["-"](...params) {
      _Vector3.prototype["-"] = src_default([_Vector3], function(other) {
        return _Vector3.subtract(this, other);
      });
      return _Vector3.prototype["-"].apply(this, params);
    }
    ["*"](...params) {
      _Vector3.prototype["*"] = src_default([_Vector3], function(other) {
        return _Vector3.multiply(this, other);
      });
      return _Vector3.prototype["*"].apply(this, params);
    }
    ["/"](...params) {
      _Vector3.prototype["/"] = src_default([_Vector3], function(other) {
        return _Vector3.divide(this, other);
      });
      return _Vector3.prototype["/"].apply(this, params);
    }
    ["=="](...params) {
      _Vector3.prototype["=="] = src_default([_Vector3], function(other) {
        return this.equals(other);
      });
      return _Vector3.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _Vector3.prototype["!="] = src_default([_Vector3], function(other) {
        return !this.equals(other);
      });
      return _Vector3.prototype["!="].apply(this, params);
    }
    equals(...params) {
      _Vector3.prototype.equals = src_default([_Vector3], function(other) {
        return __privateGet(this, _x2) === __privateGet(other, _x2) && __privateGet(this, _y2) === __privateGet(other, _y2) && __privateGet(this, _z2) === __privateGet(other, _z2);
      }).any(() => false);
      return _Vector3.prototype.equals.apply(this, params);
    }
    length(...params) {
      _Vector3.prototype.length = src_default([], function() {
        return Math.sqrt(__privateGet(this, _x2) ** 2 + __privateGet(this, _y2) ** 2 + __privateGet(this, _z2) ** 2);
      });
      return _Vector3.prototype.length.apply(this, params);
    }
    lengthSquared(...params) {
      _Vector3.prototype.lengthSquared = src_default([], function() {
        return __privateGet(this, _x2) ** 2 + __privateGet(this, _y2) ** 2 + __privateGet(this, _z2) ** 2;
      });
      return _Vector3.prototype.lengthSquared.apply(this, params);
    }
    normalize(...params) {
      _Vector3.prototype.normalize = src_default([], function() {
        const factor = 1 / Math.sqrt(__privateGet(this, _x2) ** 2 + __privateGet(this, _y2) ** 2 + __privateGet(this, _z2) ** 2);
        __privateSet(this, _x2, __privateGet(this, _x2) * factor);
        __privateSet(this, _y2, __privateGet(this, _y2) * factor);
        __privateSet(this, _z2, __privateGet(this, _z2) * factor);
      });
      return _Vector3.prototype.normalize.apply(this, params);
    }
    toString(...params) {
      _Vector3.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Vector3.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Vector3 的 JSON 表示形式。
     * @returns 当前 Vector3 的 JSON 表示形式。
     */
    toJSON() {
      return { x: __privateGet(this, _x2), y: __privateGet(this, _y2), z: __privateGet(this, _z2) };
    }
  };
  _init2 = __decoratorStart(null);
  _x2 = new WeakMap();
  _y2 = new WeakMap();
  _z2 = new WeakMap();
  __decorateElement(_init2, 3, "x", _x_dec2, _Vector3);
  __decorateElement(_init2, 3, "y", _y_dec2, _Vector3);
  __decorateElement(_init2, 3, "z", _z_dec2, _Vector3);
  __decoratorMetadata(_init2, _Vector3);
  var Vector3 = _Vector3;

  // src/ray.ts
  var CONSTRUCTOR_SYMBOL3 = /* @__PURE__ */ Symbol("constructor");
  var _position_dec, _direction_dec, _direction, _init3, _position;
  var _Ray = class _Ray {
    constructor(...params) {
      __runInitializers(_init3, 5, this);
      /**
       * Ray 所指方向的单位矢量。
       */
      __privateAdd(this, _direction, null);
      /**
       * Ray 的起点。
       */
      __privateAdd(this, _position, null);
      _Ray[CONSTRUCTOR_SYMBOL3].apply(this, params);
    }
    /**
     * 获取 Ray 所指方向的单位矢量。
     */
    get direction() {
      return __privateGet(this, _direction);
    }
    set direction(value) {
      __privateSet(this, _direction, value);
    }
    /**
     * 获取 Ray 的起点。
     */
    get position() {
      return __privateGet(this, _position);
    }
    set position(value) {
      __privateSet(this, _position, value);
    }
    /**
     * 结构化构造函数。
     * @returns Ray 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _Ray();
    }
    static [(_direction_dec = [H(() => Vector3)], _position_dec = [H(() => Vector3)], CONSTRUCTOR_SYMBOL3)](...params) {
      _Ray[CONSTRUCTOR_SYMBOL3] = src_default().add([], function() {
        __privateSet(this, _position, Vector3.zero);
        __privateSet(this, _direction, Vector3.zero);
      }).add([Vector3, Vector3], function(position, direction) {
        __privateSet(this, _position, position);
        __privateSet(this, _direction, direction);
      });
      return _Ray[CONSTRUCTOR_SYMBOL3].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _position);
      yield __privateGet(this, _direction);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    intersects(...params) {
      _Ray.prototype.intersects = src_default().add([BoundingBox], function(box) {
        let tMin = -Infinity;
        let tMax = Infinity;
        const positionX = __privateGet(this, _position).x, positionY = __privateGet(this, _position).y, positionZ = __privateGet(this, _position).z;
        const directionX = __privateGet(this, _direction).x, directionY = __privateGet(this, _direction).y, directionZ = __privateGet(this, _direction).z;
        const checkAxis = (position, direction, min, max) => {
          if (Math.abs(direction) < Number.EPSILON) {
            if (position < min || position > max) return false;
          } else {
            let t1 = (min - position) / direction;
            let t2 = (max - position) / direction;
            if (t1 > t2) [t1, t2] = [t2, t1];
            if (t1 > tMin) tMin = t1;
            if (t2 < tMax) tMax = t2;
            if (tMin > tMax) return false;
          }
          return true;
        };
        if (!checkAxis(positionX, directionX, box.min.x, box.max.x) || !checkAxis(positionY, directionY, box.min.y, box.max.y) || !checkAxis(positionZ, directionZ, box.min.z, box.max.z)) {
          return null;
        }
        if (tMin < 0 && tMax > 0) return 0;
        return tMin < 0 ? null : tMin;
      }).add([BoundingFrustum], function(frustum) {
        return frustum.intersects(this);
      }).add([BoundingSphere], function(sphere) {
        const difference = Vector3.subtract(sphere.center, __privateGet(this, _position));
        const differenceLengthSquared = difference.lengthSquared();
        const sphereRadiusSquared = sphere.radius * sphere.radius;
        if (differenceLengthSquared < sphereRadiusSquared) return 0;
        const distanceAlongRay = Vector3.dot(__privateGet(this, _direction), difference);
        if (distanceAlongRay < 0) return null;
        const dist = sphereRadiusSquared + distanceAlongRay * distanceAlongRay - differenceLengthSquared;
        return dist < 0 ? null : distanceAlongRay - Math.sqrt(dist);
      }).add([Plane], function(plane) {
        const den = Vector3.dot(__privateGet(this, _direction), plane.normal);
        if (Math.abs(den) < 1e-5) return null;
        let result = (-plane.d - Vector3.dot(plane.normal, __privateGet(this, _position))) / den;
        if (result < 0) {
          if (result < -1e-5) return null;
          result = 0;
        }
        return result;
      });
      return _Ray.prototype.intersects.apply(this, params);
    }
    equals(...params) {
      _Ray.prototype.equals = src_default([_Ray], function(other) {
        return __privateGet(this, _direction).equals(__privateGet(other, _direction)) && __privateGet(this, _position).equals(__privateGet(other, _position));
      }).any(() => false);
      return _Ray.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _Ray.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Ray.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Ray 的 JSON 表示形式。
     * @returns 当前 Ray 的 JSON 表示形式。
     */
    toJSON() {
      return {
        position: __privateGet(this, _position),
        direction: __privateGet(this, _direction)
      };
    }
  };
  _init3 = __decoratorStart(null);
  _direction = new WeakMap();
  _position = new WeakMap();
  __decorateElement(_init3, 3, "direction", _direction_dec, _Ray);
  __decorateElement(_init3, 3, "position", _position_dec, _Ray);
  __decoratorMetadata(_init3, _Ray);
  var Ray = _Ray;

  // src/bounding-sphere.ts
  var CONSTRUCTOR_SYMBOL4 = /* @__PURE__ */ Symbol("constructor");
  var _radius_dec, _center_dec, _center, _init4, _radius;
  var _BoundingSphere = class _BoundingSphere {
    constructor(...params) {
      __runInitializers(_init4, 5, this);
      /**
       * 球体的中心点。
       */
      __privateAdd(this, _center, null);
      /**
       * 球形半径。
       */
      __privateAdd(this, _radius, 0);
      _BoundingSphere[CONSTRUCTOR_SYMBOL4].apply(this, params);
    }
    /**
     * 获取球体的中心点。
     */
    get center() {
      return __privateGet(this, _center);
    }
    set center(value) {
      __privateSet(this, _center, value);
    }
    /**
     * 获取球形半径。
     */
    get radius() {
      return __privateGet(this, _radius);
    }
    set radius(value) {
      __privateSet(this, _radius, value);
    }
    /**
     * 结构化构造函数。
     * @returns BoundingSphere 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _BoundingSphere();
    }
    static [(_center_dec = [H(() => Vector3)], _radius_dec = [x2(Number)], CONSTRUCTOR_SYMBOL4)](...params) {
      _BoundingSphere[CONSTRUCTOR_SYMBOL4] = src_default().add([], function() {
        __privateSet(this, _center, Vector3.zero);
        __privateSet(this, _radius, 0);
      }).add([Vector3, Number], function(center, radius) {
        __privateSet(this, _center, center);
        __privateSet(this, _radius, radius);
      });
      return _BoundingSphere[CONSTRUCTOR_SYMBOL4].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _center);
      yield __privateGet(this, _radius);
    }
    static createFromBoundingBox(...params) {
      _BoundingSphere.createFromBoundingBox = src_default().add([BoundingBox], function(box) {
        const center = new Vector3(
          (box.min.x + box.max.x) / 2,
          (box.min.y + box.max.y) / 2,
          (box.min.z + box.max.z) / 2
        );
        const radius = Vector3.distance(center, box.max);
        return new _BoundingSphere(center, radius);
      }).add([BoundingBox, _BoundingSphere], function(box, result) {
        result.center = new Vector3(
          (box.min.x + box.max.x) / 2,
          (box.min.y + box.max.y) / 2,
          (box.min.z + box.max.z) / 2
        );
        result.radius = Vector3.distance(result.center, box.max);
      });
      return _BoundingSphere.createFromBoundingBox.apply(this, params);
    }
    static createFromFrustum(...params) {
      _BoundingSphere.createFromFrustum = src_default([BoundingFrustum], function(frustum) {
        return _BoundingSphere.createFromPoints(frustum.getCorners());
      });
      return _BoundingSphere.createFromFrustum.apply(this, params);
    }
    static createFromPoints(...params) {
      _BoundingSphere.createFromPoints = src_default([I.T(Vector3)], function(points) {
        if (points.length === 0) {
          throw new Error("points \u4E2D\u5E94\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u70B9\u3002");
        }
        let min = new Vector3(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        let max = new Vector3(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        for (const pt of points) {
          min.x = Math.min(min.x, pt.x);
          max.x = Math.max(max.x, pt.x);
          min.y = Math.min(min.y, pt.y);
          max.y = Math.max(max.y, pt.y);
          min.z = Math.min(min.z, pt.z);
          max.z = Math.max(max.z, pt.z);
        }
        const sqDistX = Vector3.distanceSquared(new Vector3(min.x, 0, 0), new Vector3(max.x, 0, 0));
        const sqDistY = Vector3.distanceSquared(new Vector3(0, min.y, 0), new Vector3(0, max.y, 0));
        const sqDistZ = Vector3.distanceSquared(new Vector3(0, 0, min.z), new Vector3(0, 0, max.z));
        if (sqDistY > sqDistX && sqDistY > sqDistZ) {
          min = new Vector3(0, min.y, 0);
          max = new Vector3(0, max.y, 0);
        } else if (sqDistZ > sqDistX && sqDistZ > sqDistY) {
          min = new Vector3(0, 0, min.z);
          max = new Vector3(0, 0, max.z);
        } else {
          min = new Vector3(min.x, 0, 0);
          max = new Vector3(max.x, 0, 0);
        }
        let center = Vector3.multiply(Vector3.add(min, max), 0.5);
        let radius = Vector3.distance(max, center);
        let sqRadius = radius * radius;
        for (const pt of points) {
          const diff = Vector3.subtract(pt, center);
          const sqDist = diff.lengthSquared();
          if (sqDist > sqRadius) {
            const distance = Math.sqrt(sqDist);
            const direction = Vector3.divide(diff, distance);
            const g2 = Vector3.subtract(center, Vector3.multiply(direction, radius));
            center = Vector3.divide(Vector3.add(g2, pt), 2);
            radius = Vector3.distance(pt, center);
            sqRadius = radius * radius;
          }
        }
        return new _BoundingSphere(center, radius);
      });
      return _BoundingSphere.createFromPoints.apply(this, params);
    }
    static createMerged(...params) {
      _BoundingSphere.createMerged = src_default().add([_BoundingSphere, _BoundingSphere], function(original, additional) {
        let oCenterToACenter = Vector3.subtract(__privateGet(additional, _center), __privateGet(original, _center));
        const distance = oCenterToACenter.length();
        if (distance <= __privateGet(original, _radius) + __privateGet(additional, _radius)) {
          if (distance <= __privateGet(original, _radius) - __privateGet(additional, _radius)) {
            return new _BoundingSphere(__privateGet(original, _center), __privateGet(original, _radius));
          }
          if (distance <= __privateGet(additional, _radius) - __privateGet(original, _radius)) {
            return new _BoundingSphere(__privateGet(additional, _center), __privateGet(additional, _radius));
          }
        }
        const leftRadius = Math.max(__privateGet(original, _radius) - distance, __privateGet(additional, _radius));
        const rightRadius = Math.max(__privateGet(original, _radius) + distance, __privateGet(additional, _radius));
        const adjustmentFactor = (leftRadius - rightRadius) / (2 * distance);
        oCenterToACenter = Vector3.add(oCenterToACenter, Vector3.multiply(oCenterToACenter, adjustmentFactor));
        return new _BoundingSphere(
          Vector3.add(__privateGet(original, _center), oCenterToACenter),
          (leftRadius + rightRadius) / 2
        );
      }).add([_BoundingSphere, _BoundingSphere, _BoundingSphere], function(original, additional, result) {
        let oCenterToACenter = Vector3.subtract(__privateGet(additional, _center), __privateGet(original, _center));
        const distance = oCenterToACenter.length();
        if (distance <= __privateGet(original, _radius) + __privateGet(additional, _radius)) {
          if (distance <= __privateGet(original, _radius) - __privateGet(additional, _radius)) {
            __privateSet(result, _center, __privateGet(original, _center));
            __privateSet(result, _radius, __privateGet(original, _radius));
            return;
          }
          if (distance <= __privateGet(additional, _radius) - __privateGet(original, _radius)) {
            __privateSet(result, _center, __privateGet(additional, _center));
            __privateSet(result, _radius, __privateGet(additional, _radius));
            return;
          }
        }
        const leftRadius = Math.max(__privateGet(original, _radius) - distance, __privateGet(additional, _radius));
        const rightRadius = Math.max(__privateGet(original, _radius) + distance, __privateGet(additional, _radius));
        const adjustmentFactor = (leftRadius - rightRadius) / (2 * distance);
        oCenterToACenter = Vector3.add(oCenterToACenter, Vector3.multiply(oCenterToACenter, adjustmentFactor));
        __privateSet(result, _center, Vector3.add(__privateGet(original, _center), oCenterToACenter));
        __privateSet(result, _radius, (leftRadius + rightRadius) / 2);
      });
      return _BoundingSphere.createMerged.apply(this, params);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    contains(...params) {
      _BoundingSphere.prototype.contains = src_default().add([BoundingBox], function(box) {
        let inside = true;
        const corners = box.getCorners();
        corners.forEach((corner) => {
          if (this.contains(corner) === ContainmentType.disjoint) {
            inside = false;
          }
        });
        if (inside) {
          return ContainmentType.contains;
        }
        let dmin = 0;
        const calculateDistance = (centerCoord, minCoord, maxCoord) => {
          if (centerCoord < minCoord) {
            return (centerCoord - minCoord) * (centerCoord - minCoord);
          } else if (centerCoord > maxCoord) {
            return (centerCoord - maxCoord) * (centerCoord - maxCoord);
          }
          return 0;
        };
        dmin += calculateDistance(__privateGet(this, _center).x, box.min.x, box.max.x);
        dmin += calculateDistance(__privateGet(this, _center).y, box.min.y, box.max.y);
        dmin += calculateDistance(__privateGet(this, _center).z, box.min.z, box.max.z);
        if (dmin <= __privateGet(this, _radius) ** 2) {
          return ContainmentType.intersects;
        }
        return ContainmentType.disjoint;
      }).add([BoundingFrustum], function(frustum) {
        let inside = true;
        const corners = frustum.getCorners();
        for (var i = 0; i < corners.length; i++) {
          if (this.contains(corners[i]) === ContainmentType.disjoint) {
            inside = false;
            break;
          }
        }
        if (inside) return ContainmentType.contains;
        if (frustum.intersects(this)) {
          return ContainmentType.intersects;
        }
        return ContainmentType.disjoint;
      }).add([_BoundingSphere], function(sphere) {
        const sqDistance = Vector3.distanceSquared(__privateGet(sphere, _center), __privateGet(this, _center));
        const radiusSum = __privateGet(sphere, _radius) + __privateGet(this, _radius);
        const radiusDiff = __privateGet(this, _radius) - __privateGet(sphere, _radius);
        if (sqDistance > radiusSum * radiusSum) return ContainmentType.disjoint;
        else if (radiusDiff >= 0 && sqDistance <= radiusDiff * radiusDiff) return ContainmentType.contains;
        else return ContainmentType.intersects;
      }).add([Vector3], function(point) {
        const sqRadius = __privateGet(this, _radius) ** 2;
        const sqDistance = Vector3.distanceSquared(point, __privateGet(this, _center));
        if (sqDistance > sqRadius) return ContainmentType.disjoint;
        else if (sqDistance < sqRadius) return ContainmentType.contains;
        else return ContainmentType.intersects;
      });
      return _BoundingSphere.prototype.contains.apply(this, params);
    }
    equals(...params) {
      _BoundingSphere.prototype.equals = src_default([_BoundingSphere], function(other) {
        return __privateGet(this, _center).equals(__privateGet(other, _center)) && __privateGet(this, _radius) === __privateGet(other, _radius);
      }).any(() => false);
      return _BoundingSphere.prototype.equals.apply(this, params);
    }
    intersects(...params) {
      _BoundingSphere.prototype.intersects = src_default().add([Plane], function(plane) {
        let distance = Vector3.dot(plane.normal, __privateGet(this, _center));
        distance += plane.d;
        if (distance > __privateGet(this, _radius)) return PlaneIntersectionType.front;
        else if (distance < -__privateGet(this, _radius)) return PlaneIntersectionType.back;
        else return PlaneIntersectionType.intersecting;
      }).add([BoundingBox], function(box) {
        return box.intersects(this);
      }).add([BoundingFrustum], function(frustum) {
        return frustum.intersects(this);
      }).add([_BoundingSphere], function(sphere) {
        const sqDistance = Vector3.distanceSquared(__privateGet(sphere, _center), __privateGet(this, _center));
        if (sqDistance > (__privateGet(sphere, _radius) + __privateGet(this, _radius)) ** 2) return false;
        else return true;
      }).add([Ray], function(ray) {
        return ray.intersects(this);
      });
      return _BoundingSphere.prototype.intersects.apply(this, params);
    }
    transform(...params) {
      _BoundingSphere.prototype.transform = src_default().add([Matrix], function(matrix) {
        const sphere = new _BoundingSphere();
        __privateSet(sphere, _center, Vector3.transform(__privateGet(this, _center), matrix));
        const m11 = matrix.m11, m12 = matrix.m12, m13 = matrix.m13;
        const m21 = matrix.m21, m22 = matrix.m22, m23 = matrix.m23;
        const m31 = matrix.m31, m32 = matrix.m32, m33 = matrix.m33;
        const max1 = Math.max(
          m11 * m11 + m12 * m12 + m13 * m13,
          m21 * m21 + m22 * m22 + m23 * m23
        );
        const max2 = Math.max(max1, m31 * m31 + m32 * m32 + m33 * m33);
        __privateSet(sphere, _radius, __privateGet(this, _radius) * Math.sqrt(max2));
        return sphere;
      }).add([Matrix, _BoundingSphere], function(matrix, result) {
        __privateSet(result, _center, Vector3.transform(__privateGet(this, _center), matrix));
        const m11 = matrix.m11, m12 = matrix.m12, m13 = matrix.m13;
        const m21 = matrix.m21, m22 = matrix.m22, m23 = matrix.m23;
        const m31 = matrix.m31, m32 = matrix.m32, m33 = matrix.m33;
        const max1 = Math.max(
          m11 * m11 + m12 * m12 + m13 * m13,
          m21 * m21 + m22 * m22 + m23 * m23
        );
        const max2 = Math.max(max1, m31 * m31 + m32 * m32 + m33 * m33);
        __privateSet(result, _radius, __privateGet(this, _radius) * Math.sqrt(max2));
      });
      return _BoundingSphere.prototype.transform.apply(this, params);
    }
    toString(...params) {
      _BoundingSphere.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _BoundingSphere.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 BoundingSphere 的 JSON 表示形式。
     * @returns 当前 BoundingSphere 的 JSON 表示形式。
     */
    toJSON() {
      return {
        center: __privateGet(this, _center).toJSON(),
        radius: __privateGet(this, _radius)
      };
    }
  };
  _init4 = __decoratorStart(null);
  _center = new WeakMap();
  _radius = new WeakMap();
  __decorateElement(_init4, 3, "center", _center_dec, _BoundingSphere);
  __decorateElement(_init4, 3, "radius", _radius_dec, _BoundingSphere);
  __decoratorMetadata(_init4, _BoundingSphere);
  var BoundingSphere = _BoundingSphere;

  // src/bounding-frustum.ts
  var CONSTRUCTOR_SYMBOL5 = /* @__PURE__ */ Symbol("constructor");
  var _matrix_dec, _BoundingFrustum_static, planeCount_get, _matrix, _init5, _corners, _planes, _BoundingFrustum_instances, createCorners_fn, createPlanes_fn, intersectionPoint_fn, normalizePlane_fn;
  var _BoundingFrustum = class _BoundingFrustum {
    constructor(...params) {
      __runInitializers(_init5, 5, this);
      __privateAdd(this, _BoundingFrustum_instances);
      /**
       * 描述此边界视锥的 Matrix。
       */
      __privateAdd(this, _matrix, null);
      /**
       * 边界视锥的角点集合。
       */
      __privateAdd(this, _corners, null);
      /**
       * 边界视锥的平面集合。
       */
      __privateAdd(this, _planes, null);
      _BoundingFrustum[CONSTRUCTOR_SYMBOL5].apply(this, params);
    }
    /**
     * 指定 BoundingFrustum 中的角点总数 (8)。
     */
    static get cornerCount() {
      return 8;
    }
    /**
     * 获取描述此边界视锥的 Matrix。
     */
    get matrix() {
      return __privateGet(this, _matrix);
    }
    set matrix(value) {
      __privateSet(this, _matrix, value);
      __privateMethod(this, _BoundingFrustum_instances, createPlanes_fn).call(this);
      __privateMethod(this, _BoundingFrustum_instances, createCorners_fn).call(this);
    }
    /**
     * 获取 BoundingFrustum 的近处平面。
     */
    get near() {
      return __privateGet(this, _planes)[0];
    }
    /**
     * 获取 BoundingFrustum 的远处平面。
     */
    get far() {
      return __privateGet(this, _planes)[1];
    }
    /**
     * 获取 BoundingFrustum 的左侧平面。
     */
    get left() {
      return __privateGet(this, _planes)[2];
    }
    /**
     * 获取 BoundingFrustum 的右侧平面。
     */
    get right() {
      return __privateGet(this, _planes)[3];
    }
    /**
     * 获取 BoundingFrustum 的顶部平面。
     */
    get top() {
      return __privateGet(this, _planes)[4];
    }
    /**
     * 获取 BoundingFrustum 的底部平面。
     */
    get bottom() {
      return __privateGet(this, _planes)[5];
    }
    static [(_matrix_dec = [H(() => Matrix)], CONSTRUCTOR_SYMBOL5)](...params) {
      _BoundingFrustum[CONSTRUCTOR_SYMBOL5] = src_default([Matrix], function(value) {
        this.matrix = value;
      });
      return _BoundingFrustum[CONSTRUCTOR_SYMBOL5].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _matrix);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    contains(...params) {
      _BoundingFrustum.prototype.contains = src_default().add([BoundingBox], function(box) {
        let intersects = false;
        let planeCount = __privateGet(_BoundingFrustum, _BoundingFrustum_static, planeCount_get);
        for (let i = 0; i < planeCount; ++i) {
          let planeIntersectionType = box.intersects(__privateGet(this, _planes)[i]);
          switch (planeIntersectionType) {
            case PlaneIntersectionType.front:
              return ContainmentType.disjoint;
            case PlaneIntersectionType.intersecting:
              intersects = true;
              break;
          }
        }
        return intersects ? ContainmentType.intersects : ContainmentType.contains;
      }).add([_BoundingFrustum], function(frustum) {
        if (this === frustum) return ContainmentType.contains;
        let intersects = false;
        const planeCount = __privateGet(_BoundingFrustum, _BoundingFrustum_static, planeCount_get);
        for (let i = 0; i < planeCount; ++i) {
          let planeIntersectionType = frustum.intersects(__privateGet(this, _planes)[i]);
          switch (planeIntersectionType) {
            case PlaneIntersectionType.front:
              return ContainmentType.disjoint;
            case PlaneIntersectionType.intersecting:
              intersects = true;
              break;
          }
        }
        return intersects ? ContainmentType.intersects : ContainmentType.contains;
      }).add([BoundingSphere], function(sphere) {
        let intersects = false;
        const planeCount = __privateGet(_BoundingFrustum, _BoundingFrustum_static, planeCount_get);
        for (let i = 0; i < planeCount; ++i) {
          let planeIntersectionType = sphere.intersects(__privateGet(this, _planes)[i]);
          switch (planeIntersectionType) {
            case PlaneIntersectionType.front:
              return ContainmentType.disjoint;
            case PlaneIntersectionType.intersecting:
              intersects = true;
              break;
          }
        }
        return intersects ? ContainmentType.intersects : ContainmentType.contains;
      }).add([Vector3], function(point) {
        const planeCount = __privateGet(_BoundingFrustum, _BoundingFrustum_static, planeCount_get);
        for (let i = 0; i < planeCount; ++i) {
          let plane = __privateGet(this, _planes)[i];
          if (point.x * plane.normal.x + point.y * plane.normal.y + point.z * plane.normal.z + plane.d > 0) {
            return ContainmentType.disjoint;
          }
        }
        return ContainmentType.contains;
      });
      return _BoundingFrustum.prototype.contains.apply(this, params);
    }
    equals(...params) {
      _BoundingFrustum.prototype.equals = src_default([_BoundingFrustum], function(other) {
        return __privateGet(this, _matrix).equals(__privateGet(other, _matrix));
      }).any(() => false);
      return _BoundingFrustum.prototype.equals.apply(this, params);
    }
    getCorners(...params) {
      _BoundingFrustum.prototype.getCorners = src_default().add([], function() {
        const vec3Arr = new I(Vector3);
        const corners = __privateGet(this, _corners);
        for (let i = 0; i < corners.length; i++) {
          vec3Arr.add(new Vector3(
            corners[i].x,
            corners[i].y,
            corners[i].z
          ));
        }
        return vec3Arr;
      }).add([I.T(Vector3)], function(corners) {
        if (corners.length < _BoundingFrustum.cornerCount) {
          throw new RangeError("corners \u7684\u957F\u5EA6\u5C0F\u4E8E BoundingFrustum.cornerCount\u3002");
        }
        const _corners2 = __privateGet(this, _corners);
        for (let i = 0; i < _corners2.length; i++) {
          corners[i].x = _corners2[i].x;
          corners[i].y = _corners2[i].y;
          corners[i].z = _corners2[i].z;
        }
      });
      return _BoundingFrustum.prototype.getCorners.apply(this, params);
    }
    intersects(...params) {
      _BoundingFrustum.prototype.intersects = src_default().add([Plane], function(plane) {
        const corners = __privateGet(this, _corners);
        let result = plane.intersects(corners[0]);
        for (var i = 1; i < corners.length; i++) {
          if (plane.intersects(corners[i]) != result) {
            result = PlaneIntersectionType.intersecting;
          }
        }
        return result;
      }).add([BoundingBox], function(box) {
        return this.contains(box) !== ContainmentType.disjoint;
      }).add([_BoundingFrustum], function(frustum) {
        return this.contains(frustum) !== ContainmentType.disjoint;
      }).add([BoundingSphere], function(sphere) {
        return this.contains(sphere) !== ContainmentType.disjoint;
      }).add([Ray], function(ray) {
        switch (this.contains(ray.position)) {
          case ContainmentType.disjoint:
            return null;
          case ContainmentType.contains:
            return 0;
          case ContainmentType.intersects:
            return 0;
          default:
            throw new RangeError();
        }
      });
      return _BoundingFrustum.prototype.intersects.apply(this, params);
    }
    toString(...params) {
      _BoundingFrustum.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _BoundingFrustum.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 BoundingFrustum 的 JSON 表示形式。
     * @returns 当前 BoundingFrustum 的 JSON 表示形式。
     */
    toJSON() {
      return {
        near: this.near,
        far: this.far,
        left: this.left,
        right: this.right,
        top: this.top,
        bottom: this.bottom
      };
    }
  };
  _init5 = __decoratorStart(null);
  _BoundingFrustum_static = new WeakSet();
  planeCount_get = function() {
    return 6;
  };
  _matrix = new WeakMap();
  _corners = new WeakMap();
  _planes = new WeakMap();
  _BoundingFrustum_instances = new WeakSet();
  /**
   * 创建角点
   */
  createCorners_fn = function() {
    __privateSet(this, _corners, new I(Vector3));
    const p = __privateGet(this, _planes);
    const c = __privateGet(this, _corners);
    c.addRange([
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[0], p[2], p[4]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[0], p[3], p[4]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[0], p[3], p[5]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[0], p[2], p[5]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[1], p[2], p[4]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[1], p[3], p[4]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[1], p[3], p[5]),
      __privateMethod(this, _BoundingFrustum_instances, intersectionPoint_fn).call(this, p[1], p[2], p[5])
    ]);
  };
  /**
   * 创建平面
   */
  createPlanes_fn = function() {
    __privateSet(this, _planes, new I(Plane));
    const m = __privateGet(this, _matrix);
    const p = __privateGet(this, _planes);
    const m11 = m.m11, m12 = m.m12, m13 = m.m13, m14 = m.m14;
    const m21 = m.m21, m22 = m.m22, m23 = m.m23, m24 = m.m24;
    const m31 = m.m31, m32 = m.m32, m33 = m.m33, m34 = m.m34;
    const m41 = m.m41, m42 = m.m42, m43 = m.m43, m44 = m.m44;
    p.addRange([
      new Plane(-m13, -m23, -m33, -m43),
      new Plane(m13 - m14, m23 - m24, m33 - m34, m43 - m44),
      new Plane(-m14 - m11, -m24 - m21, -m34 - m31, -m44 - m41),
      new Plane(m11 - m14, m21 - m24, m31 - m34, m41 - m44),
      new Plane(m12 - m14, m22 - m24, m32 - m34, m42 - m44),
      new Plane(-m14 - m12, -m24 - m22, -m34 - m32, -m44 - m42)
    ]);
    __privateMethod(this, _BoundingFrustum_instances, normalizePlane_fn).call(this, p[0]);
    __privateMethod(this, _BoundingFrustum_instances, normalizePlane_fn).call(this, p[1]);
    __privateMethod(this, _BoundingFrustum_instances, normalizePlane_fn).call(this, p[2]);
    __privateMethod(this, _BoundingFrustum_instances, normalizePlane_fn).call(this, p[3]);
    __privateMethod(this, _BoundingFrustum_instances, normalizePlane_fn).call(this, p[4]);
    __privateMethod(this, _BoundingFrustum_instances, normalizePlane_fn).call(this, p[5]);
  };
  /**
   * 计算三个平面的交点
   * @param a 平面A
   * @param b 平面B
   * @param c 平面C
   * @returns 交点坐标
   */
  intersectionPoint_fn = function(a, b3, c) {
    let v1, v2, v3;
    let cross = Vector3.cross(b3.normal, c.normal);
    let f = Vector3.dot(a.normal, cross);
    f *= -1;
    cross = Vector3.cross(b3.normal, c.normal);
    v1 = Vector3.multiply(cross, a.d);
    cross = Vector3.cross(c.normal, a.normal);
    v2 = Vector3.multiply(cross, b3.d);
    cross = Vector3.cross(a.normal, b3.normal);
    v3 = Vector3.multiply(cross, c.d);
    const x3 = (v1.x + v2.x + v3.x) / f;
    const y = (v1.y + v2.y + v3.y) / f;
    const z = (v1.z + v2.z + v3.z) / f;
    return new Vector3(x3, y, z);
  };
  /**
   * 归一化平面
   * @param p 平面
   */
  normalizePlane_fn = function(p) {
    const planeNormal = p.normal;
    const factor = 1 / planeNormal.length();
    planeNormal.x *= factor;
    planeNormal.y *= factor;
    planeNormal.z *= factor;
    p.d *= factor;
  };
  __decorateElement(_init5, 3, "matrix", _matrix_dec, _BoundingFrustum);
  __privateAdd(_BoundingFrustum, _BoundingFrustum_static);
  __decoratorMetadata(_init5, _BoundingFrustum);
  var BoundingFrustum = _BoundingFrustum;

  // src/bounding-box.ts
  var CONSTRUCTOR_SYMBOL6 = /* @__PURE__ */ Symbol("constructor");
  var _min_dec, _max_dec, _BoundingBox_static, maxVector3_get, minVector3_get, _max, _init6, _min;
  var _BoundingBox = class _BoundingBox {
    constructor(...params) {
      __runInitializers(_init6, 5, this);
      /**
       * BoundingBox 包含的最多点。
       */
      __privateAdd(this, _max, null);
      /**
       * BoundingBox 包含的最少点。
       */
      __privateAdd(this, _min, null);
      _BoundingBox[CONSTRUCTOR_SYMBOL6].apply(this, params);
    }
    /**
     * 指定 BoundingBox 中的角点总数 (8)。
     */
    static get cornerCount() {
      return 8;
    }
    /**
     * 获取BoundingBox 包含的最多点。
     */
    get max() {
      return __privateGet(this, _max);
    }
    set max(value) {
      __privateSet(this, _max, value);
    }
    /**
     * 获取 BoundingBox 包含的最少点。
     */
    get min() {
      return __privateGet(this, _min);
    }
    set min(value) {
      __privateSet(this, _min, value);
    }
    /**
     * 结构化构造函数。
     * @returns BoundingBox 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _BoundingBox();
    }
    static [(_max_dec = [H(() => Vector3)], _min_dec = [H(() => Vector3)], CONSTRUCTOR_SYMBOL6)](...params) {
      _BoundingBox[CONSTRUCTOR_SYMBOL6] = src_default().add([], function() {
        __privateSet(this, _min, Vector3.zero);
        __privateSet(this, _max, Vector3.zero);
      }).add([Vector3, Vector3], function(min, max) {
        __privateSet(this, _min, min);
        __privateSet(this, _max, max);
      });
      return _BoundingBox[CONSTRUCTOR_SYMBOL6].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _min);
      yield __privateGet(this, _max);
    }
    static createFromPoints(...params) {
      _BoundingBox.createFromPoints = src_default([I.T(Vector3)], function(points) {
        let empty = true;
        const minVec = __privateGet(_BoundingBox, _BoundingBox_static, maxVector3_get), maxVec = __privateGet(_BoundingBox, _BoundingBox_static, minVector3_get);
        for (let i = 0; i < points.length; i++) {
          const { x: px, y: py, z: pz } = points[i];
          minVec.x = minVec.x < px ? minVec.x : px;
          minVec.y = minVec.y < py ? minVec.y : py;
          minVec.z = minVec.z < pz ? minVec.z : pz;
          maxVec.x = maxVec.x > px ? maxVec.x : px;
          maxVec.y = maxVec.y > py ? maxVec.y : py;
          maxVec.z = maxVec.z > pz ? maxVec.z : pz;
          empty = false;
        }
        if (empty) {
          throw new RangeError("\u5217\u8868\u4E2D\u6CA1\u6709\u70B9\u3002");
        }
        return new _BoundingBox(minVec, maxVec);
      });
      return _BoundingBox.createFromPoints.apply(this, params);
    }
    static createFromSphere(...params) {
      _BoundingBox.createFromSphere = src_default().add([BoundingSphere], function(sphere) {
        const corner = new Vector3(sphere.radius);
        return new _BoundingBox(
          Vector3.subtract(sphere.center, corner),
          Vector3.add(sphere.center, corner)
        );
      }).add([BoundingSphere, _BoundingBox], function(sphere, result) {
        const corner = new Vector3(sphere.radius);
        result.min = Vector3.subtract(sphere.center, corner);
        result.max = Vector3.add(sphere.center, corner);
      });
      return _BoundingBox.createFromSphere.apply(this, params);
    }
    static createMerged(...params) {
      _BoundingBox.createMerged = src_default().add([_BoundingBox, _BoundingBox], function(original, additional) {
        const oMin = __privateGet(original, _min), oMax = __privateGet(original, _max);
        const aMin = __privateGet(additional, _min), aMax = __privateGet(additional, _max);
        const vec3Min = new Vector3(
          Math.min(oMin.x, aMin.x),
          Math.min(oMin.y, aMin.y),
          Math.min(oMin.z, aMin.z)
        );
        const vec3Max = new Vector3(
          Math.max(oMax.x, aMax.x),
          Math.max(oMax.y, aMax.y),
          Math.max(oMax.z, aMax.z)
        );
        return new _BoundingBox(vec3Min, vec3Max);
      }).add([_BoundingBox, _BoundingBox, _BoundingBox], function(original, additional, result) {
        const oMin = __privateGet(original, _min), oMax = __privateGet(original, _max);
        const aMin = __privateGet(additional, _min), aMax = __privateGet(additional, _max);
        result.min = new Vector3(
          Math.min(oMin.x, aMin.x),
          Math.min(oMin.y, aMin.y),
          Math.min(oMin.z, aMin.z)
        );
        result.max = new Vector3(
          Math.max(oMax.x, aMax.x),
          Math.max(oMax.y, aMax.y),
          Math.max(oMax.z, aMax.z)
        );
      });
      return _BoundingBox.createMerged.apply(this, params);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    contains(...params) {
      _BoundingBox.prototype.contains = src_default().add([_BoundingBox], function(box) {
        const bMin = __privateGet(box, _min), bMax = __privateGet(box, _max);
        const min = __privateGet(this, _min), max = __privateGet(this, _max);
        if (bMax.x < min.x || bMin.x > max.x || bMax.y < min.y || bMin.y > max.y || bMax.z < min.z || bMin.z > max.z) {
          return ContainmentType.disjoint;
        }
        if (bMin.x >= min.x && bMax.x <= max.x && bMin.y >= min.y && bMax.y <= max.y && bMin.z >= min.z && bMax.z <= max.z) {
          return ContainmentType.contains;
        }
        return ContainmentType.intersects;
      }).add([BoundingFrustum], function(frustum) {
        const corners = frustum.getCorners();
        let i;
        for (i = 0; i < corners.length; i++) {
          if (this.contains(corners[i]) === ContainmentType.disjoint) {
            break;
          }
        }
        if (i === corners.length) {
          return ContainmentType.contains;
        }
        if (this.intersects(frustum)) {
          return ContainmentType.intersects;
        }
        return ContainmentType.disjoint;
      }).add([BoundingSphere], function(sphere) {
        const r = sphere.radius;
        const sphereCenter = sphere.center;
        const cx = sphereCenter.x, cy = sphereCenter.y, cz = sphereCenter.z;
        const minx = __privateGet(this, _min).x, miny = __privateGet(this, _min).y, minz = __privateGet(this, _min).z;
        const maxx = __privateGet(this, _max).x, maxy = __privateGet(this, _max).y, maxz = __privateGet(this, _max).z;
        if (cx - minx >= r && cy - miny >= r && cz - minz >= r && maxx - cx >= r && maxy - cy >= r && maxz - cz >= r) {
          return ContainmentType.contains;
        }
        let dmin = 0;
        const coords = [
          { c: cx, min: minx, max: maxx },
          { c: cy, min: miny, max: maxy },
          { c: cz, min: minz, max: maxz }
        ];
        for (const { c, min, max } of coords) {
          let e = c - min;
          if (e < 0) {
            if (e < -r) {
              return ContainmentType.disjoint;
            }
            dmin += e * e;
          } else {
            e = c - max;
            if (e > 0) {
              if (e > r) {
                return ContainmentType.disjoint;
              }
              dmin += e * e;
            }
          }
        }
        if (dmin <= r * r) {
          return ContainmentType.intersects;
        }
        return ContainmentType.disjoint;
      }).add([Vector3], function(point) {
        const px = point.x, py = point.y, pz = point.z;
        const minx = __privateGet(this, _min).x, miny = __privateGet(this, _min).y, minz = __privateGet(this, _min).z;
        const maxx = __privateGet(this, _max).x, maxy = __privateGet(this, _max).y, maxz = __privateGet(this, _max).z;
        if (px < minx || px > maxx || py < miny || py > maxy || pz < minz || pz > maxz) {
          return ContainmentType.disjoint;
        }
        if (px == minx || px == maxx || py == miny || py == maxy || pz == minz || pz == maxz) {
          return ContainmentType.intersects;
        }
        return ContainmentType.contains;
      });
      return _BoundingBox.prototype.contains.apply(this, params);
    }
    equals(...params) {
      _BoundingBox.prototype.equals = src_default([_BoundingBox], function(box) {
        return __privateGet(this, _min).equals(__privateGet(box, _min)) && __privateGet(this, _max).equals(__privateGet(box, _max));
      }).any(() => false);
      return _BoundingBox.prototype.equals.apply(this, params);
    }
    getCorners(...params) {
      _BoundingBox.prototype.getCorners = src_default().add([], function() {
        const minx = __privateGet(this, _min).x, miny = __privateGet(this, _min).y, minz = __privateGet(this, _min).z;
        const maxx = __privateGet(this, _max).x, maxy = __privateGet(this, _max).y, maxz = __privateGet(this, _max).z;
        return new I(Vector3, [
          new Vector3(minx, maxy, maxz),
          new Vector3(maxx, maxy, maxz),
          new Vector3(maxx, miny, maxz),
          new Vector3(minx, miny, maxz),
          new Vector3(minx, maxy, minz),
          new Vector3(maxx, maxy, minz),
          new Vector3(maxx, miny, minz),
          new Vector3(minx, miny, minz)
        ]);
      }).add([I.T(Vector3)], function(corners) {
        if (corners.length < 8) {
          throw new RangeError("\u5217\u8868\u5FC5\u987B\u81F3\u5C11\u6709 8 \u4E2A\u5143\u7D20\u3002");
        }
        const minx = __privateGet(this, _min).x, miny = __privateGet(this, _min).y, minz = __privateGet(this, _min).z;
        const maxx = __privateGet(this, _max).x, maxy = __privateGet(this, _max).y, maxz = __privateGet(this, _max).z;
        const offsets = [
          { x: minx, y: maxy, z: maxz },
          { x: maxx, y: maxy, z: maxz },
          { x: maxx, y: miny, z: maxz },
          { x: minx, y: miny, z: maxz },
          { x: minx, y: maxy, z: minz },
          { x: maxx, y: maxy, z: minz },
          { x: maxx, y: miny, z: minz },
          { x: minx, y: miny, z: minz }
        ];
        for (let i = 0; i < 8; i++) {
          corners[i].x = offsets[i].x;
          corners[i].y = offsets[i].y;
          corners[i].z = offsets[i].z;
        }
      });
      return _BoundingBox.prototype.getCorners.apply(this, params);
    }
    intersects(...params) {
      _BoundingBox.prototype.intersects = src_default().add([_BoundingBox], function(box) {
        const minx = __privateGet(this, _min).x, miny = __privateGet(this, _min).y, minz = __privateGet(this, _min).z;
        const maxx = __privateGet(this, _max).x, maxy = __privateGet(this, _max).y, maxz = __privateGet(this, _max).z;
        const bMinx = box.min.x, bMiny = box.min.y, bMinz = box.min.z;
        const bMaxx = box.max.x, bMaxy = box.max.y, bMaxz = box.max.z;
        if (maxx >= bMinx && minx <= bMaxx) {
          if (maxy < bMiny || miny > bMaxy) return false;
          return maxz >= bMinz && minz <= bMaxz;
        }
        return false;
      }).add([BoundingFrustum], function(frustum) {
        return frustum.intersects(this);
      }).add([BoundingSphere], function(sphere) {
        return this.contains(sphere) !== ContainmentType.disjoint;
      }).add([Plane], function(plane) {
        const positiveVertex = new Vector3();
        const negativeVertex = new Vector3();
        const planeNormal = plane.normal;
        const px = planeNormal.x, py = planeNormal.y, pz = planeNormal.z;
        const pd = plane.d;
        const minx = __privateGet(this, _min).x, miny = __privateGet(this, _min).y, minz = __privateGet(this, _min).z;
        const maxx = __privateGet(this, _max).x, maxy = __privateGet(this, _max).y, maxz = __privateGet(this, _max).z;
        const setVertexCoordinates = (planeNormalComponent, minComponent, maxComponent, positiveVertex2, negativeVertex2, axis) => {
          if (planeNormalComponent >= 0) {
            positiveVertex2[axis] = maxComponent;
            negativeVertex2[axis] = minComponent;
          } else {
            positiveVertex2[axis] = minComponent;
            negativeVertex2[axis] = maxComponent;
          }
        };
        setVertexCoordinates(px, minx, maxx, positiveVertex, negativeVertex, "x");
        setVertexCoordinates(py, miny, maxy, positiveVertex, negativeVertex, "y");
        setVertexCoordinates(pz, minz, maxz, positiveVertex, negativeVertex, "z");
        let distance = px * negativeVertex.x + py * negativeVertex.y + pz * negativeVertex.z + pd;
        if (distance > 0) return PlaneIntersectionType.front;
        distance = px * positiveVertex.x + py * positiveVertex.y + pz * positiveVertex.z + pd;
        if (distance < 0) return PlaneIntersectionType.back;
        return PlaneIntersectionType.intersecting;
      }).add([Ray], function(ray) {
        return ray.intersects(this);
      });
      return _BoundingBox.prototype.intersects.apply(this, params);
    }
    toString(...params) {
      _BoundingBox.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _BoundingBox.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 BoundingBox 的 JSON 表示形式。
     * @returns 当前 BoundingBox 的 JSON 表示形式。
     */
    toJSON() {
      return {
        min: __privateGet(this, _min),
        max: __privateGet(this, _max)
      };
    }
  };
  _init6 = __decoratorStart(null);
  _BoundingBox_static = new WeakSet();
  maxVector3_get = function() {
    return new Vector3(Number.MAX_SAFE_INTEGER);
  };
  minVector3_get = function() {
    return new Vector3(Number.MIN_SAFE_INTEGER);
  };
  _max = new WeakMap();
  _min = new WeakMap();
  __decorateElement(_init6, 3, "max", _max_dec, _BoundingBox);
  __decorateElement(_init6, 3, "min", _min_dec, _BoundingBox);
  __privateAdd(_BoundingBox, _BoundingBox_static);
  __decoratorMetadata(_init6, _BoundingBox);
  var BoundingBox = _BoundingBox;

  // src/vector4.ts
  var CONSTRUCTOR_SYMBOL7 = /* @__PURE__ */ Symbol("constructor");
  var _w_dec2, _z_dec3, _y_dec3, _x_dec3, _x3, _init7, _y3, _z3, _w2;
  var _Vector4 = class _Vector4 {
    constructor(...params) {
      __runInitializers(_init7, 5, this);
      /**
       * 矢量的 x 色差。
       */
      __privateAdd(this, _x3, 0);
      /**
       * 矢量的 y 色差。
       */
      __privateAdd(this, _y3, 0);
      /**
       * 矢量的 z 色差。
       */
      __privateAdd(this, _z3, 0);
      /**
       * 矢量的 w 色差。
       */
      __privateAdd(this, _w2, 0);
      _Vector4[CONSTRUCTOR_SYMBOL7].apply(this, params);
    }
    /**
     * 返回所有组件均设置为一的 Vector4。
     */
    static get one() {
      return new _Vector4(1, 1, 1, 1);
    }
    /**
     * 返回 Vector4 (0, 0, 0, 1)。
     */
    static get unitW() {
      return new _Vector4(0, 0, 0, 1);
    }
    /**
     * 返回 Vector4 (1, 0, 0, 0)。
     */
    static get unitX() {
      return new _Vector4(1, 0, 0, 0);
    }
    /**
     * 返回 Vector4 (0, 1, 0, 0)。
     */
    static get unitY() {
      return new _Vector4(0, 1, 0, 0);
    }
    /**
     * 返回 Vector4 (0, 0, 1, 0)。
     */
    static get unitZ() {
      return new _Vector4(0, 0, 1, 0);
    }
    /**
     * 返回所有组件均设置为零的 Vector4。
     */
    static get zero() {
      return new _Vector4(0, 0, 0, 0);
    }
    /**
     * 获取矢量的 x 色差。
     */
    get x() {
      return __privateGet(this, _x3);
    }
    set x(value) {
      __privateSet(this, _x3, value);
    }
    /**
     * 获取矢量的 y 色差。
     */
    get y() {
      return __privateGet(this, _y3);
    }
    set y(value) {
      __privateSet(this, _y3, value);
    }
    /**
     * 获取矢量的 z 色差。
     */
    get z() {
      return __privateGet(this, _z3);
    }
    set z(value) {
      __privateSet(this, _z3, value);
    }
    /**
     * 获取矢量的 w 色差。
     */
    get w() {
      return __privateGet(this, _w2);
    }
    set w(value) {
      __privateSet(this, _w2, value);
    }
    /**
     * 结构化构造函数。
     * @returns Vector4 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return _Vector4.zero;
    }
    static [(_x_dec3 = [x2(Number)], _y_dec3 = [x2(Number)], _z_dec3 = [x2(Number)], _w_dec2 = [x2(Number)], CONSTRUCTOR_SYMBOL7)](...params) {
      _Vector4[CONSTRUCTOR_SYMBOL7] = src_default().add([], function() {
      }).add([Number], function(value) {
        __privateSet(this, _x3, value);
        __privateSet(this, _y3, value);
        __privateSet(this, _z3, value);
        __privateSet(this, _w2, value);
      }).add([Number, Number, Number, Number], function(x3, y, z, w2) {
        __privateSet(this, _x3, x3);
        __privateSet(this, _y3, y);
        __privateSet(this, _z3, z);
        __privateSet(this, _w2, w2);
      }).add([Vector2, Number, Number], function(value, z, w2) {
        __privateSet(this, _x3, value.x);
        __privateSet(this, _y3, value.y);
        __privateSet(this, _z3, z);
        __privateSet(this, _w2, w2);
      }).add([Vector3, Number], function(value, w2) {
        __privateSet(this, _x3, value.x);
        __privateSet(this, _y3, value.y);
        __privateSet(this, _z3, value.z);
        __privateSet(this, _w2, w2);
      });
      return _Vector4[CONSTRUCTOR_SYMBOL7].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _x3);
      yield __privateGet(this, _y3);
      yield __privateGet(this, _z3);
      yield __privateGet(this, _w2);
    }
    static add(...params) {
      _Vector4.add = src_default().add([_Vector4, _Vector4], function(value1, value2) {
        return new _Vector4(
          __privateGet(value1, _x3) + __privateGet(value2, _x3),
          __privateGet(value1, _y3) + __privateGet(value2, _y3),
          __privateGet(value1, _z3) + __privateGet(value2, _z3),
          __privateGet(value1, _w2) + __privateGet(value2, _w2)
        );
      }).add([_Vector4, _Vector4, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, __privateGet(value1, _x3) + __privateGet(value2, _x3));
        __privateSet(result, _y3, __privateGet(value1, _y3) + __privateGet(value2, _y3));
        __privateSet(result, _z3, __privateGet(value1, _z3) + __privateGet(value2, _z3));
        __privateSet(result, _w2, __privateGet(value1, _w2) + __privateGet(value2, _w2));
      });
      return _Vector4.add.apply(this, params);
    }
    static barycentric(...params) {
      _Vector4.barycentric = src_default().add([_Vector4, _Vector4, _Vector4, Number, Number], function(value1, value2, value3, amount1, amount2) {
        return new _Vector4(
          MathHelper.barycentric(__privateGet(value1, _x3), __privateGet(value2, _x3), __privateGet(value3, _x3), amount1, amount2),
          MathHelper.barycentric(__privateGet(value1, _y3), __privateGet(value2, _y3), __privateGet(value3, _y3), amount1, amount2),
          MathHelper.barycentric(__privateGet(value1, _z3), __privateGet(value2, _z3), __privateGet(value3, _z3), amount1, amount2),
          MathHelper.barycentric(__privateGet(value1, _w2), __privateGet(value2, _w2), __privateGet(value3, _w2), amount1, amount2)
        );
      }).add([_Vector4, _Vector4, _Vector4, Number, Number, _Vector4], function(value1, value2, value3, amount1, amount2, result) {
        __privateSet(result, _x3, MathHelper.barycentric(__privateGet(value1, _x3), __privateGet(value2, _x3), __privateGet(value3, _x3), amount1, amount2));
        __privateSet(result, _y3, MathHelper.barycentric(__privateGet(value1, _y3), __privateGet(value2, _y3), __privateGet(value3, _y3), amount1, amount2));
        __privateSet(result, _z3, MathHelper.barycentric(__privateGet(value1, _z3), __privateGet(value2, _z3), __privateGet(value3, _z3), amount1, amount2));
        __privateSet(result, _w2, MathHelper.barycentric(__privateGet(value1, _w2), __privateGet(value2, _w2), __privateGet(value3, _w2), amount1, amount2));
      });
      return _Vector4.barycentric.apply(this, params);
    }
    static catmullRom(...params) {
      _Vector4.catmullRom = src_default().add([_Vector4, _Vector4, _Vector4, _Vector4, Number], function(value1, value2, value3, value4, amount) {
        return new _Vector4(
          MathHelper.catmullRom(__privateGet(value1, _x3), __privateGet(value2, _x3), __privateGet(value3, _x3), __privateGet(value4, _x3), amount),
          MathHelper.catmullRom(__privateGet(value1, _y3), __privateGet(value2, _y3), __privateGet(value3, _y3), __privateGet(value4, _y3), amount),
          MathHelper.catmullRom(__privateGet(value1, _z3), __privateGet(value2, _z3), __privateGet(value3, _z3), __privateGet(value4, _z3), amount),
          MathHelper.catmullRom(__privateGet(value1, _w2), __privateGet(value2, _w2), __privateGet(value3, _w2), __privateGet(value4, _w2), amount)
        );
      }).add([_Vector4, _Vector4, _Vector4, _Vector4, Number, _Vector4], function(value1, value2, value3, value4, amount, result) {
        __privateSet(result, _x3, MathHelper.catmullRom(__privateGet(value1, _x3), __privateGet(value2, _x3), __privateGet(value3, _x3), __privateGet(value4, _x3), amount));
        __privateSet(result, _y3, MathHelper.catmullRom(__privateGet(value1, _y3), __privateGet(value2, _y3), __privateGet(value3, _y3), __privateGet(value4, _y3), amount));
        __privateSet(result, _z3, MathHelper.catmullRom(__privateGet(value1, _z3), __privateGet(value2, _z3), __privateGet(value3, _z3), __privateGet(value4, _z3), amount));
        __privateSet(result, _w2, MathHelper.catmullRom(__privateGet(value1, _w2), __privateGet(value2, _w2), __privateGet(value3, _w2), __privateGet(value4, _w2), amount));
      });
      return _Vector4.catmullRom.apply(this, params);
    }
    static clamp(...params) {
      _Vector4.clamp = src_default().add([_Vector4, _Vector4, _Vector4], function(value1, min, max) {
        return new _Vector4(
          MathHelper.clamp(__privateGet(value1, _x3), __privateGet(min, _x3), __privateGet(max, _x3)),
          MathHelper.clamp(__privateGet(value1, _y3), __privateGet(min, _y3), __privateGet(max, _y3)),
          MathHelper.clamp(__privateGet(value1, _z3), __privateGet(min, _z3), __privateGet(max, _z3)),
          MathHelper.clamp(__privateGet(value1, _w2), __privateGet(min, _w2), __privateGet(max, _w2))
        );
      }).add([_Vector4, _Vector4, _Vector4, _Vector4], function(value1, min, max, result) {
        __privateSet(result, _x3, MathHelper.clamp(__privateGet(value1, _x3), __privateGet(min, _x3), __privateGet(max, _x3)));
        __privateSet(result, _y3, MathHelper.clamp(__privateGet(value1, _y3), __privateGet(min, _y3), __privateGet(max, _y3)));
        __privateSet(result, _z3, MathHelper.clamp(__privateGet(value1, _z3), __privateGet(min, _z3), __privateGet(max, _z3)));
        __privateSet(result, _w2, MathHelper.clamp(__privateGet(value1, _w2), __privateGet(min, _w2), __privateGet(max, _w2)));
      });
      return _Vector4.clamp.apply(this, params);
    }
    static distance(...params) {
      _Vector4.distance = src_default().add([_Vector4, _Vector4], function(value1, value2) {
        const deltaW = value1.w - value2.w;
        const deltaX = value1.x - value2.x;
        const deltaY = value1.y - value2.y;
        const deltaZ = value1.z - value2.z;
        return Math.sqrt(deltaW ** 2 + deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
      });
      return _Vector4.distance.apply(this, params);
    }
    static distanceSquared(...params) {
      _Vector4.distanceSquared = src_default().add([_Vector4, _Vector4], function(value1, value2) {
        const deltaW = value1.w - value2.w;
        const deltaX = value1.x - value2.x;
        const deltaY = value1.y - value2.y;
        const deltaZ = value1.z - value2.z;
        return deltaW ** 2 + deltaX ** 2 + deltaY ** 2 + deltaZ ** 2;
      });
      return _Vector4.distanceSquared.apply(this, params);
    }
    static divide(...params) {
      _Vector4.divide = src_default().add([_Vector4, Number], function(value1, divider) {
        const factor = 1 / divider;
        return new _Vector4(
          __privateGet(value1, _x3) * factor,
          __privateGet(value1, _y3) * factor,
          __privateGet(value1, _z3) * factor,
          __privateGet(value1, _w2) * factor
        );
      }).add([_Vector4, Number, _Vector4], function(value1, divider, result) {
        const factor = 1 / divider;
        __privateSet(result, _x3, __privateGet(value1, _x3) * factor);
        __privateSet(result, _y3, __privateGet(value1, _y3) * factor);
        __privateSet(result, _z3, __privateGet(value1, _z3) * factor);
        __privateSet(result, _w2, __privateGet(value1, _w2) * factor);
      }).add([_Vector4, _Vector4], function(value1, value2) {
        return new _Vector4(
          __privateGet(value1, _x3) / __privateGet(value2, _x3),
          __privateGet(value1, _y3) / __privateGet(value2, _y3),
          __privateGet(value1, _z3) / __privateGet(value2, _z3),
          __privateGet(value1, _w2) / __privateGet(value2, _w2)
        );
      }).add([_Vector4, _Vector4, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, __privateGet(value1, _x3) / __privateGet(value2, _x3));
        __privateSet(result, _y3, __privateGet(value1, _y3) / __privateGet(value2, _y3));
        __privateSet(result, _z3, __privateGet(value1, _z3) / __privateGet(value2, _z3));
        __privateSet(result, _w2, __privateGet(value1, _w2) / __privateGet(value2, _w2));
      });
      return _Vector4.divide.apply(this, params);
    }
    static dot(...params) {
      _Vector4.dot = src_default().add([_Vector4, _Vector4], function(vector1, vector2) {
        const x1 = __privateGet(vector1, _x3), y1 = __privateGet(vector1, _y3), z1 = __privateGet(vector1, _z3), w1 = __privateGet(vector1, _w2);
        const x22 = __privateGet(vector2, _x3), y2 = __privateGet(vector2, _y3), z2 = __privateGet(vector2, _z3), w2 = __privateGet(vector2, _w2);
        return x1 * x22 + y1 * y2 + z1 * z2 + w1 * w2;
      });
      return _Vector4.dot.apply(this, params);
    }
    static hermite(...params) {
      _Vector4.hermite = src_default().add([_Vector4, _Vector4, _Vector4, _Vector4, Number], function(value1, tangent1, value2, tangent2, amount) {
        return new _Vector4(
          MathHelper.hermite(__privateGet(value1, _x3), __privateGet(tangent1, _x3), __privateGet(value2, _x3), __privateGet(tangent2, _x3), amount),
          MathHelper.hermite(__privateGet(value1, _y3), __privateGet(tangent1, _y3), __privateGet(value2, _y3), __privateGet(tangent2, _y3), amount),
          MathHelper.hermite(__privateGet(value1, _z3), __privateGet(tangent1, _z3), __privateGet(value2, _z3), __privateGet(tangent2, _z3), amount),
          MathHelper.hermite(__privateGet(value1, _w2), __privateGet(tangent1, _w2), __privateGet(value2, _w2), __privateGet(tangent2, _w2), amount)
        );
      }).add([_Vector4, _Vector4, _Vector4, _Vector4, Number, _Vector4], function(value1, tangent1, value2, tangent2, amount, result) {
        __privateSet(result, _x3, MathHelper.hermite(__privateGet(value1, _x3), __privateGet(tangent1, _x3), __privateGet(value2, _x3), __privateGet(tangent2, _x3), amount));
        __privateSet(result, _y3, MathHelper.hermite(__privateGet(value1, _y3), __privateGet(tangent1, _y3), __privateGet(value2, _y3), __privateGet(tangent2, _y3), amount));
        __privateSet(result, _z3, MathHelper.hermite(__privateGet(value1, _z3), __privateGet(tangent1, _z3), __privateGet(value2, _z3), __privateGet(tangent2, _z3), amount));
        __privateSet(result, _w2, MathHelper.hermite(__privateGet(value1, _w2), __privateGet(tangent1, _w2), __privateGet(value2, _w2), __privateGet(tangent2, _w2), amount));
      });
      return _Vector4.hermite.apply(this, params);
    }
    static lerp(...params) {
      _Vector4.lerp = src_default().add([_Vector4, _Vector4, Number], function(value1, value2, amount) {
        return new _Vector4(
          MathHelper.lerp(__privateGet(value1, _x3), __privateGet(value2, _x3), amount),
          MathHelper.lerp(__privateGet(value1, _y3), __privateGet(value2, _y3), amount),
          MathHelper.lerp(__privateGet(value1, _z3), __privateGet(value2, _z3), amount),
          MathHelper.lerp(__privateGet(value1, _w2), __privateGet(value2, _w2), amount)
        );
      }).add([_Vector4, _Vector4, Number, _Vector4], function(value1, value2, amount, result) {
        __privateSet(result, _x3, MathHelper.lerp(__privateGet(value1, _x3), __privateGet(value2, _x3), amount));
        __privateSet(result, _y3, MathHelper.lerp(__privateGet(value1, _y3), __privateGet(value2, _y3), amount));
        __privateSet(result, _z3, MathHelper.lerp(__privateGet(value1, _z3), __privateGet(value2, _z3), amount));
        __privateSet(result, _w2, MathHelper.lerp(__privateGet(value1, _w2), __privateGet(value2, _w2), amount));
      });
      return _Vector4.lerp.apply(this, params);
    }
    static max(...params) {
      _Vector4.max = src_default().add([_Vector4, _Vector4], function(value1, value2) {
        return new _Vector4(
          Math.max(__privateGet(value1, _x3), __privateGet(value2, _x3)),
          Math.max(__privateGet(value1, _y3), __privateGet(value2, _y3)),
          Math.max(__privateGet(value1, _z3), __privateGet(value2, _z3)),
          Math.max(__privateGet(value1, _w2), __privateGet(value2, _w2))
        );
      }).add([_Vector4, _Vector4, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, Math.max(__privateGet(value1, _x3), __privateGet(value2, _x3)));
        __privateSet(result, _y3, Math.max(__privateGet(value1, _y3), __privateGet(value2, _y3)));
        __privateSet(result, _z3, Math.max(__privateGet(value1, _z3), __privateGet(value2, _z3)));
        __privateSet(result, _w2, Math.max(__privateGet(value1, _w2), __privateGet(value2, _w2)));
      });
      return _Vector4.max.apply(this, params);
    }
    static min(...params) {
      _Vector4.min = src_default().add([_Vector4, _Vector4], function(value1, value2) {
        return new _Vector4(
          Math.min(__privateGet(value1, _x3), __privateGet(value2, _x3)),
          Math.min(__privateGet(value1, _y3), __privateGet(value2, _y3)),
          Math.min(__privateGet(value1, _z3), __privateGet(value2, _z3)),
          Math.min(__privateGet(value1, _w2), __privateGet(value2, _w2))
        );
      }).add([_Vector4, _Vector4, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, Math.min(__privateGet(value1, _x3), __privateGet(value2, _x3)));
        __privateSet(result, _y3, Math.min(__privateGet(value1, _y3), __privateGet(value2, _y3)));
        __privateSet(result, _z3, Math.min(__privateGet(value1, _z3), __privateGet(value2, _z3)));
        __privateSet(result, _w2, Math.min(__privateGet(value1, _w2), __privateGet(value2, _w2)));
      });
      return _Vector4.min.apply(this, params);
    }
    static multiply(...params) {
      _Vector4.multiply = src_default().add([_Vector4, Number], function(value1, value2) {
        return new _Vector4(
          __privateGet(value1, _x3) * value2,
          __privateGet(value1, _y3) * value2,
          __privateGet(value1, _z3) * value2,
          __privateGet(value1, _w2) * value2
        );
      }).add([_Vector4, Number, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, __privateGet(value1, _x3) * value2);
        __privateSet(result, _y3, __privateGet(value1, _y3) * value2);
        __privateSet(result, _z3, __privateGet(value1, _z3) * value2);
        __privateSet(result, _w2, __privateGet(value1, _w2) * value2);
      }).add([_Vector4, _Vector4], function(value1, value2) {
        return new _Vector4(
          __privateGet(value1, _x3) * __privateGet(value2, _x3),
          __privateGet(value1, _y3) * __privateGet(value2, _y3),
          __privateGet(value1, _z3) * __privateGet(value2, _z3),
          __privateGet(value1, _w2) * __privateGet(value2, _w2)
        );
      }).add([_Vector4, _Vector4, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, __privateGet(value1, _x3) * __privateGet(value2, _x3));
        __privateSet(result, _y3, __privateGet(value1, _y3) * __privateGet(value2, _y3));
        __privateSet(result, _z3, __privateGet(value1, _z3) * __privateGet(value2, _z3));
        __privateSet(result, _w2, __privateGet(value1, _w2) * __privateGet(value2, _w2));
      });
      return _Vector4.multiply.apply(this, params);
    }
    static negate(...params) {
      _Vector4.negate = src_default().add([_Vector4], function(value) {
        return new _Vector4(-__privateGet(value, _x3), -__privateGet(value, _y3), -__privateGet(value, _z3), -__privateGet(value, _w2));
      }).add([_Vector4, _Vector4], function(value, result) {
        __privateSet(result, _x3, -__privateGet(value, _x3));
        __privateSet(result, _y3, -__privateGet(value, _y3));
        __privateSet(result, _z3, -__privateGet(value, _z3));
        __privateSet(result, _w2, -__privateGet(value, _w2));
      });
      return _Vector4.negate.apply(this, params);
    }
    static normalize(...params) {
      _Vector4.normalize = src_default().add([_Vector4], function(value) {
        const x3 = __privateGet(value, _x3), y = __privateGet(value, _y3), z = __privateGet(value, _z3), w2 = __privateGet(value, _w2);
        const factor = 1 / Math.sqrt(x3 ** 2 + y ** 2 + z ** 2 + w2 ** 2);
        return new _Vector4(x3 * factor, y * factor, z * factor, w2 * factor);
      }).add([_Vector4, _Vector4], function(value, result) {
        const x3 = __privateGet(value, _x3), y = __privateGet(value, _y3), z = __privateGet(value, _z3), w2 = __privateGet(value, _w2);
        const factor = 1 / Math.sqrt(x3 ** 2 + y ** 2 + z ** 2 + w2 ** 2);
        __privateSet(result, _x3, x3 * factor);
        __privateSet(result, _y3, y * factor);
        __privateSet(result, _z3, z * factor);
        __privateSet(result, _w2, w2 * factor);
      });
      return _Vector4.normalize.apply(this, params);
    }
    static smoothStep(...params) {
      _Vector4.smoothStep = src_default().add([_Vector4, _Vector4, Number], function(value1, value2, amount) {
        return new _Vector4(
          MathHelper.smoothStep(__privateGet(value1, _x3), __privateGet(value2, _x3), amount),
          MathHelper.smoothStep(__privateGet(value1, _y3), __privateGet(value2, _y3), amount),
          MathHelper.smoothStep(__privateGet(value1, _z3), __privateGet(value2, _z3), amount),
          MathHelper.smoothStep(__privateGet(value1, _w2), __privateGet(value2, _w2), amount)
        );
      }).add([_Vector4, _Vector4, Number, _Vector4], function(value1, value2, amount, result) {
        __privateSet(result, _x3, MathHelper.smoothStep(__privateGet(value1, _x3), __privateGet(value2, _x3), amount));
        __privateSet(result, _y3, MathHelper.smoothStep(__privateGet(value1, _y3), __privateGet(value2, _y3), amount));
        __privateSet(result, _z3, MathHelper.smoothStep(__privateGet(value1, _z3), __privateGet(value2, _z3), amount));
        __privateSet(result, _w2, MathHelper.smoothStep(__privateGet(value1, _w2), __privateGet(value2, _w2), amount));
      });
      return _Vector4.smoothStep.apply(this, params);
    }
    static subtract(...params) {
      _Vector4.subtract = src_default().add([_Vector4, _Vector4], function(value1, value2) {
        return new _Vector4(
          __privateGet(value1, _x3) - __privateGet(value2, _x3),
          __privateGet(value1, _y3) - __privateGet(value2, _y3),
          __privateGet(value1, _z3) - __privateGet(value2, _z3),
          __privateGet(value1, _w2) - __privateGet(value2, _w2)
        );
      }).add([_Vector4, _Vector4, _Vector4], function(value1, value2, result) {
        __privateSet(result, _x3, __privateGet(value1, _x3) - __privateGet(value2, _x3));
        __privateSet(result, _y3, __privateGet(value1, _y3) - __privateGet(value2, _y3));
        __privateSet(result, _z3, __privateGet(value1, _z3) - __privateGet(value2, _z3));
        __privateSet(result, _w2, __privateGet(value1, _w2) - __privateGet(value2, _w2));
      });
      return _Vector4.subtract.apply(this, params);
    }
    static transform(...params) {
      _Vector4.transform = src_default().add([Vector2, Matrix], function(position, matrix) {
        const x3 = position.x, y = position.y;
        return new _Vector4(
          x3 * matrix.m11 + y * matrix.m21 + matrix.m41,
          x3 * matrix.m12 + y * matrix.m22 + matrix.m42,
          x3 * matrix.m13 + y * matrix.m23 + matrix.m43,
          x3 * matrix.m14 + y * matrix.m24 + matrix.m44
        );
      }).add([Vector2, Matrix, _Vector4], function(position, matrix, result) {
        const x3 = position.x, y = position.y;
        __privateSet(result, _x3, x3 * matrix.m11 + y * matrix.m21 + matrix.m41);
        __privateSet(result, _y3, x3 * matrix.m12 + y * matrix.m22 + matrix.m42);
        __privateSet(result, _z3, x3 * matrix.m13 + y * matrix.m23 + matrix.m43);
        __privateSet(result, _w2, x3 * matrix.m14 + y * matrix.m24 + matrix.m44);
      }).add([Vector2, Quaternion], function(value, rotation) {
        const x3 = value.x, y = value.y;
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const x22 = rx + rx, y2 = ry + ry, z2 = rz + rz;
        const wz2 = rw * z2, xy2 = rx * y2, zz2 = rz * z2;
        return new _Vector4(
          x3 * (1 - ry * y2 - zz2) + y * (xy2 - wz2),
          x3 * (xy2 + wz2) + y * (1 - rx * x22 - zz2),
          x3 * (rx * z2 - rw * y2) + y * (ry * z2 + rw * x22),
          1
        );
      }).add([Vector2, Quaternion, _Vector4], function(value, rotation, result) {
        const x3 = value.x, y = value.y;
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const x22 = rx + rx, y2 = ry + ry, z2 = rz + rz;
        const wz2 = rw * z2, xy2 = rx * y2, zz2 = rz * z2;
        __privateSet(result, _x3, x3 * (1 - ry * y2 - zz2) + y * (xy2 - wz2));
        __privateSet(result, _y3, x3 * (xy2 + wz2) + y * (1 - rx * x22 - zz2));
        __privateSet(result, _z3, x3 * (rx * z2 - rw * y2) + y * (ry * z2 + rw * x22));
        __privateSet(result, _w2, 1);
      }).add([Vector3, Matrix], function(position, matrix) {
        const x3 = position.x, y = position.y, z = position.z;
        return new _Vector4(
          x3 * matrix.m11 + y * matrix.m21 + z * matrix.m31 + matrix.m41,
          x3 * matrix.m12 + y * matrix.m22 + z * matrix.m32 + matrix.m42,
          x3 * matrix.m13 + y * matrix.m23 + z * matrix.m33 + matrix.m43,
          x3 * matrix.m14 + y * matrix.m24 + z * matrix.m34 + matrix.m44
        );
      }).add([Vector3, Matrix, _Vector4], function(position, matrix, result) {
        const x3 = position.x, y = position.y, z = position.z;
        __privateSet(result, _x3, x3 * matrix.m11 + y * matrix.m21 + z * matrix.m31 + matrix.m41);
        __privateSet(result, _y3, x3 * matrix.m12 + y * matrix.m22 + z * matrix.m32 + matrix.m42);
        __privateSet(result, _z3, x3 * matrix.m13 + y * matrix.m23 + z * matrix.m33 + matrix.m43);
        __privateSet(result, _w2, x3 * matrix.m14 + y * matrix.m24 + z * matrix.m34 + matrix.m44);
      }).add([Vector3, Quaternion], function(position, rotation) {
        const x3 = position.x, y = position.y, z = position.z;
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const x22 = rx + rx, y2 = ry + ry, z2 = rz + rz;
        const wx2 = rw * x22, wy2 = rw * y2, wz2 = rw * z2;
        const xx2 = rx * x22, xy2 = rx * y2, xz2 = rx * z2;
        const yy2 = ry * y2, yz2 = ry * z2, zz2 = rz * z2;
        return new _Vector4(
          x3 * (1 - yy2 - zz2) + y * (xy2 - wz2) + z * (xz2 + wy2),
          x3 * (xy2 + wz2) + y * (1 - xx2 - zz2) + z * (yz2 - wx2),
          x3 * (xz2 - wy2) + y * (yz2 + wx2) + z * (1 - xx2 - yy2),
          1
        );
      }).add([Vector3, Quaternion, _Vector4], function(position, rotation, result) {
        const x3 = position.x, y = position.y, z = position.z;
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const x22 = rx + rx, y2 = ry + ry, z2 = rz + rz;
        const wx2 = rw * x22, wy2 = rw * y2, wz2 = rw * z2;
        const xx2 = rx * x22, xy2 = rx * y2, xz2 = rx * z2;
        const yy2 = ry * y2, yz2 = ry * z2, zz2 = rz * z2;
        __privateSet(result, _x3, x3 * (1 - yy2 - zz2) + y * (xy2 - wz2) + z * (xz2 + wy2));
        __privateSet(result, _y3, x3 * (xy2 + wz2) + y * (1 - xx2 - zz2) + z * (yz2 - wx2));
        __privateSet(result, _z3, x3 * (xz2 - wy2) + y * (yz2 + wx2) + z * (1 - xx2 - yy2));
        __privateSet(result, _w2, 1);
      }).add([_Vector4, Matrix], function(position, matrix) {
        const x3 = __privateGet(position, _x3), y = __privateGet(position, _y3), z = __privateGet(position, _z3), w2 = __privateGet(position, _w2);
        return new _Vector4(
          x3 * matrix.m11 + y * matrix.m21 + z * matrix.m31 + w2 * matrix.m41,
          x3 * matrix.m12 + y * matrix.m22 + z * matrix.m32 + w2 * matrix.m42,
          x3 * matrix.m13 + y * matrix.m23 + z * matrix.m33 + w2 * matrix.m43,
          x3 * matrix.m14 + y * matrix.m24 + z * matrix.m34 + w2 * matrix.m44
        );
      }).add([_Vector4, Matrix, _Vector4], function(position, matrix, result) {
        const x3 = __privateGet(position, _x3), y = __privateGet(position, _y3), z = __privateGet(position, _z3), w2 = __privateGet(position, _w2);
        __privateSet(result, _x3, x3 * matrix.m11 + y * matrix.m21 + z * matrix.m31 + w2 * matrix.m41);
        __privateSet(result, _y3, x3 * matrix.m12 + y * matrix.m22 + z * matrix.m32 + w2 * matrix.m42);
        __privateSet(result, _z3, x3 * matrix.m13 + y * matrix.m23 + z * matrix.m33 + w2 * matrix.m43);
        __privateSet(result, _w2, x3 * matrix.m14 + y * matrix.m24 + z * matrix.m34 + w2 * matrix.m44);
      }).add([_Vector4, Quaternion], function(value, rotation) {
        const result = _Vector4.transform(new Vector3(__privateGet(value, _x3), __privateGet(value, _y3), __privateGet(value, _z3)), rotation);
        result.w = __privateGet(value, _w2);
        return result;
      }).add([_Vector4, Quaternion, _Vector4], function(value, rotation, result) {
        _Vector4.transform(new Vector3(__privateGet(value, _x3), __privateGet(value, _y3), __privateGet(value, _z3)), rotation, result);
        __privateSet(result, _w2, __privateGet(value, _w2));
      }).add([I.T(_Vector4), Number, Matrix, I.T(_Vector4), Number, Number], function(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        for (let i = 0; i < length; i++) {
          destinationArray[destinationIndex + i] = _Vector4.transform(sourceArray[sourceIndex + i], matrix);
        }
      }).add([I.T(_Vector4), Number, Quaternion, I.T(_Vector4), Number, Number], function(sourceArray, sourceIndex, quaternion, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        for (let i = 0; i < length; i++) {
          destinationArray[destinationIndex + i] = _Vector4.transform(sourceArray[sourceIndex + i], quaternion);
        }
      }).add([I.T(_Vector4), Matrix, I.T(_Vector4)], function(sourceArray, matrix, destinationArray) {
        _Vector4.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
      }).add([I.T(_Vector4), Quaternion, I.T(_Vector4)], function(sourceArray, rotation, destinationArray) {
        _Vector4.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
      });
      return _Vector4.transform.apply(this, params);
    }
    static ["-"](...params) {
      _Vector4["-"] = src_default([_Vector4], function(value) {
        return _Vector4.negate(value);
      });
      return _Vector4["-"].apply(this, params);
    }
    ["+"](...params) {
      _Vector4.prototype["+"] = src_default([_Vector4], function(other) {
        return _Vector4.add(this, other);
      });
      return _Vector4.prototype["+"].apply(this, params);
    }
    ["-"](...params) {
      _Vector4.prototype["-"] = src_default([_Vector4], function(other) {
        return _Vector4.subtract(this, other);
      });
      return _Vector4.prototype["-"].apply(this, params);
    }
    ["*"](...params) {
      _Vector4.prototype["*"] = src_default([_Vector4], function(other) {
        return _Vector4.multiply(this, other);
      });
      return _Vector4.prototype["*"].apply(this, params);
    }
    ["/"](...params) {
      _Vector4.prototype["/"] = src_default([_Vector4], function(other) {
        return _Vector4.divide(this, other);
      });
      return _Vector4.prototype["/"].apply(this, params);
    }
    ["=="](...params) {
      _Vector4.prototype["=="] = src_default([_Vector4], function(other) {
        return this.equals(other);
      });
      return _Vector4.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _Vector4.prototype["!="] = src_default([_Vector4], function(other) {
        return !this.equals(other);
      });
      return _Vector4.prototype["!="].apply(this, params);
    }
    equals(...params) {
      _Vector4.prototype.equals = src_default([_Vector4], function(other) {
        return __privateGet(this, _x3) === __privateGet(other, _x3) && __privateGet(this, _y3) === __privateGet(other, _y3) && __privateGet(this, _z3) === __privateGet(other, _z3) && __privateGet(this, _w2) === __privateGet(other, _w2);
      }).any(() => false);
      return _Vector4.prototype.equals.apply(this, params);
    }
    length(...params) {
      _Vector4.prototype.length = src_default([], function() {
        return Math.sqrt(__privateGet(this, _x3) ** 2 + __privateGet(this, _y3) ** 2 + __privateGet(this, _z3) ** 2 + __privateGet(this, _w2) ** 2);
      });
      return _Vector4.prototype.length.apply(this, params);
    }
    lengthSquared(...params) {
      _Vector4.prototype.lengthSquared = src_default([], function() {
        return __privateGet(this, _x3) ** 2 + __privateGet(this, _y3) ** 2 + __privateGet(this, _z3) ** 2 + __privateGet(this, _w2) ** 2;
      });
      return _Vector4.prototype.lengthSquared.apply(this, params);
    }
    normalize(...params) {
      _Vector4.prototype.normalize = src_default().add([], function() {
        const factor = 1 / Math.sqrt(__privateGet(this, _x3) ** 2 + __privateGet(this, _y3) ** 2 + __privateGet(this, _z3) ** 2 + __privateGet(this, _w2) ** 2);
        __privateSet(this, _x3, __privateGet(this, _x3) * factor);
        __privateSet(this, _y3, __privateGet(this, _y3) * factor);
        __privateSet(this, _z3, __privateGet(this, _z3) * factor);
        __privateSet(this, _w2, __privateGet(this, _w2) * factor);
      });
      return _Vector4.prototype.normalize.apply(this, params);
    }
    toString(...params) {
      _Vector4.prototype.toString = src_default().add([], function() {
        return JSON.stringify(this);
      });
      return _Vector4.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Vector4 的 JSON 表示形式。
     * @returns 当前 Vector4 的 JSON 表示形式。
     */
    toJSON() {
      return { x: __privateGet(this, _x3), y: __privateGet(this, _y3), z: __privateGet(this, _z3), w: __privateGet(this, _w2) };
    }
  };
  _init7 = __decoratorStart(null);
  _x3 = new WeakMap();
  _y3 = new WeakMap();
  _z3 = new WeakMap();
  _w2 = new WeakMap();
  __decorateElement(_init7, 3, "x", _x_dec3, _Vector4);
  __decorateElement(_init7, 3, "y", _y_dec3, _Vector4);
  __decorateElement(_init7, 3, "z", _z_dec3, _Vector4);
  __decorateElement(_init7, 3, "w", _w_dec2, _Vector4);
  __decoratorMetadata(_init7, _Vector4);
  var Vector4 = _Vector4;

  // src/plane.ts
  var CONSTRUCTOR_SYMBOL8 = /* @__PURE__ */ Symbol("constructor");
  var _d_dec, _normal_dec, _normal, _init8, _d;
  var _Plane = class _Plane {
    constructor(...params) {
      __runInitializers(_init8, 5, this);
      /**
       * Plane 的法线矢量。
       */
      __privateAdd(this, _normal, null);
      /**
       * Plane 从原点位置起沿法线方向的距离。
       */
      __privateAdd(this, _d, 0);
      __privateSet(this, _normal, Vector3.zero);
      _Plane[CONSTRUCTOR_SYMBOL8].apply(this, params);
    }
    /**
     * 获取 Plane 的法线矢量。
     */
    get normal() {
      return __privateGet(this, _normal);
    }
    set normal(value) {
      __privateSet(this, _normal, value);
    }
    /**
     * 获取 Plane 从原点位置起沿法线方向的距离。
     */
    get d() {
      return __privateGet(this, _d);
    }
    set d(value) {
      __privateSet(this, _d, value);
    }
    /**
     * 结构化构造函数。
     * @returns Plane 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _Plane();
    }
    static [(_normal_dec = [H(() => Vector3)], _d_dec = [x2(Number)], CONSTRUCTOR_SYMBOL8)](...params) {
      _Plane[CONSTRUCTOR_SYMBOL8] = src_default().add([], function() {
      }).add([Number, Number, Number, Number], function(a, b3, c, d2) {
        __privateGet(this, _normal).x = a;
        __privateGet(this, _normal).y = b3;
        __privateGet(this, _normal).z = c;
        __privateSet(this, _d, d2);
      }).add([Vector3, Number], function(normal, d2) {
        __privateGet(this, _normal).x = normal.x;
        __privateGet(this, _normal).y = normal.y;
        __privateGet(this, _normal).z = normal.z;
        __privateSet(this, _d, d2);
      }).add([Vector3, Vector3, Vector3], function(point1, point2, point3) {
        const ab = Vector3.subtract(point2, point1);
        const ac = Vector3.subtract(point3, point1);
        const cross = Vector3.cross(ab, ac);
        const normal = Vector3.normalize(cross);
        __privateGet(this, _normal).x = normal.x;
        __privateGet(this, _normal).y = normal.y;
        __privateGet(this, _normal).z = normal.z;
        __privateSet(this, _d, -Vector3.dot(normal, point1));
      }).add([Vector4], function(value) {
        __privateGet(this, _normal).x = value.x;
        __privateGet(this, _normal).y = value.y;
        __privateGet(this, _normal).z = value.z;
        __privateSet(this, _d, value.w);
      });
      return _Plane[CONSTRUCTOR_SYMBOL8].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _normal);
      yield __privateGet(this, _d);
    }
    static normalize(...params) {
      _Plane.normalize = src_default().add([_Plane], function(value) {
        const result = new _Plane();
        Vector3.normalize(__privateGet(value, _normal), __privateGet(result, _normal));
        const x1 = __privateGet(result, _normal).x, y1 = __privateGet(result, _normal).y, z1 = __privateGet(result, _normal).z;
        const x22 = __privateGet(value, _normal).x, y2 = __privateGet(value, _normal).y, z2 = __privateGet(value, _normal).z;
        const factor = Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2) / Math.sqrt(x22 ** 2 + y2 ** 2 + z2 ** 2);
        __privateSet(result, _d, __privateGet(value, _d) * factor);
        return result;
      }).add([_Plane, _Plane], function(value, result) {
        Vector3.normalize(__privateGet(value, _normal), __privateGet(result, _normal));
        const x1 = __privateGet(result, _normal).x, y1 = __privateGet(result, _normal).y, z1 = __privateGet(result, _normal).z;
        const x22 = __privateGet(value, _normal).x, y2 = __privateGet(value, _normal).y, z2 = __privateGet(value, _normal).z;
        const factor = Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2) / Math.sqrt(x22 ** 2 + y2 ** 2 + z2 ** 2);
        __privateSet(result, _d, __privateGet(value, _d) * factor);
      });
      return _Plane.normalize.apply(this, params);
    }
    static transform(...params) {
      _Plane.transform = src_default().add([_Plane, Matrix], function(plane, matrix) {
        const transformedMatrix = Matrix.transpose(Matrix.invert(matrix));
        const vector = new Vector4(__privateGet(plane, _normal), __privateGet(plane, _d));
        return new _Plane(Vector4.transform(vector, transformedMatrix));
      }).add([_Plane, Matrix, _Plane], function(plane, matrix, result) {
        const transformedMatrix = Matrix.transpose(Matrix.invert(matrix));
        const vector = new Vector4(__privateGet(plane, _normal), __privateGet(plane, _d));
        Vector4.transform(vector, transformedMatrix, vector);
        __privateGet(result, _normal).x = vector.x;
        __privateGet(result, _normal).y = vector.y;
        __privateGet(result, _normal).z = vector.z;
        __privateSet(result, _d, vector.w);
      }).add([_Plane, Quaternion], function(plane, rotation) {
        const result = new _Plane();
        __privateSet(result, _normal, Vector3.transform(__privateGet(plane, _normal), rotation));
        __privateSet(result, _d, __privateGet(plane, _d));
        return result;
      }).add([_Plane, Quaternion, _Plane], function(plane, rotation, result) {
        Vector3.transform(__privateGet(plane, _normal), rotation, __privateGet(result, _normal));
        __privateSet(result, _d, __privateGet(plane, _d));
      });
      return _Plane.transform.apply(this, params);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    dot(...params) {
      _Plane.prototype.dot = src_default().add([Vector4], function(value) {
        const normal = __privateGet(this, _normal);
        const nx = normal.x, ny = normal.y, nz = normal.z;
        const vx = value.x, vy = value.y, vz = value.z, vw = value.w;
        return nx * vx + ny * vy + nz * vz + __privateGet(this, _d) * vw;
      });
      return _Plane.prototype.dot.apply(this, params);
    }
    dotCoordinate(...params) {
      _Plane.prototype.dotCoordinate = src_default().add([Vector3], function(value) {
        const normal = __privateGet(this, _normal);
        const nx = normal.x, ny = normal.y, nz = normal.z;
        const vx = value.x, vy = value.y, vz = value.z;
        return nx * vx + ny * vy + nz * vz + __privateGet(this, _d);
      });
      return _Plane.prototype.dotCoordinate.apply(this, params);
    }
    dotNormal(...params) {
      _Plane.prototype.dotNormal = src_default().add([Vector3], function(value) {
        const normal = __privateGet(this, _normal);
        const nx = normal.x, ny = normal.y, nz = normal.z;
        const vx = value.x, vy = value.y, vz = value.z;
        return nx * vx + ny * vy + nz * vz;
      });
      return _Plane.prototype.dotNormal.apply(this, params);
    }
    equals(...params) {
      _Plane.prototype.equals = src_default([_Plane], function(other) {
        return __privateGet(this, _normal).equals(__privateGet(other, _normal)) && __privateGet(this, _d) === __privateGet(other, _d);
      }).any(() => false);
      return _Plane.prototype.equals.apply(this, params);
    }
    intersects(...params) {
      _Plane.prototype.intersects = src_default().add([BoundingBox], function(box) {
        return box.intersects(this);
      }).add([BoundingFrustum], function(frustum) {
        return frustum.intersects(this);
      }).add([BoundingSphere], function(sphere) {
        return sphere.intersects(this);
      }).add([Vector3], function(vec3) {
        const distance = this.dotCoordinate(vec3);
        if (distance > 0) return PlaneIntersectionType.front;
        else if (distance < 0) return PlaneIntersectionType.back;
        else return PlaneIntersectionType.intersecting;
      });
      return _Plane.prototype.intersects.apply(this, params);
    }
    normalize(...params) {
      _Plane.prototype.normalize = src_default([], function() {
        const factor = 1 / __privateGet(this, _normal).length();
        __privateSet(this, _normal, Vector3.multiply(__privateGet(this, _normal), factor));
        __privateSet(this, _d, __privateGet(this, _d) * factor);
      });
      return _Plane.prototype.normalize.apply(this, params);
    }
    toString(...params) {
      _Plane.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Plane.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Plane 的 JSON 表示形式。
     * @returns 当前 Plane 的 JSON 表示形式。
     */
    toJSON() {
      return {
        normal: __privateGet(this, _normal),
        d: __privateGet(this, _d)
      };
    }
  };
  _init8 = __decoratorStart(null);
  _normal = new WeakMap();
  _d = new WeakMap();
  __decorateElement(_init8, 3, "normal", _normal_dec, _Plane);
  __decorateElement(_init8, 3, "d", _d_dec, _Plane);
  __decoratorMetadata(_init8, _Plane);
  var Plane = _Plane;

  // src/matrix.ts
  var CONSTRUCTOR_SYMBOL9 = /* @__PURE__ */ Symbol("constructor");
  var _up_dec, _translation_dec, _right_dec, _left_dec, _forward_dec, _down_dec, _backward_dec, _m44_dec, _m43_dec, _m42_dec, _m41_dec, _m34_dec, _m33_dec, _m32_dec, _m31_dec, _m24_dec, _m23_dec, _m22_dec, _m21_dec, _m14_dec, _m13_dec, _m12_dec, _m11_dec, _init9, _values;
  var _Matrix = class _Matrix {
    constructor(...params) {
      __runInitializers(_init9, 5, this);
      /**
       * 矩阵元素数组。
       */
      __privateAdd(this, _values, new Float32Array(16));
      _Matrix[CONSTRUCTOR_SYMBOL9].apply(this, params);
    }
    /**
     * 返回标识矩阵的实例。
     */
    static get identity() {
      return new _Matrix(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    /**
     * 获取矩阵的行 1 列 1 的值。
     */
    get m11() {
      return __privateGet(this, _values)[0];
    }
    set m11(value) {
      __privateGet(this, _values)[0] = value;
    }
    /**
     * 获取矩阵的行 1 列 2 的值。
     */
    get m12() {
      return __privateGet(this, _values)[1];
    }
    set m12(value) {
      __privateGet(this, _values)[1] = value;
    }
    /**
     * 获取矩阵的行 1 列 3 的值。
     */
    get m13() {
      return __privateGet(this, _values)[2];
    }
    set m13(value) {
      __privateGet(this, _values)[2] = value;
    }
    /**
     * 获取矩阵的行 1 列 4 的值。
     */
    get m14() {
      return __privateGet(this, _values)[3];
    }
    set m14(value) {
      __privateGet(this, _values)[3] = value;
    }
    /**
     * 获取矩阵的行 2 列 1 的值。
     */
    get m21() {
      return __privateGet(this, _values)[4];
    }
    set m21(value) {
      __privateGet(this, _values)[4] = value;
    }
    /**
     * 获取矩阵的行 2 列 2 的值。
     */
    get m22() {
      return __privateGet(this, _values)[5];
    }
    set m22(value) {
      __privateGet(this, _values)[5] = value;
    }
    /**
     * 获取矩阵的行 2 列 3 的值。
     */
    get m23() {
      return __privateGet(this, _values)[6];
    }
    set m23(value) {
      __privateGet(this, _values)[6] = value;
    }
    /**
     * 获取矩阵的行 2 列 4 的值。
     */
    get m24() {
      return __privateGet(this, _values)[7];
    }
    set m24(value) {
      __privateGet(this, _values)[7] = value;
    }
    /**
     * 获取矩阵的行 3 列 1 的值。
     */
    get m31() {
      return __privateGet(this, _values)[8];
    }
    set m31(value) {
      __privateGet(this, _values)[8] = value;
    }
    /**
     * 获取矩阵的行 3 列 2 的值。
     */
    get m32() {
      return __privateGet(this, _values)[9];
    }
    set m32(value) {
      __privateGet(this, _values)[9] = value;
    }
    /**
     * 获取矩阵的行 3 列 3 的值。
     */
    get m33() {
      return __privateGet(this, _values)[10];
    }
    set m33(value) {
      __privateGet(this, _values)[10] = value;
    }
    /**
     * 获取矩阵的行 3 列 4 的值。
     */
    get m34() {
      return __privateGet(this, _values)[11];
    }
    set m34(value) {
      __privateGet(this, _values)[11] = value;
    }
    /**
     * 获取矩阵的行 4 列 1 的值。
     */
    get m41() {
      return __privateGet(this, _values)[12];
    }
    set m41(value) {
      __privateGet(this, _values)[12] = value;
    }
    /**
     * 获取矩阵的行 4 列 2 的值。
     */
    get m42() {
      return __privateGet(this, _values)[13];
    }
    set m42(value) {
      __privateGet(this, _values)[13] = value;
    }
    /**
     * 获取矩阵的行 4 列 3 的值。
     */
    get m43() {
      return __privateGet(this, _values)[14];
    }
    set m43(value) {
      __privateGet(this, _values)[14] = value;
    }
    /**
     * 获取矩阵的行 4 列 4 的值。
     */
    get m44() {
      return __privateGet(this, _values)[15];
    }
    set m44(value) {
      __privateGet(this, _values)[15] = value;
    }
    /**
     * 获取 Matrix 的后向矢量。
     */
    get backward() {
      return new Vector3(__privateGet(this, _values)[8], __privateGet(this, _values)[9], __privateGet(this, _values)[10]);
    }
    set backward(value) {
      __privateGet(this, _values)[8] = value.x;
      __privateGet(this, _values)[9] = value.y;
      __privateGet(this, _values)[10] = value.z;
    }
    /**
     * 获取 Matrix 的向下矢量。
     */
    get down() {
      return new Vector3(-__privateGet(this, _values)[4], -__privateGet(this, _values)[5], -__privateGet(this, _values)[6]);
    }
    set down(value) {
      __privateGet(this, _values)[4] = -value.x;
      __privateGet(this, _values)[5] = -value.y;
      __privateGet(this, _values)[6] = -value.z;
    }
    /**
     * 获取 Matrix 的向前矢量。
     */
    get forward() {
      return new Vector3(-__privateGet(this, _values)[8], -__privateGet(this, _values)[9], -__privateGet(this, _values)[10]);
    }
    set forward(value) {
      __privateGet(this, _values)[8] = -value.x;
      __privateGet(this, _values)[9] = -value.y;
      __privateGet(this, _values)[10] = -value.z;
    }
    /**
     * 获取 Matrix 的向左矢量。
     */
    get left() {
      return new Vector3(-__privateGet(this, _values)[0], -__privateGet(this, _values)[1], -__privateGet(this, _values)[2]);
    }
    set left(value) {
      __privateGet(this, _values)[0] = -value.x;
      __privateGet(this, _values)[1] = -value.y;
      __privateGet(this, _values)[2] = -value.z;
    }
    /**
     * 获取 Matrix 的向右矢量。
     */
    get right() {
      return new Vector3(__privateGet(this, _values)[0], __privateGet(this, _values)[1], __privateGet(this, _values)[2]);
    }
    set right(value) {
      __privateGet(this, _values)[0] = value.x;
      __privateGet(this, _values)[1] = value.y;
      __privateGet(this, _values)[2] = value.z;
    }
    /**
     * 获取 Matrix 的平移矢量。
     */
    get translation() {
      return new Vector3(__privateGet(this, _values)[12], __privateGet(this, _values)[13], __privateGet(this, _values)[14]);
    }
    set translation(value) {
      __privateGet(this, _values)[12] = value.x;
      __privateGet(this, _values)[13] = value.y;
      __privateGet(this, _values)[14] = value.z;
    }
    /**
     * 获取 Matrix 的向上矢量。
     */
    get up() {
      return new Vector3(__privateGet(this, _values)[4], __privateGet(this, _values)[5], __privateGet(this, _values)[6]);
    }
    set up(value) {
      __privateGet(this, _values)[4] = value.x;
      __privateGet(this, _values)[5] = value.y;
      __privateGet(this, _values)[6] = value.z;
    }
    /**
     * 获取矩阵元素数组。
     */
    get values() {
      return __privateGet(this, _values);
    }
    /**
     * 结构化构造函数。
     * @returns Matrix 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _Matrix();
    }
    static [(_m11_dec = [x2(Number)], _m12_dec = [x2(Number)], _m13_dec = [x2(Number)], _m14_dec = [x2(Number)], _m21_dec = [x2(Number)], _m22_dec = [x2(Number)], _m23_dec = [x2(Number)], _m24_dec = [x2(Number)], _m31_dec = [x2(Number)], _m32_dec = [x2(Number)], _m33_dec = [x2(Number)], _m34_dec = [x2(Number)], _m41_dec = [x2(Number)], _m42_dec = [x2(Number)], _m43_dec = [x2(Number)], _m44_dec = [x2(Number)], _backward_dec = [H(() => Vector3)], _down_dec = [H(() => Vector3)], _forward_dec = [H(() => Vector3)], _left_dec = [H(() => Vector3)], _right_dec = [H(() => Vector3)], _translation_dec = [H(() => Vector3)], _up_dec = [H(() => Vector3)], CONSTRUCTOR_SYMBOL9)](...params) {
      _Matrix[CONSTRUCTOR_SYMBOL9] = src_default().add([], function() {
      }).add([Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number], function(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
        __privateGet(this, _values)[0] = m11, __privateGet(this, _values)[1] = m12, __privateGet(this, _values)[2] = m13, __privateGet(this, _values)[3] = m14;
        __privateGet(this, _values)[4] = m21, __privateGet(this, _values)[5] = m22, __privateGet(this, _values)[6] = m23, __privateGet(this, _values)[7] = m24;
        __privateGet(this, _values)[8] = m31, __privateGet(this, _values)[9] = m32, __privateGet(this, _values)[10] = m33, __privateGet(this, _values)[11] = m34;
        __privateGet(this, _values)[12] = m41, __privateGet(this, _values)[13] = m42, __privateGet(this, _values)[14] = m43, __privateGet(this, _values)[15] = m44;
      });
      return _Matrix[CONSTRUCTOR_SYMBOL9].apply(this, params);
    }
    *[Symbol.iterator]() {
      const elements = [
        __privateGet(this, _values)[0],
        __privateGet(this, _values)[1],
        __privateGet(this, _values)[2],
        __privateGet(this, _values)[3],
        __privateGet(this, _values)[4],
        __privateGet(this, _values)[5],
        __privateGet(this, _values)[6],
        __privateGet(this, _values)[7],
        __privateGet(this, _values)[8],
        __privateGet(this, _values)[9],
        __privateGet(this, _values)[10],
        __privateGet(this, _values)[11],
        __privateGet(this, _values)[12],
        __privateGet(this, _values)[13],
        __privateGet(this, _values)[14],
        __privateGet(this, _values)[15]
      ];
      for (const element of elements) {
        yield element;
      }
    }
    static add(...params) {
      _Matrix.add = src_default().add([_Matrix, _Matrix], function(matrix1, matrix2) {
        return new _Matrix(
          __privateGet(matrix1, _values)[0] + __privateGet(matrix2, _values)[0],
          __privateGet(matrix1, _values)[1] + __privateGet(matrix2, _values)[1],
          __privateGet(matrix1, _values)[2] + __privateGet(matrix2, _values)[2],
          __privateGet(matrix1, _values)[3] + __privateGet(matrix2, _values)[3],
          __privateGet(matrix1, _values)[4] + __privateGet(matrix2, _values)[4],
          __privateGet(matrix1, _values)[5] + __privateGet(matrix2, _values)[5],
          __privateGet(matrix1, _values)[6] + __privateGet(matrix2, _values)[6],
          __privateGet(matrix1, _values)[7] + __privateGet(matrix2, _values)[7],
          __privateGet(matrix1, _values)[8] + __privateGet(matrix2, _values)[8],
          __privateGet(matrix1, _values)[9] + __privateGet(matrix2, _values)[9],
          __privateGet(matrix1, _values)[10] + __privateGet(matrix2, _values)[10],
          __privateGet(matrix1, _values)[11] + __privateGet(matrix2, _values)[11],
          __privateGet(matrix1, _values)[12] + __privateGet(matrix2, _values)[12],
          __privateGet(matrix1, _values)[13] + __privateGet(matrix2, _values)[13],
          __privateGet(matrix1, _values)[14] + __privateGet(matrix2, _values)[14],
          __privateGet(matrix1, _values)[15] + __privateGet(matrix2, _values)[15]
        );
      }).add([_Matrix, _Matrix, _Matrix], function(matrix1, matrix2, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] + __privateGet(matrix2, _values)[0];
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[1] + __privateGet(matrix2, _values)[1];
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[2] + __privateGet(matrix2, _values)[2];
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[3] + __privateGet(matrix2, _values)[3];
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] + __privateGet(matrix2, _values)[4];
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[5] + __privateGet(matrix2, _values)[5];
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[6] + __privateGet(matrix2, _values)[6];
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[7] + __privateGet(matrix2, _values)[7];
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] + __privateGet(matrix2, _values)[8];
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[9] + __privateGet(matrix2, _values)[9];
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[10] + __privateGet(matrix2, _values)[10];
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[11] + __privateGet(matrix2, _values)[11];
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] + __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[13] + __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[14] + __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[15] + __privateGet(matrix2, _values)[15];
      });
      return _Matrix.add.apply(this, params);
    }
    static createBillboard(...params) {
      _Matrix.createBillboard = src_default().add([Vector3, Vector3, Vector3, [Vector3, null]], function(objectPosition, cameraPosition, cameraUpVector, cameraForwardVector) {
        const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;
        const cx = cameraPosition.x, cy = cameraPosition.y, cz = cameraPosition.z;
        const cux = cameraUpVector.x, cuy = cameraUpVector.y, cuz = cameraUpVector.z;
        let vx = ox - cx;
        let vy = oy - cy;
        let vz = oz - cz;
        const num = vx * vx + vy * vy + vz * vz;
        if (num < 1e-4) {
          if (null === cameraForwardVector) {
            vx = 0;
            vy = 0;
            vz = -1;
          } else {
            vx = -cameraForwardVector.x;
            vy = -cameraForwardVector.y;
            vz = -cameraForwardVector.z;
          }
        } else {
          const invLen = 1 / Math.sqrt(num);
          vx *= invLen;
          vy *= invLen;
          vz *= invLen;
        }
        let v2x = cuy * vz - cuz * vy;
        let v2y = cuz * vx - cux * vz;
        let v2z = cux * vy - cuy * vx;
        const len2 = v2x * v2x + v2y * v2y + v2z * v2z;
        const invLen2 = 1 / Math.sqrt(len2);
        v2x *= invLen2;
        v2y *= invLen2;
        v2z *= invLen2;
        const v3x = vy * v2z - vz * v2y;
        const v3y = vz * v2x - vx * v2z;
        const v3z = vx * v2y - vy * v2x;
        return new _Matrix(
          v2x,
          v2y,
          v2z,
          0,
          v3x,
          v3y,
          v3z,
          0,
          vx,
          vy,
          vz,
          0,
          ox,
          oy,
          oz,
          1
        );
      }).add([Vector3, Vector3, Vector3, [Vector3, null], _Matrix], function(objectPosition, cameraPosition, cameraUpVector, cameraForwardVector, result) {
        const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;
        const cx = cameraPosition.x, cy = cameraPosition.y, cz = cameraPosition.z;
        const cux = cameraUpVector.x, cuy = cameraUpVector.y, cuz = cameraUpVector.z;
        let vx = ox - cx;
        let vy = oy - cy;
        let vz = oz - cz;
        const num = vx * vx + vy * vy + vz * vz;
        if (num < 1e-4) {
          if (null === cameraForwardVector) {
            vx = 0;
            vy = 0;
            vz = -1;
          } else {
            vx = -cameraForwardVector.x;
            vy = -cameraForwardVector.y;
            vz = -cameraForwardVector.z;
          }
        } else {
          const invLen = 1 / Math.sqrt(num);
          vx *= invLen;
          vy *= invLen;
          vz *= invLen;
        }
        let v2x = cuy * vz - cuz * vy;
        let v2y = cuz * vx - cux * vz;
        let v2z = cux * vy - cuy * vx;
        const len2 = v2x * v2x + v2y * v2y + v2z * v2z;
        const invLen2 = 1 / Math.sqrt(len2);
        v2x *= invLen2;
        v2y *= invLen2;
        v2z *= invLen2;
        const v3x = vy * v2z - vz * v2y;
        const v3y = vz * v2x - vx * v2z;
        const v3z = vx * v2y - vy * v2x;
        __privateGet(result, _values)[0] = v2x;
        __privateGet(result, _values)[1] = v2y;
        __privateGet(result, _values)[2] = v2z;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = v3x;
        __privateGet(result, _values)[5] = v3y;
        __privateGet(result, _values)[6] = v3z;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = vx;
        __privateGet(result, _values)[9] = vy;
        __privateGet(result, _values)[10] = vz;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = ox;
        __privateGet(result, _values)[13] = oy;
        __privateGet(result, _values)[14] = oz;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createBillboard.apply(this, params);
    }
    static createConstrainedBillboard(...params) {
      _Matrix.createConstrainedBillboard = src_default().add([Vector3, Vector3, Vector3, [Vector3, null], [Vector3, null]], function(objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector) {
        const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;
        let v2x = ox - cameraPosition.x;
        let v2y = oy - cameraPosition.y;
        let v2z = oz - cameraPosition.z;
        let num2 = v2x * v2x + v2y * v2y + v2z * v2z;
        if (num2 < 1e-4) {
          if (!cameraForwardVector) {
            v2x = 0;
            v2y = 0;
            v2z = -1;
          } else {
            v2x = -cameraForwardVector.x;
            v2y = -cameraForwardVector.y;
            v2z = -cameraForwardVector.z;
          }
        } else {
          const val = 1 / Math.sqrt(num2);
          v2x *= val;
          v2y *= val;
          v2z *= val;
        }
        const v4x = rotateAxis.x;
        const v4y = rotateAxis.y;
        const v4z = rotateAxis.z;
        let num = v4x * v2x + v4y * v2y + v4z * v2z;
        let vx, vy, vz;
        let v3x, v3y, v3z;
        if (Math.abs(num) > 0.9982547) {
          let vec3ForwardX = 0, vec3ForwardY = 0, vec3ForwardZ = -1;
          if (objectForwardVector) {
            vx = objectForwardVector.x;
            vy = objectForwardVector.y;
            vz = objectForwardVector.z;
            num = v4x * vx + v4y * vy + v4z * vz;
            if (Math.abs(num) > 0.9982547) {
              num = v4x * vec3ForwardX + v4y * vec3ForwardY + v4z * vec3ForwardZ;
              if (Math.abs(num) > 0.9982547) {
                vx = 1;
                vy = 0;
                vz = 0;
              } else {
                vx = vec3ForwardX;
                vy = vec3ForwardY;
                vz = vec3ForwardZ;
              }
            }
          } else {
            num = v4x * vec3ForwardX + v4y * vec3ForwardY + v4z * vec3ForwardZ;
            if (Math.abs(num) > 0.9982547) {
              vx = 1;
              vy = 0;
              vz = 0;
            } else {
              vx = vec3ForwardX;
              vy = vec3ForwardY;
              vz = vec3ForwardZ;
            }
          }
          v3x = v4y * vz - v4z * vy;
          v3y = v4z * vx - v4x * vz;
          v3z = v4x * vy - v4y * vx;
          const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
          const invLen3 = 1 / Math.sqrt(len3);
          v3x *= invLen3;
          v3y *= invLen3;
          v3z *= invLen3;
          vx = v3y * v4z - v3z * v4y;
          vy = v3z * v4x - v3x * v4z;
          vz = v3x * v4y - v3y * v4x;
          const len = vx * vx + vy * vy + vz * vz;
          const invLen = 1 / Math.sqrt(len);
          vx *= invLen;
          vy *= invLen;
          vz *= invLen;
        } else {
          v3x = v4y * v2z - v4z * v2y;
          v3y = v4z * v2x - v4x * v2z;
          v3z = v4x * v2y - v4y * v2x;
          const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
          const invLen3 = 1 / Math.sqrt(len3);
          v3x *= invLen3;
          v3y *= invLen3;
          v3z *= invLen3;
          vx = v3y * v4z - v3z * v4y;
          vy = v3z * v4x - v3x * v4z;
          vz = v3x * v4y - v3y * v4x;
          const len = vx * vx + vy * vy + vz * vz;
          const invLen = 1 / Math.sqrt(len);
          vx *= invLen;
          vy *= invLen;
          vz *= invLen;
        }
        return new _Matrix(
          v3x,
          v3y,
          v3z,
          0,
          v4x,
          v4y,
          v4z,
          0,
          vx,
          vy,
          vz,
          0,
          ox,
          oy,
          oz,
          1
        );
      }).add([Vector3, Vector3, Vector3, [Vector3, null], [Vector3, null], _Matrix], function(objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector, result) {
        const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;
        let v2x = ox - cameraPosition.x;
        let v2y = oy - cameraPosition.y;
        let v2z = oz - cameraPosition.z;
        let num2 = v2x * v2x + v2y * v2y + v2z * v2z;
        if (num2 < 1e-4) {
          if (!cameraForwardVector) {
            v2x = 0;
            v2y = 0;
            v2z = -1;
          } else {
            v2x = -cameraForwardVector.x;
            v2y = -cameraForwardVector.y;
            v2z = -cameraForwardVector.z;
          }
        } else {
          const val = 1 / Math.sqrt(num2);
          v2x *= val;
          v2y *= val;
          v2z *= val;
        }
        const v4x = rotateAxis.x;
        const v4y = rotateAxis.y;
        const v4z = rotateAxis.z;
        let num = v4x * v2x + v4y * v2y + v4z * v2z;
        let vx, vy, vz;
        let v3x, v3y, v3z;
        if (Math.abs(num) > 0.9982547) {
          let vec3ForwardX = 0, vec3ForwardY = 0, vec3ForwardZ = -1;
          if (objectForwardVector) {
            vx = objectForwardVector.x;
            vy = objectForwardVector.y;
            vz = objectForwardVector.z;
            num = v4x * vx + v4y * vy + v4z * vz;
            if (Math.abs(num) > 0.9982547) {
              num = v4x * vec3ForwardX + v4y * vec3ForwardY + v4z * vec3ForwardZ;
              if (Math.abs(num) > 0.9982547) {
                vx = 1;
                vy = 0;
                vz = 0;
              } else {
                vx = vec3ForwardX;
                vy = vec3ForwardY;
                vz = vec3ForwardZ;
              }
            }
          } else {
            num = v4x * vec3ForwardX + v4y * vec3ForwardY + v4z * vec3ForwardZ;
            if (Math.abs(num) > 0.9982547) {
              vx = 1;
              vy = 0;
              vz = 0;
            } else {
              vx = vec3ForwardX;
              vy = vec3ForwardY;
              vz = vec3ForwardZ;
            }
          }
          v3x = v4y * vz - v4z * vy;
          v3y = v4z * vx - v4x * vz;
          v3z = v4x * vy - v4y * vx;
          const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
          const invLen3 = 1 / Math.sqrt(len3);
          v3x *= invLen3;
          v3y *= invLen3;
          v3z *= invLen3;
          vx = v3y * v4z - v3z * v4y;
          vy = v3z * v4x - v3x * v4z;
          vz = v3x * v4y - v3y * v4x;
          const len = vx * vx + vy * vy + vz * vz;
          const invLen = 1 / Math.sqrt(len);
          vx *= invLen;
          vy *= invLen;
          vz *= invLen;
        } else {
          v3x = v4y * v2z - v4z * v2y;
          v3y = v4z * v2x - v4x * v2z;
          v3z = v4x * v2y - v4y * v2x;
          const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
          const invLen3 = 1 / Math.sqrt(len3);
          v3x *= invLen3;
          v3y *= invLen3;
          v3z *= invLen3;
          vx = v3y * v4z - v3z * v4y;
          vy = v3z * v4x - v3x * v4z;
          vz = v3x * v4y - v3y * v4x;
          const len = vx * vx + vy * vy + vz * vz;
          const invLen = 1 / Math.sqrt(len);
          vx *= invLen;
          vy *= invLen;
          vz *= invLen;
        }
        __privateGet(result, _values)[0] = v3x;
        __privateGet(result, _values)[1] = v3y;
        __privateGet(result, _values)[2] = v3z;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = v4x;
        __privateGet(result, _values)[5] = v4y;
        __privateGet(result, _values)[6] = v4z;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = vx;
        __privateGet(result, _values)[9] = vy;
        __privateGet(result, _values)[10] = vz;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = ox;
        __privateGet(result, _values)[13] = oy;
        __privateGet(result, _values)[14] = oz;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createConstrainedBillboard.apply(this, params);
    }
    static createFromAxisAngle(...params) {
      _Matrix.createFromAxisAngle = src_default().add([Vector3, Number], function(axis, angle) {
        const axisX = axis.x, axisY = axis.y, axisZ = axis.z;
        const sinAngle = Math.sin(angle), cosAngle = Math.cos(angle);
        const axisXSquare = axisX ** 2, axisYSquare = axisY ** 2, axisZSquare = axisZ ** 2;
        const axisXY = axisX * axisY, axisXZ = axisX * axisZ, axisYZ = axisY * axisZ;
        const a = axisXY - cosAngle * axisXY;
        const b3 = sinAngle * axisZ;
        const c = axisXZ - cosAngle * axisXZ;
        const d2 = sinAngle * axisY;
        const e = axisYZ - cosAngle * axisYZ;
        const f = sinAngle * axisX;
        return new _Matrix(
          axisXSquare + cosAngle * (1 - axisXSquare),
          a + b3,
          c - d2,
          0,
          a - b3,
          axisYSquare + cosAngle * (1 - axisYSquare),
          e + f,
          0,
          c + d2,
          e - f,
          axisZSquare + cosAngle * (1 - axisZSquare),
          0,
          0,
          0,
          0,
          1
        );
      }).add([Vector3, Number, _Matrix], function(axis, angle, result) {
        const axisX = axis.x, axisY = axis.y, axisZ = axis.z;
        const sinAngle = Math.sin(angle), cosAngle = Math.cos(angle);
        const axisXSquare = axisX ** 2, axisYSquare = axisY ** 2, axisZSquare = axisZ ** 2;
        const axisXY = axisX * axisY, axisXZ = axisX * axisZ, axisYZ = axisY * axisZ;
        const a = axisXY - cosAngle * axisXY;
        const b3 = sinAngle * axisZ;
        const c = axisXZ - cosAngle * axisXZ;
        const d2 = sinAngle * axisY;
        const e = axisYZ - cosAngle * axisYZ;
        const f = sinAngle * axisX;
        __privateGet(result, _values)[0] = axisXSquare + cosAngle * (1 - axisXSquare);
        __privateGet(result, _values)[1] = a + b3;
        __privateGet(result, _values)[2] = c - d2;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = a - b3;
        __privateGet(result, _values)[5] = axisYSquare + cosAngle * (1 - axisYSquare);
        __privateGet(result, _values)[6] = e + f;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = c + d2;
        __privateGet(result, _values)[9] = e - f;
        __privateGet(result, _values)[10] = axisZSquare + cosAngle * (1 - axisZSquare);
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createFromAxisAngle.apply(this, params);
    }
    static createFromQuaternion(...params) {
      _Matrix.createFromQuaternion = src_default().add([Quaternion], function(quaternion) {
        const x3 = quaternion.x, y = quaternion.y, z = quaternion.z, w2 = quaternion.w;
        const xx = x3 ** 2, yy = y ** 2, zz = z ** 2;
        const xy = x3 * y, xz = x3 * z, yz = y * z;
        const wx = w2 * x3, wy = w2 * y, wz = w2 * z;
        return new _Matrix(
          1 - 2 * (yy + zz),
          2 * (xy + wz),
          2 * (xz - wy),
          0,
          2 * (xy - wz),
          1 - 2 * (zz + xx),
          2 * (yz + wx),
          0,
          2 * (xz + wy),
          2 * (yz - wx),
          1 - 2 * (yy + xx),
          0,
          0,
          0,
          0,
          1
        );
      }).add([Quaternion, _Matrix], function(quaternion, result) {
        const x3 = quaternion.x, y = quaternion.y, z = quaternion.z, w2 = quaternion.w;
        const xx = x3 ** 2, yy = y ** 2, zz = z ** 2;
        const xy = x3 * y, xz = x3 * z, yz = y * z;
        const wx = w2 * x3, wy = w2 * y, wz = w2 * z;
        __privateGet(result, _values)[0] = 1 - 2 * (yy + zz);
        __privateGet(result, _values)[1] = 2 * (xy + wz);
        __privateGet(result, _values)[2] = 2 * (xz - wy);
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 2 * (xy - wz);
        __privateGet(result, _values)[5] = 1 - 2 * (zz + xx);
        __privateGet(result, _values)[6] = 2 * (yz + wx);
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 2 * (xz + wy);
        __privateGet(result, _values)[9] = 2 * (yz - wx);
        __privateGet(result, _values)[10] = 1 - 2 * (yy + xx);
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createFromQuaternion.apply(this, params);
    }
    static createFromYawPitchRoll(...params) {
      _Matrix.createFromYawPitchRoll = src_default().add([Number, Number, Number], function(yaw, pitch, roll) {
        const halfRoll = roll * 0.5;
        const halfPitch = pitch * 0.5;
        const halfYaw = yaw * 0.5;
        const sinRoll = Math.sin(halfRoll);
        const cosRoll = Math.cos(halfRoll);
        const sinPitch = Math.sin(halfPitch);
        const cosPitch = Math.cos(halfPitch);
        const sinYaw = Math.sin(halfYaw);
        const cosYaw = Math.cos(halfYaw);
        const qx = cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll;
        const qy = sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll;
        const qz = cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll;
        const qw = cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll;
        const xx = qx * qx;
        const yy = qy * qy;
        const zz = qz * qz;
        const xy = qx * qy;
        const xz = qx * qz;
        const yz = qy * qz;
        const wx = qw * qx;
        const wy = qw * qy;
        const wz = qw * qz;
        return new _Matrix(
          1 - 2 * (yy + zz),
          2 * (xy + wz),
          2 * (xz - wy),
          0,
          2 * (xy - wz),
          1 - 2 * (zz + xx),
          2 * (yz + wx),
          0,
          2 * (xz + wy),
          2 * (yz - wx),
          1 - 2 * (yy + xx),
          0,
          0,
          0,
          0,
          1
        );
      }).add([Number, Number, Number, _Matrix], function(yaw, pitch, roll, result) {
        const halfRoll = roll * 0.5;
        const halfPitch = pitch * 0.5;
        const halfYaw = yaw * 0.5;
        const sinRoll = Math.sin(halfRoll);
        const cosRoll = Math.cos(halfRoll);
        const sinPitch = Math.sin(halfPitch);
        const cosPitch = Math.cos(halfPitch);
        const sinYaw = Math.sin(halfYaw);
        const cosYaw = Math.cos(halfYaw);
        const qx = cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll;
        const qy = sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll;
        const qz = cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll;
        const qw = cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll;
        const xx = qx * qx;
        const yy = qy * qy;
        const zz = qz * qz;
        const xy = qx * qy;
        const xz = qx * qz;
        const yz = qy * qz;
        const wx = qw * qx;
        const wy = qw * qy;
        const wz = qw * qz;
        __privateGet(result, _values)[0] = 1 - 2 * (yy + zz);
        __privateGet(result, _values)[1] = 2 * (xy + wz);
        __privateGet(result, _values)[2] = 2 * (xz - wy);
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 2 * (xy - wz);
        __privateGet(result, _values)[5] = 1 - 2 * (zz + xx);
        __privateGet(result, _values)[6] = 2 * (yz + wx);
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 2 * (xz + wy);
        __privateGet(result, _values)[9] = 2 * (yz - wx);
        __privateGet(result, _values)[10] = 1 - 2 * (yy + xx);
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createFromYawPitchRoll.apply(this, params);
    }
    static createLookAt(...params) {
      _Matrix.createLookAt = src_default().add([Vector3, Vector3, Vector3], function(cameraPosition, cameraTarget, cameraUpVector) {
        const vzx = cameraPosition.x - cameraTarget.x;
        const vzy = cameraPosition.y - cameraTarget.y;
        const vzz = cameraPosition.z - cameraTarget.z;
        let len = Math.sqrt(vzx * vzx + vzy * vzy + vzz * vzz);
        const invLen = 1 / len;
        const vzx_n = vzx * invLen;
        const vzy_n = vzy * invLen;
        const vzz_n = vzz * invLen;
        const vxx = cameraUpVector.y * vzz_n - cameraUpVector.z * vzy_n;
        const vxy = cameraUpVector.z * vzx_n - cameraUpVector.x * vzz_n;
        const vxz = cameraUpVector.x * vzy_n - cameraUpVector.y * vzx_n;
        len = Math.sqrt(vxx * vxx + vxy * vxy + vxz * vxz);
        const invLen2 = 1 / len;
        const vxx_n = vxx * invLen2;
        const vxy_n = vxy * invLen2;
        const vxz_n = vxz * invLen2;
        const vyx = vzy_n * vxz_n - vzz_n * vxy_n;
        const vyy = vzz_n * vxx_n - vzx_n * vxz_n;
        const vyz = vzx_n * vxy_n - vzy_n * vxx_n;
        return new _Matrix(
          vxx_n,
          vyx,
          vzx_n,
          0,
          vxy_n,
          vyy,
          vzy_n,
          0,
          vxz_n,
          vyz,
          vzz_n,
          0,
          -(vxx_n * cameraPosition.x + vxy_n * cameraPosition.y + vxz_n * cameraPosition.z),
          -(vyx * cameraPosition.x + vyy * cameraPosition.y + vyz * cameraPosition.z),
          -(vzx_n * cameraPosition.x + vzy_n * cameraPosition.y + vzz_n * cameraPosition.z),
          1
        );
      }).add([Vector3, Vector3, Vector3, _Matrix], function(cameraPosition, cameraTarget, cameraUpVector, result) {
        const vzx = cameraPosition.x - cameraTarget.x;
        const vzy = cameraPosition.y - cameraTarget.y;
        const vzz = cameraPosition.z - cameraTarget.z;
        let len = Math.sqrt(vzx * vzx + vzy * vzy + vzz * vzz);
        const invLen = 1 / len;
        const vzx_n = vzx * invLen;
        const vzy_n = vzy * invLen;
        const vzz_n = vzz * invLen;
        const vxx = cameraUpVector.y * vzz_n - cameraUpVector.z * vzy_n;
        const vxy = cameraUpVector.z * vzx_n - cameraUpVector.x * vzz_n;
        const vxz = cameraUpVector.x * vzy_n - cameraUpVector.y * vzx_n;
        len = Math.sqrt(vxx * vxx + vxy * vxy + vxz * vxz);
        const invLen2 = 1 / len;
        const vxx_n = vxx * invLen2;
        const vxy_n = vxy * invLen2;
        const vxz_n = vxz * invLen2;
        const vyx = vzy_n * vxz_n - vzz_n * vxy_n;
        const vyy = vzz_n * vxx_n - vzx_n * vxz_n;
        const vyz = vzx_n * vxy_n - vzy_n * vxx_n;
        __privateGet(result, _values)[0] = vxx_n;
        __privateGet(result, _values)[1] = vyx;
        __privateGet(result, _values)[2] = vzx_n;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = vxy_n;
        __privateGet(result, _values)[5] = vyy;
        __privateGet(result, _values)[6] = vzy_n;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = vxz_n;
        __privateGet(result, _values)[9] = vyz;
        __privateGet(result, _values)[10] = vzz_n;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = -(vxx_n * cameraPosition.x + vxy_n * cameraPosition.y + vxz_n * cameraPosition.z);
        __privateGet(result, _values)[13] = -(vyx * cameraPosition.x + vyy * cameraPosition.y + vyz * cameraPosition.z);
        __privateGet(result, _values)[14] = -(vzx_n * cameraPosition.x + vzy_n * cameraPosition.y + vzz_n * cameraPosition.z);
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createLookAt.apply(this, params);
    }
    static createOrthographic(...params) {
      _Matrix.createOrthographic = src_default().add([Number, Number, Number, Number], function(width, height, zNearPlane, zFarPlane) {
        const result = new _Matrix();
        const invWidth = 2 / width;
        const invHeight = 2 / height;
        const invDepth = 1 / (zNearPlane - zFarPlane);
        const zNearRatio = zNearPlane / (zNearPlane - zFarPlane);
        __privateGet(result, _values)[0] = invWidth;
        __privateGet(result, _values)[1] = __privateGet(result, _values)[2] = __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[5] = invHeight;
        __privateGet(result, _values)[4] = __privateGet(result, _values)[6] = __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[10] = invDepth;
        __privateGet(result, _values)[8] = __privateGet(result, _values)[9] = __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = zNearRatio;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Number, Number, Number, Number, _Matrix], function(width, height, zNearPlane, zFarPlane, result) {
        const invWidth = 2 / width;
        const invHeight = 2 / height;
        const invDepth = 1 / (zNearPlane - zFarPlane);
        const zNearRatio = zNearPlane / (zNearPlane - zFarPlane);
        __privateGet(result, _values)[0] = invWidth;
        __privateGet(result, _values)[1] = __privateGet(result, _values)[2] = __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[5] = invHeight;
        __privateGet(result, _values)[4] = __privateGet(result, _values)[6] = __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[10] = invDepth;
        __privateGet(result, _values)[8] = __privateGet(result, _values)[9] = __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = zNearRatio;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createOrthographic.apply(this, params);
    }
    static createOrthographicOffCenter(...params) {
      _Matrix.createOrthographicOffCenter = src_default().add([Number, Number, Number, Number, Number, Number], function(left, right, bottom, top, zNearPlane, zFarPlane) {
        return new _Matrix(
          2 / (right - left),
          0,
          0,
          0,
          0,
          2 / (top - bottom),
          0,
          0,
          0,
          0,
          1 / (zNearPlane - zFarPlane),
          0,
          (left + right) / (left - right),
          (top + bottom) / (bottom - top),
          zNearPlane / (zNearPlane - zFarPlane),
          1
        );
      }).add([Number, Number, Number, Number, Number, Number, _Matrix], function(left, right, bottom, top, zNearPlane, zFarPlane, result) {
        __privateGet(result, _values)[0] = 2 / (right - left);
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = 2 / (top - bottom);
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = 1 / (zNearPlane - zFarPlane);
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = (left + right) / (left - right);
        __privateGet(result, _values)[13] = (top + bottom) / (bottom - top);
        __privateGet(result, _values)[14] = zNearPlane / (zNearPlane - zFarPlane);
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createOrthographicOffCenter.apply(this, params);
    }
    static createPerspective(...params) {
      _Matrix.createPerspective = src_default().add([Number, Number, Number, Number], function(width, height, nearPlaneDistance, farPlaneDistance) {
        if (nearPlaneDistance <= 0) {
          throw new RangeError("nearPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (farPlaneDistance <= 0) {
          throw new RangeError("farPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (nearPlaneDistance >= farPlaneDistance) {
          throw new RangeError("nearPlaneDistance \u5927\u4E8E\u6216\u7B49\u4E8E farPlaneDistance\u3002");
        }
        const result = new _Matrix();
        __privateGet(result, _values)[0] = 2 * nearPlaneDistance / width;
        __privateGet(result, _values)[5] = 2 * nearPlaneDistance / height;
        __privateGet(result, _values)[10] = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        __privateGet(result, _values)[11] = -1;
        __privateGet(result, _values)[14] = nearPlaneDistance * farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        return result;
      }).add([Number, Number, Number, Number, _Matrix], function(width, height, nearPlaneDistance, farPlaneDistance, result) {
        if (nearPlaneDistance <= 0) {
          throw new RangeError("nearPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (farPlaneDistance <= 0) {
          throw new RangeError("farPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (nearPlaneDistance >= farPlaneDistance) {
          throw new RangeError("nearPlaneDistance \u5927\u4E8E\u6216\u7B49\u4E8E farPlaneDistance\u3002");
        }
        __privateGet(result, _values)[0] = 2 * nearPlaneDistance / width;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = 2 * nearPlaneDistance / height;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        __privateGet(result, _values)[11] = -1;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = nearPlaneDistance * farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        __privateGet(result, _values)[15] = 0;
      });
      return _Matrix.createPerspective.apply(this, params);
    }
    static createPerspectiveFieldOfView(...params) {
      _Matrix.createPerspectiveFieldOfView = src_default().add([Number, Number, Number, Number], function(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
        if (fieldOfView <= 0 || fieldOfView >= MathHelper.pi) {
          throw new RangeError("fieldOfView \u5C0F\u4E8E\u6216\u7B49\u4E8E 0 \u6216\u5927\u4E8E\u6216\u7B49\u4E8E PI\u3002");
        }
        if (nearPlaneDistance <= 0) {
          throw new RangeError("nearPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (farPlaneDistance <= 0) {
          throw new RangeError("farPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (nearPlaneDistance >= farPlaneDistance) {
          throw new RangeError("nearPlaneDistance \u5927\u4E8E\u6216\u7B49\u4E8E farPlaneDistance\u3002");
        }
        const result = new _Matrix();
        const halfFovTan = Math.tan(fieldOfView * 0.5);
        const num = 1 / halfFovTan;
        const num9 = num / aspectRatio;
        const nearFarDiff = nearPlaneDistance - farPlaneDistance;
        __privateGet(result, _values)[0] = num9;
        __privateGet(result, _values)[5] = num;
        __privateGet(result, _values)[10] = farPlaneDistance / nearFarDiff;
        __privateGet(result, _values)[11] = -1;
        __privateGet(result, _values)[14] = nearPlaneDistance * farPlaneDistance / nearFarDiff;
        return result;
      }).add([Number, Number, Number, Number, _Matrix], function(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance, result) {
        if (fieldOfView <= 0 || fieldOfView >= MathHelper.pi) {
          throw new RangeError("fieldOfView \u5C0F\u4E8E\u6216\u7B49\u4E8E 0 \u6216\u5927\u4E8E\u6216\u7B49\u4E8E PI\u3002");
        }
        if (nearPlaneDistance <= 0) {
          throw new RangeError("nearPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (farPlaneDistance <= 0) {
          throw new RangeError("farPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (nearPlaneDistance >= farPlaneDistance) {
          throw new RangeError("nearPlaneDistance \u5927\u4E8E\u6216\u7B49\u4E8E farPlaneDistance\u3002");
        }
        const halfFovTan = Math.tan(fieldOfView * 0.5);
        const num = 1 / halfFovTan;
        const num9 = num / aspectRatio;
        const nearFarDiff = nearPlaneDistance - farPlaneDistance;
        __privateGet(result, _values)[0] = num9;
        ;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = num;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = farPlaneDistance / nearFarDiff;
        __privateGet(result, _values)[11] = -1;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = nearPlaneDistance * farPlaneDistance / nearFarDiff;
        __privateGet(result, _values)[15] = 0;
      });
      return _Matrix.createPerspectiveFieldOfView.apply(this, params);
    }
    static createPerspectiveOffCenter(...params) {
      _Matrix.createPerspectiveOffCenter = src_default().add([Number, Number, Number, Number, Number, Number], function(left, right, bottom, top, nearPlaneDistance, farPlaneDistance) {
        if (nearPlaneDistance <= 0) {
          throw new RangeError("nearPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (farPlaneDistance <= 0) {
          throw new RangeError("farPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (nearPlaneDistance >= farPlaneDistance) {
          throw new RangeError("nearPlaneDistance \u5927\u4E8E\u6216\u7B49\u4E8E farPlaneDistance\u3002");
        }
        const result = new _Matrix();
        const near2 = 2 * nearPlaneDistance;
        const rightLeft = right - left;
        const topBottom = top - bottom;
        const nearFar = nearPlaneDistance - farPlaneDistance;
        __privateGet(result, _values)[0] = near2 / rightLeft;
        __privateGet(result, _values)[5] = near2 / topBottom;
        __privateGet(result, _values)[8] = (left + right) / rightLeft;
        __privateGet(result, _values)[9] = (top + bottom) / topBottom;
        __privateGet(result, _values)[10] = farPlaneDistance / nearFar;
        __privateGet(result, _values)[11] = -1;
        __privateGet(result, _values)[14] = nearPlaneDistance * farPlaneDistance / nearFar;
        return result;
      }).add([Number, Number, Number, Number, Number, Number, _Matrix], function(left, right, bottom, top, nearPlaneDistance, farPlaneDistance, result) {
        if (nearPlaneDistance <= 0) {
          throw new RangeError("nearPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (farPlaneDistance <= 0) {
          throw new RangeError("farPlaneDistance \u5C0F\u4E8E\u6216\u7B49\u4E8E 0\u3002");
        }
        if (nearPlaneDistance >= farPlaneDistance) {
          throw new RangeError("nearPlaneDistance \u5927\u4E8E\u6216\u7B49\u4E8E farPlaneDistance\u3002");
        }
        const near2 = 2 * nearPlaneDistance;
        const rightLeft = right - left;
        const topBottom = top - bottom;
        const nearFar = nearPlaneDistance - farPlaneDistance;
        __privateGet(result, _values)[0] = near2 / rightLeft;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = near2 / topBottom;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = (left + right) / rightLeft;
        __privateGet(result, _values)[9] = (top + bottom) / topBottom;
        __privateGet(result, _values)[10] = farPlaneDistance / nearFar;
        __privateGet(result, _values)[11] = -1;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = nearPlaneDistance * farPlaneDistance / nearFar;
        __privateGet(result, _values)[15] = 0;
      });
      return _Matrix.createPerspectiveOffCenter.apply(this, params);
    }
    static createReflection(...params) {
      _Matrix.createReflection = src_default().add([Plane], function(value) {
        const normal = value.normal;
        const x3 = normal.x;
        const y = normal.y;
        const z = normal.z;
        const d2 = value.d;
        const lenSq = x3 * x3 + y * y + z * z;
        const invLen = 1 / Math.sqrt(lenSq);
        const nx = x3 * invLen;
        const ny = y * invLen;
        const nz = z * invLen;
        const nd = d2 * invLen;
        const num3 = -2 * nx;
        const num2 = -2 * ny;
        const num = -2 * nz;
        return new _Matrix(
          num3 * nx + 1,
          num2 * nx,
          num * nx,
          0,
          num3 * ny,
          num2 * ny + 1,
          num * ny,
          0,
          num3 * nz,
          num2 * nz,
          num * nz + 1,
          0,
          num3 * nd,
          num2 * nd,
          num * nd,
          1
        );
      }).add([Plane, _Matrix], function(value, result) {
        const normal = value.normal;
        const x3 = normal.x;
        const y = normal.y;
        const z = normal.z;
        const d2 = value.d;
        const lenSq = x3 * x3 + y * y + z * z;
        const invLen = 1 / Math.sqrt(lenSq);
        const nx = x3 * invLen;
        const ny = y * invLen;
        const nz = z * invLen;
        const nd = d2 * invLen;
        const num3 = -2 * nx;
        const num2 = -2 * ny;
        const num = -2 * nz;
        __privateGet(result, _values)[0] = num3 * nx + 1;
        __privateGet(result, _values)[1] = num2 * nx;
        __privateGet(result, _values)[2] = num * nx;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = num3 * ny;
        __privateGet(result, _values)[5] = num2 * ny + 1;
        __privateGet(result, _values)[6] = num * ny;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = num3 * nz;
        __privateGet(result, _values)[9] = num2 * nz;
        __privateGet(result, _values)[10] = num * nz + 1;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = num3 * nd;
        __privateGet(result, _values)[13] = num2 * nd;
        __privateGet(result, _values)[14] = num * nd;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createReflection.apply(this, params);
    }
    static createRotationX(...params) {
      _Matrix.createRotationX = src_default().add([Number], function(radians) {
        const result = _Matrix.identity;
        const val1 = Math.cos(radians);
        const val2 = Math.sin(radians);
        __privateGet(result, _values)[5] = val1;
        __privateGet(result, _values)[6] = val2;
        __privateGet(result, _values)[9] = -val2;
        __privateGet(result, _values)[10] = val1;
        return result;
      }).add([Number, _Matrix], function(radians, result) {
        const val1 = Math.cos(radians);
        const val2 = Math.sin(radians);
        __privateGet(result, _values)[0] = 1;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = val1;
        __privateGet(result, _values)[6] = val2;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = -val2;
        __privateGet(result, _values)[10] = val1;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createRotationX.apply(this, params);
    }
    static createRotationY(...params) {
      _Matrix.createRotationY = src_default().add([Number], function(radians) {
        const result = _Matrix.identity;
        const val1 = Math.cos(radians);
        const val2 = Math.sin(radians);
        __privateGet(result, _values)[0] = val1;
        __privateGet(result, _values)[2] = -val2;
        __privateGet(result, _values)[8] = val2;
        __privateGet(result, _values)[10] = val1;
        return result;
      }).add([Number, _Matrix], function(radians, result) {
        const val1 = Math.cos(radians);
        const val2 = Math.sin(radians);
        __privateGet(result, _values)[0] = val1;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = -val2;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = 1;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = val2;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = val1;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createRotationY.apply(this, params);
    }
    static createRotationZ(...params) {
      _Matrix.createRotationZ = src_default().add([Number], function(radians) {
        const result = _Matrix.identity;
        const val1 = Math.cos(radians);
        const val2 = Math.sin(radians);
        __privateGet(result, _values)[0] = val1;
        __privateGet(result, _values)[1] = val2;
        __privateGet(result, _values)[4] = -val2;
        __privateGet(result, _values)[5] = val1;
        return result;
      }).add([Number, _Matrix], function(radians, result) {
        const val1 = Math.cos(radians);
        const val2 = Math.sin(radians);
        __privateGet(result, _values)[0] = val1;
        __privateGet(result, _values)[1] = val2;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = -val2;
        __privateGet(result, _values)[5] = val1;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = 1;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createRotationZ.apply(this, params);
    }
    static createScale(...params) {
      _Matrix.createScale = src_default().add([Number], function(scale) {
        const result = new _Matrix();
        __privateGet(result, _values)[0] = scale;
        __privateGet(result, _values)[5] = scale;
        __privateGet(result, _values)[10] = scale;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Number, _Matrix], function(scale, result) {
        __privateGet(result, _values)[0] = scale;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = scale;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = scale;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      }).add([Number, Number, Number], function(xScale, yScale, zScale) {
        const result = new _Matrix();
        __privateGet(result, _values)[0] = xScale;
        __privateGet(result, _values)[5] = yScale;
        __privateGet(result, _values)[10] = zScale;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Number, Number, Number, _Matrix], function(xScale, yScale, zScale, result) {
        __privateGet(result, _values)[0] = xScale;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = yScale;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = zScale;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      }).add([Vector3], function(scales) {
        const result = new _Matrix();
        __privateGet(result, _values)[0] = scales.x;
        __privateGet(result, _values)[5] = scales.y;
        __privateGet(result, _values)[10] = scales.z;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Vector3, _Matrix], function(scales, result) {
        __privateGet(result, _values)[0] = scales.x;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = scales.y;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = scales.z;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = 0;
        __privateGet(result, _values)[13] = 0;
        __privateGet(result, _values)[14] = 0;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createScale.apply(this, params);
    }
    static createShadow(...params) {
      _Matrix.createShadow = src_default().add([Vector3, Plane], function(lightDirection, plane) {
        const ldx = lightDirection.x, ldy = lightDirection.y, ldz = lightDirection.z;
        const planeNormal = plane.normal;
        const dot = Vector3.dot(planeNormal, lightDirection);
        const x3 = -planeNormal.x, y = -planeNormal.y, z = -planeNormal.z;
        const d2 = -plane.d;
        const result = new _Matrix();
        __privateGet(result, _values)[0] = x3 * ldx + dot;
        __privateGet(result, _values)[1] = x3 * ldy;
        __privateGet(result, _values)[2] = x3 * ldz;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = y * ldx;
        __privateGet(result, _values)[5] = y * ldy + dot;
        __privateGet(result, _values)[6] = y * ldz;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = z * ldx;
        __privateGet(result, _values)[9] = z * ldy;
        __privateGet(result, _values)[10] = z * ldz + dot;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = d2 * ldx;
        __privateGet(result, _values)[13] = d2 * ldy;
        __privateGet(result, _values)[14] = d2 * ldz;
        __privateGet(result, _values)[15] = dot;
        return result;
      }).add([Vector3, Plane, _Matrix], function(lightDirection, plane, result) {
        const ldx = lightDirection.x, ldy = lightDirection.y, ldz = lightDirection.z;
        const planeNormal = plane.normal;
        const dot = Vector3.dot(planeNormal, lightDirection);
        const x3 = -planeNormal.x, y = -planeNormal.y, z = -planeNormal.z;
        const d2 = -plane.d;
        __privateGet(result, _values)[0] = x3 * ldx + dot;
        __privateGet(result, _values)[1] = x3 * ldy;
        __privateGet(result, _values)[2] = x3 * ldz;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = y * ldx;
        __privateGet(result, _values)[5] = y * ldy + dot;
        __privateGet(result, _values)[6] = y * ldz;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = z * ldx;
        __privateGet(result, _values)[9] = z * ldy;
        __privateGet(result, _values)[10] = z * ldz + dot;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = d2 * ldx;
        __privateGet(result, _values)[13] = d2 * ldy;
        __privateGet(result, _values)[14] = d2 * ldz;
        __privateGet(result, _values)[15] = dot;
      });
      return _Matrix.createShadow.apply(this, params);
    }
    static createTranslation(...params) {
      _Matrix.createTranslation = src_default().add([Number, Number, Number], function(xPosition, yPosition, zPosition) {
        const result = new _Matrix();
        __privateGet(result, _values)[0] = 1;
        __privateGet(result, _values)[5] = 1;
        __privateGet(result, _values)[10] = 1;
        __privateGet(result, _values)[12] = xPosition;
        __privateGet(result, _values)[13] = yPosition;
        __privateGet(result, _values)[14] = zPosition;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Number, Number, Number, _Matrix], function(xPosition, yPosition, zPosition, result) {
        __privateGet(result, _values)[0] = 1;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = 1;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = 1;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = xPosition;
        __privateGet(result, _values)[13] = yPosition;
        __privateGet(result, _values)[14] = zPosition;
        __privateGet(result, _values)[15] = 1;
      }).add([Vector3], function(position) {
        const result = new _Matrix();
        __privateGet(result, _values)[0] = 1;
        __privateGet(result, _values)[5] = 1;
        __privateGet(result, _values)[10] = 1;
        __privateGet(result, _values)[12] = position.x;
        __privateGet(result, _values)[13] = position.y;
        __privateGet(result, _values)[14] = position.z;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Vector3, _Matrix], function(position, result) {
        __privateGet(result, _values)[0] = 1;
        __privateGet(result, _values)[1] = 0;
        __privateGet(result, _values)[2] = 0;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = 0;
        __privateGet(result, _values)[5] = 1;
        __privateGet(result, _values)[6] = 0;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = 0;
        __privateGet(result, _values)[9] = 0;
        __privateGet(result, _values)[10] = 1;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = position.x;
        __privateGet(result, _values)[13] = position.y;
        __privateGet(result, _values)[14] = position.z;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createTranslation.apply(this, params);
    }
    static createWorld(...params) {
      _Matrix.createWorld = src_default().add([Vector3, Vector3, Vector3], function(position, forward, up) {
        const x3 = forward.x;
        const y = forward.y;
        const z = forward.z;
        let len = Math.sqrt(x3 * x3 + y * y + z * z);
        const invLen = 1 / len;
        const zx = x3 * invLen;
        const zy = y * invLen;
        const zz = z * invLen;
        const x_x = zy * up.z - zz * up.y;
        const x_y = zz * up.x - zx * up.z;
        const x_z = zx * up.y - zy * up.x;
        len = Math.sqrt(x_x * x_x + x_y * x_y + x_z * x_z);
        const invLen2 = 1 / len;
        const xx = x_x * invLen2;
        const xy = x_y * invLen2;
        const xz = x_z * invLen2;
        const yx = xy * zz - xz * zy;
        const yy = xz * zx - xx * zz;
        const yz = xx * zy - xy * zx;
        const result = new _Matrix();
        __privateGet(result, _values)[0] = xx;
        __privateGet(result, _values)[1] = xy;
        __privateGet(result, _values)[2] = xz;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = yx;
        __privateGet(result, _values)[5] = yy;
        __privateGet(result, _values)[6] = yz;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = -zx;
        __privateGet(result, _values)[9] = -zy;
        __privateGet(result, _values)[10] = -zz;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = position.x;
        __privateGet(result, _values)[13] = position.y;
        __privateGet(result, _values)[14] = position.z;
        __privateGet(result, _values)[15] = 1;
        return result;
      }).add([Vector3, Vector3, Vector3, _Matrix], function(position, forward, up, result) {
        const x3 = forward.x;
        const y = forward.y;
        const z = forward.z;
        let len = Math.sqrt(x3 * x3 + y * y + z * z);
        const invLen = 1 / len;
        const zx = x3 * invLen;
        const zy = y * invLen;
        const zz = z * invLen;
        const x_x = zy * up.z - zz * up.y;
        const x_y = zz * up.x - zx * up.z;
        const x_z = zx * up.y - zy * up.x;
        len = Math.sqrt(x_x * x_x + x_y * x_y + x_z * x_z);
        const invLen2 = 1 / len;
        const xx = x_x * invLen2;
        const xy = x_y * invLen2;
        const xz = x_z * invLen2;
        const yx = xy * zz - xz * zy;
        const yy = xz * zx - xx * zz;
        const yz = xx * zy - xy * zx;
        __privateGet(result, _values)[0] = xx;
        __privateGet(result, _values)[1] = xy;
        __privateGet(result, _values)[2] = xz;
        __privateGet(result, _values)[3] = 0;
        __privateGet(result, _values)[4] = yx;
        __privateGet(result, _values)[5] = yy;
        __privateGet(result, _values)[6] = yz;
        __privateGet(result, _values)[7] = 0;
        __privateGet(result, _values)[8] = -zx;
        __privateGet(result, _values)[9] = -zy;
        __privateGet(result, _values)[10] = -zz;
        __privateGet(result, _values)[11] = 0;
        __privateGet(result, _values)[12] = position.x;
        __privateGet(result, _values)[13] = position.y;
        __privateGet(result, _values)[14] = position.z;
        __privateGet(result, _values)[15] = 1;
      });
      return _Matrix.createWorld.apply(this, params);
    }
    static divide(...params) {
      _Matrix.divide = src_default().add([_Matrix, Number], function(matrix1, divider) {
        const num = 1 / divider;
        return new _Matrix(
          __privateGet(matrix1, _values)[0] * num,
          __privateGet(matrix1, _values)[1] * num,
          __privateGet(matrix1, _values)[2] * num,
          __privateGet(matrix1, _values)[3] * num,
          __privateGet(matrix1, _values)[4] * num,
          __privateGet(matrix1, _values)[5] * num,
          __privateGet(matrix1, _values)[6] * num,
          __privateGet(matrix1, _values)[7] * num,
          __privateGet(matrix1, _values)[8] * num,
          __privateGet(matrix1, _values)[9] * num,
          __privateGet(matrix1, _values)[10] * num,
          __privateGet(matrix1, _values)[11] * num,
          __privateGet(matrix1, _values)[12] * num,
          __privateGet(matrix1, _values)[13] * num,
          __privateGet(matrix1, _values)[14] * num,
          __privateGet(matrix1, _values)[15] * num
        );
      }).add([_Matrix, Number, _Matrix], function(matrix1, divider, result) {
        const num = 1 / divider;
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] * num;
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[1] * num;
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[2] * num;
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[3] * num;
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] * num;
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[5] * num;
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[6] * num;
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[7] * num;
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] * num;
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[9] * num;
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[10] * num;
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[11] * num;
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] * num;
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[13] * num;
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[14] * num;
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[15] * num;
      }).add([_Matrix, _Matrix], function(matrix1, matrix2) {
        return new _Matrix(
          __privateGet(matrix1, _values)[0] / __privateGet(matrix2, _values)[0],
          __privateGet(matrix1, _values)[1] / __privateGet(matrix2, _values)[1],
          __privateGet(matrix1, _values)[2] / __privateGet(matrix2, _values)[2],
          __privateGet(matrix1, _values)[3] / __privateGet(matrix2, _values)[3],
          __privateGet(matrix1, _values)[4] / __privateGet(matrix2, _values)[4],
          __privateGet(matrix1, _values)[5] / __privateGet(matrix2, _values)[5],
          __privateGet(matrix1, _values)[6] / __privateGet(matrix2, _values)[6],
          __privateGet(matrix1, _values)[7] / __privateGet(matrix2, _values)[7],
          __privateGet(matrix1, _values)[8] / __privateGet(matrix2, _values)[8],
          __privateGet(matrix1, _values)[9] / __privateGet(matrix2, _values)[9],
          __privateGet(matrix1, _values)[10] / __privateGet(matrix2, _values)[10],
          __privateGet(matrix1, _values)[11] / __privateGet(matrix2, _values)[11],
          __privateGet(matrix1, _values)[12] / __privateGet(matrix2, _values)[12],
          __privateGet(matrix1, _values)[13] / __privateGet(matrix2, _values)[13],
          __privateGet(matrix1, _values)[14] / __privateGet(matrix2, _values)[14],
          __privateGet(matrix1, _values)[15] / __privateGet(matrix2, _values)[15]
        );
      }).add([_Matrix, _Matrix, _Matrix], function(matrix1, matrix2, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] / __privateGet(matrix2, _values)[0];
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[1] / __privateGet(matrix2, _values)[1];
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[2] / __privateGet(matrix2, _values)[2];
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[3] / __privateGet(matrix2, _values)[3];
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] / __privateGet(matrix2, _values)[4];
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[5] / __privateGet(matrix2, _values)[5];
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[6] / __privateGet(matrix2, _values)[6];
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[7] / __privateGet(matrix2, _values)[7];
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] / __privateGet(matrix2, _values)[8];
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[9] / __privateGet(matrix2, _values)[9];
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[10] / __privateGet(matrix2, _values)[10];
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[11] / __privateGet(matrix2, _values)[11];
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] / __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[13] / __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[14] / __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[15] / __privateGet(matrix2, _values)[15];
      });
      return _Matrix.divide.apply(this, params);
    }
    static invert(...params) {
      _Matrix.invert = src_default().add([_Matrix], function(matrix) {
        const m11 = __privateGet(matrix, _values)[0], m12 = __privateGet(matrix, _values)[1], m13 = __privateGet(matrix, _values)[2], m14 = __privateGet(matrix, _values)[3];
        const m21 = __privateGet(matrix, _values)[4], m22 = __privateGet(matrix, _values)[5], m23 = __privateGet(matrix, _values)[6], m24 = __privateGet(matrix, _values)[7];
        const m31 = __privateGet(matrix, _values)[8], m32 = __privateGet(matrix, _values)[9], m33 = __privateGet(matrix, _values)[10], m34 = __privateGet(matrix, _values)[11];
        const m41 = __privateGet(matrix, _values)[12], m42 = __privateGet(matrix, _values)[13], m43 = __privateGet(matrix, _values)[14], m44 = __privateGet(matrix, _values)[15];
        const result = new _Matrix();
        const minor33_44 = m33 * m44 - m34 * m43;
        const minor32_44 = m32 * m44 - m34 * m42;
        const minor32_43 = m32 * m43 - m33 * m42;
        const minor31_44 = m31 * m44 - m34 * m41;
        const minor31_43 = m31 * m43 - m33 * m41;
        const minor31_42 = m31 * m42 - m32 * m41;
        const cofactor11 = m22 * minor33_44 - m23 * minor32_44 + m24 * minor32_43;
        const cofactor12 = -(m21 * minor33_44 - m23 * minor31_44 + m24 * minor31_43);
        const cofactor13 = m21 * minor32_44 - m22 * minor31_44 + m24 * minor31_42;
        const cofactor14 = -(m21 * minor32_43 - m22 * minor31_43 + m23 * minor31_42);
        const determinant = 1 / (m11 * cofactor11 + m12 * cofactor12 + m13 * cofactor13 + m14 * cofactor14);
        __privateGet(result, _values)[0] = cofactor11 * determinant;
        __privateGet(result, _values)[4] = cofactor12 * determinant;
        __privateGet(result, _values)[8] = cofactor13 * determinant;
        __privateGet(result, _values)[12] = cofactor14 * determinant;
        __privateGet(result, _values)[1] = -(m12 * minor33_44 - m13 * minor32_44 + m14 * minor32_43) * determinant;
        __privateGet(result, _values)[5] = (m11 * minor33_44 - m13 * minor31_44 + m14 * minor31_43) * determinant;
        __privateGet(result, _values)[9] = -(m11 * minor32_44 - m12 * minor31_44 + m14 * minor31_42) * determinant;
        __privateGet(result, _values)[13] = (m11 * minor32_43 - m12 * minor31_43 + m13 * minor31_42) * determinant;
        const minor23_44 = m23 * m44 - m24 * m43;
        const minor22_44 = m22 * m44 - m24 * m42;
        const minor22_43 = m22 * m43 - m23 * m42;
        const minor21_44 = m21 * m44 - m24 * m41;
        const minor21_43 = m21 * m43 - m23 * m41;
        const minor21_42 = m21 * m42 - m22 * m41;
        __privateGet(result, _values)[2] = (m12 * minor23_44 - m13 * minor22_44 + m14 * minor22_43) * determinant;
        __privateGet(result, _values)[6] = -(m11 * minor23_44 - m13 * minor21_44 + m14 * minor21_43) * determinant;
        __privateGet(result, _values)[10] = (m11 * minor22_44 - m12 * minor21_44 + m14 * minor21_42) * determinant;
        __privateGet(result, _values)[14] = -(m11 * minor22_43 - m12 * minor21_43 + m13 * minor21_42) * determinant;
        const minor23_34 = m23 * m34 - m24 * m33;
        const minor22_34 = m22 * m34 - m24 * m32;
        const minor22_33 = m22 * m33 - m23 * m32;
        const minor21_34 = m21 * m34 - m24 * m31;
        const minor21_33 = m21 * m33 - m23 * m31;
        const minor21_32 = m21 * m32 - m22 * m31;
        __privateGet(result, _values)[3] = -(m12 * minor23_34 - m13 * minor22_34 + m14 * minor22_33) * determinant;
        __privateGet(result, _values)[7] = (m11 * minor23_34 - m13 * minor21_34 + m14 * minor21_33) * determinant;
        __privateGet(result, _values)[11] = -(m11 * minor22_34 - m12 * minor21_34 + m14 * minor21_32) * determinant;
        __privateGet(result, _values)[15] = (m11 * minor22_33 - m12 * minor21_33 + m13 * minor21_32) * determinant;
        return result;
      }).add([_Matrix, _Matrix], function(matrix, result) {
        const m11 = __privateGet(matrix, _values)[0], m12 = __privateGet(matrix, _values)[1], m13 = __privateGet(matrix, _values)[2], m14 = __privateGet(matrix, _values)[3];
        const m21 = __privateGet(matrix, _values)[4], m22 = __privateGet(matrix, _values)[5], m23 = __privateGet(matrix, _values)[6], m24 = __privateGet(matrix, _values)[7];
        const m31 = __privateGet(matrix, _values)[8], m32 = __privateGet(matrix, _values)[9], m33 = __privateGet(matrix, _values)[10], m34 = __privateGet(matrix, _values)[11];
        const m41 = __privateGet(matrix, _values)[12], m42 = __privateGet(matrix, _values)[13], m43 = __privateGet(matrix, _values)[14], m44 = __privateGet(matrix, _values)[15];
        const minor33_44 = m33 * m44 - m34 * m43;
        const minor32_44 = m32 * m44 - m34 * m42;
        const minor32_43 = m32 * m43 - m33 * m42;
        const minor31_44 = m31 * m44 - m34 * m41;
        const minor31_43 = m31 * m43 - m33 * m41;
        const minor31_42 = m31 * m42 - m32 * m41;
        const cofactor11 = m22 * minor33_44 - m23 * minor32_44 + m24 * minor32_43;
        const cofactor12 = -(m21 * minor33_44 - m23 * minor31_44 + m24 * minor31_43);
        const cofactor13 = m21 * minor32_44 - m22 * minor31_44 + m24 * minor31_42;
        const cofactor14 = -(m21 * minor32_43 - m22 * minor31_43 + m23 * minor31_42);
        const determinant = 1 / (m11 * cofactor11 + m12 * cofactor12 + m13 * cofactor13 + m14 * cofactor14);
        __privateGet(result, _values)[0] = cofactor11 * determinant;
        __privateGet(result, _values)[4] = cofactor12 * determinant;
        __privateGet(result, _values)[8] = cofactor13 * determinant;
        __privateGet(result, _values)[12] = cofactor14 * determinant;
        __privateGet(result, _values)[1] = -(m12 * minor33_44 - m13 * minor32_44 + m14 * minor32_43) * determinant;
        __privateGet(result, _values)[5] = (m11 * minor33_44 - m13 * minor31_44 + m14 * minor31_43) * determinant;
        __privateGet(result, _values)[9] = -(m11 * minor32_44 - m12 * minor31_44 + m14 * minor31_42) * determinant;
        __privateGet(result, _values)[13] = (m11 * minor32_43 - m12 * minor31_43 + m13 * minor31_42) * determinant;
        const minor23_44 = m23 * m44 - m24 * m43;
        const minor22_44 = m22 * m44 - m24 * m42;
        const minor22_43 = m22 * m43 - m23 * m42;
        const minor21_44 = m21 * m44 - m24 * m41;
        const minor21_43 = m21 * m43 - m23 * m41;
        const minor21_42 = m21 * m42 - m22 * m41;
        __privateGet(result, _values)[2] = (m12 * minor23_44 - m13 * minor22_44 + m14 * minor22_43) * determinant;
        __privateGet(result, _values)[6] = -(m11 * minor23_44 - m13 * minor21_44 + m14 * minor21_43) * determinant;
        __privateGet(result, _values)[10] = (m11 * minor22_44 - m12 * minor21_44 + m14 * minor21_42) * determinant;
        __privateGet(result, _values)[14] = -(m11 * minor22_43 - m12 * minor21_43 + m13 * minor21_42) * determinant;
        const minor23_34 = m23 * m34 - m24 * m33;
        const minor22_34 = m22 * m34 - m24 * m32;
        const minor22_33 = m22 * m33 - m23 * m32;
        const minor21_34 = m21 * m34 - m24 * m31;
        const minor21_33 = m21 * m33 - m23 * m31;
        const minor21_32 = m21 * m32 - m22 * m31;
        __privateGet(result, _values)[3] = -(m12 * minor23_34 - m13 * minor22_34 + m14 * minor22_33) * determinant;
        __privateGet(result, _values)[7] = (m11 * minor23_34 - m13 * minor21_34 + m14 * minor21_33) * determinant;
        __privateGet(result, _values)[11] = -(m11 * minor22_34 - m12 * minor21_34 + m14 * minor21_32) * determinant;
        __privateGet(result, _values)[15] = (m11 * minor22_33 - m12 * minor21_33 + m13 * minor21_32) * determinant;
      });
      return _Matrix.invert.apply(this, params);
    }
    static lerp(...params) {
      _Matrix.lerp = src_default().add([_Matrix, _Matrix, Number], function(matrix1, matrix2, amount) {
        return new _Matrix(
          __privateGet(matrix1, _values)[0] + (__privateGet(matrix2, _values)[0] - __privateGet(matrix1, _values)[0]) * amount,
          __privateGet(matrix1, _values)[1] + (__privateGet(matrix2, _values)[1] - __privateGet(matrix1, _values)[1]) * amount,
          __privateGet(matrix1, _values)[2] + (__privateGet(matrix2, _values)[2] - __privateGet(matrix1, _values)[2]) * amount,
          __privateGet(matrix1, _values)[3] + (__privateGet(matrix2, _values)[3] - __privateGet(matrix1, _values)[3]) * amount,
          __privateGet(matrix1, _values)[4] + (__privateGet(matrix2, _values)[4] - __privateGet(matrix1, _values)[4]) * amount,
          __privateGet(matrix1, _values)[5] + (__privateGet(matrix2, _values)[5] - __privateGet(matrix1, _values)[5]) * amount,
          __privateGet(matrix1, _values)[6] + (__privateGet(matrix2, _values)[6] - __privateGet(matrix1, _values)[6]) * amount,
          __privateGet(matrix1, _values)[7] + (__privateGet(matrix2, _values)[7] - __privateGet(matrix1, _values)[7]) * amount,
          __privateGet(matrix1, _values)[8] + (__privateGet(matrix2, _values)[8] - __privateGet(matrix1, _values)[8]) * amount,
          __privateGet(matrix1, _values)[9] + (__privateGet(matrix2, _values)[9] - __privateGet(matrix1, _values)[9]) * amount,
          __privateGet(matrix1, _values)[10] + (__privateGet(matrix2, _values)[10] - __privateGet(matrix1, _values)[10]) * amount,
          __privateGet(matrix1, _values)[11] + (__privateGet(matrix2, _values)[11] - __privateGet(matrix1, _values)[11]) * amount,
          __privateGet(matrix1, _values)[12] + (__privateGet(matrix2, _values)[12] - __privateGet(matrix1, _values)[12]) * amount,
          __privateGet(matrix1, _values)[13] + (__privateGet(matrix2, _values)[13] - __privateGet(matrix1, _values)[13]) * amount,
          __privateGet(matrix1, _values)[14] + (__privateGet(matrix2, _values)[14] - __privateGet(matrix1, _values)[14]) * amount,
          __privateGet(matrix1, _values)[15] + (__privateGet(matrix2, _values)[15] - __privateGet(matrix1, _values)[15]) * amount
        );
      }).add([_Matrix, _Matrix, Number, _Matrix], function(matrix1, matrix2, amount, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] + (__privateGet(matrix2, _values)[0] - __privateGet(matrix1, _values)[0]) * amount;
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[1] + (__privateGet(matrix2, _values)[1] - __privateGet(matrix1, _values)[1]) * amount;
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[2] + (__privateGet(matrix2, _values)[2] - __privateGet(matrix1, _values)[2]) * amount;
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[3] + (__privateGet(matrix2, _values)[3] - __privateGet(matrix1, _values)[3]) * amount;
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] + (__privateGet(matrix2, _values)[4] - __privateGet(matrix1, _values)[4]) * amount;
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[5] + (__privateGet(matrix2, _values)[5] - __privateGet(matrix1, _values)[5]) * amount;
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[6] + (__privateGet(matrix2, _values)[6] - __privateGet(matrix1, _values)[6]) * amount;
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[7] + (__privateGet(matrix2, _values)[7] - __privateGet(matrix1, _values)[7]) * amount;
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] + (__privateGet(matrix2, _values)[8] - __privateGet(matrix1, _values)[8]) * amount;
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[9] + (__privateGet(matrix2, _values)[9] - __privateGet(matrix1, _values)[9]) * amount;
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[10] + (__privateGet(matrix2, _values)[10] - __privateGet(matrix1, _values)[10]) * amount;
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[11] + (__privateGet(matrix2, _values)[11] - __privateGet(matrix1, _values)[11]) * amount;
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] + (__privateGet(matrix2, _values)[12] - __privateGet(matrix1, _values)[12]) * amount;
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[13] + (__privateGet(matrix2, _values)[13] - __privateGet(matrix1, _values)[13]) * amount;
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[14] + (__privateGet(matrix2, _values)[14] - __privateGet(matrix1, _values)[14]) * amount;
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[15] + (__privateGet(matrix2, _values)[15] - __privateGet(matrix1, _values)[15]) * amount;
      });
      return _Matrix.lerp.apply(this, params);
    }
    static multiply(...params) {
      _Matrix.multiply = src_default().add([_Matrix, Number], function(matrix1, scaleFactor) {
        return new _Matrix(
          __privateGet(matrix1, _values)[0] * scaleFactor,
          __privateGet(matrix1, _values)[1] * scaleFactor,
          __privateGet(matrix1, _values)[2] * scaleFactor,
          __privateGet(matrix1, _values)[3] * scaleFactor,
          __privateGet(matrix1, _values)[4] * scaleFactor,
          __privateGet(matrix1, _values)[5] * scaleFactor,
          __privateGet(matrix1, _values)[6] * scaleFactor,
          __privateGet(matrix1, _values)[7] * scaleFactor,
          __privateGet(matrix1, _values)[8] * scaleFactor,
          __privateGet(matrix1, _values)[9] * scaleFactor,
          __privateGet(matrix1, _values)[10] * scaleFactor,
          __privateGet(matrix1, _values)[11] * scaleFactor,
          __privateGet(matrix1, _values)[12] * scaleFactor,
          __privateGet(matrix1, _values)[13] * scaleFactor,
          __privateGet(matrix1, _values)[14] * scaleFactor,
          __privateGet(matrix1, _values)[15] * scaleFactor
        );
      }).add([_Matrix, _Matrix], function(matrix1, matrix2) {
        const matrix = new _Matrix();
        __privateGet(matrix, _values)[0] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[12];
        __privateGet(matrix, _values)[1] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[13];
        __privateGet(matrix, _values)[2] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[14];
        __privateGet(matrix, _values)[3] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[15];
        __privateGet(matrix, _values)[4] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[12];
        __privateGet(matrix, _values)[5] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[13];
        __privateGet(matrix, _values)[6] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[14];
        __privateGet(matrix, _values)[7] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[15];
        __privateGet(matrix, _values)[8] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[12];
        __privateGet(matrix, _values)[9] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[13];
        __privateGet(matrix, _values)[10] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[14];
        __privateGet(matrix, _values)[11] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[15];
        __privateGet(matrix, _values)[12] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[12];
        __privateGet(matrix, _values)[13] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[13];
        __privateGet(matrix, _values)[14] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[14];
        __privateGet(matrix, _values)[15] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[15];
        return matrix;
      }).add([_Matrix, Number, _Matrix], function(matrix1, scaleFactor, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] * scaleFactor;
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[1] * scaleFactor;
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[2] * scaleFactor;
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[3] * scaleFactor;
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] * scaleFactor;
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[5] * scaleFactor;
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[6] * scaleFactor;
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[7] * scaleFactor;
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] * scaleFactor;
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[9] * scaleFactor;
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[10] * scaleFactor;
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[11] * scaleFactor;
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] * scaleFactor;
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[13] * scaleFactor;
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[14] * scaleFactor;
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[15] * scaleFactor;
      }).add([_Matrix, _Matrix, _Matrix], function(matrix1, matrix2, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[0] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[1] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[2] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[3] * __privateGet(matrix2, _values)[15];
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[4] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[5] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[6] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[7] * __privateGet(matrix2, _values)[15];
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[8] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[9] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[10] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[11] * __privateGet(matrix2, _values)[15];
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[0] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[4] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[8] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[1] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[5] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[9] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[2] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[6] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[10] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[12] * __privateGet(matrix2, _values)[3] + __privateGet(matrix1, _values)[13] * __privateGet(matrix2, _values)[7] + __privateGet(matrix1, _values)[14] * __privateGet(matrix2, _values)[11] + __privateGet(matrix1, _values)[15] * __privateGet(matrix2, _values)[15];
      });
      return _Matrix.multiply.apply(this, params);
    }
    static negate(...params) {
      _Matrix.negate = src_default().add([_Matrix], function(matrix) {
        return new _Matrix(
          -__privateGet(matrix, _values)[0],
          -__privateGet(matrix, _values)[1],
          -__privateGet(matrix, _values)[2],
          -__privateGet(matrix, _values)[3],
          -__privateGet(matrix, _values)[4],
          -__privateGet(matrix, _values)[5],
          -__privateGet(matrix, _values)[6],
          -__privateGet(matrix, _values)[7],
          -__privateGet(matrix, _values)[8],
          -__privateGet(matrix, _values)[9],
          -__privateGet(matrix, _values)[10],
          -__privateGet(matrix, _values)[11],
          -__privateGet(matrix, _values)[12],
          -__privateGet(matrix, _values)[13],
          -__privateGet(matrix, _values)[14],
          -__privateGet(matrix, _values)[15]
        );
      }).add([_Matrix, _Matrix], function(matrix, result) {
        __privateGet(result, _values)[0] = -__privateGet(matrix, _values)[0];
        __privateGet(result, _values)[1] = -__privateGet(matrix, _values)[1];
        __privateGet(result, _values)[2] = -__privateGet(matrix, _values)[2];
        __privateGet(result, _values)[3] = -__privateGet(matrix, _values)[3];
        __privateGet(result, _values)[4] = -__privateGet(matrix, _values)[4];
        __privateGet(result, _values)[5] = -__privateGet(matrix, _values)[5];
        __privateGet(result, _values)[6] = -__privateGet(matrix, _values)[6];
        __privateGet(result, _values)[7] = -__privateGet(matrix, _values)[7];
        __privateGet(result, _values)[8] = -__privateGet(matrix, _values)[8];
        __privateGet(result, _values)[9] = -__privateGet(matrix, _values)[9];
        __privateGet(result, _values)[10] = -__privateGet(matrix, _values)[10];
        __privateGet(result, _values)[11] = -__privateGet(matrix, _values)[11];
        __privateGet(result, _values)[12] = -__privateGet(matrix, _values)[12];
        __privateGet(result, _values)[13] = -__privateGet(matrix, _values)[13];
        __privateGet(result, _values)[14] = -__privateGet(matrix, _values)[14];
        __privateGet(result, _values)[15] = -__privateGet(matrix, _values)[15];
      });
      return _Matrix.negate.apply(this, params);
    }
    static subtract(...params) {
      _Matrix.subtract = src_default().add([_Matrix, _Matrix], function(matrix1, matrix2) {
        return new _Matrix(
          __privateGet(matrix1, _values)[0] - __privateGet(matrix2, _values)[0],
          __privateGet(matrix1, _values)[1] - __privateGet(matrix2, _values)[1],
          __privateGet(matrix1, _values)[2] - __privateGet(matrix2, _values)[2],
          __privateGet(matrix1, _values)[3] - __privateGet(matrix2, _values)[3],
          __privateGet(matrix1, _values)[4] - __privateGet(matrix2, _values)[4],
          __privateGet(matrix1, _values)[5] - __privateGet(matrix2, _values)[5],
          __privateGet(matrix1, _values)[6] - __privateGet(matrix2, _values)[6],
          __privateGet(matrix1, _values)[7] - __privateGet(matrix2, _values)[7],
          __privateGet(matrix1, _values)[8] - __privateGet(matrix2, _values)[8],
          __privateGet(matrix1, _values)[9] - __privateGet(matrix2, _values)[9],
          __privateGet(matrix1, _values)[10] - __privateGet(matrix2, _values)[10],
          __privateGet(matrix1, _values)[11] - __privateGet(matrix2, _values)[11],
          __privateGet(matrix1, _values)[12] - __privateGet(matrix2, _values)[12],
          __privateGet(matrix1, _values)[13] - __privateGet(matrix2, _values)[13],
          __privateGet(matrix1, _values)[14] - __privateGet(matrix2, _values)[14],
          __privateGet(matrix1, _values)[15] - __privateGet(matrix2, _values)[15]
        );
      }).add([_Matrix, _Matrix, _Matrix], function(matrix1, matrix2, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix1, _values)[0] - __privateGet(matrix2, _values)[0];
        __privateGet(result, _values)[1] = __privateGet(matrix1, _values)[1] - __privateGet(matrix2, _values)[1];
        __privateGet(result, _values)[2] = __privateGet(matrix1, _values)[2] - __privateGet(matrix2, _values)[2];
        __privateGet(result, _values)[3] = __privateGet(matrix1, _values)[3] - __privateGet(matrix2, _values)[3];
        __privateGet(result, _values)[4] = __privateGet(matrix1, _values)[4] - __privateGet(matrix2, _values)[4];
        __privateGet(result, _values)[5] = __privateGet(matrix1, _values)[5] - __privateGet(matrix2, _values)[5];
        __privateGet(result, _values)[6] = __privateGet(matrix1, _values)[6] - __privateGet(matrix2, _values)[6];
        __privateGet(result, _values)[7] = __privateGet(matrix1, _values)[7] - __privateGet(matrix2, _values)[7];
        __privateGet(result, _values)[8] = __privateGet(matrix1, _values)[8] - __privateGet(matrix2, _values)[8];
        __privateGet(result, _values)[9] = __privateGet(matrix1, _values)[9] - __privateGet(matrix2, _values)[9];
        __privateGet(result, _values)[10] = __privateGet(matrix1, _values)[10] - __privateGet(matrix2, _values)[10];
        __privateGet(result, _values)[11] = __privateGet(matrix1, _values)[11] - __privateGet(matrix2, _values)[11];
        __privateGet(result, _values)[12] = __privateGet(matrix1, _values)[12] - __privateGet(matrix2, _values)[12];
        __privateGet(result, _values)[13] = __privateGet(matrix1, _values)[13] - __privateGet(matrix2, _values)[13];
        __privateGet(result, _values)[14] = __privateGet(matrix1, _values)[14] - __privateGet(matrix2, _values)[14];
        __privateGet(result, _values)[15] = __privateGet(matrix1, _values)[15] - __privateGet(matrix2, _values)[15];
      });
      return _Matrix.subtract.apply(this, params);
    }
    static transform(...params) {
      _Matrix.transform = src_default().add([_Matrix, Quaternion], function(value, rotation) {
        const x3 = rotation.x, y = rotation.y, z = rotation.z, w2 = rotation.w;
        const m11 = __privateGet(value, _values)[0], m12 = __privateGet(value, _values)[1], m13 = __privateGet(value, _values)[2], m14 = __privateGet(value, _values)[3];
        const m21 = __privateGet(value, _values)[4], m22 = __privateGet(value, _values)[5], m23 = __privateGet(value, _values)[6], m24 = __privateGet(value, _values)[7];
        const m31 = __privateGet(value, _values)[8], m32 = __privateGet(value, _values)[9], m33 = __privateGet(value, _values)[10], m34 = __privateGet(value, _values)[11];
        const m41 = __privateGet(value, _values)[12], m42 = __privateGet(value, _values)[13], m43 = __privateGet(value, _values)[14], m44 = __privateGet(value, _values)[15];
        const x22 = x3 + x3, y2 = y + y, z2 = z + z;
        const wx2 = w2 * x22, wy2 = w2 * y2, wz2 = w2 * z2;
        const xx2 = x3 * x22, xy2 = x3 * y2, xz2 = x3 * z2;
        const yy2 = y * y2, yz2 = y * z2, zz2 = z * z2;
        const q11 = 1 - yy2 - zz2, q21 = xy2 - wz2, q31 = xz2 + wy2;
        const q12 = xy2 + wz2, q22 = 1 - xx2 - zz2, q32 = yz2 - wx2;
        const q13 = xz2 - wy2, q23 = yz2 + wx2, q33 = 1 - xx2 - yy2;
        return new _Matrix(
          m11 * q11 + m12 * q21 + m13 * q31,
          m11 * q12 + m12 * q22 + m13 * q32,
          m11 * q13 + m12 * q23 + m13 * q33,
          m14,
          m21 * q11 + m22 * q21 + m23 * q31,
          m21 * q12 + m22 * q22 + m23 * q32,
          m21 * q13 + m22 * q23 + m23 * q33,
          m24,
          m31 * q11 + m32 * q21 + m33 * q31,
          m31 * q12 + m32 * q22 + m33 * q32,
          m31 * q13 + m32 * q23 + m33 * q33,
          m34,
          m41 * q11 + m42 * q21 + m43 * q31,
          m41 * q12 + m42 * q22 + m43 * q32,
          m41 * q13 + m42 * q23 + m43 * q33,
          m44
        );
      }).add([_Matrix, Quaternion, _Matrix], function(value, rotation, result) {
        const x3 = rotation.x, y = rotation.y, z = rotation.z, w2 = rotation.w;
        const m11 = __privateGet(value, _values)[0], m12 = __privateGet(value, _values)[1], m13 = __privateGet(value, _values)[2], m14 = __privateGet(value, _values)[3];
        const m21 = __privateGet(value, _values)[4], m22 = __privateGet(value, _values)[5], m23 = __privateGet(value, _values)[6], m24 = __privateGet(value, _values)[7];
        const m31 = __privateGet(value, _values)[8], m32 = __privateGet(value, _values)[9], m33 = __privateGet(value, _values)[10], m34 = __privateGet(value, _values)[11];
        const m41 = __privateGet(value, _values)[12], m42 = __privateGet(value, _values)[13], m43 = __privateGet(value, _values)[14], m44 = __privateGet(value, _values)[15];
        const x22 = x3 + x3, y2 = y + y, z2 = z + z;
        const wx2 = w2 * x22, wy2 = w2 * y2, wz2 = w2 * z2;
        const xx2 = x3 * x22, xy2 = x3 * y2, xz2 = x3 * z2;
        const yy2 = y * y2, yz2 = y * z2, zz2 = z * z2;
        const q11 = 1 - yy2 - zz2, q21 = xy2 - wz2, q31 = xz2 + wy2;
        const q12 = xy2 + wz2, q22 = 1 - xx2 - zz2, q32 = yz2 - wx2;
        const q13 = xz2 - wy2, q23 = yz2 + wx2, q33 = 1 - xx2 - yy2;
        __privateGet(result, _values)[0] = m11 * q11 + m12 * q21 + m13 * q31;
        __privateGet(result, _values)[1] = m11 * q12 + m12 * q22 + m13 * q32;
        __privateGet(result, _values)[2] = m11 * q13 + m12 * q23 + m13 * q33;
        __privateGet(result, _values)[3] = m14;
        __privateGet(result, _values)[4] = m21 * q11 + m22 * q21 + m23 * q31;
        __privateGet(result, _values)[5] = m21 * q12 + m22 * q22 + m23 * q32;
        __privateGet(result, _values)[6] = m21 * q13 + m22 * q23 + m23 * q33;
        __privateGet(result, _values)[7] = m24;
        __privateGet(result, _values)[8] = m31 * q11 + m32 * q21 + m33 * q31;
        __privateGet(result, _values)[9] = m31 * q12 + m32 * q22 + m33 * q32;
        __privateGet(result, _values)[10] = m31 * q13 + m32 * q23 + m33 * q33;
        __privateGet(result, _values)[11] = m34;
        __privateGet(result, _values)[12] = m41 * q11 + m42 * q21 + m43 * q31;
        __privateGet(result, _values)[13] = m41 * q12 + m42 * q22 + m43 * q32;
        __privateGet(result, _values)[14] = m41 * q13 + m42 * q23 + m43 * q33;
        __privateGet(result, _values)[15] = m44;
      });
      return _Matrix.transform.apply(this, params);
    }
    static transpose(...params) {
      _Matrix.transpose = src_default().add([_Matrix], function(matrix) {
        return new _Matrix(
          __privateGet(matrix, _values)[0],
          __privateGet(matrix, _values)[4],
          __privateGet(matrix, _values)[8],
          __privateGet(matrix, _values)[12],
          __privateGet(matrix, _values)[1],
          __privateGet(matrix, _values)[5],
          __privateGet(matrix, _values)[9],
          __privateGet(matrix, _values)[13],
          __privateGet(matrix, _values)[2],
          __privateGet(matrix, _values)[6],
          __privateGet(matrix, _values)[10],
          __privateGet(matrix, _values)[14],
          __privateGet(matrix, _values)[3],
          __privateGet(matrix, _values)[7],
          __privateGet(matrix, _values)[11],
          __privateGet(matrix, _values)[15]
        );
      }).add([_Matrix, _Matrix], function(matrix, result) {
        __privateGet(result, _values)[0] = __privateGet(matrix, _values)[0];
        __privateGet(result, _values)[1] = __privateGet(matrix, _values)[4];
        __privateGet(result, _values)[2] = __privateGet(matrix, _values)[8];
        __privateGet(result, _values)[3] = __privateGet(matrix, _values)[12];
        __privateGet(result, _values)[4] = __privateGet(matrix, _values)[1];
        __privateGet(result, _values)[5] = __privateGet(matrix, _values)[5];
        __privateGet(result, _values)[6] = __privateGet(matrix, _values)[9];
        __privateGet(result, _values)[7] = __privateGet(matrix, _values)[13];
        __privateGet(result, _values)[8] = __privateGet(matrix, _values)[2];
        __privateGet(result, _values)[9] = __privateGet(matrix, _values)[6];
        __privateGet(result, _values)[10] = __privateGet(matrix, _values)[10];
        __privateGet(result, _values)[11] = __privateGet(matrix, _values)[14];
        __privateGet(result, _values)[12] = __privateGet(matrix, _values)[3];
        __privateGet(result, _values)[13] = __privateGet(matrix, _values)[7];
        __privateGet(result, _values)[14] = __privateGet(matrix, _values)[11];
        __privateGet(result, _values)[15] = __privateGet(matrix, _values)[15];
      });
      return _Matrix.transpose.apply(this, params);
    }
    static ["-"](...params) {
      return _Matrix.negate.apply(this, params);
    }
    ["+"](...params) {
      return _Matrix.add.apply(this, params);
    }
    ["-"](...params) {
      return _Matrix.subtract.apply(this, params);
    }
    ["*"](...params) {
      return _Matrix.multiply.apply(this, params);
    }
    ["/"](...params) {
      return _Matrix.divide.apply(this, params);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    decompose(...params) {
      _Matrix.prototype.decompose = src_default().add([Vector3, Quaternion, Vector3], function(scale, rotation, translation) {
        const m11 = __privateGet(this, _values)[0], m12 = __privateGet(this, _values)[1], m13 = __privateGet(this, _values)[2], m14 = __privateGet(this, _values)[3];
        const m21 = __privateGet(this, _values)[4], m22 = __privateGet(this, _values)[5], m23 = __privateGet(this, _values)[6], m24 = __privateGet(this, _values)[7];
        const m31 = __privateGet(this, _values)[8], m32 = __privateGet(this, _values)[9], m33 = __privateGet(this, _values)[10], m34 = __privateGet(this, _values)[11];
        const m41 = __privateGet(this, _values)[12], m42 = __privateGet(this, _values)[13], m43 = __privateGet(this, _values)[14];
        translation.x = m41;
        translation.y = m42;
        translation.z = m43;
        const xs = Math.sign(m11 * m12 * m13 * m14) < 0 ? -1 : 1;
        const ys = Math.sign(m21 * m22 * m23 * m24) < 0 ? -1 : 1;
        const zs = Math.sign(m31 * m32 * m33 * m34) < 0 ? -1 : 1;
        scale.x = xs * Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
        scale.y = ys * Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
        scale.z = zs * Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
        if (scale.x === 0 || scale.y === 0 || scale.z === 0) {
          const qi = Quaternion.identity;
          rotation.x = qi.x;
          rotation.y = qi.y;
          rotation.z = qi.z;
          rotation.w = qi.w;
          return false;
        }
        const q = Quaternion.createFromRotationMatrix(new _Matrix(
          m11 / scale.x,
          m12 / scale.x,
          m13 / scale.x,
          0,
          m21 / scale.y,
          m22 / scale.y,
          m23 / scale.y,
          0,
          m31 / scale.z,
          m32 / scale.z,
          m33 / scale.z,
          0,
          0,
          0,
          0,
          1
        ));
        rotation.x = q.x;
        rotation.y = q.y;
        rotation.z = q.z;
        rotation.w = q.w;
        return true;
      });
      return _Matrix.prototype.decompose.apply(this, params);
    }
    determinant(...params) {
      _Matrix.prototype.determinant = src_default([], function() {
        const m11 = __privateGet(this, _values)[0], m12 = __privateGet(this, _values)[1], m13 = __privateGet(this, _values)[2], m14 = __privateGet(this, _values)[3];
        const m21 = __privateGet(this, _values)[4], m22 = __privateGet(this, _values)[5], m23 = __privateGet(this, _values)[6], m24 = __privateGet(this, _values)[7];
        const m31 = __privateGet(this, _values)[8], m32 = __privateGet(this, _values)[9], m33 = __privateGet(this, _values)[10], m34 = __privateGet(this, _values)[11];
        const m41 = __privateGet(this, _values)[12], m42 = __privateGet(this, _values)[13], m43 = __privateGet(this, _values)[14], m44 = __privateGet(this, _values)[15];
        const a = m33 * m44 - m34 * m43;
        const b3 = m32 * m44 - m34 * m42;
        const c = m32 * m43 - m33 * m42;
        const d2 = m31 * m44 - m34 * m41;
        const e = m31 * m43 - m33 * m41;
        const f = m31 * m42 - m32 * m41;
        return m11 * (m22 * a - m23 * b3 + m24 * c) - m12 * (m21 * a - m23 * d2 + m24 * e) + m13 * (m21 * b3 - m22 * d2 + m24 * f) - m14 * (m21 * c - m22 * e + m23 * f);
      });
      return _Matrix.prototype.determinant.apply(this, params);
    }
    equals(...params) {
      _Matrix.prototype.equals = src_default([_Matrix], function(other) {
        return __privateGet(this, _values)[0] === __privateGet(other, _values)[0] && __privateGet(this, _values)[5] === __privateGet(other, _values)[5] && __privateGet(this, _values)[10] === __privateGet(other, _values)[10] && __privateGet(this, _values)[15] === __privateGet(other, _values)[15] && __privateGet(this, _values)[1] === __privateGet(other, _values)[1] && __privateGet(this, _values)[2] === __privateGet(other, _values)[2] && __privateGet(this, _values)[3] === __privateGet(other, _values)[3] && __privateGet(this, _values)[4] === __privateGet(other, _values)[4] && __privateGet(this, _values)[6] === __privateGet(other, _values)[6] && __privateGet(this, _values)[7] === __privateGet(other, _values)[7] && __privateGet(this, _values)[8] === __privateGet(other, _values)[8] && __privateGet(this, _values)[9] === __privateGet(other, _values)[9] && __privateGet(this, _values)[11] === __privateGet(other, _values)[11] && __privateGet(this, _values)[12] === __privateGet(other, _values)[12] && __privateGet(this, _values)[13] === __privateGet(other, _values)[13] && __privateGet(this, _values)[14] === __privateGet(other, _values)[14];
      }).any(() => false);
      return _Matrix.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _Matrix.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Matrix.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Matrix 的 JSON 表示形式。
     * @returns 当前 Matrix 的 JSON 表示形式。
     */
    toJSON() {
      return {
        m11: __privateGet(this, _values)[0],
        m12: __privateGet(this, _values)[1],
        m13: __privateGet(this, _values)[2],
        m14: __privateGet(this, _values)[3],
        m21: __privateGet(this, _values)[4],
        m22: __privateGet(this, _values)[5],
        m23: __privateGet(this, _values)[6],
        m24: __privateGet(this, _values)[7],
        m31: __privateGet(this, _values)[8],
        m32: __privateGet(this, _values)[9],
        m33: __privateGet(this, _values)[10],
        m34: __privateGet(this, _values)[11],
        m41: __privateGet(this, _values)[12],
        m42: __privateGet(this, _values)[13],
        m43: __privateGet(this, _values)[14],
        m44: __privateGet(this, _values)[15]
      };
    }
  };
  _init9 = __decoratorStart(null);
  _values = new WeakMap();
  __decorateElement(_init9, 3, "m11", _m11_dec, _Matrix);
  __decorateElement(_init9, 3, "m12", _m12_dec, _Matrix);
  __decorateElement(_init9, 3, "m13", _m13_dec, _Matrix);
  __decorateElement(_init9, 3, "m14", _m14_dec, _Matrix);
  __decorateElement(_init9, 3, "m21", _m21_dec, _Matrix);
  __decorateElement(_init9, 3, "m22", _m22_dec, _Matrix);
  __decorateElement(_init9, 3, "m23", _m23_dec, _Matrix);
  __decorateElement(_init9, 3, "m24", _m24_dec, _Matrix);
  __decorateElement(_init9, 3, "m31", _m31_dec, _Matrix);
  __decorateElement(_init9, 3, "m32", _m32_dec, _Matrix);
  __decorateElement(_init9, 3, "m33", _m33_dec, _Matrix);
  __decorateElement(_init9, 3, "m34", _m34_dec, _Matrix);
  __decorateElement(_init9, 3, "m41", _m41_dec, _Matrix);
  __decorateElement(_init9, 3, "m42", _m42_dec, _Matrix);
  __decorateElement(_init9, 3, "m43", _m43_dec, _Matrix);
  __decorateElement(_init9, 3, "m44", _m44_dec, _Matrix);
  __decorateElement(_init9, 3, "backward", _backward_dec, _Matrix);
  __decorateElement(_init9, 3, "down", _down_dec, _Matrix);
  __decorateElement(_init9, 3, "forward", _forward_dec, _Matrix);
  __decorateElement(_init9, 3, "left", _left_dec, _Matrix);
  __decorateElement(_init9, 3, "right", _right_dec, _Matrix);
  __decorateElement(_init9, 3, "translation", _translation_dec, _Matrix);
  __decorateElement(_init9, 3, "up", _up_dec, _Matrix);
  __decoratorMetadata(_init9, _Matrix);
  var Matrix = _Matrix;

  // src/vector2.ts
  var CONSTRUCTOR_SYMBOL10 = /* @__PURE__ */ Symbol("constructor");
  var _y_dec4, _x_dec4, _x4, _init10, _y4;
  var _Vector2 = class _Vector2 {
    constructor(...params) {
      __runInitializers(_init10, 5, this);
      /**
       * 矢量的 x 值。
       */
      __privateAdd(this, _x4, 0);
      /**
       * 矢量的 y 值。
       */
      __privateAdd(this, _y4, 0);
      _Vector2[CONSTRUCTOR_SYMBOL10].apply(this, params);
    }
    /**
     * 返回两个组件均设置为一的 Vector2。
     */
    static get one() {
      return new _Vector2(1, 1);
    }
    /**
     * 返回 x 轴的单位矢量。
     */
    static get unitX() {
      return new _Vector2(1, 0);
    }
    /**
     * 返回 y 轴的单位矢量。
     */
    static get unitY() {
      return new _Vector2(0, 1);
    }
    /**
     * 返回所有组件均设置为零的 Vector2。
     */
    static get zero() {
      return new _Vector2(0, 0);
    }
    /**
     * 获取矢量的 x 值。
     */
    get x() {
      return __privateGet(this, _x4);
    }
    set x(value) {
      __privateSet(this, _x4, value);
    }
    /**
     * 获取矢量的 y 值。
     */
    get y() {
      return __privateGet(this, _y4);
    }
    set y(value) {
      __privateSet(this, _y4, value);
    }
    /**
     * 结构化构造函数。
     * @returns Vector2 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return _Vector2.zero;
    }
    static [(_x_dec4 = [x2(Number)], _y_dec4 = [x2(Number)], CONSTRUCTOR_SYMBOL10)](...params) {
      _Vector2[CONSTRUCTOR_SYMBOL10] = src_default().add([], function() {
      }).add([Number], function(value) {
        __privateSet(this, _x4, value);
        __privateSet(this, _y4, value);
      }).add([Number, Number], function(x3, y) {
        __privateSet(this, _x4, x3);
        __privateSet(this, _y4, y);
      });
      return _Vector2[CONSTRUCTOR_SYMBOL10].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _x4);
      yield __privateGet(this, _y4);
    }
    static add(...params) {
      _Vector2.add = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        return new _Vector2(
          __privateGet(value1, _x4) + __privateGet(value2, _x4),
          __privateGet(value1, _y4) + __privateGet(value2, _y4)
        );
      }).add([_Vector2, _Vector2, _Vector2], function(value1, value2, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) + __privateGet(value2, _x4));
        __privateSet(result, _y4, __privateGet(value1, _y4) + __privateGet(value2, _y4));
      });
      return _Vector2.add.apply(this, params);
    }
    static barycentric(...params) {
      _Vector2.barycentric = src_default().add([_Vector2, _Vector2, _Vector2, Number, Number], function(value1, value2, value3, amount1, amount2) {
        return new _Vector2(
          MathHelper.barycentric(__privateGet(value1, _x4), __privateGet(value2, _x4), __privateGet(value3, _x4), amount1, amount2),
          MathHelper.barycentric(__privateGet(value1, _y4), __privateGet(value2, _y4), __privateGet(value3, _y4), amount1, amount2)
        );
      }).add([_Vector2, _Vector2, _Vector2, Number, Number, _Vector2], function(value1, value2, value3, amount1, amount2, result) {
        __privateSet(result, _x4, MathHelper.barycentric(__privateGet(value1, _x4), __privateGet(value2, _x4), __privateGet(value3, _x4), amount1, amount2));
        __privateSet(result, _y4, MathHelper.barycentric(__privateGet(value1, _y4), __privateGet(value2, _y4), __privateGet(value3, _y4), amount1, amount2));
      });
      return _Vector2.barycentric.apply(this, params);
    }
    static catmullRom(...params) {
      _Vector2.catmullRom = src_default().add([_Vector2, _Vector2, _Vector2, _Vector2, Number], function(value1, value2, value3, value4, amount) {
        return new _Vector2(
          MathHelper.catmullRom(__privateGet(value1, _x4), __privateGet(value2, _x4), __privateGet(value3, _x4), __privateGet(value4, _x4), amount),
          MathHelper.catmullRom(__privateGet(value1, _y4), __privateGet(value2, _y4), __privateGet(value3, _y4), __privateGet(value4, _y4), amount)
        );
      }).add([_Vector2, _Vector2, _Vector2, _Vector2, Number, _Vector2], function(value1, value2, value3, value4, amount, result) {
        __privateSet(result, _x4, MathHelper.catmullRom(__privateGet(value1, _x4), __privateGet(value2, _x4), __privateGet(value3, _x4), __privateGet(value4, _x4), amount));
        __privateSet(result, _y4, MathHelper.catmullRom(__privateGet(value1, _y4), __privateGet(value2, _y4), __privateGet(value3, _y4), __privateGet(value4, _y4), amount));
      });
      return _Vector2.catmullRom.apply(this, params);
    }
    static clamp(...params) {
      _Vector2.clamp = src_default().add([_Vector2, _Vector2, _Vector2], function(value1, min, max) {
        return new _Vector2(
          MathHelper.clamp(__privateGet(value1, _x4), __privateGet(min, _x4), __privateGet(max, _x4)),
          MathHelper.clamp(__privateGet(value1, _y4), __privateGet(min, _y4), __privateGet(max, _y4))
        );
      }).add([_Vector2, _Vector2, _Vector2, _Vector2], function(value1, min, max, result) {
        __privateSet(result, _x4, MathHelper.clamp(__privateGet(value1, _x4), __privateGet(min, _x4), __privateGet(max, _x4)));
        __privateSet(result, _y4, MathHelper.clamp(__privateGet(value1, _y4), __privateGet(min, _y4), __privateGet(max, _y4)));
      });
      return _Vector2.clamp.apply(this, params);
    }
    static cross(...params) {
      _Vector2.cross = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        return __privateGet(value1, _x4) * __privateGet(value2, _y4) - __privateGet(value1, _y4) * __privateGet(value2, _x4);
      });
      return _Vector2.cross.apply(this, params);
    }
    static distance(...params) {
      _Vector2.distance = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        const v1 = __privateGet(value1, _x4) - __privateGet(value2, _x4);
        const v2 = __privateGet(value1, _y4) - __privateGet(value2, _y4);
        return Math.sqrt(v1 * v1 + v2 * v2);
      });
      return _Vector2.distance.apply(this, params);
    }
    static distanceSquared(...params) {
      _Vector2.distanceSquared = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        const v1 = __privateGet(value1, _x4) - __privateGet(value2, _x4);
        const v2 = __privateGet(value1, _y4) - __privateGet(value2, _y4);
        return v1 * v1 + v2 * v2;
      });
      return _Vector2.distanceSquared.apply(this, params);
    }
    static divide(...params) {
      _Vector2.divide = src_default().add([_Vector2, Number], function(value1, divider) {
        const factor = 1 / divider;
        return new _Vector2(
          __privateGet(value1, _x4) * factor,
          __privateGet(value1, _y4) * factor
        );
      }).add([_Vector2, Number, _Vector2], function(value1, divider, result) {
        const factor = 1 / divider;
        __privateSet(result, _x4, __privateGet(value1, _x4) * factor);
        __privateSet(result, _y4, __privateGet(value1, _y4) * factor);
      }).add([_Vector2, _Vector2], function(value1, value2) {
        return new _Vector2(
          __privateGet(value1, _x4) / __privateGet(value2, _x4),
          __privateGet(value1, _y4) / __privateGet(value2, _y4)
        );
      }).add([_Vector2, _Vector2, _Vector2], function(value1, value2, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) / __privateGet(value2, _x4));
        __privateSet(result, _y4, __privateGet(value1, _y4) / __privateGet(value2, _y4));
      });
      return _Vector2.divide.apply(this, params);
    }
    static dot(...params) {
      _Vector2.dot = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        return __privateGet(value1, _x4) * __privateGet(value2, _x4) + __privateGet(value1, _y4) * __privateGet(value2, _y4);
      });
      return _Vector2.dot.apply(this, params);
    }
    static hermite(...params) {
      _Vector2.hermite = src_default().add([_Vector2, _Vector2, _Vector2, _Vector2, Number], function(value1, tangent1, value2, tangent2, amount) {
        return new _Vector2(
          MathHelper.hermite(__privateGet(value1, _x4), __privateGet(tangent1, _x4), __privateGet(value2, _x4), __privateGet(tangent2, _x4), amount),
          MathHelper.hermite(__privateGet(value1, _y4), __privateGet(tangent1, _y4), __privateGet(value2, _y4), __privateGet(tangent2, _y4), amount)
        );
      }).add([_Vector2, _Vector2, _Vector2, _Vector2, Number, _Vector2], function(value1, tangent1, value2, tangent2, amount, result) {
        __privateSet(result, _x4, MathHelper.hermite(__privateGet(value1, _x4), __privateGet(tangent1, _x4), __privateGet(value2, _x4), __privateGet(tangent2, _x4), amount));
        __privateSet(result, _y4, MathHelper.hermite(__privateGet(value1, _y4), __privateGet(tangent1, _y4), __privateGet(value2, _y4), __privateGet(tangent2, _y4), amount));
      });
      return _Vector2.hermite.apply(this, params);
    }
    static lerp(...params) {
      _Vector2.lerp = src_default().add([_Vector2, _Vector2, Number], function(value1, value2, amount) {
        return new _Vector2(
          MathHelper.lerp(__privateGet(value1, _x4), __privateGet(value2, _x4), amount),
          MathHelper.lerp(__privateGet(value1, _y4), __privateGet(value2, _y4), amount)
        );
      }).add([_Vector2, _Vector2, Number, _Vector2], function(value1, value2, amount, result) {
        __privateSet(result, _x4, MathHelper.lerp(__privateGet(value1, _x4), __privateGet(value2, _x4), amount));
        __privateSet(result, _y4, MathHelper.lerp(__privateGet(value1, _y4), __privateGet(value2, _y4), amount));
      });
      return _Vector2.lerp.apply(this, params);
    }
    static max(...params) {
      _Vector2.max = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        return new _Vector2(
          __privateGet(value1, _x4) > __privateGet(value2, _x4) ? __privateGet(value1, _x4) : __privateGet(value2, _x4),
          __privateGet(value1, _y4) > __privateGet(value2, _y4) ? __privateGet(value1, _y4) : __privateGet(value2, _y4)
        );
      }).add([_Vector2, _Vector2, _Vector2], function(value1, value2, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) > __privateGet(value2, _x4) ? __privateGet(value1, _x4) : __privateGet(value2, _x4));
        __privateSet(result, _y4, __privateGet(value1, _y4) > __privateGet(value2, _y4) ? __privateGet(value1, _y4) : __privateGet(value2, _y4));
      });
      return _Vector2.max.apply(this, params);
    }
    static min(...params) {
      _Vector2.min = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        return new _Vector2(
          __privateGet(value1, _x4) < __privateGet(value2, _x4) ? __privateGet(value1, _x4) : __privateGet(value2, _x4),
          __privateGet(value1, _y4) < __privateGet(value2, _y4) ? __privateGet(value1, _y4) : __privateGet(value2, _y4)
        );
      }).add([_Vector2, _Vector2, _Vector2], function(value1, value2, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) < __privateGet(value2, _x4) ? __privateGet(value1, _x4) : __privateGet(value2, _x4));
        __privateSet(result, _y4, __privateGet(value1, _y4) < __privateGet(value2, _y4) ? __privateGet(value1, _y4) : __privateGet(value2, _y4));
      });
      return _Vector2.min.apply(this, params);
    }
    static multiply(...params) {
      _Vector2.multiply = src_default().add([_Vector2, Number], function(value1, scaleFactor) {
        return new _Vector2(
          __privateGet(value1, _x4) * scaleFactor,
          __privateGet(value1, _y4) * scaleFactor
        );
      }).add([_Vector2, Number, _Vector2], function(value1, scaleFactor, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) * scaleFactor);
        __privateSet(result, _y4, __privateGet(value1, _y4) * scaleFactor);
      }).add([_Vector2, _Vector2], function(value1, value2) {
        return new _Vector2(
          __privateGet(value1, _x4) * __privateGet(value2, _x4),
          __privateGet(value1, _y4) * __privateGet(value2, _y4)
        );
      }).add([_Vector2, _Vector2, _Vector2], function(value1, value2, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) * __privateGet(value2, _x4));
        __privateSet(result, _y4, __privateGet(value1, _y4) * __privateGet(value2, _y4));
      });
      return _Vector2.multiply.apply(this, params);
    }
    static negate(...params) {
      _Vector2.negate = src_default().add([_Vector2], function(value) {
        return new _Vector2(
          -__privateGet(value, _x4),
          -__privateGet(value, _y4)
        );
      }).add([_Vector2, _Vector2], function(value, result) {
        __privateSet(result, _x4, -__privateGet(value, _x4));
        __privateSet(result, _y4, -__privateGet(value, _y4));
      });
      return _Vector2.negate.apply(this, params);
    }
    static normalize(...params) {
      _Vector2.normalize = src_default().add([_Vector2], function(value) {
        const val = 1 / Math.sqrt(__privateGet(value, _x4) * __privateGet(value, _x4) + __privateGet(value, _y4) * __privateGet(value, _y4));
        return new _Vector2(
          __privateGet(value, _x4) * val,
          __privateGet(value, _y4) * val
        );
      }).add([_Vector2, _Vector2], function(value, result) {
        const val = 1 / Math.sqrt(__privateGet(value, _x4) * __privateGet(value, _x4) + __privateGet(value, _y4) * __privateGet(value, _y4));
        __privateSet(result, _x4, __privateGet(value, _x4) * val);
        __privateSet(result, _y4, __privateGet(value, _y4) * val);
      });
      return _Vector2.normalize.apply(this, params);
    }
    static reflect(...params) {
      _Vector2.reflect = src_default().add([_Vector2, _Vector2], function(vector, normal) {
        const val = 2 * (__privateGet(vector, _x4) * __privateGet(normal, _x4) + __privateGet(vector, _y4) * __privateGet(normal, _y4));
        return new _Vector2(
          __privateGet(vector, _x4) - __privateGet(normal, _x4) * val,
          __privateGet(vector, _y4) - __privateGet(normal, _y4) * val
        );
      }).add([_Vector2, _Vector2, _Vector2], function(vector, normal, result) {
        const val = 2 * (__privateGet(vector, _x4) * __privateGet(normal, _x4) + __privateGet(vector, _y4) * __privateGet(normal, _y4));
        __privateSet(result, _x4, __privateGet(vector, _x4) - __privateGet(normal, _x4) * val);
        __privateSet(result, _y4, __privateGet(vector, _y4) - __privateGet(normal, _y4) * val);
      });
      return _Vector2.reflect.apply(this, params);
    }
    static smoothStep(...params) {
      _Vector2.smoothStep = src_default().add([_Vector2, _Vector2, Number], function(value1, value2, amount) {
        return new _Vector2(
          MathHelper.smoothStep(__privateGet(value1, _x4), __privateGet(value2, _x4), amount),
          MathHelper.smoothStep(__privateGet(value1, _y4), __privateGet(value2, _y4), amount)
        );
      }).add([_Vector2, _Vector2, Number, _Vector2], function(value1, value2, amount, result) {
        __privateSet(result, _x4, MathHelper.smoothStep(__privateGet(value1, _x4), __privateGet(value2, _x4), amount));
        __privateSet(result, _y4, MathHelper.smoothStep(__privateGet(value1, _y4), __privateGet(value2, _y4), amount));
      });
      return _Vector2.smoothStep.apply(this, params);
    }
    static subtract(...params) {
      _Vector2.subtract = src_default().add([_Vector2, _Vector2], function(value1, value2) {
        return new _Vector2(
          __privateGet(value1, _x4) - __privateGet(value2, _x4),
          __privateGet(value1, _y4) - __privateGet(value2, _y4)
        );
      }).add([_Vector2, _Vector2, _Vector2], function(value1, value2, result) {
        __privateSet(result, _x4, __privateGet(value1, _x4) - __privateGet(value2, _x4));
        __privateSet(result, _y4, __privateGet(value1, _y4) - __privateGet(value2, _y4));
      });
      return _Vector2.subtract.apply(this, params);
    }
    static transform(...params) {
      _Vector2.transform = src_default().add([_Vector2, Matrix], function(position, matrix) {
        return new _Vector2(
          __privateGet(position, _x4) * matrix.m11 + __privateGet(position, _y4) * matrix.m21 + matrix.m41,
          __privateGet(position, _x4) * matrix.m12 + __privateGet(position, _y4) * matrix.m22 + matrix.m42
        );
      }).add([_Vector2, Matrix, _Vector2], function(position, matrix, result) {
        __privateSet(result, _x4, __privateGet(position, _x4) * matrix.m11 + __privateGet(position, _y4) * matrix.m21 + matrix.m41);
        __privateSet(result, _y4, __privateGet(position, _x4) * matrix.m12 + __privateGet(position, _y4) * matrix.m22 + matrix.m42);
      }).add([_Vector2, Quaternion], function(value, rotation) {
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const x3 = __privateGet(value, _x4), y = __privateGet(value, _y4);
        const rot1 = new Vector3(rx + rx, ry + ry, rz + rz);
        const rot2 = new Vector3(rx, rx, rw);
        const rot3 = new Vector3(1, ry, rz);
        const rot4 = Vector3.multiply(rot1, rot2);
        const rot5 = Vector3.multiply(rot1, rot3);
        return new _Vector2(
          x3 * (1 - rot5.y - rot5.z) + y * (rot4.y - rot4.z),
          x3 * (rot4.y + rot4.z) + y * (1 - rot4.x - rot5.z)
        );
      }).add([_Vector2, Quaternion, _Vector2], function(value, rotation, result) {
        const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
        const x3 = __privateGet(value, _x4), y = __privateGet(value, _y4);
        const rot1 = new Vector3(rx + rx, ry + ry, rz + rz);
        const rot2 = new Vector3(rx, rx, rw);
        const rot3 = new Vector3(1, ry, rz);
        const rot4 = Vector3.multiply(rot1, rot2);
        const rot5 = Vector3.multiply(rot1, rot3);
        __privateSet(result, _x4, x3 * (1 - rot5.y - rot5.z) + y * (rot4.y - rot4.z));
        __privateSet(result, _y4, x3 * (rot4.y + rot4.z) + y * (1 - rot4.x - rot5.z));
      }).add([I.T(_Vector2), Number, Matrix, I.T(_Vector2), Number, Number], function(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError("sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002");
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError("destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002");
        }
        for (let x3 = 0; x3 < length; x3++) {
          const position = sourceArray[sourceIndex + x3];
          const destination = destinationArray[destinationIndex + x3];
          __privateSet(destination, _x4, __privateGet(position, _x4) * matrix.m11 + __privateGet(position, _y4) * matrix.m21 + matrix.m41);
          __privateSet(destination, _y4, __privateGet(position, _x4) * matrix.m12 + __privateGet(position, _y4) * matrix.m22 + matrix.m42);
          destinationArray[destinationIndex + x3] = destination;
        }
      }).add([I.T(_Vector2), Number, Quaternion, I.T(_Vector2), Number, Number], function(sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        for (let x3 = 0; x3 < length; x3++) {
          const position = sourceArray[sourceIndex + x3];
          const destination = destinationArray[destinationIndex + x3];
          const v = _Vector2.transform(position, rotation);
          __privateSet(destination, _x4, __privateGet(v, _x4));
          __privateSet(destination, _y4, __privateGet(v, _y4));
          destinationArray[destinationIndex + x3] = destination;
        }
      }).add([I.T(_Vector2), Matrix, I.T(_Vector2)], function(sourceArray, matrix, destinationArray) {
        _Vector2.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
      }).add([I.T(_Vector2), Quaternion, I.T(_Vector2)], function(sourceArray, rotation, destinationArray) {
        _Vector2.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
      });
      return _Vector2.transform.apply(this, params);
    }
    static transformNormal(...params) {
      _Vector2.transformNormal = src_default().add([_Vector2, Matrix], function(normal, matrix) {
        return new _Vector2(
          __privateGet(normal, _x4) * matrix.m11 + __privateGet(normal, _y4) * matrix.m21,
          __privateGet(normal, _x4) * matrix.m12 + __privateGet(normal, _y4) * matrix.m22
        );
      }).add([_Vector2, Matrix, _Vector2], function(normal, matrix, result) {
        __privateSet(result, _x4, __privateGet(normal, _x4) * matrix.m11 + __privateGet(normal, _y4) * matrix.m21);
        __privateSet(result, _y4, __privateGet(normal, _x4) * matrix.m12 + __privateGet(normal, _y4) * matrix.m22);
      }).add([I.T(_Vector2), Number, Matrix, I.T(_Vector2), Number, Number], function(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray.length < sourceIndex + length) {
          throw new RangeError(`sourceArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceIndex + length\u3002`);
        }
        if (destinationArray.length < destinationIndex + length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E destinationIndex + length\u3002`);
        }
        for (let i = 0; i < length; i++) {
          destinationArray[destinationIndex + i] = _Vector2.transformNormal(sourceArray[sourceIndex + i], matrix);
        }
      }).add([I.T(_Vector2), Matrix, I.T(_Vector2)], function(sourceArray, matrix, destinationArray) {
        if (destinationArray.length < sourceArray.length) {
          throw new RangeError(`destinationArray \u7684\u957F\u5EA6\u5C0F\u4E8E sourceArray \u7684\u957F\u5EA6\u3002`);
        }
        for (let i = 0; i < sourceArray.length; i++) {
          destinationArray[i] = _Vector2.transformNormal(sourceArray[i], matrix);
        }
      });
      return _Vector2.transformNormal.apply(this, params);
    }
    static ["-"](...params) {
      _Vector2["-"] = src_default([_Vector2], function(value) {
        return _Vector2.negate(value);
      });
      return _Vector2["-"].apply(this, params);
    }
    ["+"](...params) {
      _Vector2.prototype["+"] = src_default([_Vector2], function(value) {
        return _Vector2.add(this, value);
      });
      return _Vector2.prototype["+"].apply(this, params);
    }
    ["-"](...params) {
      _Vector2.prototype["-"] = src_default([_Vector2], function(value) {
        return _Vector2.subtract(this, value);
      });
      return _Vector2.prototype["-"].apply(this, params);
    }
    ["*"](...params) {
      _Vector2.prototype["*"] = src_default([_Vector2], function(value) {
        return _Vector2.multiply(this, value);
      }).any(function(value) {
        return _Vector2.multiply(this, value);
      });
      return _Vector2.prototype["*"].apply(this, params);
    }
    ["/"](...params) {
      _Vector2.prototype["/"] = src_default([_Vector2], function(value) {
        return _Vector2.divide(this, value);
      }).any(function(value) {
        return _Vector2.divide(this, value);
      });
      return _Vector2.prototype["/"].apply(this, params);
    }
    ["=="](...params) {
      _Vector2.prototype["=="] = src_default([_Vector2], function(value) {
        return this.equals(value);
      });
      return _Vector2.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _Vector2.prototype["!="] = src_default([_Vector2], function(value) {
        return !this.equals(value);
      });
      return _Vector2.prototype["!="].apply(this, params);
    }
    length(...params) {
      _Vector2.prototype.length = src_default([], function() {
        return Math.sqrt(__privateGet(this, _x4) ** 2 + __privateGet(this, _y4) ** 2);
      });
      return _Vector2.prototype.length.apply(this, params);
    }
    lengthSquared(...params) {
      _Vector2.prototype.lengthSquared = src_default([], function() {
        return __privateGet(this, _x4) ** 2 + __privateGet(this, _y4) ** 2;
      });
      return _Vector2.prototype.lengthSquared.apply(this, params);
    }
    normalize(...params) {
      _Vector2.prototype.normalize = src_default([], function() {
        const val = 1 / this.length();
        __privateSet(this, _x4, __privateGet(this, _x4) * val);
        __privateSet(this, _y4, __privateGet(this, _y4) * val);
      });
      return _Vector2.prototype.normalize.apply(this, params);
    }
    equals(...params) {
      _Vector2.prototype.equals = src_default([_Vector2], function(other) {
        return __privateGet(this, _x4) === __privateGet(other, _x4) && __privateGet(this, _y4) === __privateGet(other, _y4);
      }).any(() => false);
      return _Vector2.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _Vector2.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Vector2.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Vector2 的 JSON 表示形式。
     * @returns 当前 Vector2 的 JSON 表示形式。
     */
    toJSON() {
      return { x: __privateGet(this, _x4), y: __privateGet(this, _y4) };
    }
  };
  _init10 = __decoratorStart(null);
  _x4 = new WeakMap();
  _y4 = new WeakMap();
  __decorateElement(_init10, 3, "x", _x_dec4, _Vector2);
  __decorateElement(_init10, 3, "y", _y_dec4, _Vector2);
  __decoratorMetadata(_init10, _Vector2);
  var Vector2 = _Vector2;

  // test/vector2.test.ts
  describe("Vector2", () => {
    describe("Static Properties", () => {
      it("zero should return (0, 0)", () => {
        const v = Vector2.zero;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
      });
      it("one should return (1, 1)", () => {
        const v = Vector2.one;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(1);
      });
      it("unitX should return (1, 0)", () => {
        const v = Vector2.unitX;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(0);
      });
      it("unitY should return (0, 1)", () => {
        const v = Vector2.unitY;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(1);
      });
    });
    describe("Constructor", () => {
      it("should default to (0, 0)", () => {
        const v = new Vector2();
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
      });
      it("should accept x and y", () => {
        const v = new Vector2(10, 20);
        expect(v.x).to.equal(10);
        expect(v.y).to.equal(20);
      });
      it("should accept a single value for both x and y", () => {
        const v = new Vector2(5);
        expect(v.x).to.equal(5);
        expect(v.y).to.equal(5);
      });
    });
    describe("Static Methods", () => {
      it("add", () => {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(3, 4);
        const result = Vector2.add(v1, v2);
        expect(result.x).to.equal(4);
        expect(result.y).to.equal(6);
      });
      it("barycentric", () => {
        const v1 = new Vector2(1, 1);
        const v2 = new Vector2(2, 3);
        const v3 = new Vector2(3, 1);
        let result = Vector2.barycentric(v1, v2, v3, 0, 0);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(1);
        result = Vector2.barycentric(v1, v2, v3, 1, 0);
        expect(result.x).to.equal(2);
        expect(result.y).to.equal(3);
      });
      it("catmullRom", () => {
        const v1 = new Vector2(0, 0);
        const v2 = new Vector2(1, 1);
        const v3 = new Vector2(2, 2);
        const v4 = new Vector2(3, 3);
        const result = Vector2.catmullRom(v1, v2, v3, v4, 0.5);
        expect(result.x).to.equal(1.5);
        expect(result.y).to.equal(1.5);
      });
      it("clamp", () => {
        const v = new Vector2(10, 20);
        const min = new Vector2(0, 0);
        const max = new Vector2(5, 5);
        const result = Vector2.clamp(v, min, max);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(5);
      });
      it("distance", () => {
        const v1 = new Vector2(0, 0);
        const v2 = new Vector2(3, 4);
        expect(Vector2.distance(v1, v2)).to.equal(5);
      });
      it("distanceSquared", () => {
        const v1 = new Vector2(0, 0);
        const v2 = new Vector2(3, 4);
        expect(Vector2.distanceSquared(v1, v2)).to.equal(25);
      });
      it("divide", () => {
        const v1 = new Vector2(10, 20);
        const v2 = new Vector2(2, 4);
        const result = Vector2.divide(v1, v2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(5);
      });
      it("divide by scalar", () => {
        const v1 = new Vector2(10, 20);
        const result = Vector2.divide(v1, 2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(10);
      });
      it("dot", () => {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(3, 4);
        expect(Vector2.dot(v1, v2)).to.equal(11);
      });
      it("lerp", () => {
        const v1 = new Vector2(0, 0);
        const v2 = new Vector2(10, 10);
        const result = Vector2.lerp(v1, v2, 0.5);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(5);
      });
      it("max", () => {
        const v1 = new Vector2(1, 10);
        const v2 = new Vector2(5, 5);
        const result = Vector2.max(v1, v2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(10);
      });
      it("min", () => {
        const v1 = new Vector2(1, 10);
        const v2 = new Vector2(5, 5);
        const result = Vector2.min(v1, v2);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(5);
      });
      it("multiply", () => {
        const v1 = new Vector2(2, 3);
        const v2 = new Vector2(4, 5);
        const result = Vector2.multiply(v1, v2);
        expect(result.x).to.equal(8);
        expect(result.y).to.equal(15);
      });
      it("multiply by scalar", () => {
        const v1 = new Vector2(2, 3);
        const result = Vector2.multiply(v1, 2);
        expect(result.x).to.equal(4);
        expect(result.y).to.equal(6);
      });
      it("negate", () => {
        const v = new Vector2(1, -2);
        const result = Vector2.negate(v);
        expect(result.x).to.equal(-1);
        expect(result.y).to.equal(2);
      });
      it("normalize", () => {
        const v = new Vector2(3, 4);
        const result = Vector2.normalize(v);
        expect(result.x).to.be.closeTo(0.6, 1e-4);
        expect(result.y).to.be.closeTo(0.8, 1e-4);
      });
      it("reflect", () => {
        const vector = new Vector2(1, 1);
        const normal = new Vector2(0, 1);
        const result = Vector2.reflect(vector, normal);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(-1);
      });
      it("smoothStep", () => {
        const v1 = new Vector2(0, 0);
        const v2 = new Vector2(1, 1);
        const result = Vector2.smoothStep(v1, v2, 0.5);
        expect(result.x).to.equal(0.5);
        expect(result.y).to.equal(0.5);
      });
      it("subtract", () => {
        const v1 = new Vector2(5, 6);
        const v2 = new Vector2(2, 3);
        const result = Vector2.subtract(v1, v2);
        expect(result.x).to.equal(3);
        expect(result.y).to.equal(3);
      });
    });
    describe("Instance Methods", () => {
      it("equals", () => {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(1, 2);
        const v3 = new Vector2(3, 4);
        expect(v1.equals(v2)).to.be.true;
        expect(v1.equals(v3)).to.be.false;
      });
      it("length", () => {
        const v = new Vector2(3, 4);
        expect(v.length()).to.equal(5);
      });
      it("lengthSquared", () => {
        const v = new Vector2(3, 4);
        expect(v.lengthSquared()).to.equal(25);
      });
      it("normalize", () => {
        const v = new Vector2(3, 4);
        v.normalize();
        expect(v.x).to.be.closeTo(0.6, 1e-4);
        expect(v.y).to.be.closeTo(0.8, 1e-4);
      });
    });
  });

  // test/matrix.test.ts
  describe("Matrix", () => {
    describe("Static Properties", () => {
      it("identity", () => {
        const m = Matrix.identity;
        expect(m.m11).to.equal(1);
        expect(m.m22).to.equal(1);
        expect(m.m33).to.equal(1);
        expect(m.m44).to.equal(1);
        expect(m.m12).to.equal(0);
      });
    });
    describe("Constructor", () => {
      it("should default to zero", () => {
        const m = new Matrix();
        expect(m.m11).to.equal(0);
      });
      it("should accept 16 values", () => {
        const m = new Matrix(
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16
        );
        expect(m.m11).to.equal(1);
        expect(m.m12).to.equal(2);
        expect(m.m44).to.equal(16);
      });
    });
    describe("Static Methods", () => {
      it("add", () => {
        const m1 = Matrix.identity;
        const m2 = Matrix.identity;
        const result = Matrix.add(m1, m2);
        expect(result.m11).to.equal(2);
        expect(result.m22).to.equal(2);
      });
      it("createLookAt", () => {
        const cameraPosition = new Vector3(0, 0, 10);
        const cameraTarget = new Vector3(0, 0, 0);
        const cameraUpVector = Vector3.up;
        const view = Matrix.createLookAt(cameraPosition, cameraTarget, cameraUpVector);
        expect(view.m11).to.be.closeTo(1, 1e-4);
        expect(view.m22).to.be.closeTo(1, 1e-4);
        expect(view.m33).to.be.closeTo(1, 1e-4);
        expect(view.m43).to.be.closeTo(-10, 1e-4);
      });
      it("createPerspectiveFieldOfView", () => {
        const fov = MathHelper.piOver4;
        const aspectRatio = 1.333;
        const nearPlaneDistance = 1;
        const farPlaneDistance = 1e3;
        const projection = Matrix.createPerspectiveFieldOfView(fov, aspectRatio, nearPlaneDistance, farPlaneDistance);
        expect(projection.m11).to.not.equal(0);
        expect(projection.m22).to.not.equal(0);
        expect(projection.m33).to.not.equal(0);
        expect(projection.m34).to.equal(-1);
      });
      it("createRotationX", () => {
        const angle = MathHelper.piOver2;
        const m = Matrix.createRotationX(angle);
        expect(m.m11).to.be.closeTo(1, 1e-4);
        expect(m.m22).to.be.closeTo(0, 1e-4);
        expect(m.m23).to.be.closeTo(1, 1e-4);
        expect(m.m32).to.be.closeTo(-1, 1e-4);
        expect(m.m33).to.be.closeTo(0, 1e-4);
      });
      it("createScale", () => {
        const scale = new Vector3(2, 3, 4);
        const m = Matrix.createScale(scale);
        expect(m.m11).to.equal(2);
        expect(m.m22).to.equal(3);
        expect(m.m33).to.equal(4);
        expect(m.m44).to.equal(1);
      });
      it("createTranslation", () => {
        const position = new Vector3(10, 20, 30);
        const m = Matrix.createTranslation(position);
        expect(m.m11).to.equal(1);
        expect(m.m41).to.equal(10);
        expect(m.m42).to.equal(20);
        expect(m.m43).to.equal(30);
      });
      it("invert", () => {
        const m = Matrix.createScale(new Vector3(2, 2, 2));
        const inv = Matrix.invert(m);
        expect(inv.m11).to.equal(0.5);
        expect(inv.m22).to.equal(0.5);
        expect(inv.m33).to.equal(0.5);
      });
      it("multiply", () => {
        const m1 = Matrix.createTranslation(new Vector3(10, 0, 0));
        const m2 = Matrix.createTranslation(new Vector3(0, 20, 0));
        const result = Matrix.multiply(m1, m2);
        expect(result.m41).to.equal(10);
        expect(result.m42).to.equal(20);
      });
      it("transpose", () => {
        const m = new Matrix(
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16
        );
        const t = Matrix.transpose(m);
        expect(t.m12).to.equal(5);
        expect(t.m21).to.equal(2);
      });
    });
  });

  // test/vector3.test.ts
  describe("Vector3", () => {
    describe("Static Properties", () => {
      it("zero should return (0, 0, 0)", () => {
        const v = Vector3.zero;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
      });
      it("one should return (1, 1, 1)", () => {
        const v = Vector3.one;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(1);
        expect(v.z).to.equal(1);
      });
      it("unitX should return (1, 0, 0)", () => {
        const v = Vector3.unitX;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
      });
      it("unitY should return (0, 1, 0)", () => {
        const v = Vector3.unitY;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(1);
        expect(v.z).to.equal(0);
      });
      it("unitZ should return (0, 0, 1)", () => {
        const v = Vector3.unitZ;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(1);
      });
      it("up should return (0, 1, 0)", () => {
        const v = Vector3.up;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(1);
        expect(v.z).to.equal(0);
      });
      it("down should return (0, -1, 0)", () => {
        const v = Vector3.down;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(-1);
        expect(v.z).to.equal(0);
      });
      it("right should return (1, 0, 0)", () => {
        const v = Vector3.right;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
      });
      it("left should return (-1, 0, 0)", () => {
        const v = Vector3.left;
        expect(v.x).to.equal(-1);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
      });
      it("forward should return (0, 0, -1)", () => {
        const v = Vector3.forward;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(-1);
      });
      it("backward should return (0, 0, 1)", () => {
        const v = Vector3.backward;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(1);
      });
    });
    describe("Constructor", () => {
      it("should default to (0, 0, 0)", () => {
        const v = new Vector3();
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
      });
      it("should accept single value", () => {
        const v = new Vector3(5);
        expect(v.x).to.equal(5);
        expect(v.y).to.equal(5);
        expect(v.z).to.equal(5);
      });
      it("should accept x, y, z", () => {
        const v = new Vector3(1, 2, 3);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
      });
      it("should accept Vector2 and z", () => {
        const v2 = new Vector2(1, 2);
        const v = new Vector3(v2, 3);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
      });
    });
    describe("Static Methods", () => {
      it("add", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const result = Vector3.add(v1, v2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(7);
        expect(result.z).to.equal(9);
      });
      it("cross", () => {
        const v1 = new Vector3(1, 0, 0);
        const v2 = new Vector3(0, 1, 0);
        const result = Vector3.cross(v1, v2);
        expect(result.x).to.equal(0);
        expect(result.y).to.equal(0);
        expect(result.z).to.equal(1);
      });
      it("distance", () => {
        const v1 = new Vector3(0, 0, 0);
        const v2 = new Vector3(0, 3, 4);
        expect(Vector3.distance(v1, v2)).to.equal(5);
      });
      it("distanceSquared", () => {
        const v1 = new Vector3(0, 0, 0);
        const v2 = new Vector3(0, 3, 4);
        expect(Vector3.distanceSquared(v1, v2)).to.equal(25);
      });
      it("dot", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        expect(Vector3.dot(v1, v2)).to.equal(32);
      });
      it("lerp", () => {
        const v1 = new Vector3(0, 0, 0);
        const v2 = new Vector3(10, 10, 10);
        const result = Vector3.lerp(v1, v2, 0.5);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(5);
        expect(result.z).to.equal(5);
      });
      it("max", () => {
        const v1 = new Vector3(1, 10, 2);
        const v2 = new Vector3(5, 5, 5);
        const result = Vector3.max(v1, v2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(10);
        expect(result.z).to.equal(5);
      });
      it("min", () => {
        const v1 = new Vector3(1, 10, 2);
        const v2 = new Vector3(5, 5, 5);
        const result = Vector3.min(v1, v2);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(5);
        expect(result.z).to.equal(2);
      });
      it("multiply", () => {
        const v1 = new Vector3(2, 3, 4);
        const v2 = new Vector3(5, 6, 7);
        const result = Vector3.multiply(v1, v2);
        expect(result.x).to.equal(10);
        expect(result.y).to.equal(18);
        expect(result.z).to.equal(28);
      });
      it("multiply scalar", () => {
        const v1 = new Vector3(2, 3, 4);
        const result = Vector3.multiply(v1, 2);
        expect(result.x).to.equal(4);
        expect(result.y).to.equal(6);
        expect(result.z).to.equal(8);
      });
      it("negate", () => {
        const v = new Vector3(1, -2, 3);
        const result = Vector3.negate(v);
        expect(result.x).to.equal(-1);
        expect(result.y).to.equal(2);
        expect(result.z).to.equal(-3);
      });
      it("normalize", () => {
        const v = new Vector3(0, 3, 4);
        const result = Vector3.normalize(v);
        expect(result.x).to.equal(0);
        expect(result.y).to.be.closeTo(0.6, 1e-4);
        expect(result.z).to.be.closeTo(0.8, 1e-4);
      });
      it("reflect", () => {
        const vector = new Vector3(1, 1, 0);
        const normal = new Vector3(0, 1, 0);
        const result = Vector3.reflect(vector, normal);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(-1);
        expect(result.z).to.equal(0);
      });
      it("subtract", () => {
        const v1 = new Vector3(5, 6, 7);
        const v2 = new Vector3(2, 3, 4);
        const result = Vector3.subtract(v1, v2);
        expect(result.x).to.equal(3);
        expect(result.y).to.equal(3);
        expect(result.z).to.equal(3);
      });
    });
    describe("Instance Methods", () => {
      it("equals", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(1, 2, 3);
        const v3 = new Vector3(4, 5, 6);
        expect(v1.equals(v2)).to.be.true;
        expect(v1.equals(v3)).to.be.false;
      });
      it("length", () => {
        const v = new Vector3(0, 3, 4);
        expect(v.length()).to.equal(5);
      });
      it("lengthSquared", () => {
        const v = new Vector3(0, 3, 4);
        expect(v.lengthSquared()).to.equal(25);
      });
      it("normalize", () => {
        const v = new Vector3(0, 3, 4);
        v.normalize();
        expect(v.x).to.equal(0);
        expect(v.y).to.be.closeTo(0.6, 1e-4);
        expect(v.z).to.be.closeTo(0.8, 1e-4);
      });
    });
  });

  // test/vector4.test.ts
  describe("Vector4", () => {
    describe("Static Properties", () => {
      it("zero should return (0, 0, 0, 0)", () => {
        const v = Vector4.zero;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
        expect(v.w).to.equal(0);
      });
      it("one should return (1, 1, 1, 1)", () => {
        const v = Vector4.one;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(1);
        expect(v.z).to.equal(1);
        expect(v.w).to.equal(1);
      });
      it("unitX should return (1, 0, 0, 0)", () => {
        const v = Vector4.unitX;
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
        expect(v.w).to.equal(0);
      });
      it("unitY should return (0, 1, 0, 0)", () => {
        const v = Vector4.unitY;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(1);
        expect(v.z).to.equal(0);
        expect(v.w).to.equal(0);
      });
      it("unitZ should return (0, 0, 1, 0)", () => {
        const v = Vector4.unitZ;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(1);
        expect(v.w).to.equal(0);
      });
      it("unitW should return (0, 0, 0, 1)", () => {
        const v = Vector4.unitW;
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
        expect(v.w).to.equal(1);
      });
    });
    describe("Constructor", () => {
      it("should default to (0, 0, 0, 0)", () => {
        const v = new Vector4();
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
        expect(v.z).to.equal(0);
        expect(v.w).to.equal(0);
      });
      it("should accept single value", () => {
        const v = new Vector4(5);
        expect(v.x).to.equal(5);
        expect(v.y).to.equal(5);
        expect(v.z).to.equal(5);
        expect(v.w).to.equal(5);
      });
      it("should accept x, y, z, w", () => {
        const v = new Vector4(1, 2, 3, 4);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
        expect(v.w).to.equal(4);
      });
      it("should accept Vector2, z, w", () => {
        const v2 = new Vector2(1, 2);
        const v = new Vector4(v2, 3, 4);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
        expect(v.w).to.equal(4);
      });
      it("should accept Vector3, w", () => {
        const v3 = new Vector3(1, 2, 3);
        const v = new Vector4(v3, 4);
        expect(v.x).to.equal(1);
        expect(v.y).to.equal(2);
        expect(v.z).to.equal(3);
        expect(v.w).to.equal(4);
      });
    });
    describe("Static Methods", () => {
      it("add", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const result = Vector4.add(v1, v2);
        expect(result.x).to.equal(6);
        expect(result.y).to.equal(8);
        expect(result.z).to.equal(10);
        expect(result.w).to.equal(12);
      });
      it("distance", () => {
        const v1 = new Vector4(0, 0, 0, 0);
        const v2 = new Vector4(1, 1, 1, 1);
        expect(Vector4.distance(v1, v2)).to.equal(2);
      });
      it("distanceSquared", () => {
        const v1 = new Vector4(0, 0, 0, 0);
        const v2 = new Vector4(1, 1, 1, 1);
        expect(Vector4.distanceSquared(v1, v2)).to.equal(4);
      });
      it("dot", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(1, 1, 1, 1);
        expect(Vector4.dot(v1, v2)).to.equal(10);
      });
      it("lerp", () => {
        const v1 = new Vector4(0, 0, 0, 0);
        const v2 = new Vector4(10, 10, 10, 10);
        const result = Vector4.lerp(v1, v2, 0.5);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(5);
        expect(result.z).to.equal(5);
        expect(result.w).to.equal(5);
      });
      it("max", () => {
        const v1 = new Vector4(1, 10, 2, 20);
        const v2 = new Vector4(5, 5, 5, 5);
        const result = Vector4.max(v1, v2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(10);
        expect(result.z).to.equal(5);
        expect(result.w).to.equal(20);
      });
      it("min", () => {
        const v1 = new Vector4(1, 10, 2, 20);
        const v2 = new Vector4(5, 5, 5, 5);
        const result = Vector4.min(v1, v2);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(5);
        expect(result.z).to.equal(2);
        expect(result.w).to.equal(5);
      });
      it("multiply", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(2, 2, 2, 2);
        const result = Vector4.multiply(v1, v2);
        expect(result.x).to.equal(2);
        expect(result.y).to.equal(4);
        expect(result.z).to.equal(6);
        expect(result.w).to.equal(8);
      });
      it("multiply scalar", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const result = Vector4.multiply(v1, 2);
        expect(result.x).to.equal(2);
        expect(result.y).to.equal(4);
        expect(result.z).to.equal(6);
        expect(result.w).to.equal(8);
      });
      it("negate", () => {
        const v = new Vector4(1, -2, 3, -4);
        const result = Vector4.negate(v);
        expect(result.x).to.equal(-1);
        expect(result.y).to.equal(2);
        expect(result.z).to.equal(-3);
        expect(result.w).to.equal(4);
      });
      it("normalize", () => {
        const v = new Vector4(2, 2, 2, 2);
        const result = Vector4.normalize(v);
        expect(result.x).to.equal(0.5);
        expect(result.y).to.equal(0.5);
        expect(result.z).to.equal(0.5);
        expect(result.w).to.equal(0.5);
      });
      it("subtract", () => {
        const v1 = new Vector4(5, 6, 7, 8);
        const v2 = new Vector4(1, 2, 3, 4);
        const result = Vector4.subtract(v1, v2);
        expect(result.x).to.equal(4);
        expect(result.y).to.equal(4);
        expect(result.z).to.equal(4);
        expect(result.w).to.equal(4);
      });
    });
    describe("Instance Methods", () => {
      it("equals", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(1, 2, 3, 4);
        const v3 = new Vector4(5, 6, 7, 8);
        expect(v1.equals(v2)).to.be.true;
        expect(v1.equals(v3)).to.be.false;
      });
      it("length", () => {
        const v = new Vector4(1, 1, 1, 1);
        expect(v.length()).to.equal(2);
      });
      it("lengthSquared", () => {
        const v = new Vector4(1, 1, 1, 1);
        expect(v.lengthSquared()).to.equal(4);
      });
    });
  });

  // test/quaternion.test.ts
  describe("Quaternion", () => {
    describe("Static Properties", () => {
      it("identity", () => {
        const q = Quaternion.identity;
        expect(q.x).to.equal(0);
        expect(q.y).to.equal(0);
        expect(q.z).to.equal(0);
        expect(q.w).to.equal(1);
      });
    });
    describe("Constructor", () => {
      it("should default to (0, 0, 0, 0)", () => {
        const q = new Quaternion();
        expect(q.x).to.equal(0);
        expect(q.y).to.equal(0);
        expect(q.z).to.equal(0);
        expect(q.w).to.equal(0);
      });
      it("should accept x, y, z, w", () => {
        const q = new Quaternion(1, 2, 3, 4);
        expect(q.x).to.equal(1);
        expect(q.y).to.equal(2);
        expect(q.z).to.equal(3);
        expect(q.w).to.equal(4);
      });
      it("should accept Vector3 and w", () => {
        const v = new Vector3(1, 2, 3);
        const q = new Quaternion(v, 4);
        expect(q.x).to.equal(1);
        expect(q.y).to.equal(2);
        expect(q.z).to.equal(3);
        expect(q.w).to.equal(4);
      });
    });
    describe("Static Methods", () => {
      it("add", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const result = Quaternion.add(q1, q2);
        expect(result.x).to.equal(6);
        expect(result.y).to.equal(8);
        expect(result.z).to.equal(10);
        expect(result.w).to.equal(12);
      });
      it("concatenate", () => {
        const q1 = Quaternion.createFromAxisAngle(Vector3.unitY, MathHelper.piOver2);
        const q2 = Quaternion.createFromAxisAngle(Vector3.unitY, MathHelper.piOver2);
        const result = Quaternion.concatenate(q1, q2);
        expect(result.w).to.be.closeTo(0, 1e-4);
        expect(result.y).to.be.closeTo(1, 1e-4);
      });
      it("conjugate", () => {
        const q = new Quaternion(1, 2, 3, 4);
        const result = Quaternion.conjugate(q);
        expect(result.x).to.equal(-1);
        expect(result.y).to.equal(-2);
        expect(result.z).to.equal(-3);
        expect(result.w).to.equal(4);
      });
      it("createFromAxisAngle", () => {
        const axis = Vector3.unitX;
        const angle = MathHelper.piOver2;
        const q = Quaternion.createFromAxisAngle(axis, angle);
        expect(q.x).to.be.closeTo(0.7071, 1e-4);
        expect(q.y).to.equal(0);
        expect(q.z).to.equal(0);
        expect(q.w).to.be.closeTo(0.7071, 1e-4);
      });
      it("createFromRotationMatrix", () => {
        const m = Matrix.createRotationZ(MathHelper.piOver2);
        const q = Quaternion.createFromRotationMatrix(m);
        expect(q.x).to.equal(0);
        expect(q.y).to.equal(0);
        expect(q.z).to.be.closeTo(0.7071, 1e-4);
        expect(q.w).to.be.closeTo(0.7071, 1e-4);
      });
      it("createFromYawPitchRoll", () => {
        const yaw = MathHelper.piOver2;
        const pitch = 0;
        const roll = 0;
        const q = Quaternion.createFromYawPitchRoll(yaw, pitch, roll);
        expect(q.x).to.equal(0);
        expect(q.y).to.be.closeTo(0.7071, 1e-4);
        expect(q.z).to.equal(0);
        expect(q.w).to.be.closeTo(0.7071, 1e-4);
      });
      it("dot", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(1, 1, 1, 1);
        expect(Quaternion.dot(q1, q2)).to.equal(10);
      });
      it("inverse", () => {
        const q = Quaternion.createFromAxisAngle(Vector3.unitX, MathHelper.piOver2);
        const inv = Quaternion.inverse(q);
        expect(inv.x).to.be.closeTo(-0.7071, 1e-4);
        expect(inv.w).to.be.closeTo(0.7071, 1e-4);
      });
      it("lerp", () => {
        const q1 = new Quaternion(0, 0, 0, 1);
        const q2 = new Quaternion(1, 0, 0, 0);
        const result = Quaternion.lerp(q1, q2, 0.5);
        expect(result.x).to.be.closeTo(0.7071, 1e-4);
        expect(result.w).to.be.closeTo(0.7071, 1e-4);
      });
      it("slerp", () => {
        const q1 = Quaternion.createFromAxisAngle(Vector3.unitZ, 0);
        const q2 = Quaternion.createFromAxisAngle(Vector3.unitZ, MathHelper.piOver2);
        const result = Quaternion.slerp(q1, q2, 0.5);
        expect(result.z).to.be.closeTo(0.3826, 1e-4);
        expect(result.w).to.be.closeTo(0.9238, 1e-4);
      });
      it("multiply", () => {
        const q1 = new Quaternion(1, 0, 0, 1);
        const q2 = new Quaternion(0, 1, 0, 1);
        const result = Quaternion.multiply(q1, q2);
        expect(result.x).to.equal(1);
        expect(result.y).to.equal(1);
        expect(result.z).to.equal(1);
        expect(result.w).to.equal(1);
      });
    });
    describe("Instance Methods", () => {
      it("length", () => {
        const q = new Quaternion(1, 1, 1, 1);
        expect(q.length()).to.equal(2);
      });
      it("lengthSquared", () => {
        const q = new Quaternion(1, 1, 1, 1);
        expect(q.lengthSquared()).to.equal(4);
      });
      it("normalize", () => {
        const q = new Quaternion(1, 1, 1, 1);
        q.normalize();
        expect(q.x).to.equal(0.5);
        expect(q.y).to.equal(0.5);
        expect(q.z).to.equal(0.5);
        expect(q.w).to.equal(0.5);
      });
    });
  });

  // test/plane.test.ts
  describe("Plane", () => {
    describe("Constructor", () => {
      it("should default to zero normal and 0 d", () => {
        const p = new Plane();
        expect(p.normal.x).to.equal(0);
        expect(p.normal.y).to.equal(0);
        expect(p.normal.z).to.equal(0);
        expect(p.d).to.equal(0);
      });
      it("should accept a, b, c, d", () => {
        const p = new Plane(1, 2, 3, 4);
        expect(p.normal.x).to.equal(1);
        expect(p.normal.y).to.equal(2);
        expect(p.normal.z).to.equal(3);
        expect(p.d).to.equal(4);
      });
      it("should accept Vector3 and d", () => {
        const normal = new Vector3(1, 2, 3);
        const p = new Plane(normal, 4);
        expect(p.normal.x).to.equal(1);
        expect(p.normal.y).to.equal(2);
        expect(p.normal.z).to.equal(3);
        expect(p.d).to.equal(4);
      });
      it("should accept Vector4", () => {
        const v = new Vector4(1, 2, 3, 4);
        const p = new Plane(v);
        expect(p.normal.x).to.equal(1);
        expect(p.normal.y).to.equal(2);
        expect(p.normal.z).to.equal(3);
        expect(p.d).to.equal(4);
      });
      it("should accept 3 points", () => {
        const p1 = new Vector3(0, 0, 0);
        const p2 = new Vector3(1, 0, 0);
        const p3 = new Vector3(0, 1, 0);
        const p = new Plane(p1, p2, p3);
        expect(p.normal.x).to.equal(0);
        expect(p.normal.y).to.equal(0);
        expect(p.normal.z).to.equal(1);
        expect(p.d).to.equal(0);
      });
    });
    describe("Static Methods", () => {
      it("normalize", () => {
        const p = new Plane(0, 10, 0, 20);
        const normalized = Plane.normalize(p);
        expect(normalized.normal.y).to.equal(1);
        expect(normalized.d).to.equal(2);
      });
      it("transform", () => {
        const p = new Plane(0, 1, 0, 0);
        const q = Quaternion.createFromAxisAngle(Vector3.unitX, MathHelper.piOver2);
        const result = Plane.transform(p, q);
        expect(result.normal.y).to.be.closeTo(0, 1e-4);
        expect(result.normal.z).to.be.closeTo(1, 1e-4);
      });
    });
    describe("Instance Methods", () => {
      it("dot", () => {
        const p = new Plane(1, 2, 3, 4);
        const v = new Vector4(1, 1, 1, 1);
        expect(p.dot(v)).to.equal(10);
      });
      it("dotCoordinate", () => {
        const p = new Plane(0, 1, 0, -10);
        const v = new Vector3(0, 20, 0);
        expect(p.dotCoordinate(v)).to.equal(10);
      });
      it("dotNormal", () => {
        const p = new Plane(0, 1, 0, -10);
        const v = new Vector3(0, 1, 0);
        expect(p.dotNormal(v)).to.equal(1);
      });
      it("intersects BoundingBox", () => {
        const p = new Plane(0, 1, 0, 0);
        const box = new BoundingBox(new Vector3(-1, -1, -1), new Vector3(1, 1, 1));
        expect(p.intersects(box)).to.equal(PlaneIntersectionType.intersecting);
        const p2 = new Plane(0, 1, 0, -10);
        expect(p2.intersects(box)).to.equal(PlaneIntersectionType.back);
      });
      it("intersects BoundingSphere", () => {
        const p = new Plane(0, 1, 0, 0);
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 1);
        expect(p.intersects(sphere)).to.equal(PlaneIntersectionType.intersecting);
        const p2 = new Plane(0, 1, 0, -10);
        expect(p2.intersects(sphere)).to.equal(PlaneIntersectionType.back);
      });
      it("normalize", () => {
        const p = new Plane(0, 10, 0, 20);
        p.normalize();
        expect(p.normal.y).to.equal(1);
        expect(p.d).to.equal(2);
      });
    });
  });

  // src/point.ts
  var CONSTRUCTOR_SYMBOL11 = /* @__PURE__ */ Symbol("constructor");
  var _y_dec5, _x_dec5, _x5, _init11, _y5;
  var _Point = class _Point {
    constructor(...params) {
      __runInitializers(_init11, 5, this);
      /**
       * Point 的 x 方向坐标。
       */
      __privateAdd(this, _x5, 0);
      /**
       * Point 的 y 方向坐标。
       */
      __privateAdd(this, _y5, 0);
      _Point[CONSTRUCTOR_SYMBOL11].apply(this, params);
    }
    /**
     * 返回点 (0,0)。
     */
    static get zero() {
      return new _Point(0, 0);
    }
    /**
     * 获取 Point 的 x 方向坐标。
     */
    get x() {
      return __privateGet(this, _x5);
    }
    set x(value) {
      __privateSet(this, _x5, value | 0);
    }
    /**
     * 获取 Point 的 y 方向坐标。
     */
    get y() {
      return __privateGet(this, _y5);
    }
    set y(value) {
      __privateSet(this, _y5, value | 0);
    }
    /**
     * 结构化构造函数。
     * @returns Point 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return _Point.zero;
    }
    static [(_x_dec5 = [x2(Number)], _y_dec5 = [x2(Number)], CONSTRUCTOR_SYMBOL11)](...params) {
      _Point[CONSTRUCTOR_SYMBOL11] = src_default().add([], function() {
      }).add([Number, Number], function(x3, y) {
        this.x = x3;
        this.y = y;
      });
      return _Point[CONSTRUCTOR_SYMBOL11].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _x5);
      yield __privateGet(this, _y5);
    }
    static ["-"](...params) {
      _Point["-"] = src_default([_Point], function(other) {
        return new _Point(-other.x, -other.y);
      });
      return _Point["-"].apply(this, params);
    }
    ["+"](...params) {
      _Point.prototype["+"] = src_default([_Point], function(other) {
        return new _Point(__privateGet(this, _x5) + __privateGet(other, _x5), __privateGet(this, _y5) + __privateGet(other, _y5));
      });
      return _Point.prototype["+"].apply(this, params);
    }
    ["-"](...params) {
      _Point.prototype["-"] = src_default([_Point], function(other) {
        return new _Point(__privateGet(this, _x5) - __privateGet(other, _x5), __privateGet(this, _y5) - __privateGet(other, _y5));
      });
      return _Point.prototype["-"].apply(this, params);
    }
    ["*"](...params) {
      _Point.prototype["*"] = src_default().add([Number], function(scalar) {
        return new _Point(__privateGet(this, _x5) * scalar, __privateGet(this, _y5) * scalar);
      }).add([_Point], function(other) {
        return new _Point(__privateGet(this, _x5) * __privateGet(other, _x5), __privateGet(this, _y5) * __privateGet(other, _y5));
      });
      return _Point.prototype["*"].apply(this, params);
    }
    ["/"](...params) {
      _Point.prototype["/"] = src_default().add([Number], function(scalar) {
        return new _Point(__privateGet(this, _x5) / scalar, __privateGet(this, _y5) / scalar);
      }).add([_Point], function(other) {
        return new _Point(__privateGet(this, _x5) / other.x, __privateGet(this, _y5) / other.y);
      });
      return _Point.prototype["/"].apply(this, params);
    }
    ["=="](...params) {
      _Point.prototype["=="] = src_default([_Point], function(other) {
        return this.equals(other);
      }).any(() => false);
      return _Point.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _Point.prototype["!="] = src_default([_Point], function(other) {
        return !this.equals(other);
      }).any(() => true);
      return _Point.prototype["!="].apply(this, params);
    }
    equals(...params) {
      _Point.prototype.equals = src_default([_Point], function(other) {
        return __privateGet(this, _x5) === __privateGet(other, _x5) && __privateGet(this, _y5) === __privateGet(other, _y5);
      }).any(() => false);
      return _Point.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _Point.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Point.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Point 的 JSON 表示形式。
     * @returns 当前 Point 的 JSON 表示形式。
     */
    toJSON() {
      return {
        x: this.x,
        y: this.y
      };
    }
  };
  _init11 = __decoratorStart(null);
  _x5 = new WeakMap();
  _y5 = new WeakMap();
  __decorateElement(_init11, 3, "x", _x_dec5, _Point);
  __decorateElement(_init11, 3, "y", _y_dec5, _Point);
  __decoratorMetadata(_init11, _Point);
  var Point = _Point;

  // test/point.test.ts
  describe("Point", () => {
    describe("Static Properties", () => {
      it("zero should return (0, 0)", () => {
        const p = Point.zero;
        expect(p.x).to.equal(0);
        expect(p.y).to.equal(0);
      });
    });
    describe("Constructor", () => {
      it("should default to (0, 0)", () => {
        const p = new Point();
        expect(p.x).to.equal(0);
        expect(p.y).to.equal(0);
      });
      it("should accept x, y", () => {
        const p = new Point(10, 20);
        expect(p.x).to.equal(10);
        expect(p.y).to.equal(20);
      });
      it("should truncate floating point values", () => {
        const p = new Point(10.5, 20.9);
        expect(p.x).to.equal(10);
        expect(p.y).to.equal(20);
      });
    });
    describe("Static Methods", () => {
      it('negate (static ["-"])', () => {
        const p = new Point(10, 20);
        const result = Point["-"](p);
        expect(result.x).to.equal(-10);
        expect(result.y).to.equal(-20);
      });
    });
    describe("Instance Methods", () => {
      it('add (["+"])', () => {
        const p1 = new Point(10, 20);
        const p2 = new Point(5, 5);
        const result = p1["+"](p2);
        expect(result.x).to.equal(15);
        expect(result.y).to.equal(25);
      });
      it('subtract (["-"])', () => {
        const p1 = new Point(10, 20);
        const p2 = new Point(5, 5);
        const result = p1["-"](p2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(15);
      });
      it('multiply (["*"])', () => {
        const p1 = new Point(10, 20);
        const p2 = new Point(2, 3);
        const result = p1["*"](p2);
        expect(result.x).to.equal(20);
        expect(result.y).to.equal(60);
        const resultScalar = p1["*"](2);
        expect(resultScalar.x).to.equal(20);
        expect(resultScalar.y).to.equal(40);
      });
      it('divide (["/"])', () => {
        const p1 = new Point(10, 20);
        const p2 = new Point(2, 5);
        const result = p1["/"](p2);
        expect(result.x).to.equal(5);
        expect(result.y).to.equal(4);
        const resultScalar = p1["/"](2);
        expect(resultScalar.x).to.equal(5);
        expect(resultScalar.y).to.equal(10);
      });
      it("equals", () => {
        const p1 = new Point(10, 20);
        const p2 = new Point(10, 20);
        const p3 = new Point(5, 5);
        expect(p1.equals(p2)).to.be.true;
        expect(p1.equals(p3)).to.be.false;
      });
    });
  });

  // src/rectangle.ts
  var CONSTRUCTOR_SYMBOL12 = /* @__PURE__ */ Symbol("constructor");
  var _size_dec, _location_dec, _height_dec, _width_dec, _y_dec6, _x_dec6, _x6, _init12, _y6, _width, _height;
  var _Rectangle = class _Rectangle {
    constructor(...params) {
      __runInitializers(_init12, 5, this);
      /**
       * 矩形的 x 方向坐标。
       */
      __privateAdd(this, _x6, 0);
      /**
       * 矩形的 y 方向坐标。
       */
      __privateAdd(this, _y6, 0);
      /**
       * 矩形的宽度。
       */
      __privateAdd(this, _width, 0);
      /**
       * 矩形的高度。
       */
      __privateAdd(this, _height, 0);
      _Rectangle[CONSTRUCTOR_SYMBOL12].apply(this, params);
    }
    /**
     * 返回所有值均设置为零的 Rectangle。
     */
    static get empty() {
      return new _Rectangle();
    }
    /**
     * 获取矩形的 x 方向坐标。
     */
    get x() {
      return __privateGet(this, _x6);
    }
    set x(value) {
      __privateSet(this, _x6, value | 0);
    }
    /**
     * 获取矩形的 y 方向坐标。
     */
    get y() {
      return __privateGet(this, _y6);
    }
    set y(value) {
      __privateSet(this, _y6, value | 0);
    }
    /**
     * 获取矩形的宽度。
     */
    get width() {
      return __privateGet(this, _width);
    }
    set width(value) {
      __privateSet(this, _width, value | 0);
    }
    /**
     * 获取矩形的高度。
     */
    get height() {
      return __privateGet(this, _height);
    }
    set height(value) {
      __privateSet(this, _height, value | 0);
    }
    /**
     * 获取矩形的位置。
     */
    get location() {
      return new Point(__privateGet(this, _x6), __privateGet(this, _y6));
    }
    set location(value) {
      __privateSet(this, _x6, value.x | 0);
      __privateSet(this, _y6, value.y | 0);
    }
    /**
     * 获取矩形的大小。
     */
    get size() {
      return new Point(__privateGet(this, _width), __privateGet(this, _height));
    }
    set size(value) {
      __privateSet(this, _width, value.x | 0);
      __privateSet(this, _height, value.y | 0);
    }
    /**
     * 获取一个指示 Rectangle 是否为空的值。
     */
    get isEmpty() {
      return !__privateGet(this, _x6) && !__privateGet(this, _y6) && !__privateGet(this, _width) && !__privateGet(this, _height);
    }
    /**
     * 返回矩形底部的 y 方向坐标。
     */
    get bottom() {
      return __privateGet(this, _y6) + __privateGet(this, _height);
    }
    /**
     * 获取指定矩形中心的 Point。
     */
    get center() {
      return new Point(__privateGet(this, _x6) + __privateGet(this, _width) / 2, __privateGet(this, _y6) + __privateGet(this, _height) / 2);
    }
    /**
     * 返回矩形左边的 x 方向坐标。
     */
    get left() {
      return __privateGet(this, _x6);
    }
    /**
     * 返回矩形右侧的 x 方向坐标。
     */
    get right() {
      return __privateGet(this, _x6) + __privateGet(this, _width);
    }
    /**
     * 返回矩形顶部的 y 方向坐标。
     */
    get top() {
      return __privateGet(this, _y6);
    }
    /**
     * 结构化构造函数。
     * @returns Rectangle 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return _Rectangle.empty;
    }
    static [(_x_dec6 = [x2(Number)], _y_dec6 = [x2(Number)], _width_dec = [x2(Number)], _height_dec = [x2(Number)], _location_dec = [H(() => Point)], _size_dec = [H(() => Point)], CONSTRUCTOR_SYMBOL12)](...params) {
      _Rectangle[CONSTRUCTOR_SYMBOL12] = src_default().add([], function() {
      }).add([Number, Number, Number, Number], function(x3, y, width, height) {
        this.x = x3;
        this.y = y;
        this.width = width;
        this.height = height;
      });
      return _Rectangle[CONSTRUCTOR_SYMBOL12].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _x6);
      yield __privateGet(this, _y6);
      yield __privateGet(this, _width);
      yield __privateGet(this, _height);
    }
    static intersect(...params) {
      _Rectangle.intersect = src_default().add([_Rectangle, _Rectangle], function(value1, value2) {
        if (value1.intersects(value2)) {
          const x1 = __privateGet(value1, _x6), y1 = __privateGet(value1, _y6), w1 = __privateGet(value1, _width), h1 = __privateGet(value1, _height);
          const x22 = __privateGet(value2, _x6), y2 = __privateGet(value2, _y6), w2 = __privateGet(value2, _width), h2 = __privateGet(value2, _height);
          const rightSide = Math.min(x1 + w1, x22 + w2);
          const leftSide = Math.max(x1, x22);
          const topSide = Math.max(y1, y2);
          const bottomSide = Math.min(y1 + h1, y2 + h2);
          return new _Rectangle(leftSide, topSide, rightSide - leftSide, bottomSide - topSide);
        }
        return _Rectangle.empty;
      }).add([_Rectangle, _Rectangle, _Rectangle], function(value1, value2, result) {
        if (value1.intersects(value2)) {
          const x1 = __privateGet(value1, _x6), y1 = __privateGet(value1, _y6), w1 = __privateGet(value1, _width), h1 = __privateGet(value1, _height);
          const x22 = __privateGet(value2, _x6), y2 = __privateGet(value2, _y6), w2 = __privateGet(value2, _width), h2 = __privateGet(value2, _height);
          const rightSide = Math.min(x1 + w1, x22 + w2);
          const leftSide = Math.max(x1, x22);
          const topSide = Math.max(y1, y2);
          const bottomSide = Math.min(y1 + h1, y2 + h2);
          result.x = leftSide;
          result.y = topSide;
          result.width = rightSide - leftSide;
          result.height = bottomSide - topSide;
        } else {
          result.x = 0;
          result.y = 0;
          result.width = 0;
          result.height = 0;
        }
      });
      return _Rectangle.intersect.apply(this, params);
    }
    static union(...params) {
      _Rectangle.union = src_default([_Rectangle, _Rectangle], function(value1, value2) {
        const x1 = __privateGet(value1, _x6), y1 = __privateGet(value1, _y6), right1 = value1.right, bottom1 = value1.bottom;
        const x22 = __privateGet(value2, _x6), y2 = __privateGet(value2, _y6), right2 = value2.right, bottom2 = value2.bottom;
        const x3 = Math.min(x1, x22);
        const y = Math.min(y1, y2);
        const right = Math.max(right1, right2);
        const bottom = Math.max(bottom1, bottom2);
        return new _Rectangle(x3, y, right - x3, bottom - y);
      });
      return _Rectangle.union.apply(this, params);
    }
    ["=="](...params) {
      _Rectangle.prototype["=="] = src_default([_Rectangle], function(other) {
        return this.equals(other);
      });
      return _Rectangle.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _Rectangle.prototype["!="] = src_default([_Rectangle], function(other) {
        return !this.equals(other);
      }).any(() => true);
      return _Rectangle.prototype["!="].apply(this, params);
    }
    contains(...params) {
      _Rectangle.prototype.contains = src_default().add([Number, Number], function(x3, y) {
        const withinXBounds = __privateGet(this, _x6) <= x3 && x3 < __privateGet(this, _x6) + __privateGet(this, _width);
        const withinYBounds = __privateGet(this, _y6) <= y && y < __privateGet(this, _y6) + __privateGet(this, _height);
        return withinXBounds && withinYBounds;
      }).add([Point], function(value) {
        const withinXBounds = __privateGet(this, _x6) <= value.x && value.x < __privateGet(this, _x6) + __privateGet(this, _width);
        const withinYBounds = __privateGet(this, _y6) <= value.y && value.y < __privateGet(this, _y6) + __privateGet(this, _height);
        return withinXBounds && withinYBounds;
      }).add([_Rectangle], function(value) {
        const isXWithinBounds = __privateGet(this, _x6) <= __privateGet(value, _x6) && __privateGet(value, _x6) + __privateGet(value, _width) <= __privateGet(this, _x6) + __privateGet(this, _width);
        const isYWithinBounds = __privateGet(this, _y6) <= __privateGet(value, _y6) && __privateGet(value, _y6) + __privateGet(value, _height) <= __privateGet(this, _y6) + __privateGet(this, _height);
        return isXWithinBounds && isYWithinBounds;
      });
      return _Rectangle.prototype.contains.apply(this, params);
    }
    equals(...params) {
      _Rectangle.prototype.equals = src_default([_Rectangle], function(other) {
        const x3 = __privateGet(other, _x6), y = __privateGet(other, _y6), width = __privateGet(other, _width), height = __privateGet(other, _height);
        return __privateGet(this, _x6) === x3 && __privateGet(this, _y6) === y && __privateGet(this, _width) === width && __privateGet(this, _height) === height;
      }).any(() => false);
      return _Rectangle.prototype.equals.apply(this, params);
    }
    inflate(...params) {
      _Rectangle.prototype.inflate = src_default([Number, Number], function(horizontalAmount, verticalAmount) {
        this.x -= horizontalAmount;
        this.y -= verticalAmount;
        this.width += horizontalAmount * 2;
        this.height += verticalAmount * 2;
      });
      return _Rectangle.prototype.inflate.apply(this, params);
    }
    intersects(...params) {
      _Rectangle.prototype.intersects = src_default().add([_Rectangle], function(value) {
        const left = value.left, right = value.right, top = value.top, bottom = value.bottom;
        const thisLeft = this.left, thisRight = this.right, thisTop = this.top, thisBottom = this.bottom;
        return left < thisRight && thisLeft < right && top < thisBottom && thisTop < bottom;
      });
      return _Rectangle.prototype.intersects.apply(this, params);
    }
    offset(...params) {
      _Rectangle.prototype.offset = src_default().add([Number, Number], function(offsetX, offsetY) {
        this.x += offsetX;
        this.y += offsetY;
      }).add([Point], function(amount) {
        this.x += amount.x;
        this.y += amount.y;
      });
      return _Rectangle.prototype.offset.apply(this, params);
    }
    toString(...params) {
      _Rectangle.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Rectangle.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Rectangle 的 JSON 表示形式。
     * @returns 当前 Rectangle 的 JSON 表示形式。
     */
    toJSON() {
      return {
        x: __privateGet(this, _x6),
        y: __privateGet(this, _y6),
        width: __privateGet(this, _width),
        height: __privateGet(this, _height)
      };
    }
  };
  _init12 = __decoratorStart(null);
  _x6 = new WeakMap();
  _y6 = new WeakMap();
  _width = new WeakMap();
  _height = new WeakMap();
  __decorateElement(_init12, 3, "x", _x_dec6, _Rectangle);
  __decorateElement(_init12, 3, "y", _y_dec6, _Rectangle);
  __decorateElement(_init12, 3, "width", _width_dec, _Rectangle);
  __decorateElement(_init12, 3, "height", _height_dec, _Rectangle);
  __decorateElement(_init12, 3, "location", _location_dec, _Rectangle);
  __decorateElement(_init12, 3, "size", _size_dec, _Rectangle);
  __decoratorMetadata(_init12, _Rectangle);
  var Rectangle = _Rectangle;

  // test/rectangle.test.ts
  describe("Rectangle", () => {
    describe("Static Properties", () => {
      it("empty should return a zero rectangle", () => {
        const r = Rectangle.empty;
        expect(r.x).to.equal(0);
        expect(r.y).to.equal(0);
        expect(r.width).to.equal(0);
        expect(r.height).to.equal(0);
        expect(r.isEmpty).to.be.true;
      });
    });
    describe("Constructor", () => {
      it("should default to zero", () => {
        const r = new Rectangle();
        expect(r.x).to.equal(0);
        expect(r.y).to.equal(0);
        expect(r.width).to.equal(0);
        expect(r.height).to.equal(0);
      });
      it("should accept x, y, width, height", () => {
        const r = new Rectangle(10, 20, 100, 200);
        expect(r.x).to.equal(10);
        expect(r.y).to.equal(20);
        expect(r.width).to.equal(100);
        expect(r.height).to.equal(200);
      });
    });
    describe("Properties", () => {
      it("location", () => {
        const r = new Rectangle(10, 20, 100, 200);
        expect(r.location.x).to.equal(10);
        expect(r.location.y).to.equal(20);
        r.location = new Point(30, 40);
        expect(r.x).to.equal(30);
        expect(r.y).to.equal(40);
      });
      it("size", () => {
        const r = new Rectangle(10, 20, 100, 200);
        expect(r.size.x).to.equal(100);
        expect(r.size.y).to.equal(200);
        r.size = new Point(300, 400);
        expect(r.width).to.equal(300);
        expect(r.height).to.equal(400);
      });
      it("left/right/top/bottom", () => {
        const r = new Rectangle(10, 20, 100, 200);
        expect(r.left).to.equal(10);
        expect(r.top).to.equal(20);
        expect(r.right).to.equal(110);
        expect(r.bottom).to.equal(220);
      });
      it("center", () => {
        const r = new Rectangle(0, 0, 100, 100);
        expect(r.center.x).to.equal(50);
        expect(r.center.y).to.equal(50);
      });
    });
    describe("Static Methods", () => {
      it("intersect", () => {
        const r1 = new Rectangle(0, 0, 100, 100);
        const r2 = new Rectangle(50, 50, 100, 100);
        const result = Rectangle.intersect(r1, r2);
        expect(result.x).to.equal(50);
        expect(result.y).to.equal(50);
        expect(result.width).to.equal(50);
        expect(result.height).to.equal(50);
        const r3 = new Rectangle(200, 200, 100, 100);
        const empty = Rectangle.intersect(r1, r3);
        expect(empty.isEmpty).to.be.true;
      });
      it("union", () => {
        const r1 = new Rectangle(0, 0, 100, 100);
        const r2 = new Rectangle(50, 50, 100, 100);
        const result = Rectangle.union(r1, r2);
        expect(result.x).to.equal(0);
        expect(result.y).to.equal(0);
        expect(result.width).to.equal(150);
        expect(result.height).to.equal(150);
      });
    });
    describe("Instance Methods", () => {
      it("contains (x, y)", () => {
        const r = new Rectangle(0, 0, 100, 100);
        expect(r.contains(50, 50)).to.be.true;
        expect(r.contains(100, 100)).to.be.false;
        expect(r.contains(-1, -1)).to.be.false;
      });
      it("contains (Point)", () => {
        const r = new Rectangle(0, 0, 100, 100);
        expect(r.contains(new Point(50, 50))).to.be.true;
        expect(r.contains(new Point(100, 100))).to.be.false;
      });
      it("contains (Rectangle)", () => {
        const r = new Rectangle(0, 0, 100, 100);
        const inside = new Rectangle(10, 10, 80, 80);
        const intersecting = new Rectangle(50, 50, 100, 100);
        const outside = new Rectangle(200, 200, 100, 100);
        expect(r.contains(inside)).to.be.true;
        expect(r.contains(intersecting)).to.be.false;
        expect(r.contains(outside)).to.be.false;
      });
      it("equals", () => {
        const r1 = new Rectangle(10, 20, 30, 40);
        const r2 = new Rectangle(10, 20, 30, 40);
        const r3 = new Rectangle(0, 0, 0, 0);
        expect(r1.equals(r2)).to.be.true;
        expect(r1.equals(r3)).to.be.false;
      });
      it("inflate", () => {
        const r = new Rectangle(10, 10, 100, 100);
        r.inflate(10, 10);
        expect(r.x).to.equal(0);
        expect(r.y).to.equal(0);
        expect(r.width).to.equal(120);
        expect(r.height).to.equal(120);
      });
      it("intersects", () => {
        const r1 = new Rectangle(0, 0, 100, 100);
        const r2 = new Rectangle(50, 50, 100, 100);
        const r3 = new Rectangle(200, 200, 100, 100);
        expect(r1.intersects(r2)).to.be.true;
        expect(r1.intersects(r3)).to.be.false;
      });
      it("offset", () => {
        const r = new Rectangle(10, 10, 100, 100);
        r.offset(10, 10);
        expect(r.x).to.equal(20);
        expect(r.y).to.equal(20);
        r.offset(new Point(-10, -10));
        expect(r.x).to.equal(10);
        expect(r.y).to.equal(10);
      });
    });
  });

  // test/ray.test.ts
  describe("Ray", () => {
    describe("Constructor", () => {
      it("should default to zero position and direction", () => {
        const ray = new Ray();
        expect(ray.position.equals(Vector3.zero)).to.be.true;
        expect(ray.direction.equals(Vector3.zero)).to.be.true;
      });
      it("should accept position and direction", () => {
        const pos = new Vector3(1, 2, 3);
        const dir = new Vector3(0, 1, 0);
        const ray = new Ray(pos, dir);
        expect(ray.position.equals(pos)).to.be.true;
        expect(ray.direction.equals(dir)).to.be.true;
      });
    });
    describe("Instance Methods", () => {
      it("equals", () => {
        const r1 = new Ray(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
        const r2 = new Ray(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
        const r3 = new Ray(new Vector3(1, 0, 0), new Vector3(0, 1, 0));
        expect(r1.equals(r2)).to.be.true;
        expect(r1.equals(r3)).to.be.false;
      });
      it("intersects (BoundingBox)", () => {
        const ray = new Ray(new Vector3(5, 5, -10), new Vector3(0, 0, 1));
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const result = ray.intersects(box);
        expect(result).to.not.be.null;
        expect(result).to.be.closeTo(10, 1e-3);
        const missRay = new Ray(new Vector3(20, 20, -10), new Vector3(0, 0, 1));
        expect(missRay.intersects(box)).to.be.null;
        const insideRay = new Ray(new Vector3(5, 5, 5), new Vector3(0, 0, 1));
        expect(insideRay.intersects(box)).to.equal(0);
      });
      it("intersects (BoundingSphere)", () => {
        const ray = new Ray(new Vector3(0, 0, -10), new Vector3(0, 0, 1));
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 5);
        const result = ray.intersects(sphere);
        expect(result).to.not.be.null;
        expect(result).to.be.closeTo(5, 1e-3);
        const missRay = new Ray(new Vector3(10, 0, -10), new Vector3(0, 0, 1));
        expect(missRay.intersects(sphere)).to.be.null;
        const insideRay = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
        expect(insideRay.intersects(sphere)).to.equal(0);
      });
      it("intersects (Plane)", () => {
        const ray = new Ray(new Vector3(0, 10, 0), new Vector3(0, -1, 0));
        const plane = new Plane(new Vector3(0, 1, 0), 0);
        const result = ray.intersects(plane);
        expect(result).to.not.be.null;
        expect(result).to.be.closeTo(10, 1e-3);
        const parallelRay = new Ray(new Vector3(0, 10, 0), new Vector3(1, 0, 0));
        expect(parallelRay.intersects(plane)).to.be.null;
        const awayRay = new Ray(new Vector3(0, 10, 0), new Vector3(0, 1, 0));
        expect(awayRay.intersects(plane)).to.be.null;
      });
    });
  });

  // test/bounding-box.test.ts
  describe("BoundingBox", () => {
    describe("Static Properties", () => {
      it("cornerCount should be 8", () => {
        expect(BoundingBox.cornerCount).to.equal(8);
      });
    });
    describe("Constructor", () => {
      it("should default to zero min/max", () => {
        const box = new BoundingBox();
        expect(box.min.equals(Vector3.zero)).to.be.true;
        expect(box.max.equals(Vector3.zero)).to.be.true;
      });
      it("should accept min and max", () => {
        const min = new Vector3(0, 0, 0);
        const max = new Vector3(10, 10, 10);
        const box = new BoundingBox(min, max);
        expect(box.min.equals(min)).to.be.true;
        expect(box.max.equals(max)).to.be.true;
      });
    });
    describe("Static Methods", () => {
      it("createFromPoints", () => {
        const points = new I(Vector3, [
          new Vector3(0, 0, 0),
          new Vector3(10, 5, 1),
          new Vector3(-5, 2, 3)
        ]);
        const box = BoundingBox.createFromPoints(points);
        expect(box.min.x).to.equal(-5);
        expect(box.min.y).to.equal(0);
        expect(box.min.z).to.equal(0);
        expect(box.max.x).to.equal(10);
        expect(box.max.y).to.equal(5);
        expect(box.max.z).to.equal(3);
      });
      it("createFromSphere", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 5);
        const box = BoundingBox.createFromSphere(sphere);
        expect(box.min.x).to.equal(-5);
        expect(box.min.y).to.equal(-5);
        expect(box.min.z).to.equal(-5);
        expect(box.max.x).to.equal(5);
        expect(box.max.y).to.equal(5);
        expect(box.max.z).to.equal(5);
      });
      it("createMerged", () => {
        const b1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const b22 = new BoundingBox(new Vector3(-5, -5, -5), new Vector3(5, 5, 5));
        const box = BoundingBox.createMerged(b1, b22);
        expect(box.min.x).to.equal(-5);
        expect(box.min.y).to.equal(-5);
        expect(box.min.z).to.equal(-5);
        expect(box.max.x).to.equal(10);
        expect(box.max.y).to.equal(10);
        expect(box.max.z).to.equal(10);
      });
    });
    describe("Instance Methods", () => {
      it("contains (Point)", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        expect(box.contains(new Vector3(5, 5, 5))).to.equal(ContainmentType.contains);
        expect(box.contains(new Vector3(0, 0, 0))).to.equal(ContainmentType.intersects);
        expect(box.contains(new Vector3(11, 5, 5))).to.equal(ContainmentType.disjoint);
      });
      it("contains (BoundingBox)", () => {
        const outer = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const inner = new BoundingBox(new Vector3(2, 2, 2), new Vector3(8, 8, 8));
        const intersecting = new BoundingBox(new Vector3(8, 8, 8), new Vector3(12, 12, 12));
        const disjoint = new BoundingBox(new Vector3(12, 12, 12), new Vector3(15, 15, 15));
        expect(outer.contains(inner)).to.equal(ContainmentType.contains);
        expect(outer.contains(intersecting)).to.equal(ContainmentType.intersects);
        expect(outer.contains(disjoint)).to.equal(ContainmentType.disjoint);
      });
      it("contains (BoundingSphere)", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const inside = new BoundingSphere(new Vector3(5, 5, 5), 2);
        const intersecting = new BoundingSphere(new Vector3(0, 0, 0), 2);
        const outside = new BoundingSphere(new Vector3(20, 20, 20), 1);
        expect(box.contains(inside)).to.equal(ContainmentType.contains);
        expect(box.contains(intersecting)).to.equal(ContainmentType.intersects);
        expect(box.contains(outside)).to.equal(ContainmentType.disjoint);
      });
      it("equals", () => {
        const b1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const b22 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const b3 = new BoundingBox(new Vector3(1, 1, 1), new Vector3(10, 10, 10));
        expect(b1.equals(b22)).to.be.true;
        expect(b1.equals(b3)).to.be.false;
      });
      it("getCorners", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
        const corners = box.getCorners();
        expect(corners.length).to.equal(8);
        expect(corners[0].equals(new Vector3(0, 1, 1))).to.be.true;
        expect(corners[7].equals(new Vector3(0, 0, 0))).to.be.true;
      });
      it("intersects (BoundingBox)", () => {
        const b1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const b22 = new BoundingBox(new Vector3(5, 5, 5), new Vector3(15, 15, 15));
        const b3 = new BoundingBox(new Vector3(20, 20, 20), new Vector3(30, 30, 30));
        expect(b1.intersects(b22)).to.be.true;
        expect(b1.intersects(b3)).to.be.false;
      });
      it("intersects (BoundingSphere)", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const s1 = new BoundingSphere(new Vector3(5, 5, 5), 1);
        const s2 = new BoundingSphere(new Vector3(20, 20, 20), 1);
        expect(box.intersects(s1)).to.be.true;
        expect(box.intersects(s2)).to.be.false;
      });
      it("intersects (Plane)", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const p1 = new Plane(new Vector3(0, 1, 0), -5);
        const p2 = new Plane(new Vector3(0, 1, 0), -20);
        expect(box.intersects(p1)).to.equal(PlaneIntersectionType.intersecting);
        expect(box.intersects(p2)).to.equal(PlaneIntersectionType.back);
      });
      it("intersects (Ray)", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const ray = new Ray(new Vector3(5, 5, -10), new Vector3(0, 0, 1));
        const result = box.intersects(ray);
        expect(result).to.not.be.null;
        expect(result).to.be.closeTo(10, 1e-3);
      });
    });
  });

  // test/bounding-sphere.test.ts
  describe("BoundingSphere", () => {
    describe("Constructor", () => {
      it("should default to zero center and zero radius", () => {
        const sphere = new BoundingSphere();
        expect(sphere.center.equals(Vector3.zero)).to.be.true;
        expect(sphere.radius).to.equal(0);
      });
      it("should accept center and radius", () => {
        const center = new Vector3(1, 2, 3);
        const radius = 5;
        const sphere = new BoundingSphere(center, radius);
        expect(sphere.center.equals(center)).to.be.true;
        expect(sphere.radius).to.equal(5);
      });
    });
    describe("Static Methods", () => {
      it("createFromBoundingBox", () => {
        const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
        const sphere = BoundingSphere.createFromBoundingBox(box);
        expect(sphere.center.x).to.equal(5);
        expect(sphere.center.y).to.equal(5);
        expect(sphere.center.z).to.equal(5);
        expect(sphere.radius).to.be.closeTo(Math.sqrt(75), 1e-3);
      });
      it("createFromPoints", () => {
        const points = new I(Vector3, [
          new Vector3(0, 0, 0),
          new Vector3(10, 0, 0),
          new Vector3(0, 10, 0),
          new Vector3(0, 0, 10),
          new Vector3(-10, 0, 0)
        ]);
        const sphere = BoundingSphere.createFromPoints(points);
        for (const p of points) {
          expect(sphere.contains(p)).to.not.equal(ContainmentType.disjoint);
        }
      });
      it("createMerged", () => {
        const s1 = new BoundingSphere(new Vector3(0, 0, 0), 5);
        const s2 = new BoundingSphere(new Vector3(10, 0, 0), 5);
        const sphere = BoundingSphere.createMerged(s1, s2);
        expect(sphere.center.x).to.equal(5);
        expect(sphere.center.y).to.equal(0);
        expect(sphere.center.z).to.equal(0);
        expect(sphere.radius).to.equal(10);
      });
    });
    describe("Instance Methods", () => {
      it("contains (Point)", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
        expect(sphere.contains(new Vector3(5, 0, 0))).to.equal(ContainmentType.contains);
        expect(sphere.contains(new Vector3(10, 0, 0))).to.equal(ContainmentType.intersects);
        expect(sphere.contains(new Vector3(11, 0, 0))).to.equal(ContainmentType.disjoint);
      });
      it("contains (BoundingBox)", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const inside = new BoundingBox(new Vector3(-5, -5, -5), new Vector3(5, 5, 5));
        const intersecting = new BoundingBox(new Vector3(8, 0, 0), new Vector3(12, 2, 2));
        const outside = new BoundingBox(new Vector3(20, 0, 0), new Vector3(25, 5, 5));
        expect(sphere.contains(inside)).to.equal(ContainmentType.contains);
        expect(sphere.contains(intersecting)).to.equal(ContainmentType.intersects);
        expect(sphere.contains(outside)).to.equal(ContainmentType.disjoint);
      });
      it("contains (BoundingSphere)", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const inside = new BoundingSphere(new Vector3(0, 0, 0), 5);
        const intersecting = new BoundingSphere(new Vector3(10, 0, 0), 5);
        const outside = new BoundingSphere(new Vector3(20, 0, 0), 5);
        expect(sphere.contains(inside)).to.equal(ContainmentType.contains);
        expect(sphere.contains(intersecting)).to.equal(ContainmentType.intersects);
        expect(sphere.contains(outside)).to.equal(ContainmentType.disjoint);
      });
      it("equals", () => {
        const s1 = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const s2 = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const s3 = new BoundingSphere(new Vector3(1, 0, 0), 10);
        expect(s1.equals(s2)).to.be.true;
        expect(s1.equals(s3)).to.be.false;
      });
      it("intersects (BoundingBox)", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const box = new BoundingBox(new Vector3(5, 0, 0), new Vector3(15, 5, 5));
        expect(sphere.intersects(box)).to.be.true;
      });
      it("intersects (BoundingSphere)", () => {
        const s1 = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const s2 = new BoundingSphere(new Vector3(15, 0, 0), 10);
        const s3 = new BoundingSphere(new Vector3(25, 0, 0), 10);
        expect(s1.intersects(s2)).to.be.true;
        expect(s1.intersects(s3)).to.be.false;
      });
      it("intersects (Plane)", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const p1 = new Plane(new Vector3(0, 1, 0), -5);
        const p2 = new Plane(new Vector3(0, 1, 0), -20);
        expect(sphere.intersects(p1)).to.equal(PlaneIntersectionType.intersecting);
        expect(sphere.intersects(p2)).to.equal(PlaneIntersectionType.back);
      });
      it("intersects (Ray)", () => {
        const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
        const ray = new Ray(new Vector3(0, 0, -20), new Vector3(0, 0, 1));
        const result = sphere.intersects(ray);
        expect(result).to.not.be.null;
        expect(result).to.be.closeTo(10, 1e-3);
      });
      it("transform", () => {
        const sphere = new BoundingSphere(new Vector3(1, 0, 0), 5);
        const matrix = Matrix.createTranslation(new Vector3(2, 3, 4));
        const transformed = sphere.transform(matrix);
        expect(transformed.center.x).to.equal(3);
        expect(transformed.center.y).to.equal(3);
        expect(transformed.center.z).to.equal(4);
        expect(transformed.radius).to.equal(5);
      });
    });
  });

  // test/bounding-frustum.test.ts
  describe("BoundingFrustum", () => {
    describe("Static Properties", () => {
      it("cornerCount should be 8", () => {
        expect(BoundingFrustum.cornerCount).to.equal(8);
      });
    });
    describe("Constructor", () => {
      it("should accept Matrix", () => {
        const matrix = Matrix.identity;
        const frustum = new BoundingFrustum(matrix);
        expect(frustum.matrix.equals(matrix)).to.be.true;
      });
    });
    describe("Properties", () => {
      it("planes (near, far, left, right, top, bottom)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        expect(frustum.near).to.not.be.undefined;
        expect(frustum.far).to.not.be.undefined;
        expect(frustum.left).to.not.be.undefined;
        expect(frustum.right).to.not.be.undefined;
        expect(frustum.top).to.not.be.undefined;
        expect(frustum.bottom).to.not.be.undefined;
      });
    });
    describe("Instance Methods", () => {
      it("contains (Point)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        const insidePoint = new Vector3(0, 0, -10);
        expect(frustum.contains(insidePoint)).to.equal(ContainmentType.contains);
        const outsidePoint = new Vector3(0, 0, 10);
        expect(frustum.contains(outsidePoint)).to.equal(ContainmentType.disjoint);
      });
      it("contains (BoundingBox)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        const insideBox = new BoundingBox(new Vector3(-1, -1, -20), new Vector3(1, 1, -10));
        expect(frustum.contains(insideBox)).to.equal(ContainmentType.contains);
      });
      it("contains (BoundingSphere)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        const insideSphere = new BoundingSphere(new Vector3(0, 0, -10), 1);
        expect(frustum.contains(insideSphere)).to.equal(ContainmentType.contains);
      });
      it("equals", () => {
        const m1 = Matrix.identity;
        const m2 = Matrix.identity;
        const f1 = new BoundingFrustum(m1);
        const f2 = new BoundingFrustum(m2);
        expect(f1.equals(f2)).to.be.true;
      });
      it("getCorners", () => {
        const frustum = new BoundingFrustum(Matrix.identity);
        const corners = frustum.getCorners();
        expect(corners.length).to.equal(8);
      });
      it("intersects (BoundingBox)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        const box = new BoundingBox(new Vector3(-1, -1, -20), new Vector3(1, 1, -10));
        expect(frustum.intersects(box)).to.be.true;
      });
      it("intersects (Plane)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        const plane = new Plane(new Vector3(0, 0, 1), 10);
        expect(frustum.intersects(plane)).to.equal(PlaneIntersectionType.intersecting);
      });
      it("intersects (Ray)", () => {
        const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
        const frustum = new BoundingFrustum(projection);
        const ray = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, -1));
        const insideRay = new Ray(new Vector3(0, 0, -10), new Vector3(0, 0, -1));
        expect(frustum.intersects(insideRay)).to.equal(0);
        const outsideRay = new Ray(new Vector3(0, 0, 10), new Vector3(0, 0, 1));
        expect(frustum.intersects(outsideRay)).to.be.null;
      });
    });
  });

  // src/curve-continuity.ts
  var _CurveContinuity = class _CurveContinuity extends Enum {
  };
  _CurveContinuity.set({
    smooth: 0,
    step: 1
  });
  var CurveContinuity = _CurveContinuity;

  // src/curve-key.ts
  var CONSTRUCTOR_SYMBOL13 = /* @__PURE__ */ Symbol("constructor");
  var _value_dec, _tangentOut_dec, _tangentIn_dec, _continuity_dec, _continuity, _init13, _tangentIn, _tangentOut, _value2, _position2;
  var _CurveKey = class _CurveKey {
    constructor(...params) {
      __runInitializers(_init13, 5, this);
      /**
       * 描述曲线上的该点和下一点之间的线段是离散还是连续。
       */
      __privateAdd(this, _continuity, null);
      /**
       * 介绍曲线中的先前点接近该点时的切线。
       */
      __privateAdd(this, _tangentIn, 0);
      /**
       * 介绍曲线中离开该点向下一点靠近时的切线。
       */
      __privateAdd(this, _tangentOut, 0);
      /**
       * 描述该点的值。
       */
      __privateAdd(this, _value2, 0);
      /**
       * CurveKey 在曲线中的位置。
       */
      __privateAdd(this, _position2, 0);
      _CurveKey[CONSTRUCTOR_SYMBOL13].apply(this, params);
    }
    /**
     * 获取描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    get continuity() {
      return __privateGet(this, _continuity);
    }
    set continuity(value) {
      __privateSet(this, _continuity, value);
    }
    /**
     * 获取介绍曲线中的先前点接近该点时的切线。
     */
    get tangentIn() {
      return __privateGet(this, _tangentIn);
    }
    set tangentIn(value) {
      __privateSet(this, _tangentIn, value);
    }
    /**
     * 获取介绍曲线中离开该点向下一点靠近时的切线。
     */
    get tangentOut() {
      return __privateGet(this, _tangentOut);
    }
    set tangentOut(value) {
      __privateSet(this, _tangentOut, value);
    }
    /**
     * 获取描述该点的值。
     */
    get value() {
      return __privateGet(this, _value2);
    }
    set value(value) {
      __privateSet(this, _value2, value);
    }
    /**
     * 获取 CurveKey 在曲线中的位置。
     */
    get position() {
      return __privateGet(this, _position2);
    }
    static [(_continuity_dec = [H(() => CurveContinuity)], _tangentIn_dec = [x2(Number)], _tangentOut_dec = [x2(Number)], _value_dec = [x2(Number)], CONSTRUCTOR_SYMBOL13)](...params) {
      _CurveKey[CONSTRUCTOR_SYMBOL13] = src_default().add([Number, Number], function(position, value) {
        __privateSet(this, _continuity, CurveContinuity.smooth);
        __privateSet(this, _tangentIn, 0);
        __privateSet(this, _tangentOut, 0);
        __privateSet(this, _value2, value);
        __privateSet(this, _position2, position);
      }).add([Number, Number, Number, Number], function(position, value, tangentIn, tangentOut) {
        __privateSet(this, _continuity, CurveContinuity.smooth);
        __privateSet(this, _tangentIn, tangentIn);
        __privateSet(this, _tangentOut, tangentOut);
        __privateSet(this, _value2, value);
        __privateSet(this, _position2, position);
      }).add([Number, Number, Number, Number, CurveContinuity], function(position, value, tangentIn, tangentOut, continuity) {
        __privateSet(this, _continuity, continuity);
        __privateSet(this, _tangentIn, tangentIn);
        __privateSet(this, _tangentOut, tangentOut);
        __privateSet(this, _value2, value);
        __privateSet(this, _position2, position);
      });
      return _CurveKey[CONSTRUCTOR_SYMBOL13].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _continuity);
      yield __privateGet(this, _position2);
      yield __privateGet(this, _tangentIn);
      yield __privateGet(this, _tangentOut);
      yield __privateGet(this, _value2);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    clone(...params) {
      _CurveKey.prototype.clone = src_default([], function() {
        return new _CurveKey(__privateGet(this, _position2), __privateGet(this, _value2), __privateGet(this, _tangentIn), __privateGet(this, _tangentOut), __privateGet(this, _continuity));
      });
      return _CurveKey.prototype.clone.apply(this, params);
    }
    compareTo(...params) {
      _CurveKey.prototype.compareTo = src_default([_CurveKey], function(other) {
        if (__privateGet(this, _position2) > __privateGet(other, _position2)) return 1;
        else if (__privateGet(this, _position2) < __privateGet(other, _position2)) return -1;
        else return 0;
      });
      return _CurveKey.prototype.compareTo.apply(this, params);
    }
    equals(...params) {
      _CurveKey.prototype.equals = src_default([_CurveKey], function(other) {
        return __privateGet(this, _position2) === __privateGet(other, _position2) && __privateGet(this, _value2) === __privateGet(other, _value2) && __privateGet(this, _tangentIn) === __privateGet(other, _tangentIn) && __privateGet(this, _tangentOut) === __privateGet(other, _tangentOut) && __privateGet(this, _continuity) === __privateGet(other, _continuity);
      }).any(() => false);
      return _CurveKey.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _CurveKey.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _CurveKey.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 CurveKey 的 JSON 表示形式。
     * @returns 当前 CurveKey 的 JSON 表示形式。
     */
    toJSON() {
      return {
        position: __privateGet(this, _position2),
        value: __privateGet(this, _value2),
        tangentIn: __privateGet(this, _tangentIn),
        tangentOut: __privateGet(this, _tangentOut),
        continuity: __privateGet(this, _continuity)
      };
    }
  };
  _init13 = __decoratorStart(null);
  _continuity = new WeakMap();
  _tangentIn = new WeakMap();
  _tangentOut = new WeakMap();
  _value2 = new WeakMap();
  _position2 = new WeakMap();
  __decorateElement(_init13, 3, "continuity", _continuity_dec, _CurveKey);
  __decorateElement(_init13, 3, "tangentIn", _tangentIn_dec, _CurveKey);
  __decorateElement(_init13, 3, "tangentOut", _tangentOut_dec, _CurveKey);
  __decorateElement(_init13, 3, "value", _value_dec, _CurveKey);
  __decoratorMetadata(_init13, _CurveKey);
  var CurveKey = _CurveKey;

  // src/curve-key-collection.ts
  var CurveKeyCollection = class _CurveKeyCollection extends I {
    constructor() {
      super(CurveKey);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    clone(...params) {
      _CurveKeyCollection.prototype.clone = src_default([], function() {
        const newCurveKeyCollection = new _CurveKeyCollection();
        const items = this.toArray();
        for (let i = 0; i < items.length; i++) {
          newCurveKeyCollection.add(items[i]);
        }
        return newCurveKeyCollection;
      });
      return _CurveKeyCollection.prototype.clone.apply(this, params);
    }
    equals(...params) {
      _CurveKeyCollection.prototype.equals = src_default([_CurveKeyCollection], function(other) {
        if (this.length !== other.length) return false;
        const thisItems = this.toArray();
        const otherItems = other.toArray();
        for (let i = 0; i < thisItems.length; i++) {
          if (!thisItems[i].equals(otherItems[i])) return false;
        }
        return true;
      }).any(() => false);
      return _CurveKeyCollection.prototype.equals.apply(this, params);
    }
    /**
     * 返回表示当前 CurveKeyCollection 的字符串。
     * @returns 表示当前 CurveKeyCollection 的字符串。
     */
    toString(...params) {
      _CurveKeyCollection.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _CurveKeyCollection.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 CurveKeyCollection 的 JSON 表示。
     * @returns 当前 CurveKeyCollection 的 JSON 表示。
     */
    toJSON() {
      return this.toArray().map((curveKey) => curveKey.toJSON());
    }
  };

  // src/curve-loop-type.ts
  var _CurveLoopType = class _CurveLoopType extends Enum {
  };
  _CurveLoopType.set({
    constant: 0,
    cycle: 1,
    cycleOffset: 2,
    oscillate: 3,
    linear: 4
  });
  var CurveLoopType = _CurveLoopType;

  // src/curve-tangent.ts
  var _CurveTangent = class _CurveTangent extends Enum {
  };
  _CurveTangent.set({
    flat: 0,
    linear: 1,
    smooth: 2
  });
  var CurveTangent = _CurveTangent;

  // src/curve.ts
  var CONSTRUCTOR_SYMBOL14 = /* @__PURE__ */ Symbol("constructor");
  var _preLoop_dec, _postLoop_dec, _postLoop, _init14, _preLoop, _keys, _Curve_instances, getNumberOfCycle_fn, getCurvePosition_fn;
  var _Curve = class _Curve {
    constructor(...params) {
      __runInitializers(_init14, 5, this);
      __privateAdd(this, _Curve_instances);
      /**
       * 指定如何处理大于曲线中最后一个控制点的权重值。
       */
      __privateAdd(this, _postLoop, null);
      /**
       * 指定如何处理小于曲线中第一个控制点的权重值。
       */
      __privateAdd(this, _preLoop, null);
      /**
       * 构成曲线的点。
       */
      __privateAdd(this, _keys, null);
      _Curve[CONSTRUCTOR_SYMBOL14].apply(this, params);
    }
    /**
     * 获取指定如何处理大于曲线中最后一个控制点的权重值。
     */
    get postLoop() {
      return __privateGet(this, _postLoop);
    }
    set postLoop(value) {
      __privateSet(this, _postLoop, value);
    }
    /**
     * 获取指定如何处理小于曲线中第一个控制点的权重值。
     */
    get preLoop() {
      return __privateGet(this, _preLoop);
    }
    set preLoop(value) {
      __privateSet(this, _preLoop, value);
    }
    /**
     * 获取构成曲线的点。
     */
    get keys() {
      return __privateGet(this, _keys);
    }
    /**
     * 获取一个指示曲线是否为常量的值。
     */
    get isConstant() {
      return __privateGet(this, _keys).length <= 1;
    }
    static [(_postLoop_dec = [H(() => CurveLoopType)], _preLoop_dec = [H(() => CurveLoopType)], CONSTRUCTOR_SYMBOL14)](...params) {
      _Curve[CONSTRUCTOR_SYMBOL14] = src_default([], function() {
        __privateSet(this, _postLoop, CurveLoopType.constant);
        __privateSet(this, _preLoop, CurveLoopType.constant);
        __privateSet(this, _keys, new CurveKeyCollection());
      });
      return _Curve[CONSTRUCTOR_SYMBOL14].apply(this, params);
    }
    *[Symbol.iterator]() {
      yield __privateGet(this, _postLoop);
      yield __privateGet(this, _preLoop);
    }
    ["=="](...params) {
      return this.equals.apply(this, params);
    }
    ["!="](...params) {
      return !this.equals.apply(this, params);
    }
    clone(...params) {
      _Curve.prototype.clone = src_default([], function() {
        const curve = new _Curve();
        __privateSet(curve, _keys, __privateGet(this, _keys).clone());
        __privateSet(curve, _preLoop, __privateGet(this, _preLoop));
        __privateSet(curve, _postLoop, __privateGet(this, _postLoop));
        return curve;
      });
      return _Curve.prototype.clone.apply(this, params);
    }
    computeTangent(...params) {
      _Curve.prototype.computeTangent = src_default().add([Number, CurveTangent], function(keyIndex, tangentType) {
        this.computeTangent(keyIndex, tangentType, tangentType);
      }).add([Number, CurveTangent, CurveTangent], function(keyIndex, tangentInType, tangentOutType) {
        const keys = __privateGet(this, _keys).toArray();
        const key = keys[keyIndex];
        let p0, p, p1;
        p0 = p = p1 = key.position;
        let v0, v, v1;
        v0 = v = v1 = key.value;
        if (keyIndex > 0) {
          p0 = keys[keyIndex - 1].position;
          v0 = keys[keyIndex - 1].value;
        }
        const keyLength = keys.length;
        if (keyIndex < keyLength - 1) {
          p1 = keys[keyIndex + 1].position;
          v1 = keys[keyIndex + 1].value;
        }
        switch (tangentInType) {
          case CurveTangent.flat:
            key.tangentIn = 0;
            break;
          case CurveTangent.linear:
            key.tangentIn = v - v0;
            break;
          case CurveTangent.smooth:
            const pn = p1 - p0;
            if (Math.abs(pn) < Number.EPSILON) {
              key.tangentIn = 0;
            } else {
              key.tangentIn = (v1 - v0) * ((p - p0) / pn);
            }
            break;
        }
        switch (tangentOutType) {
          case CurveTangent.flat:
            key.tangentOut = 0;
            break;
          case CurveTangent.linear:
            key.tangentOut = v1 - v;
            break;
          case CurveTangent.smooth:
            const pn = p1 - p0;
            if (Math.abs(pn) < Number.EPSILON) {
              key.tangentOut = 0;
            } else {
              key.tangentOut = (v1 - v0) * ((p1 - p) / pn);
            }
            break;
        }
      });
      return _Curve.prototype.computeTangent.apply(this, params);
    }
    computeTangents(...params) {
      _Curve.prototype.computeTangents = src_default().add([CurveTangent], function(tangentType) {
        this.computeTangents(tangentType, tangentType);
      }).add([CurveTangent, CurveTangent], function(tangentInType, tangentOutType) {
        for (let i = 0; i < __privateGet(this, _keys).length; ++i) {
          this.computeTangent(i, tangentInType, tangentOutType);
        }
      });
      return _Curve.prototype.computeTangents.apply(this, params);
    }
    evaluate(...params) {
      _Curve.prototype.evaluate = src_default([Number], function(position) {
        if (__privateGet(this, _keys).length === 0) return 0;
        const keys = __privateGet(this, _keys).toArray();
        if (keys.length === 1) return keys[0].value;
        const first = keys[0];
        const last = keys[keys.length - 1];
        let cycle, virtualPos;
        if (position < first.position) {
          switch (this.preLoop) {
            case CurveLoopType.constant:
              return first.value;
            case CurveLoopType.linear:
              return first.value - first.tangentIn * (first.position - position);
            case CurveLoopType.cycle:
              cycle = __privateMethod(this, _Curve_instances, getNumberOfCycle_fn).call(this, position);
              virtualPos = position - cycle * (last.position - first.position);
              return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, virtualPos);
            case CurveLoopType.cycleOffset:
              cycle = __privateMethod(this, _Curve_instances, getNumberOfCycle_fn).call(this, position);
              virtualPos = position - cycle * (last.position - first.position);
              return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, virtualPos) + cycle * (last.value - first.value);
            case CurveLoopType.oscillate:
              cycle = __privateMethod(this, _Curve_instances, getNumberOfCycle_fn).call(this, position);
              if (0 == cycle % 2) {
                virtualPos = position - cycle * (last.position - first.position);
              } else {
                virtualPos = last.position - position + first.position + cycle * (last.position - first.position);
              }
              return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, virtualPos);
          }
        } else if (position > last.position) {
          switch (this.postLoop) {
            case CurveLoopType.constant:
              return last.value;
            case CurveLoopType.linear:
              return last.value + first.tangentOut * (position - last.position);
            case CurveLoopType.cycle:
              cycle = __privateMethod(this, _Curve_instances, getNumberOfCycle_fn).call(this, position);
              virtualPos = position - cycle * (last.position - first.position);
              return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, virtualPos);
            case CurveLoopType.cycleOffset:
              cycle = __privateMethod(this, _Curve_instances, getNumberOfCycle_fn).call(this, position);
              virtualPos = position - cycle * (last.position - first.position);
              return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, virtualPos) + cycle * (last.value - first.value);
            case CurveLoopType.oscillate:
              cycle = __privateMethod(this, _Curve_instances, getNumberOfCycle_fn).call(this, position);
              virtualPos = position - cycle * (last.position - first.position);
              if (0 == cycle % 2) {
                virtualPos = position - cycle * (last.position - first.position);
              } else {
                virtualPos = last.position - position + first.position + cycle * (last.position - first.position);
              }
              return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, virtualPos);
          }
        }
        return __privateMethod(this, _Curve_instances, getCurvePosition_fn).call(this, position);
      });
      return _Curve.prototype.evaluate.apply(this, params);
    }
    equals(...params) {
      _Curve.prototype.equals = src_default([_Curve], function(other) {
        return __privateGet(this, _postLoop) === __privateGet(other, _postLoop) && __privateGet(this, _preLoop) === __privateGet(other, _preLoop) && __privateGet(this, _keys).equals(__privateGet(other, _keys));
      }).any(() => false);
      return _Curve.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _Curve.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _Curve.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前 Curve 的 JSON 表示形式。
     * @returns 当前 Curve 的 JSON 表示形式。
     */
    toJSON() {
      return {
        postLoop: __privateGet(this, _postLoop),
        preLoop: __privateGet(this, _preLoop),
        keys: __privateGet(this, _keys)
      };
    }
  };
  _init14 = __decoratorStart(null);
  _postLoop = new WeakMap();
  _preLoop = new WeakMap();
  _keys = new WeakMap();
  _Curve_instances = new WeakSet();
  /**
   * 计算给定位置所属的循环次数。
   * @param position 要计算的曲线位置。
   * @returns 循环次数。
   */
  getNumberOfCycle_fn = function(position) {
    const keys = __privateGet(this, _keys).toArray();
    let cycle = (position - keys[0].position) / (keys[keys.length - 1].position - keys[0].position);
    if (cycle < 0) cycle--;
    return cycle | 0;
  };
  /**
   * 计算曲线在给定位置的值。
   * @param position 要计算的曲线位置。
   * @returns 曲线在给定位置的值。
   */
  getCurvePosition_fn = function(position) {
    const keys = __privateGet(this, _keys).toArray();
    let prev = keys[0];
    let next;
    for (let i = 1; i < keys.length; ++i) {
      next = keys[i];
      if (next.position >= position) {
        if (prev.continuity == CurveContinuity.step) {
          if (position >= 1) return next.value;
          return prev.value;
        }
        let t = (position - prev.position) / (next.position - prev.position);
        let ts = t * t;
        let tss = ts * t;
        return (2 * tss - 3 * ts + 1) * prev.value + (tss - 2 * ts + t) * prev.tangentOut + (3 * ts - 2 * tss) * next.value + (tss - ts) * next.tangentIn;
      }
      prev = next;
    }
    return 0;
  };
  __decorateElement(_init14, 3, "postLoop", _postLoop_dec, _Curve);
  __decorateElement(_init14, 3, "preLoop", _preLoop_dec, _Curve);
  __decoratorMetadata(_init14, _Curve);
  var Curve = _Curve;

  // test/curve.test.ts
  describe("Curve", () => {
    describe("Constructor", () => {
      it("should default to constant loops and empty keys", () => {
        const curve = new Curve();
        expect(curve.keys).to.not.be.undefined;
        expect(curve.keys.length).to.equal(0);
        expect(curve.preLoop).to.equal(CurveLoopType.constant);
        expect(curve.postLoop).to.equal(CurveLoopType.constant);
      });
    });
    describe("Properties", () => {
      it("isConstant", () => {
        const curve = new Curve();
        expect(curve.isConstant).to.be.true;
        curve.keys.add(new CurveKey(0, 0));
        expect(curve.isConstant).to.be.true;
        curve.keys.add(new CurveKey(1, 1));
        expect(curve.isConstant).to.be.false;
      });
      it("preLoop/postLoop", () => {
        const curve = new Curve();
        curve.preLoop = CurveLoopType.linear;
        curve.postLoop = CurveLoopType.cycle;
        expect(curve.preLoop).to.equal(CurveLoopType.linear);
        expect(curve.postLoop).to.equal(CurveLoopType.cycle);
      });
    });
    describe("Instance Methods", () => {
      it("clone", () => {
        const curve = new Curve();
        curve.keys.add(new CurveKey(0, 0));
        curve.preLoop = CurveLoopType.linear;
        const clone = curve.clone();
        expect(clone.keys.length).to.equal(1);
        expect(clone.preLoop).to.equal(CurveLoopType.linear);
        expect(clone.equals(curve)).to.be.true;
        clone.keys.add(new CurveKey(1, 1));
        expect(clone.equals(curve)).to.be.false;
      });
      it("computeTangent", () => {
        const curve = new Curve();
        curve.keys.add(new CurveKey(0, 0));
        curve.keys.add(new CurveKey(1, 10));
        curve.keys.add(new CurveKey(2, 0));
        curve.computeTangent(1, CurveTangent.linear);
        const key = curve.keys[1];
        expect(key.tangentIn).to.equal(10);
        expect(key.tangentOut).to.equal(-10);
      });
      it("computeTangents", () => {
        const curve = new Curve();
        curve.keys.add(new CurveKey(0, 0));
        curve.keys.add(new CurveKey(1, 10));
        curve.keys.add(new CurveKey(2, 20));
        curve.computeTangents(CurveTangent.linear);
        expect(curve.keys[0].tangentIn).to.equal(0);
        expect(curve.keys[0].tangentOut).to.equal(10);
        expect(curve.keys[1].tangentIn).to.equal(10);
        expect(curve.keys[1].tangentOut).to.equal(10);
        expect(curve.keys[2].tangentIn).to.equal(10);
      });
      it("evaluate (Constant)", () => {
        const curve = new Curve();
        curve.keys.add(new CurveKey(0, 10));
        expect(curve.evaluate(-1)).to.equal(10);
        expect(curve.evaluate(0)).to.equal(10);
        expect(curve.evaluate(1)).to.equal(10);
      });
      it("evaluate (Linear)", () => {
        const curve = new Curve();
        curve.keys.add(new CurveKey(0, 0));
        curve.keys.add(new CurveKey(1, 10));
        curve.computeTangents(CurveTangent.linear);
        expect(curve.evaluate(0.5)).to.equal(5);
      });
      it("evaluate (Step)", () => {
        const curve = new Curve();
        const k1 = new CurveKey(0, 0);
        k1.continuity = CurveContinuity.step;
        curve.keys.add(k1);
        curve.keys.add(new CurveKey(1, 10));
        expect(curve.evaluate(0.5)).to.equal(0);
        expect(curve.evaluate(1)).to.equal(10);
      });
      it("evaluate (Loop Types)", () => {
        const curve = new Curve();
        curve.keys.add(new CurveKey(0, 0));
        curve.keys.add(new CurveKey(1, 10));
        curve.computeTangents(CurveTangent.linear);
        curve.keys[0].tangentIn = 1;
        curve.preLoop = CurveLoopType.linear;
        expect(curve.evaluate(-1)).to.equal(-1);
        curve.keys[0].tangentOut = 2;
        curve.postLoop = CurveLoopType.linear;
        expect(curve.evaluate(2)).to.equal(12);
      });
      it("equals", () => {
        const c1 = new Curve();
        c1.keys.add(new CurveKey(0, 0));
        const c2 = new Curve();
        c2.keys.add(new CurveKey(0, 0));
        const c3 = new Curve();
        c3.keys.add(new CurveKey(1, 1));
        expect(c1.equals(c2)).to.be.true;
        expect(c1.equals(c3)).to.be.false;
      });
    });
  });

  // test/curve-key.test.ts
  describe("CurveKey", () => {
    it("constructor", () => {
      const key = new CurveKey(0, 10);
      expect(key.position).to.equal(0);
      expect(key.value).to.equal(10);
      expect(key.tangentIn).to.equal(0);
      expect(key.tangentOut).to.equal(0);
      expect(key.continuity).to.equal(CurveContinuity.smooth);
    });
    it("constructor full", () => {
      const key = new CurveKey(1, 2, 3, 4, CurveContinuity.step);
      expect(key.position).to.equal(1);
      expect(key.value).to.equal(2);
      expect(key.tangentIn).to.equal(3);
      expect(key.tangentOut).to.equal(4);
      expect(key.continuity).to.equal(CurveContinuity.step);
    });
    it("clone", () => {
      const key = new CurveKey(1, 2, 3, 4, CurveContinuity.step);
      const clone = key.clone();
      expect(clone.position).to.equal(key.position);
      expect(clone.value).to.equal(key.value);
      expect(clone.tangentIn).to.equal(key.tangentIn);
      expect(clone.tangentOut).to.equal(key.tangentOut);
      expect(clone.continuity).to.equal(key.continuity);
      expect(clone).to.not.equal(key);
    });
  });

  // test/curve-key-collection.test.ts
  describe("CurveKeyCollection", () => {
    it("constructor", () => {
      const collection = new CurveKeyCollection();
      expect(collection.length).to.equal(0);
    });
    it("add", () => {
      const collection = new CurveKeyCollection();
      const key = new CurveKey(0, 0);
      collection.add(key);
      expect(collection.length).to.equal(1);
      expect(collection[0]).to.equal(key);
    });
    it("clear", () => {
      const collection = new CurveKeyCollection();
      collection.add(new CurveKey(0, 0));
      collection.clear();
      expect(collection.length).to.equal(0);
    });
    it("contains", () => {
      const collection = new CurveKeyCollection();
      const key = new CurveKey(0, 0);
      collection.add(key);
      expect(collection.contains(key)).to.be.true;
      expect(collection.contains(new CurveKey(1, 1))).to.be.false;
    });
    it("indexOf", () => {
      const collection = new CurveKeyCollection();
      const key1 = new CurveKey(0, 0);
      const key2 = new CurveKey(1, 1);
      collection.add(key1);
      collection.add(key2);
      expect(collection.indexOf(key1)).to.equal(0);
      expect(collection.indexOf(key2)).to.equal(1);
    });
    it("remove", () => {
      const collection = new CurveKeyCollection();
      const key = new CurveKey(0, 0);
      collection.add(key);
      collection.remove(key);
      expect(collection.length).to.equal(0);
    });
    it("removeAt", () => {
      const collection = new CurveKeyCollection();
      const key = new CurveKey(0, 0);
      collection.add(key);
      collection.removeAt(0);
      expect(collection.length).to.equal(0);
    });
    it("clone", () => {
      const collection = new CurveKeyCollection();
      const key = new CurveKey(0, 0);
      collection.add(key);
      const clone = collection.clone();
      expect(clone.length).to.equal(1);
      expect(clone[0]).to.equal(key);
      expect(clone).to.not.equal(collection);
    });
  });

  // src/cubic-bezier.ts
  var CONSTRUCTOR_SYMBOL15 = /* @__PURE__ */ Symbol("constructor");
  var _y2_dec, _x2_dec, _y1_dec, _x1_dec, _dontCalc, _x1, _init15, _y1, _x22, _y22, _v1, _v2, _v3, _CubicBezier_instances, calc_fn;
  var _CubicBezier = class _CubicBezier {
    constructor(...params) {
      __runInitializers(_init15, 5, this);
      __privateAdd(this, _CubicBezier_instances);
      /**
       * 防止在构造函数中计算。
       */
      __privateAdd(this, _dontCalc, false);
      /**
       * 三次贝塞尔曲线第二个控制点的 x 轴坐标。
       */
      __privateAdd(this, _x1, 0);
      /**
       * 三次贝塞尔曲线第二个控制点的 y 轴坐标。
       */
      __privateAdd(this, _y1, 0);
      /**
       * 三次贝塞尔曲线第三个控制点的 x 轴坐标。
       */
      __privateAdd(this, _x22, 0);
      /**
       * 三次贝塞尔曲线第三个控制点的 y 轴坐标。
       */
      __privateAdd(this, _y22, 0);
      /**
       * 三次贝塞尔曲线第一个控制点向量坐标。
       */
      __privateAdd(this, _v1, null);
      /**
       * 三次贝塞尔曲线第二个控制点向量坐标。
       */
      __privateAdd(this, _v2, null);
      /**
       * 三次贝塞尔曲线第三个控制点向量坐标。
       */
      __privateAdd(this, _v3, null);
      _CubicBezier[CONSTRUCTOR_SYMBOL15].apply(this, params);
    }
    /**
     * 获取以相同速度开始至结束的三次贝塞尔曲线。
     * @returns 以相同速度开始至结束的三次贝塞尔曲线。
     */
    static get linear() {
      return new _CubicBezier(0, 0, 1, 1);
    }
    /**
     * 获取慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
     * @returns 慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
     */
    static get ease() {
      return new _CubicBezier(0.25, 0.1, 0.25, 1);
    }
    /**
     * 获取以慢速开始的三次贝塞尔曲线。
     * @returns 以慢速开始的三次贝塞尔曲线。
     */
    static get easeIn() {
      return new _CubicBezier(0.42, 0, 1, 1);
    }
    /**
     * 获取以慢速结束的三次贝塞尔曲线。
     * @returns 以慢速结束的三次贝塞尔曲线。
     */
    static get easeOut() {
      return new _CubicBezier(0, 0, 0.58, 1);
    }
    /**
     * 获取以慢速开始和结束的三次贝塞尔曲线。
     * @returns 以慢速开始和结束的三次贝塞尔曲线。
     */
    static get easeInOut() {
      return new _CubicBezier(0.42, 0, 0.58, 1);
    }
    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速开始）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInSine() {
      return new _CubicBezier(0.12, 0, 0.39, 0);
    }
    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速结束）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutSine() {
      return new _CubicBezier(0.61, 1, 0.88, 1);
    }
    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutSine() {
      return new _CubicBezier(0.37, 0, 0.63, 1);
    }
    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速开始）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInQuad() {
      return new _CubicBezier(0.11, 0, 0.5, 0);
    }
    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速结束）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutQuad() {
      return new _CubicBezier(0.5, 1, 0.89, 1);
    }
    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutQuad() {
      return new _CubicBezier(0.45, 0, 0.55, 1);
    }
    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInCubic() {
      return new _CubicBezier(0.32, 0, 0.67, 0);
    }
    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速结束）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutCubic() {
      return new _CubicBezier(0.33, 1, 0.68, 1);
    }
    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutCubic() {
      return new _CubicBezier(0.65, 0, 0.35, 1);
    }
    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速开始）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInQuart() {
      return new _CubicBezier(0.5, 0, 0.75, 0);
    }
    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速结束）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutQuart() {
      return new _CubicBezier(0.25, 1, 0.5, 1);
    }
    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutQuart() {
      return new _CubicBezier(0.76, 0, 0.24, 1);
    }
    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速开始）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInQuint() {
      return new _CubicBezier(0.64, 0, 0.78, 0);
    }
    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速结束）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutQuint() {
      return new _CubicBezier(0.22, 1, 0.36, 1);
    }
    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutQuint() {
      return new _CubicBezier(0.83, 0, 0.17, 1);
    }
    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速开始）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInExpo() {
      return new _CubicBezier(0.7, 0, 0.84, 0);
    }
    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速结束）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutExpo() {
      return new _CubicBezier(0.16, 1, 0.3, 1);
    }
    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutExpo() {
      return new _CubicBezier(0.87, 0, 0.13, 1);
    }
    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速开始）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInCirc() {
      return new _CubicBezier(0.55, 0, 1, 0.45);
    }
    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速结束）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutCirc() {
      return new _CubicBezier(0, 0.55, 0.45, 1);
    }
    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutCirc() {
      return new _CubicBezier(0.85, 0, 0.15, 1);
    }
    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速开始）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInBack() {
      return new _CubicBezier(0.36, 0, 0.66, -0.56);
    }
    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速结束）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutBack() {
      return new _CubicBezier(0.34, 1.56, 0.64, 1);
    }
    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutBack() {
      return new _CubicBezier(0.68, -0.6, 0.32, 1.6);
    }
    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInElastic() {
      return new _CubicBezier(0.7, -1, 0.84, 1);
    }
    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速结束）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutElastic() {
      return new _CubicBezier(0.16, -1, 0.3, 2);
    }
    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutElastic() {
      return new _CubicBezier(0.87, -1, 0.13, 2);
    }
    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInBounce() {
      return new _CubicBezier(0.7, 1.56, 0.84, 1);
    }
    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速结束）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutBounce() {
      return new _CubicBezier(0.16, -0.56, 0.3, 1);
    }
    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutBounce() {
      return new _CubicBezier(0.87, 1.56, 0.13, 1);
    }
    /**
     * 获取三次贝塞尔曲线第二个控制点的 x 轴坐标。
     */
    get x1() {
      return __privateGet(this, _x1);
    }
    set x1(value) {
      __privateSet(this, _x1, MathHelper.clamp(value, 0, 1));
      __privateMethod(this, _CubicBezier_instances, calc_fn).call(this);
    }
    /**
     * 获取三次贝塞尔曲线第二个控制点的 y 轴坐标。
     */
    get y1() {
      return __privateGet(this, _y1);
    }
    set y1(value) {
      __privateSet(this, _y1, value);
      __privateMethod(this, _CubicBezier_instances, calc_fn).call(this);
    }
    /**
     * 获取三次贝塞尔曲线第三个控制点的 x 轴坐标。
     */
    get x2() {
      return __privateGet(this, _x22);
    }
    set x2(value) {
      __privateSet(this, _x22, MathHelper.clamp(value, 0, 1));
      __privateMethod(this, _CubicBezier_instances, calc_fn).call(this);
    }
    /**
     * 获取三次贝塞尔曲线第三个控制点的 y 轴坐标。
     */
    get y2() {
      return __privateGet(this, _y22);
    }
    set y2(value) {
      __privateSet(this, _y22, value);
      __privateMethod(this, _CubicBezier_instances, calc_fn).call(this);
    }
    /**
     * 获取三次贝塞尔曲线起点向量坐标 (P0)。
     */
    get p0() {
      return new Vector2(0, 0);
    }
    /**
     * 获取三次贝塞尔曲线第一个控制点向量坐标 (P1)。
     */
    get p1() {
      return new Vector2(__privateGet(this, _x1), __privateGet(this, _y1));
    }
    /**
     * 获取三次贝塞尔曲线第二个控制点向量坐标 (P2)。
     */
    get p2() {
      return new Vector2(__privateGet(this, _x22), __privateGet(this, _y22));
    }
    /**
     * 获取三次贝塞尔曲线终点向量坐标 (P3)。
     */
    get p3() {
      return new Vector2(1, 1);
    }
    /**
     * 结构化构造函数。
     * @returns CubicBezier 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"]() {
      return new _CubicBezier();
    }
    static [(_x1_dec = [x2(Number)], _y1_dec = [x2(Number)], _x2_dec = [x2(Number)], _y2_dec = [x2(Number)], CONSTRUCTOR_SYMBOL15)](...params) {
      _CubicBezier[CONSTRUCTOR_SYMBOL15] = src_default().add([], function() {
        _CubicBezier[CONSTRUCTOR_SYMBOL15].call(this, 0, 0, 1, 1);
      }).add([Vector2, Vector2], function(p1, p2) {
        _CubicBezier[CONSTRUCTOR_SYMBOL15].call(this, p1.x, p1.y, p2.x, p2.y);
      }).add([Number, Number, Number, Number], function(x1, y1, x22, y2) {
        __privateSet(this, _dontCalc, true);
        __privateSet(this, _x1, x1);
        __privateSet(this, _y1, y1);
        __privateSet(this, _x22, x22);
        __privateSet(this, _y22, y2);
        __privateSet(this, _v1, new Vector2());
        __privateSet(this, _v2, new Vector2());
        __privateSet(this, _v3, new Vector2());
        __privateSet(this, _dontCalc, false);
        __privateMethod(this, _CubicBezier_instances, calc_fn).call(this);
      });
      return _CubicBezier[CONSTRUCTOR_SYMBOL15].apply(this, params);
    }
    ["=="](...params) {
      _CubicBezier.prototype["=="] = src_default([_CubicBezier], function(other) {
        return this.equals(other);
      }).any(() => false);
      return _CubicBezier.prototype["=="].apply(this, params);
    }
    ["!="](...params) {
      _CubicBezier.prototype["!="] = src_default([_CubicBezier], function(other) {
        return !this.equals(other);
      }).any(() => true);
      return _CubicBezier.prototype["!="].apply(this, params);
    }
    getX(...params) {
      _CubicBezier.prototype.getX = src_default([Number], function(t) {
        return ((__privateGet(this, _v1).x * t + __privateGet(this, _v2).x) * t + __privateGet(this, _v3).x) * t;
      });
      return _CubicBezier.prototype.getX.apply(this, params);
    }
    getY(...params) {
      _CubicBezier.prototype.getY = src_default().add([Number], function(t) {
        return ((__privateGet(this, _v1).y * t + __privateGet(this, _v2).y) * t + __privateGet(this, _v3).y) * t;
      });
      return _CubicBezier.prototype.getY.apply(this, params);
    }
    solve(...params) {
      _CubicBezier.prototype.solve = src_default().add([Number], function(x3) {
        if (x3 === 0 || x3 === 1) return this.getY(x3);
        let t = x3;
        for (let i = 0; i < 8; i++) {
          const g2 = this.getX(t) - x3;
          if (Math.abs(g2) < Number.EPSILON) return this.getY(t);
          const d2 = (3 * __privateGet(this, _v1).x * t + 2 * __privateGet(this, _v2).x) * t + __privateGet(this, _v3).x;
          if (Math.abs(d2) < Number.EPSILON) break;
          t -= g2 / d2;
        }
        return this.getY(t);
      });
      return _CubicBezier.prototype.solve.apply(this, params);
    }
    equals(...params) {
      _CubicBezier.prototype.equals = src_default([_CubicBezier], function(cubicBezier) {
        return this.p1.equals(cubicBezier.p1) && this.p2.equals(cubicBezier.p2);
      }).any(() => false);
      return _CubicBezier.prototype.equals.apply(this, params);
    }
    toString(...params) {
      _CubicBezier.prototype.toString = src_default([], function() {
        return JSON.stringify(this);
      });
      return _CubicBezier.prototype.toString.apply(this, params);
    }
    /**
     * 返回当前三次贝塞尔曲线的 JSON 格式表示。
     */
    toJSON() {
      return {
        p0: this.p0.toJSON(),
        p1: this.p1.toJSON(),
        p2: this.p2.toJSON(),
        p3: this.p3.toJSON()
      };
    }
  };
  _init15 = __decoratorStart(null);
  _dontCalc = new WeakMap();
  _x1 = new WeakMap();
  _y1 = new WeakMap();
  _x22 = new WeakMap();
  _y22 = new WeakMap();
  _v1 = new WeakMap();
  _v2 = new WeakMap();
  _v3 = new WeakMap();
  _CubicBezier_instances = new WeakSet();
  calc_fn = function() {
    if (__privateGet(this, _dontCalc)) return;
    __privateGet(this, _v3).x = 3 * __privateGet(this, _x1);
    __privateGet(this, _v3).y = 3 * __privateGet(this, _y1);
    __privateGet(this, _v2).x = 3 * (__privateGet(this, _x22) - __privateGet(this, _x1)) - __privateGet(this, _v3).x;
    __privateGet(this, _v2).y = 3 * (__privateGet(this, _y22) - __privateGet(this, _y1)) - __privateGet(this, _v3).y;
    __privateGet(this, _v1).x = 1 - __privateGet(this, _v3).x - __privateGet(this, _v2).x;
    __privateGet(this, _v1).y = 1 - __privateGet(this, _v3).y - __privateGet(this, _v2).y;
  };
  __decorateElement(_init15, 3, "x1", _x1_dec, _CubicBezier);
  __decorateElement(_init15, 3, "y1", _y1_dec, _CubicBezier);
  __decorateElement(_init15, 3, "x2", _x2_dec, _CubicBezier);
  __decorateElement(_init15, 3, "y2", _y2_dec, _CubicBezier);
  __decoratorMetadata(_init15, _CubicBezier);
  var CubicBezier = _CubicBezier;

  // test/cubic-bezier.test.ts
  describe("CubicBezier", () => {
    describe("Static Properties", () => {
      it("linear", () => {
        const cb = CubicBezier.linear;
        expect(cb.x1).to.equal(0);
        expect(cb.y1).to.equal(0);
        expect(cb.x2).to.equal(1);
        expect(cb.y2).to.equal(1);
      });
      it("ease", () => {
        const cb = CubicBezier.ease;
        expect(cb.x1).to.equal(0.25);
        expect(cb.y1).to.equal(0.1);
        expect(cb.x2).to.equal(0.25);
        expect(cb.y2).to.equal(1);
      });
    });
    describe("Constructor", () => {
      it("should default to linear (0,0,1,1)", () => {
        const cb = new CubicBezier();
        expect(cb.x1).to.equal(0);
        expect(cb.y1).to.equal(0);
        expect(cb.x2).to.equal(1);
        expect(cb.y2).to.equal(1);
      });
      it("should accept x1, y1, x2, y2", () => {
        const cb = new CubicBezier(0.1, 0.2, 0.8, 0.9);
        expect(cb.x1).to.equal(0.1);
        expect(cb.y1).to.equal(0.2);
        expect(cb.x2).to.equal(0.8);
        expect(cb.y2).to.equal(0.9);
      });
      it("should accept Vector2, Vector2", () => {
        const p1 = new Vector2(0.1, 0.2);
        const p2 = new Vector2(0.8, 0.9);
        const cb = new CubicBezier(p1, p2);
        expect(cb.x1).to.equal(0.1);
        expect(cb.y1).to.equal(0.2);
        expect(cb.x2).to.equal(0.8);
        expect(cb.y2).to.equal(0.9);
      });
    });
    describe("Instance Methods", () => {
      it("solve (linear)", () => {
        const cb = CubicBezier.linear;
        expect(cb.solve(0)).to.equal(0);
        expect(cb.solve(0.5)).to.equal(0.5);
        expect(cb.solve(1)).to.equal(1);
      });
      it("solve (easeIn)", () => {
        const cb = CubicBezier.easeIn;
        expect(cb.solve(0.5)).to.be.lessThan(0.5);
      });
      it("solve (easeOut)", () => {
        const cb = CubicBezier.easeOut;
        expect(cb.solve(0.5)).to.be.greaterThan(0.5);
      });
      it("equals", () => {
        const cb1 = new CubicBezier(0.1, 0.2, 0.3, 0.4);
        const cb2 = new CubicBezier(0.1, 0.2, 0.3, 0.4);
        const cb3 = new CubicBezier(0.5, 0.6, 0.7, 0.8);
        expect(cb1.equals(cb2)).to.be.true;
        expect(cb1.equals(cb3)).to.be.false;
      });
    });
  });

  // test/math-helper.test.ts
  describe("MathHelper", () => {
    describe("Constants", () => {
      it("pi", () => {
        expect(MathHelper.pi).to.be.closeTo(Math.PI, 1e-5);
      });
      it("piOver2", () => {
        expect(MathHelper.piOver2).to.be.closeTo(Math.PI / 2, 1e-5);
      });
      it("piOver4", () => {
        expect(MathHelper.piOver4).to.be.closeTo(Math.PI / 4, 1e-5);
      });
      it("twoPi", () => {
        expect(MathHelper.twoPi).to.be.closeTo(Math.PI * 2, 1e-5);
      });
      it("e", () => {
        expect(MathHelper.e).to.be.closeTo(Math.E, 1e-5);
      });
      it("log10e", () => {
        expect(MathHelper.log10e).to.be.closeTo(Math.LOG10E, 1e-5);
      });
      it("log2e", () => {
        expect(MathHelper.log2e).to.be.closeTo(Math.LOG2E, 1e-5);
      });
    });
    describe("Static Methods", () => {
      it("barycentric", () => {
        const result = MathHelper.barycentric(10, 20, 30, 0.5, 0.5);
        expect(result).to.equal(25);
      });
      it("catmullRom", () => {
        const result = MathHelper.catmullRom(0, 10, 20, 30, 0.5);
        expect(result).to.equal(15);
      });
      it("clamp", () => {
        expect(MathHelper.clamp(10, 0, 5)).to.equal(5);
        expect(MathHelper.clamp(-10, 0, 5)).to.equal(0);
        expect(MathHelper.clamp(3, 0, 5)).to.equal(3);
      });
      it("distance", () => {
        expect(MathHelper.distance(10, 20)).to.equal(10);
        expect(MathHelper.distance(-10, 10)).to.equal(20);
      });
      it("hermite", () => {
        const result = MathHelper.hermite(0, 0, 10, 0, 0.5);
        expect(result).to.equal(5);
      });
      it("lerp", () => {
        expect(MathHelper.lerp(0, 10, 0.5)).to.equal(5);
        expect(MathHelper.lerp(0, 10, 0.25)).to.equal(2.5);
      });
      it("max", () => {
        expect(MathHelper.max(10, 20)).to.equal(20);
      });
      it("min", () => {
        expect(MathHelper.min(10, 20)).to.equal(10);
      });
      it("smoothStep", () => {
        expect(MathHelper.smoothStep(0, 10, 0)).to.equal(0);
        expect(MathHelper.smoothStep(0, 10, 1)).to.equal(10);
        expect(MathHelper.smoothStep(0, 10, 0.5)).to.equal(5);
      });
      it("toDegrees", () => {
        expect(MathHelper.toDegrees(Math.PI)).to.be.closeTo(180, 1e-3);
        expect(MathHelper.toDegrees(Math.PI / 2)).to.be.closeTo(90, 1e-3);
      });
      it("toRadians", () => {
        expect(MathHelper.toRadians(180)).to.be.closeTo(Math.PI, 1e-3);
        expect(MathHelper.toRadians(90)).to.be.closeTo(Math.PI / 2, 1e-3);
      });
      it("wrapAngle", () => {
        expect(MathHelper.wrapAngle(Math.PI)).to.be.closeTo(Math.PI, 1e-3);
        expect(MathHelper.wrapAngle(Math.PI * 3)).to.be.closeTo(Math.PI, 1e-3);
        expect(MathHelper.wrapAngle(-Math.PI * 3)).to.be.closeTo(-Math.PI, 1e-3);
        expect(MathHelper.wrapAngle(0)).to.equal(0);
      });
      it("isPowerOfTwo", () => {
        expect(MathHelper.isPowerOfTwo(1)).to.be.true;
        expect(MathHelper.isPowerOfTwo(2)).to.be.true;
        expect(MathHelper.isPowerOfTwo(4)).to.be.true;
        expect(MathHelper.isPowerOfTwo(3)).to.be.false;
        expect(MathHelper.isPowerOfTwo(0)).to.be.false;
        expect(MathHelper.isPowerOfTwo(-2)).to.be.false;
      });
      it("floorPowerOfTwo", () => {
        expect(MathHelper.floorPowerOfTwo(1)).to.equal(0);
        expect(MathHelper.floorPowerOfTwo(2)).to.equal(2);
        expect(MathHelper.floorPowerOfTwo(3)).to.equal(2);
        expect(MathHelper.floorPowerOfTwo(4)).to.equal(4);
        expect(MathHelper.floorPowerOfTwo(5)).to.equal(4);
        expect(MathHelper.floorPowerOfTwo(1023)).to.equal(512);
        expect(MathHelper.floorPowerOfTwo(1024)).to.equal(1024);
      });
    });
  });
})();
//# sourceMappingURL=bundle.js.map
