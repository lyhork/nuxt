<script setup>
definePageMeta({
    layout: 'auth'
})

const loginInput = ref({
    email: '',
    password: ''
})


const loading = ref(false);
const config = useRuntimeConfig();


async function loginUser() {
    try {
        loading.value= true;
        const res = await $fetch(config.public?.API_BASE_URL+ '/login', {
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            method: 'POST',
            body:JSON.stringify(loginInput.value)
        })
        loading.value= false;

        console.log(res);
        
        localStorage.setItem('userData', JSON.stringify({
            user:res?.user,
            token:res?.token
        }))

        window.location.href = "/admin/dashboard";

        // successMsg(res?.message)
        
    } catch (error) {
        loading.value= false;

        if(error?.response?.status === 401) {
            showError(error.response?._data?.message)
        }

        if(error?.response?.status === 422) {
            const errors= error.response?._data
            for(const message of errors){
                showError(message)
            }
        }
        
    }
    
}
</script>
<template>
    <div class="bg-slate-100 h-screen">
        <div class="flex justify-between">
            <div></div>
        <div class="w-[300px] mt-20">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl">Login</h1>
                <input type="text" name="" v-model="loginInput.email" placeholder="Email" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300">
                <input type="password" name="" v-model="loginInput.password" placeholder="Password" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300">
                <NuxtLink to="/auth/register" class="text-indigo-700 focus:ring focus:ring-blue-300">Create an account</NuxtLink>
                <button @click="loginUser" :disabled="loading" class="rounded-md text-white py-2 bg-indigo-700 text-sm font-semibold">{{ loading?'Processing...':'Login'}}</button>

            </div>
        </div>
        <div></div>
        </div>
    </div>
</template>