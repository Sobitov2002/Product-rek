<script setup lang="ts">
import { ref } from 'vue';
import Price from '@/components/price/Price.vue'
const footer = ref<HTMLElement | null>(null);


</script>

<template>
    <div
        class="bg-gradient-to-r from-[#EFA3A7] via-[#fbdee0] to-[#EFA3A7] md:h-[90vh] h-[80vh] w-full p-10 z-10 relative">
        <div class="absolute bottom-0 left-0 w-full h-full z-[-1]">
            <img class=" md:block sm:h-[600px] md:h-[700px] bottom-0 lg:h-[900px] w-auto mx-auto absolute md:left-1/2    transform -translate-x-1/2"
                src="https://ik.imagekit.io/vtroph5l9/Product/banner.webp?updatedAt=1735485996529" alt="Banner Img">
        </div>
        <div class="container max-w-screen-xl mx-auto px-4">
            <!-- First section -->
            <div class="flex justify-between items-center space-x-4">
                <div class="bg-white p-4 rounded-[10px] shadow-xl">
                    <h1 class="text-[#BA5A5B] font-bold text-md sm:text-2xl md:text-3xl">5 NOYABR</h1>
                </div>
                <div></div>
                <div class="bg-white p-4 rounded-[10px] shadow-xl">
                    <h1 class="text-[#BA5A5B] font-bold text-md sm:text-2xl md:text-3xl">6 QOLDI</h1>
                </div>
            </div>

            <!-- Next section -->
            <div class="md:flex md:justify-between justify-end mt-10  md:mt-[150px]">
                <h1 class="text-[#BA5A5B] font-bold lg:text-[90px] text-end text-[30px] md:text-[70px]">MADINA</h1>
                <div></div>
                <h1 class="text-[#BA5A5B] font-bold lg:text-[90px] text-end text-[30px] md:text-[70px]">QODIROVA</h1>
            </div>
            <div class="grid md:grid-cols-3  grid-cols-1">
                <h1 class="text-[#fff] font-bold lg:text-[20px] text-end text-[14px]">4 Oyda Koreys Tilini 0 Dan Oson
                    O’rganib Topik 3 Olasiz </h1>
                <div></div>
                <h1 class="text-[#fff] font-bold lg:text-[20px] text-end text-[14px]">TOPIKdan yuqori ball olish va
                    Koreya universitetiga grant yutish uchun yillar yo’qotish shart emas</h1>
            </div>

            <div class="flex items-center md:justify-center justify-end mt-10">
                <h1
                    class="cursor-pointer bg-gradient-to-r from-[#BA5A5B] to-[#BA5A5B] md:py-7 py-3 md:px-[180px] px-[60px] text-[20px] text-white rounded-[10px] hover:bg-[#dc7c7e]">
                    Batafsil
                </h1>

            </div>
        </div>


    </div>

</template>

<style scoped>

</style>
