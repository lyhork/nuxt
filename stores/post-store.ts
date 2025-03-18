
import { ref } from "vue"
import { defineStore } from 'pinia'
export const usePostStore = defineStore('post-store', () => {

    const edit = ref(false)


    const postInput = ref({
        id: null,
        title: "",
        post_content: "",
    });

    

    const config = useRuntimeConfig();

    const loading = ref(false);

    async function createPost() {
        const userData = getUserData();
        try {
            loading.value = true;
            const apiURL=config.public?.API_BASE_URL
            const url = edit.value ?apiURL+ "/posts/" + postInput.value.id
                : apiURL + "/posts"
            const httpVerb=edit.value?'PUT':'POST';

            const res: any = await $fetch(url, {
                headers: {
                    Accept: "application/json",
                    "content-type": "application/json",
                    Authorization: `Bearer ${userData?.token}`,
                },

                method: httpVerb,
                body: JSON.stringify(postInput.value),
            });
            loading.value = false;
            edit.value=false
            postInput.value = {} as any

            successMsg(res?.message);
        } catch (error: any) {
            loading.value = false;

            if (error?.response?.status === 422) {
                const errors = error.response?._data;

                for (const message of errors) {
                    showError(message);
                }
            }
        }
    }

    return {
        edit,
        postInput,
        loading,
        createPost,
        config
    }




})