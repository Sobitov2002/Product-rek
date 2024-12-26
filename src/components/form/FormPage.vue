<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

const formData = ref({
    fullName: '',
    phoneNumber: '',

});

const submit = () => {
    console.log("Yuborildi xabar", formData.value);

    const token = '7555842657:AAE-nLRTeQ27pGXLdLa-Zju_3JPdxrG9o_Y';
    const chatId = '-4762117343';

    const text = `Yangi foydalanuvchi: ${formData.value.fullName}\nTelefon raqami: ${formData.value.phoneNumber}`;
    console.log(text);
    
    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: text
    })
        .then(response => {
            console.log('Xabar yuborildi:', response.data);
        })
        .catch(error => {
            console.error('Xatolik:', error);
        });
    }
</script>

<template>
    <Dialog class="p-0">
        <DialogTrigger class="bg-blue-600 text-white px-[10px] py-[5px]">
            Ko'rish
        </DialogTrigger>
        <DialogContent class="p-0">
            <DialogDescription class="sr-only">
            </DialogDescription>
            <form @submit.prevent="submit" method="POST"
                class="w-[90%] mt-10 max-w-sm mx-auto p-4 bg-white rounded shadow-md">
                <div>
                    <label class="block text-gray-700 mb-2" for="fullName">Enter your name</label>
                    <input required v-model="formData.fullName" id="fullName" type="text"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2" for="phoneNumber">Your phone number</label>
                    <input required v-model="formData.phoneNumber" id="phoneNumber" type="number"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your phone number">
                    <button class="bg-blue-600 text-white px-[10px] py-[5px] mt-4 rounded-[5px]"
                        type="submit">Yuborish</button>
                </div>
            </form>
        </DialogContent>
    </Dialog>

</template>

<style scoped>

</style>
