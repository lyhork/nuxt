import { _ as __nuxt_component_0$1 } from './nuxt-link.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { g as getUserData } from './getUserData.mjs';
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

const _sfc_main$1 = {
  __name: "Links",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "Dashboard",
        path: "/admin/dashboard"
      },
      {
        name: "Posts",
        path: "/admin/list-of-posts"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex gap-2 py-2 px-2" }, _attrs))} data-v-c501ef9c><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li class="text-sm hover:bg-indigo-700 font-semibold hover:text-white py-2 px-2 rounded-md text-gray-600" data-v-c501ef9c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Links.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c501ef9c"]]);

const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const userData = getUserData();
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Links = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen bg-slate-100" }, _attrs))}><div class="pt-20 mr-28 ml-28"><nav class="rounded-md shadow-md flex justify-between mb-10 bg-white">`);
      _push(ssrRenderComponent(_component_Links, null, null, _parent));
      _push(`<div class="p-2"><span class="text-indigo-500">${ssrInterpolate((_b = (_a = unref(userData)) == null ? void 0 : _a.user) == null ? void 0 : _b.email)}</span> - <button class="p-2 rounded-full font-bold text-red-800">${ssrInterpolate(unref(loading) ? "processing..." : "Logout")}</button></div></nav></div><div><div class="mr-28 ml-28">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin.vue.mjs.map
