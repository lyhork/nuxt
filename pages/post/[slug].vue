<script setup>

const config = useRuntimeConfig();
const route=useRoute()
const slug=route?.params?.slug



const { data, error, status } = await useFetch(
  config.public?.API_BASE_URL + "/posts/"+slug,
  {
    headers: {
      Accept: "application/json",
    },
    
  }
);

</script>

<template>
  <div class="min-h-screen  flex items-center justify-center p-6">
    <div class="max-w-6xl bg-white   overflow-hidden mt-20 mb-10">
      <!-- News Image -->
     
      <img
        :src="data[0]?.image"
        alt="News image"
        class="w-full h-100 object-cover"
      />

      <!-- Card Content -->
      <div class="p-8">
        <!-- Breadcrumb -->
        <nav class="mb-4">
          <a href="/" class="text-blue-600 hover:underline text-sm font-bold">Home</a>
          <span class="text-gray-400 mx-2">/</span>
          <span class="text-gray-500 text-sm font-bold">AI News</span>
        </nav>

        <!-- News Title -->
        <h1 class=" text-5xl  font-extrabold text-gray-900 leading-tight mb-6">
           {{ data[0]?.title}}
        </h1>

        

        <div style="font-size: 18px;" v-html="data[0]?.post_content">
          
          </div>
    </div>
  </div>
</div>

</template>