<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import axios from 'axios';
const emit = defineEmits(['updateDialogOpen']);

const formData = ref({
    fullName: '',
    phoneNumber: '',
});


const isSuccess = ref(false); 
const dialogOpen = ref(false); 

const todayDay = new Date();
const formattedDate = `${todayDay.getFullYear()}-${(todayDay.getMonth() + 1).toString().padStart(2, '0')}-${todayDay.getDate().toString().padStart(2, '0')}`;
const currentTime = `${todayDay.getHours().toString().padStart(2, '0')}:${todayDay.getMinutes().toString().padStart(2, '0')}:${todayDay.getSeconds().toString().padStart(2, '0')}`;

const submit = () => {
    

    const token = '7555842657:AAE-nLRTeQ27pGXLdLa-Zju_3JPdxrG9o_Y';
    const chatId = '-4762117343';

    const text = `
        🆕 Yangi foydalanuvchi:
        👤 Ism: ${formData.value.fullName}
        📞 Telefon: ${formData.value.phoneNumber}
        📅 Sana: ${formattedDate}
        🕒 Vaqt: ${currentTime}
    `;

    try {
        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: text,
        }).then(() => {
            isSuccess.value = true;
            dialogOpen.value = false;

            emit('updateDialogOpen', dialogOpen.value);

            formData.value.fullName = '';
            formData.value.phoneNumber = '';
        });
    } catch (error) {
        console.error('Xatolik:', error);
        isSuccess.value = false;
    } finally {
        
    }

   
};
</script>

<template>
    <form @submit.prevent="submit" method="POST" class="mt-0 mx-auto p-10 bg-white rounded shadow-md w-[100%]">
        <h1 class="text-gray-700 text-[25px] font-bold text-center">Joyingizni band qilish uchun ma'lumotlaringizni
            yuboring !</h1>
        <div>
            <label class="block mb-2" for="fullName">To'liq ism sharifingiz</label>
            <input required v-model="formData.fullName" id="fullName" type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ism,Familya" />
        </div>
        <div class="mt-3">
            <label class="block text-gray-700 mb-2" for="phoneNumber">Telefon raqamingiz</label>
            <input required v-model="formData.phoneNumber" id="phoneNumber" type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+998" />
            <button class="bg-blue-600 text-white px-[10px] py-[5px] mt-4 rounded-[5px]" type="submit">
                Yuborish
            </button>
        </div>
    </form>
</template>


<style scoped>

</style>
