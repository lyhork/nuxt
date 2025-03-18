<script setup>
definePageMeta({
  layout: "admin",
});


const postStore=usePostStore()
const {postInput,loading,edit}=storeToRefs(postStore)

</script>
<template>
  <div>
    <h1 class="text-2xl mb-2">Create-Post</h1>
    <div class="flex flex-col mb-2 w-[600px]">
      <div class="flex flex-col mb-3">
        <input
          v-model="postInput.title"
          placeholder="Title..."
          type="text"
          class="mb-2 border rounded-md py-1 px-2 shadow-md"
        />
      <!-- <textarea
          v-model="postInput.post_content"
          name=""
          id=""
          rows="5"
          class="mb-2 border rounded-md py-1 px-2 shadow-md"
        ></textarea>  -->

        <ClientOnly fallback-tag="span" fallback="Loading comments...">
          <rich-editor
           :value="postInput.post_content" 
          @input="event => postInput.post_content = event" />
        </ClientOnly>
        

        
     
   

      </div>

      <div class="flex justify-between">
        <NuxtLink
          to="/admin/list-of-posts"
          class="rounded-md text-gray-700 hover:text-white border-1 border-blue-600 px-2 py-2 hover:bg-indigo-700 text-sm font-semibold"
        >
          Back
        </NuxtLink>
        <button
          :disabled="loading"
          @click="postStore.createPost"
          :class="edit?' bg-yellow-500 rounded-md text-white px-2 py-2 text-sm font-semibold ':' bg-indigo-700 rounded-md text-white px-2 py-2 text-sm font-semibold  '"
        >
          {{ loading ? "processing...." : edit ? 'Update':'Create'}}
        </button>
      </div>
    </div>
  </div>
</template>