import { mergeProps, useSSRContext, ref, withCtx, unref, createVNode, toDisplayString, withAsyncContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig, a as useRouter } from './server.mjs';
import { defineStore, storeToRefs } from 'pinia';
import { g as getUserData } from './getUserData.mjs';
import { s as successMsg, a as showError, u as usePostStore } from './post-store.mjs';
import { u as useFetch } from './fetch.mjs';
import Swal from 'sweetalert2';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const _sfc_main$3 = {
  __name: "BaseModal",
  __ssrInlineRender: true,
  props: ["show"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.show ? null : { display: "none" },
        className: "fixed z-[1000] inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ease-out"
      }, _attrs))} data-v-88785e4c><div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md sm:w-2/3 md:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn" data-v-88785e4c><div className="flex justify-between items-center" data-v-88785e4c>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div><div class="py-4" data-v-88785e4c>`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`</div><div className="flex gap-2 justify-end mt-4" data-v-88785e4c>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-88785e4c"]]);

const useUploadPostImage = defineStore("upload-post-store", () => {
  const modalVal = ref(false);
  const postId = ref(null);
  function showModal(id) {
    modalVal.value = true;
    postId.value = id;
  }
  function hideModal() {
    modalVal.value = false;
  }
  const config = useRuntimeConfig();
  function uploadImagePayload(postId2, image) {
    const userData = getUserData();
    return new Promise((resolve, reject) => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + (userData == null ? void 0 : userData.token));
        const formData = new FormData();
        formData.append("postId", postId2);
        formData.append("image", image);
        const uploadImagePayload2 = {
          method: "POST",
          headers: myHeaders,
          body: formData
        };
        resolve(uploadImagePayload2);
      } catch (error) {
        console.log(error);
      }
    });
  }
  return {
    uploadImagePayload,
    showModal,
    hideModal,
    modalVal,
    config,
    postId
  };
});

