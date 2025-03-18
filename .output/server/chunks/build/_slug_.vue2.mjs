import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { b as useRoute, u as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const slug = (_a = route == null ? void 0 : route.params) == null ? void 0 : _a.slug;
    const { data, error, status } = ([__temp, __restore] = withAsyncContext(() => {
      var _a2;
      return useFetch(
        ((_a2 = config.public) == null ? void 0 : _a2.API_BASE_URL) + "/posts/" + slug,
        {
          headers: {
            Accept: "application/json"
          }
        },
        "$nOOIwrF0yd"
      );
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center p-6" }, _attrs))}><div class="max-w-6xl bg-white overflow-hidden mt-20 mb-10"><img${ssrRenderAttr("src", (_a2 = unref(data)[0]) == null ? void 0 : _a2.image)} alt="News image" class="w-full h-100 object-cover"><div class="p-8"><nav class="mb-4"><a href="/" class="text-blue-600 hover:underline text-sm font-bold">Home</a><span class="text-gray-400 mx-2">/</span><span class="text-gray-500 text-sm font-bold">AI News</span></nav><h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">${ssrInterpolate((_b = unref(data)[0]) == null ? void 0 : _b.title)}</h1><div style="${ssrRenderStyle({ "font-size": "18px" })}">${((_c = unref(data)[0]) == null ? void 0 : _c.post_content) ?? ""}</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue2.mjs.map
