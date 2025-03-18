<script setup>
definePageMeta({
    layout: 'auth'
})

const registerInput = ref({
    name: '',
    email: '',
    password: ''
})

const loading = ref(false);

const config = useRuntimeConfig();

async function createUser() {
    try {
        loading.value= true;
        const res = await $fetch(config.public?.API_BASE_URL+ '/register', {
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            method: 'POST',
            body:JSON.stringify(registerInput.value)
        })
        loading.value= false;

        successMsg(res?.message)
        
    } catch (error) {
        loading.value= false;

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
                <h1 class="text-2xl">Register</h1>
                <input v-model="registerInput.name" type="text" name="" placeholder="Name" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300">
                <input v-model="registerInput.email" type="text" name="" placeholder="Email" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300">
                <input v-model="registerInput.password" type="password" name="" placeholder="Password" id="" class="py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300">
                <NuxtLink to="/auth/login" class="text-indigo-700 focus:ring focus:ring-blue-300">Login</NuxtLink>
                <button @click="createUser" :disabled="loading" class="rounded-md text-white py-2 bg-indigo-700 text-sm font-semibold">{{ loading?'processing...':'Create account' }}</button>

            </div>
        </div>
        <div></div>
        </div>
    </div>
</template>