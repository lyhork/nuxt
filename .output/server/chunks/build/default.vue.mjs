import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, computed, defineComponent, h, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { c as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = (opts2 = {}) => {
    error.value = false;
    set(0, opts2);
  };
  function set(at = 0, opts2 = {}) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish({ force: opts2.force });
    }
    progress.value = at < 0 ? 0 : at;
    opts2.force ? 0 : throttle;
    {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator || (nuxtApp._loadingIndicator = createLoadingIndicator(opts));
  return indicator;
}

const __nuxt_component_1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtLoadingIndicator = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col" }, _attrs))}><nav class="bg-white shadow-md fixed w-full z-10"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div><div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex shrink-0 items-center"></div><div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"><span class="ml-2 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Neural Nexus `);
      } else {
        return [
          createTextVNode(" Neural Nexus ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div></div></div><div class="absolute gap-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/login",
    class: "rounded-md text-gray-700 px-2 py-2 hover:bg-slate-300 text-sm font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Login `);
      } else {
        return [
          createTextVNode(" Login ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/register",
    class: "rounded-3xl text-white shadow-md px-4 py-2 hover:ring-2 hover:ring-blue-200 bg-blue-700 text-sm font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create an account `);
      } else {
        return [
          createTextVNode(" Create an account ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></nav><div class="mt-16 flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, {
    color: "#01dc82",
    height: 5
  }, null, _parent));
  _push(`</div><footer class="bg-gradient-to-r from-blue-500 to-teal-400 py-8"><div class="container mx-auto text-center"><p class="text-white text-2xl font-bold"> Innovating the Future, One Step at a Time </p></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
