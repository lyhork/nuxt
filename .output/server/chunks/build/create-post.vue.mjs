import { defineComponent, ref, provide, createElementBlock, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { _ as __nuxt_component_0$1 } from './nuxt-link.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as usePostStore } from './post-store.mjs';
import { storeToRefs } from 'pinia';
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
import 'vue-router';
import './getUserData.mjs';

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

const _sfc_main = {
  __name: "create-post",
  __ssrInlineRender: true,
  setup(__props) {
    const postStore = usePostStore();
    const { postInput, loading, edit } = storeToRefs(postStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl mb-2">Create-Post</h1><div class="flex flex-col mb-2 w-[600px]"><div class="flex flex-col mb-3"><input${ssrRenderAttr("value", unref(postInput).title)} placeholder="Title..." type="text" class="mb-2 border rounded-md py-1 px-2 shadow-md">`);
      _push(ssrRenderComponent(_component_ClientOnly, {
        "fallback-tag": "span",
        fallback: "Loading comments..."
      }, {}, _parent));
      _push(`</div><div class="flex justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/list-of-posts",
        class: "rounded-md text-gray-700 hover:text-white border-1 border-blue-600 px-2 py-2 hover:bg-indigo-700 text-sm font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="${ssrRenderClass(unref(edit) ? " bg-yellow-500 rounded-md text-white px-2 py-2 text-sm font-semibold " : " bg-indigo-700 rounded-md text-white px-2 py-2 text-sm font-semibold  ")}">${ssrInterpolate(unref(loading) ? "processing...." : unref(edit) ? "Update" : "Create")}</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/create-post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-post.vue.mjs.map
