<script setup>
const props = defineProps(["show"]);
const emit=defineEmits(['getPosts'])

const image=ref(null)
const uploadPostStore=useUploadPostImage()
const {config}=uploadPostStore

const loading=ref(false)


function selectImage(event) {
    const selectedImage = event.target.files[0];
    const output = document.querySelector("#outputImage");
    output.src = URL.createObjectURL(selectedImage);

    output.onload = function () {
        URL.revokeObjectURL(selectedImage);
    };
    image.value = selectedImage;
}

async function uploadPostImage(){

    try{
        const payloadHeader=await uploadPostStore.uploadImagePayload(uploadPostStore.postId,image.value)
        const res=await fetch(config.public?.API_BASE_URL+'/posts/upload-image',payloadHeader) 
        const data=await res.json()
        successMsg(data?.message)
        emit('getPosts')
         document.querySelector("#outputImage").src = "";
            document.querySelector('#imageInput').value=''
        
        
    }catch(error){
        showError(error?.message)
    }

}
</script>
<template>
    <BaseModal :show="props.show">

        <template #title>
            <div class="text-2xl font-semibold">Upload Image</div>
        </template>


        <template #body>
            <img style="height: 150px" alt="image" id="outputImage" />
            <label for="">Select image</label>
            <input @change="selectImage" type="file" id="imageInput"  />
        </template>

        <template #footer>
            <button
               @click="uploadPostStore.hideModal"
                class="mb-2 text-gray-700 border border-indigo-700 py-2 px-2 rounded-md shadow-sm"
            >
                close
            </button>
            <button
            @click="uploadPostImage"
                :disabled="loading"
              
                class="mb-2 text-white border bg-indigo-700 py-2 px-2 rounded-md shadow-sm"
            >{{loading?'uploading....':'Upload image'}}
            </button>
        </template>
    </BaseModal>
</template>