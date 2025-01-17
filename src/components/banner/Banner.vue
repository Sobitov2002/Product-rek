<script setup lang="ts">
import { ref } from 'vue';
// import Price from '@/components/price/Price.vue'
import Dialog from '@/page/application/_components/Dialog.vue'
const footer = ref<HTMLElement | null>(null);


</script>

<template>
    <div class="mybg max-h-[814px] w-full p-10 z-10 relative">
        <div class="absolute bottom-0  left-0 w-full h-full z-[-1]">
            <img class=" md:block sm:h-[800px] h-[110%] md:h-[700px] bottom-0 lg:h-[790px] w-auto mx-auto absolute md:left-1/2    transform -translate-x-1/2"
                src="https://ik.imagekit.io/vtroph5l9/Product/banner.webp?updatedAt=1735485996529" alt="Banner Img">
        </div>
        <div class=" max-w-screen-xl mx-auto px-0 ">
            <!-- First section -->
            <div class="flex justify-between items-center space-x-4">
                <div class="bg-white p-4 rounded-[10px] shadow-xl">
                    <h1 class="text-[#CB7C7E] oswald text-[48.12px]sm:text-2xl md:text-3xl">5 NOYABR</h1>
                </div>
                <div></div>
                <div class="bg-white p-4 rounded-[10px] shadow-xl">
                    <h1 class="text-[#CB7C7E] font-[] text-md sm:text-2xl md:text-3xl">6 QOLDI</h1>
                </div>
            </div>

            <div class="md:mt-0 mt-10">
                <!-- Next section -->
                <div class="grid md:grid-cols-3  grid-cols-1 mt-4 md:mt-[150px]  ">
                    <h1
                        class="text-[#552e2e] uppercase ibm-plex-sans-light lg:text-[20px] md:block hidden md:text-start text-end text-[14px]">
                        topik
                        yuqori ball olish va Koreya </h1>
                    <div></div>
                    <h1
                        class="text-[#552e2e] uppercase ibm-plex-sans-light lg:text-[20px] md:block hidden text-end text-[14px]">
                        topik
                        yuqori ball
                        olish
                        va Koreya</h1>
                </div>

                <!-- Next section -->
                <div class="md:flex md:justify-between justify-end mt-5">
                    <h1
                        class="text-[#BA5A5B] ibm-plex-sans-semibold font-bold  lg:text-[90px] text-end text-[30px] md:text-[70px]">
                        MADINA</h1>
                    <div></div>
                    <h1
                        class="text-[#BA5A5B] ibm-plex-sans-semibold font-bold lg:text-[90px] text-end text-[30px] md:text-[70px]">
                        QODIROVA</h1>
                </div>
                <!-- Next section -->
                <div class="flex md:justify-between  justify-end mt-4 ">
                    <h1
                        class="text-[#BA5A5B] mx-2 ibm-plex-sans-semibold font-bold  lg:text-[50px] text-end text-[20px] md:text-[40px]">
                        MADINA</h1>
                    <div></div>
                    <h1
                        class="text-[#BA5A5B] ibm-plex-sans-semibold font-bold lg:text-[50px] text-end text-[20px] md:text-[40px]">
                        QODIROVA</h1>
                </div>

                <!-- Next section -->
                <div class="grid md:grid-cols-3  grid-cols-1 mt-5">
                    <h1
                        class="text-[#fff] uppercase ibm-plex-sans-light lg:text-[20px] md:text-start text-end text-[14px]">
                        4 Oyda Koreys Tilini
                        0 Dan Oson
                        O’rganib Topik 3 Olasiz </h1>
                    <div></div>
                    <h1 class="text-[#fff] uppercase ibm-plex-sans-light lg:text-[20px] text-end text-[14px]">TOPIKdan
                        yuqori ball olish va
                        Koreya universitetiga grant yutish uchun yillar yo’qotish shart emas</h1>
                </div>


                <!-- Next section -->
                <div class="flex items-center md:justify-center justify-end md:mt-5 mt-5 ">

                    <h1
                        class="bg-gradient-to-r uppercase ibm-plex-sans-bold text-white rounded-[10px] from-[#BA5A5B] via-[#ed8688] to-[#BA5A5B] px-[90px] py-[20px] md:py-[30px] md:px-[150px]">
                        BATAFSIL</h1>

                </div>
            </div>
        </div>


    </div>

</template>

<style scoped>
.mybg {
    background-image: url('https://ik.imagekit.io/vtroph5l9/Product/BannerImage.jpg?updatedAt=1735977598915');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