const _sfc_main$2 = {
  __name: "UploadPostImage",
  __ssrInlineRender: true,
  props: ["show"],
  emits: ["getPosts"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const image = ref(null);
    const uploadPostStore = useUploadPostImage();
    const { config } = uploadPostStore;
    const loading = ref(false);
    function selectImage(event) {
      const selectedImage = event.target.files[0];
      const output = (void 0).querySelector("#outputImage");
      output.src = URL.createObjectURL(selectedImage);
      output.onload = function() {
        URL.revokeObjectURL(selectedImage);
      };
      image.value = selectedImage;
    }
    async function uploadPostImage() {
      var _a;
      try {
        const payloadHeader = await uploadPostStore.uploadImagePayload(uploadPostStore.postId, image.value);
        const res = await fetch(((_a = config.public) == null ? void 0 : _a.API_BASE_URL) + "/posts/upload-image", payloadHeader);
        const data = await res.json();
        successMsg(data == null ? void 0 : data.message);
        emit("getPosts");
        (void 0).querySelector("#outputImage").src = "";
        (void 0).querySelector("#imageInput").value = "";
      } catch (error) {
        showError(error == null ? void 0 : error.message);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_BaseModal, mergeProps({
        show: props.show
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-2xl font-semibold"${_scopeId}>Upload Image</div>`);
          } else {
            return [
              createVNode("div", { class: "text-2xl font-semibold" }, "Upload Image")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img style="${ssrRenderStyle({ "height": "150px" })}" alt="image" id="outputImage"${_scopeId}><label for=""${_scopeId}>Select image</label><input type="file" id="imageInput"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                style: { "height": "150px" },
                alt: "image",
                id: "outputImage"
              }),
              createVNode("label", { for: "" }, "Select image"),
              createVNode("input", {
                onChange: selectImage,
                type: "file",
                id: "imageInput"
              }, null, 32)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="mb-2 text-gray-700 border border-indigo-700 py-2 px-2 rounded-md shadow-sm"${_scopeId}> close </button><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="mb-2 text-white border bg-indigo-700 py-2 px-2 rounded-md shadow-sm"${_scopeId}>${ssrInterpolate(unref(loading) ? "uploading...." : "Upload image")}</button>`);
          } else {
            return [
              createVNode("button", {
                onClick: unref(uploadPostStore).hideModal,
                class: "mb-2 text-gray-700 border border-indigo-700 py-2 px-2 rounded-md shadow-sm"
              }, " close ", 8, ["onClick"]),
              createVNode("button", {
                onClick: uploadPostImage,
                disabled: unref(loading),
                class: "mb-2 text-white border bg-indigo-700 py-2 px-2 rounded-md shadow-sm"
              }, toDisplayString(unref(loading) ? "uploading...." : "Upload image"), 9, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UploadPostImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "PostListTable",
  __ssrInlineRender: true,
  props: ["posts", "status"],
  emits: ["searchPost", "deletePost", "editPost", "uploadImage"],
  setup(__props, { emit: __emit }) {
    const query = ref("");
    const postStore = usePostStore();
    const { edit, postInput } = storeToRefs(postStore);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between mb-2"><input${ssrRenderAttr("value", unref(query))} placeholder="Search..." type="text" class="mb-2 border rounded-md py-1 px-2 shadow-md"><button class="rounded-md text-white px-2 py-2 bg-indigo-700 text-sm font-semibold"> Create a Post </button></div><table class="bg-white rounded-md w-full shadow-md border border-gray-300"><thead><tr class="bg-gray-100 text-left"><td class="border border-gray-300 py-2 px-4">Image</td><td class="border border-gray-300 py-2 px-4">Post-Title</td><td class="border border-gray-300 py-2 px-4">Upload</td><td class="border border-gray-300 py-2 px-4">Edit</td><td class="border border-gray-300 py-2 px-4">Delete</td></tr></thead><tbody>`);
      if (__props.status === "pending") {
        _push(`<div> Loading data.... </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(__props.posts, (post) => {
          _push(`<tr class="text-left"><td class="border border-gray-300 py-2 px-4"><img${ssrRenderAttr("src", post == null ? void 0 : post.image)} width="150"></td><td class="border border-gray-300 py-2 px-4">${ssrInterpolate(post == null ? void 0 : post.title)}</td><td class="border border-gray-300 py-2 px-4"><button class="rounded-md px-2 text-white py-2 bg-indigo-700 text-sm font-semibold"> Upload </button></td><td class="border border-gray-300 py-2 px-4"><button class="rounded-md px-2 text-white py-2 bg-indigo-700 text-sm font-semibold"> Update </button></td><td class="border border-gray-300 py-2 px-4"><button class="rounded-md px-2 text-white py-2 bg-red-700 text-sm font-semibold"> Delete </button></td></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostListTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

/* empty css                                                */
function promptUser(message) {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(result.isConfirmed);
      }
      reject();
    });
  });
}

const _sfc_main = {
  __name: "list-of-posts",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const LaravelVuePagination = ([__temp, __restore] = withAsyncContext(() => import('laravel-vue-pagination').then((m) => m.default || m)), __temp = await __temp, __restore(), __temp);
    const { TailwindPagination } = LaravelVuePagination;
    const userData = getUserData();
    const loading = ref(false);
    const config = useRuntimeConfig();
    const query = ref("");
    const page = ref(1);
    const { data, error, status, refresh } = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return useFetch(
        ((_a = config.public) == null ? void 0 : _a.API_BASE_URL) + "/posts",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userData == null ? void 0 : userData.token}`
          },
          watch: [query, page],
          query: {
            query,
            page
          }
        },
        "$O4aTWRQszU"
      );
    }), __temp = await __temp, __restore(), __temp);
    function _debounce(cb, delay) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => cb(args), delay);
      };
    }
    const searchPost = _debounce(function(searchVal) {
      query.value = searchVal[0];
    }, 200);
    const paginateData = async (newPageVal) => {
      page.value = newPageVal;
      await refresh();
    };
    function deletePost(id) {
      promptUser("Do you want to delete this ?").then(async function() {
        var _a;
        try {
          loading.value = true;
          const res = await $fetch(
            ((_a = config.public) == null ? void 0 : _a.API_BASE_URL) + "/posts/" + id,
            {
              headers: {
                Accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${userData == null ? void 0 : userData.token}`
              },
              method: "DELETE"
            }
          );
          loading.value = false;
          await refresh();
          successMsg(res == null ? void 0 : res.message);
        } catch (error2) {
          loading.value = false;
          showError(error2 == null ? void 0 : error2.message);
        }
      });
    }
    const router = useRouter();
    const postStore = usePostStore();
    const { postInput, edit } = storeToRefs(postStore);
    const uploadPostStore = useUploadPostImage();
    const { modalVal } = storeToRefs(uploadPostStore);
    function editPost(post) {
      postInput.value = post;
      edit.value = true;
      router.push("/admin/create-post");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UploadPostImage = _sfc_main$2;
      const _component_PostListTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e175b930><h1 class="text-2xl mb-2" data-v-e175b930>Post-list </h1>`);
      _push(ssrRenderComponent(_component_UploadPostImage, {
        show: unref(modalVal),
        onGetPosts: unref(refresh)
      }, null, _parent));
      if ((_a = unref(data)) == null ? void 0 : _a.data) {
        _push(ssrRenderComponent(_component_PostListTable, {
          onSearchPost: unref(searchPost),
          status: unref(status),
          onEditPost: editPost,
          posts: (_c = (_b = unref(data)) == null ? void 0 : _b.data) == null ? void 0 : _c.data,
          onDeletePost: deletePost,
          onUploadImage: unref(uploadPostStore).showModal
        }, null, _parent));
      } else {
        _push(`<span class="shadow-md px-2 py-2 rounded-md mt-20 text-gray-900 border font-semibold text-center" data-v-e175b930>No data found <br data-v-e175b930> Check your internet connection </span>`);
      }
      if (unref(data).data) {
        _push(ssrRenderComponent(unref(TailwindPagination), {
          class: "mt-2 mb-10",
          data: (_d = unref(data)) == null ? void 0 : _d.data,
          onPaginationChangePage: paginateData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<br data-v-e175b930><br data-v-e175b930><br data-v-e175b930></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/list-of-posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const listOfPosts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e175b930"]]);

export { listOfPosts as default };
//# sourceMappingURL=list-of-posts.vue.mjs.map
