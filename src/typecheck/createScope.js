import { pos, syntaxError } from "../errorListener.js";

export function createScope(parent, url = parent.url) {
  return ["imports", "exports", "declares", "types", "structs", "vars"].reduce(
    (ret, key) => ({
      ...ret,
      [key]: new Proxy(
        {},
        {
          get(t, p) {
            if (p in t) return t[p];
            if (parent[key] && p in parent[key]) return parent[key][p];
            pos.url = url;
            return syntaxError(`找不到${p}的定义`);
          },
        }
      ),
    }),
    { url }
  );
}
