<script setup>

defineProps(['posts','status'])

const emit=defineEmits(['searchPost','deletePost','editPost','uploadImage'])
const query=ref('')

async function searchPostByTitle(){
    await emit('searchPost',query.value)
}

const postStore=usePostStore()
const {edit,postInput}=storeToRefs(postStore)

const router=useRouter()
function moveToCreatePostPage(){
  edit.value=false
  postInput.value={}
router.push('/admin/create-post')
}
</script>
<template>
  <div>
    <div class="flex justify-between mb-2">
      <input
   @keydown="searchPostByTitle"
   v-model="query"
        placeholder="Search..."
        type="text"
        class="mb-2 border rounded-md py-1 px-2 shadow-md"
      />
      <button
    @click="moveToCreatePostPage"
        class="rounded-md text-white px-2 py-2 bg-indigo-700 text-sm font-semibold"
      >
        Create a Post
    </button>
    </div>

    <table class="bg-white rounded-md w-full shadow-md border border-gray-300">
      <thead>
        <tr class="bg-gray-100 text-left">
          <td class="border border-gray-300 py-2 px-4">Image</td>
          <td class="border border-gray-300 py-2 px-4">Post-Title</td>
          <td class="border border-gray-300 py-2 px-4">Upload</td>
          <td class="border border-gray-300 py-2 px-4">Edit</td>
          <td class="border border-gray-300 py-2 px-4">Delete</td>
        </tr>
      </thead>

      <tbody>
        <div v-if="status==='pending'">
            Loading data....
        </div>
   
    
        <tr v-else class="text-left" v-for="post in posts" :key="post?.id">
          <td class="border border-gray-300 py-2 px-4">
             <img :src="post?.image" width="150"/>
          </td>
          <td class="border border-gray-300 py-2 px-4">
            {{post?.title}}
          </td>
          <td class="border border-gray-300 py-2 px-4">
            <button
            @click="emit('uploadImage',post?.id)"
          
            class="rounded-md  px-2 text-white py-2 bg-indigo-700 text-sm font-semibold"
          >
           Upload
          </button>
          </td>
          <td class="border border-gray-300 py-2 px-4">

            <button
            @click="emit('editPost',post)"
          
            class="rounded-md  px-2 text-white py-2 bg-indigo-700 text-sm font-semibold"
          >
           Update
          </button>
            
          </td>
          <td class="border border-gray-300 py-2 px-4">

            <button
            @click="emit('deletePost',post?.id)"
          
            class="rounded-md  px-2 text-white py-2 bg-red-700 text-sm font-semibold"
          >
           Delete
          </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>