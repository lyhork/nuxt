import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, withAsyncContext, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "ArticleList",
  __ssrInlineRender: true,
  props: ["posts"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        _push(`<div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"><img class="w-full h-60 object-cover"${ssrRenderAttr("src", post == null ? void 0 : post.image)} alt="News image"><div class="p-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/post/" + (post == null ? void 0 : post.slug),
          class: "text-2xl font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300 mb-2 block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post == null ? void 0 : post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post == null ? void 0 : post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const LaravelVuePagination = ([__temp, __restore] = withAsyncContext(() => import('laravel-vue-pagination').then((m) => m.default || m)), __temp = await __temp, __restore(), __temp);
    const { TailwindPagination } = LaravelVuePagination;
    const config = useRuntimeConfig();
    const page = ref(1);
    const { data, error, status, refresh } = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return useFetch(
        ((_a = config.public) == null ? void 0 : _a.API_BASE_URL) + "/posts",
        {
          headers: {
            Accept: "application/json"
          },
          watch: [page],
          query: {
            page
          }
        },
        "$RcJmAH4yb5"
      );
    }), __temp = await __temp, __restore(), __temp);
    const paginateData = async (newPageVal) => {
      page.value = newPageVal;
      await refresh();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_ArticleList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16" }, _attrs))}>`);
      if ((_a = unref(data)) == null ? void 0 : _a.data) {
        _push(ssrRenderComponent(_component_ArticleList, {
          class: "mt-10 mb-10",
          posts: (_c = (_b = unref(data)) == null ? void 0 : _b.data) == null ? void 0 : _c.data
        }, null, _parent));
      } else {
        _push(`<span class="shadow-md px-2 py-2 rounded-md mt-20 text-gray-900 border font-semibold text-center">No data found <br> Check your internet connection </span>`);
      }
      _push(`<div class="w-full flex justify-center mt-6">`);
      if ((_d = unref(data)) == null ? void 0 : _d.data) {
        _push(ssrRenderComponent(unref(TailwindPagination), {
          class: "mt-4 p-2 bg-white shadow-md rounded-lg w-full sm:w-auto",
          data: (_e = unref(data)) == null ? void 0 : _e.data,
          onPaginationChangePage: paginateData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
