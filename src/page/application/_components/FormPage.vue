<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import axios from 'axios';
import Button from '../_ui/Button.vue';
import Select from '../_ui/Select.vue';

const emit = defineEmits(['updateDialogOpen']);

const formData = ref({
    lastName: '',
    firstName: '',
    phoneNumber: '',
});

const isSuccess = ref(false);
const dialogOpen = ref(false);
const isLoading = ref(false);
const externalValue = ref('');
const step = ref(1);
const selectedPayment = ref('');
const isAgreed = ref(false); // Oferta tasdiqlash

const handleSelectChange = (value: string) => {
    externalValue.value = value;
};

const nextStep = () => {
    if (!formData.value.firstName ||  !formData.value.phoneNumber || !externalValue.value) {
        alert("Barcha maydonlarni to'ldiring va ta'rif tanlang!");
        return;
    }
    step.value = 2;
};

const selectPayment = (payment: string) => {
    selectedPayment.value = payment;
};

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
        .then(() => alert("Nusxalandi!"))
        .catch(err => console.error("Nusxalashda xatolik:", err));
};

const submit = async () => {
    if (!isAgreed.value) {
        alert("Iltimos, ofertani tasdiqlang!");
        return;
    }

    isLoading.value = true;

    const text = `*Ism Familya:* ${formData.value.firstName}
*Telefon:* +998${formData.value.phoneNumber}
*Ta'rif:* ${externalValue.value}
*Vaqt:* ${new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric' }).format(new Date())}`;

    try {
        const token = '7749260469:AAEgInZHdGNda-9FviCu_8E9C7fSrgmQKnc';
        const chatId = '-1002370103265';

        // Telegramga ma'lumot yuborish
        const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: text,
            parse_mode: "Markdown",
        });

        console.log(response.data);
        isSuccess.value = true;
        dialogOpen.value = false;
        emit('updateDialogOpen', dialogOpen.value);
        formData.value = { firstName: '', lastName: '', phoneNumber: '' };
    } catch (error) {
        console.error('Xatolik:', error);
        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <form @submit.prevent="submit" class="mt-0 mx-auto p-10 bg-white rounded shadow-md w-[100%]">
        <h1 class="text-[#A43D3F] text-[30px] font-[oswald] text-center">
            Joyingizni band qilish uchun ma'lumotlaringizni yuboring!
        </h1>

        <div v-if="step === 1">
            <label class="block mb-2" for="firstName">Ism Familya kiriting</label>
            <input required v-model="formData.firstName" type="text" class="w-full px-4 py-2 border rounded-md"
                placeholder="Ism Familya" />
            <label class="block mb-2 mt-3" for="phoneNumber">Telefon raqamingiz</label>
            <div class="relative w-full">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+998</span>
                <input required v-model="formData.phoneNumber" type="number"
                    class="w-full pl-12 pr-4 py-2 border rounded-md" placeholder=" XX XXX XX XX" />
            </div>
            <label class="block mt-3" for="select">O'zingizga mos ta'rifni tanlang!</label>
            <Select @update-select="handleSelectChange" />

            <div class="mt-4 flex justify-between">
                <Button @click.prevent="nextStep">Keyingi</Button>
            </div>
        </div>

        <div v-if="step === 2">
            <h2 class="text-center text-lg font-bold mb-1">To'lov usulini tanlang</h2>
            <div class="flex justify-center items-center space-x-5">
                <img src="https://ik.imagekit.io/vtroph5l9/Product/payme_01.png?updatedAt=1738406652024"
                    @click="selectPayment('payme')" class="cursor-pointer w-[180px] h-18" />
                <img src="https://ik.imagekit.io/vtroph5l9/Product/Click-01_0xvqWH8.png?updatedAt=1738406652186"
                    @click="selectPayment('payme')" class="cursor-pointer w-[200px] h-full" />
            </div>

            <div v-if="selectedPayment" class="mt-1 p-4 border rounded text-center bg-gray-100">
                <p class="mb-2">To'lov uchun karta raqami:</p>
                <p class="font-bold text-lg">5614 6812 5482 2814</p>
                <button @click.prevent="copyToClipboard('5614681254822814')"
                    class="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
                    Nusxalash
                </button>
            </div>

            <!-- Oferta Tasdiqlash -->
            <div class="mt-4 flex items-center">
                <input type="checkbox" id="offer" v-model="isAgreed" class="mr-2 w-5 h-5 cursor-pointer">
                <label for="offer" class="cursor-pointer">Men ofertaga roziman</label>
                <a href="../../../assets/Shartnoma.pdf" download="Shartnoma.pdf"
                    style="margin-left: 10px; color: blue; text-decoration: underline;">
                    Oferta shartlari
                </a>
            </div>

            <!-- "Saqlash" tugmasi faqat ofertaga rozilik bildirganda chiqadi -->
            <div class="mt-4">
                <Button v-if="isAgreed" :isLoading="isLoading">Saqlash</Button>
            </div>
        </div>
    </form>
</template>
