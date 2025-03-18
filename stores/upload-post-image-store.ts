
import { ref } from "vue"
import { defineStore } from 'pinia'
export const useUploadPostImage = defineStore('upload-post-store', () => {
const modalVal=ref(false)
const postId=ref(null)

function showModal(id:any){
    modalVal.value=true
    postId.value=id
}
function hideModal(){
    modalVal.value=false
}



const config=useRuntimeConfig()

function uploadImagePayload(postId:string,image:string){
    const userData=getUserData()
    return new Promise((resolve, reject) =>{
        try{
            const myHeaders=new Headers()
        myHeaders.append('Accept','application/json')
        myHeaders.append('Authorization','Bearer '+userData?.token)

        const formData = new FormData()
        formData.append('postId',postId)
        formData.append('image',image)

        const uploadImagePayload = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        resolve(uploadImagePayload)

        }catch(error){
            console.log(error);
        }
        

    })
}
  

    return {
        uploadImagePayload,
       showModal,
       hideModal,
       modalVal,
       config,
       postId
    }




})