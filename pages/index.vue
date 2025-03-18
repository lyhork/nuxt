<script setup>
const LaravelVuePagination = await import('laravel-vue-pagination').then(m => m.default || m);
const { TailwindPagination } = LaravelVuePagination; // Extracting the component


const config = useRuntimeConfig();
const page = ref(1);
const { data, error, status, refresh } = await useFetch(
  config.public?.API_BASE_URL + "/posts",
  {
    headers: {
      Accept: "application/json",
    },
    watch: [page],
    query: {
      page: page,
    },
  }
);


const paginateData = async (newPageVal) => {
  page.value = newPageVal;
  await refresh();
};

</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16">

    <!-- Article List -->
    
    <ArticleList 
    v-if="data?.data"
      class="mt-10 mb-10 "
      :posts="data?.data?.data"
    />
    
 <span v-else class="shadow-md px-2 py-2 rounded-md mt-20 text-gray-900 border font-semibold text-center">No data found
      <br>
      Check your internet connection
    </span>
   

    <!-- Pagination -->
    <div class="w-full flex justify-center mt-6">
      <TailwindPagination
      v-if="data?.data"
        class="mt-4 p-2 bg-white shadow-md rounded-lg w-full sm:w-auto"
        :data="data?.data"
        @pagination-change-page="paginateData"
      />
    </div>

  </div>
</template>        