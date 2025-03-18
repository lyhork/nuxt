<script setup>

const LaravelVuePagination = await import('laravel-vue-pagination').then(m => m.default || m);
const { TailwindPagination } = LaravelVuePagination; // Extracting the component


definePageMeta({
  layout: "admin",
});
const userData = getUserData();

const loading=ref(false);
const config = useRuntimeConfig();
const query = ref("");
const page = ref(1);

const { data, error, status, refresh } = await useFetch(
  config.public?.API_BASE_URL + "/posts",
  {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${userData?.token}`,
    },
    watch: [query, page],
    query: {
      query: query,
      page: page,
    },
  }
);

function _debounce(cb, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => cb(args), delay);
  };
}

const searchPost = _debounce(function (searchVal) {
  query.value = searchVal[0];
}, 200);

const paginateData = async (newPageVal) => {
  page.value = newPageVal;
  await refresh();
};

function deletePost(id) {
  promptUser("Do you want to delete this ?").then(async function () {
    try {
      loading.value = true;
      const res = await $fetch(
        config.public?.API_BASE_URL + "/posts/" + id,
        {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${userData?.token}`
          },

          method: "DELETE",
        }
      );
      loading.value = false;
      await refresh();
      successMsg(res?.message);
    } catch (error) {
      loading.value = false;
      showError(error?.message);
    }
  });
}


const router=useRouter()
const postStore=usePostStore()
const {postInput,edit}=storeToRefs(postStore)

const uploadPostStore=useUploadPostImage()
const {modalVal}=storeToRefs(uploadPostStore)

function editPost(post){
  postInput.value=post
  edit.value=true
  router.push('/admin/create-post')
}



</script>
<template>
  <div>
    <h1 class="text-2xl mb-2">Post-list </h1>
    <UploadPostImage
      :show="modalVal"
      @getPosts="refresh"
    />
    <PostListTable
    v-if="data?.data"
      @searchPost="searchPost"
      :status="status"
      @editPost="editPost"
      :posts="data?.data?.data"
      @deletePost="deletePost"
      @uploadImage="uploadPostStore.showModal"
    />
       
 <span v-else class="shadow-md px-2 py-2 rounded-md mt-20 text-gray-900 border font-semibold text-center">No data found
      <br>
      Check your internet connection
    </span>

    <TailwindPagination
    v-if="data.data"
      class="mt-2 mb-10"
      :data="data?.data"
      @pagination-change-page="paginateData"
    />
    <br>
    <br>
    <br>

  </div>
</template>
<style scoped>
/* If you pagination doesnt looks good use this */
button.relative.inline-flex.items-center.px-4.py-2.text-sm.font-medium.border.focus\:z-20.bg-blue-50.border-blue-500.text-blue-600.z-30 {
  background: #4f46e5;
  color: white;
  /* border-radius: 5px; */
}
</style>