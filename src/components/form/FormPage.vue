<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import SubTitle from '../ui/SubTitle.vue';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const formData = ref({
    fullName: '',
    phoneNumber: '',
});

const isSuccess = ref(false);
const dialogOpen = ref(false);

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
            // console.log('Xabar yuborildi:', response.data);
            isSuccess.value = true;
            dialogOpen.value = false; 

            formData.value.fullName = '';
            formData.value.phoneNumber = '';
        })
        .catch(error => {
            console.error('Xatolik:', error);
            isSuccess.value = false;
        });
}
</script>

<template>
    <Dialog v-model:open="dialogOpen">
        <DialogTrigger class="bg-blue-600 rounded-[6px] text-white px-[10px] py-[5px]">
            JOYNI BAND QILISH
        </DialogTrigger>
        <DialogContent class="p-0 max-w-2xl w-full">
            <DialogDescription class="sr-only"></DialogDescription>
            <form @submit.prevent="submit" method="POST" class="mt-0 mx-auto p-10 bg-white rounded shadow-md">
                <DialogTitle class="sr-only">
                    Joyingizni band qilish uchun anketani to'ldiring
                </DialogTitle>
                <div>
                    <label class="block text-gray-700 mb-2" for="fullName">To'liq ism sharifingiz</label>
                    <input required v-model="formData.fullName" id="fullName" type="text"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ism,Familya">
                </div>
                <div class="mt-3">
                    <label class="block text-gray-700 mb-2" for="phoneNumber">Telefon raqamingiz</label>
                    <input required v-model="formData.phoneNumber" id="phoneNumber" type="number"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+998 ">
                    <button class="bg-blue-600 text-white px-[10px] py-[5px] mt-4 rounded-[5px]"
                        type="submit">Yuborish</button>
                </div>
            </form>


        </DialogContent>
    </Dialog>
</template>

<style scoped></style>
