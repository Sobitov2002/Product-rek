<script setup lang="ts">
import { ref, defineEmits, watchEffect } from 'vue';
import axios from 'axios';
import Button from './_ui/Button.vue';
import Select from './_ui/Select.vue'
import { Circle } from 'lucide-vue-next';
const emit = defineEmits(['updateDialogOpen']);

const formData = ref({
    fullName: '',
    phoneNumber: '',
});

const sendSelect = ref<string>('')
let externalValue: string = '';
const handleSelectChange = (value: string)=>{
    sendSelect.value = value;

}
watchEffect(()=>{
    externalValue = sendSelect.value;
    console.log(externalValue);
    
})



const isSuccess = ref(false);
const dialogOpen = ref(false);
const isLoading = ref(false);

const todayDay = new Date();
const formattedDate = `${todayDay.getFullYear()}-${(todayDay.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${todayDay.getDate().toString().padStart(2, '0')}`;
const currentTime = `${todayDay.getHours().toString().padStart(2, '0')}:${todayDay
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${todayDay.getSeconds().toString().padStart(2, '0')}`;

const submit = async () => {
    if (externalValue === '') {
        alert("Ta'rifni tanlang");
        return 
            
    }
    isLoading.value = true;
   

    const token = '7555842657:AAE-nLRTeQ27pGXLdLa-Zju_3JPdxrG9o_Y';
    const chatId = '-4762117343';

    const text = `
        🆕 Yangi foydalanuvchi:
        👤 Ism: ${formData.value.fullName}
        📞 Telefon: ${formData.value.phoneNumber}
        📌 Tur: ${externalValue}
        📅 Sana: ${formattedDate}
        🕒 Vaqt: ${currentTime}
    `;

    try {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: text,
        });
        
        isSuccess.value = true;
        dialogOpen.value = false;
        emit('updateDialogOpen', dialogOpen.value);

        formData.value.fullName = '';
        formData.value.phoneNumber = '';
    } catch (error) {
        console.error('Xatolik:', error);
        isSuccess.value = false;
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <form   @submit.prevent="submit" class="mt-0 mx-auto p-10 bg-white rounded shadow-md w-[100%]">
        <h1 class="text-gray-700 text-[25px] font-bold text-center">
            Joyingizni band qilish uchun ma'lumotlaringizni yuboring!
        </h1>
        <div>
            <label class="block mb-2" for="fullName">To'liq ism sharifingiz</label>
            <input required v-model="formData.fullName" id="fullName" type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ism, Familya" />
        </div>
        <div class="mt-3">
            <label class="block text-gray-700 mb-2" for="phoneNumber">Telefon raqamingiz</label>
            <input required v-model="formData.phoneNumber" id="phoneNumber" type="number"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+998" />
        </div>
        <label class="block mt-3 text-gray-700 mb-2" for="select">O'zingizga mos ta'rifni tanlang !</label>
        <Select @update-select="handleSelectChange" />
        <div class="mt-4">
            <Button  :isLoading="isLoading">Saqlash</Button>
        </div>
    </form>
</template>

<style scoped></style>
