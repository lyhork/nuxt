import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import 'pinia';
import 'vue-router';

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const registerInput = ref({
      name: "",
      email: "",
      password: ""
    });
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100 h-screen" }, _attrs))}><div class="flex justify-between"><div></div><div class="w-[300px] mt-20"><div class="flex flex-col gap-2"><h1 class="text-2xl">Register</h1><input${ssrRenderAttr("value", unref(registerInput).name)} type="text" name="" placeholder="Name" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300"><input${ssrRenderAttr("value", unref(registerInput).email)} type="text" name="" placeholder="Email" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300"><input${ssrRenderAttr("value", unref(registerInput).password)} type="password" name="" placeholder="Password" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "text-indigo-700 focus:ring focus:ring-blue-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="rounded-md text-white py-2 bg-indigo-700 text-sm font-semibold">${ssrInterpolate(unref(loading) ? "processing..." : "Create account")}</button></div></div><div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register.vue.mjs.map
