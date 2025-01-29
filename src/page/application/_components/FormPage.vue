<script setup lang="ts">
import { ref, defineEmits, watchEffect } from 'vue';
import axios from 'axios';
import Button from '../_ui/Button.vue';
import Select from '../_ui/Select.vue'
import { Circle } from 'lucide-vue-next';
const emit = defineEmits(['updateDialogOpen']);

const formData = ref({
    lastName: '',
    firstName: '',
    phoneNumber: '',
});

const isSuccess = ref(false);
const dialogOpen = ref(false);
const isLoading = ref(false);

const externalValue = ref(''); // Add this line to define externalValue

const handleSelectChange = (value: string) => {
    externalValue.value = value; // Update externalValue when selection changes
};

const submit = async () => {
    if (externalValue.value === '') {
        alert("Ta'rifni tanlang");
        return;
    }
    isLoading.value = true;

    const text = {
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        phone: `+998${formData.value.phoneNumber}`,
        type: 'video',
        variant: externalValue.value,
        time: new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric' }).format(new Date())
    };
    console.log(text);

    try {
        const response = await axios.post(`https://dina-backend-newgit.fly.dev/order`, text, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczNjUwNDU4Mn0.-pCxMz2H3wTbI9HsDFS3nyeSC7PaDo60WyZvX5yfIkI"
            }
        });
        console.log(response);

        isSuccess.value = true;
        dialogOpen.value = false;
        emit('updateDialogOpen', dialogOpen.value);

        formData.value = { firstName: '', lastName: '', phoneNumber: '' };
    } catch (error) {
        console.error('Xatolik:', error);
        isSuccess.value = false;
        alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.'); // Add user feedback for errors
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <form @submit.prevent="submit" class="mt-0 mx-auto p-10 bg-white rounded shadow-md w-[100%]">
        <h1 class="text-[#A43D3F] text-[30px]  font-[oswald] text-center">
            Joyingizni band qilish uchun ma'lumotlaringizni yuboring!
        </h1>
        <div>
            <label class="block mb-2" for="firstName">Ismingizni kiriting</label>
            <input required v-model="formData.firstName" id="fullName" type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ism" />
        </div>
        <div>
            <label class="block mb-2" for="lastName">Familyangizni kiriting</label>
            <input required v-model="formData.lastName" id="fullName" type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Familya" />
        </div>
        <div class="mt-3">
            <label class="block text-gray-700 mb-2" for="phoneNumber">Telefon raqamingiz</label>
            <div class="relative w-full">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+998</span>
                <input required v-model="formData.phoneNumber" id="phoneNumber" type="number"
                    class="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="XX XXX XX XX" />
            </div>
        </div>
        <label class="block mt-3 text-gray-700 mb-2" for="select">O'zingizga mos ta'rifni tanlang !</label>
        <Select @update-select="handleSelectChange" />
        <div class="mt-4">
            <Button :isLoading="isLoading">Saqlash</Button>
        </div>
    </form>
</template>

<style scoped></style>
