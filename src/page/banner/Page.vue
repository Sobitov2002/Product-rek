<script setup lang="ts">
import { ref } from 'vue';
// import Price from '@/components/price/Price.vue'
import Dialog from '@/page/application/_components/Dialog.vue'
const footer = ref<HTMLElement | null>(null);


</script>

<template>
    <div class="prise-img min-h-[814px] w-full p-10 z-10 relative">
        <div class="absolute bottom-0  left-0 w-full h-full z-[-1]">
            <img class=" md:block sm:h-[800px] h-[692px] md:h-[692px] bottom-0 lg:h-[790px] w-auto mx-auto absolute md:left-1/2    transform -translate-x-1/2"
                src="https://ik.imagekit.io/vtroph5l9/Product/banner.webp?updatedAt=1735485996529" alt="Banner Img">
        </div>
        <div class="">
            <!-- First section -->
            <div class="flex con justify-between items-center space-x-4">
                <div class="bg-white w-[246px] py-2 rounded-[21.94px]">
                    <h1 class="text-[#CB7C7E] text-center font-[oswald] font-bold text-[48.12px] leading-[71.32px]">5
                        NOYABR</h1>
                </div>
                <div></div>
                <div class="bg-white w-[246px] py-2 rounded-[21.94px] ">
                    <h1 class="text-[#CB7C7E] text-center  font-[oswald] font-bold text-[48.12px] leading-[71.32px]">6
                        QOLDI</h1>
                </div>
            </div>
            <!-- Next section -->
            <div class="mt-[130px]">
                <div class="grid md:grid-cols-3  m-auto grid-cols-1 relative  top-14 ">
                    <h1
                        class="text-white font-[Freestyle] lg:text-[55px] md:block hidden md:text-start text-end text-[14px]">
                        Topik
                        yuqori ball olish va Koreya </h1>
                    <div class="md:w-0"></div>
                    <h1 class="text-white  font-[Freestyle] lg:text-[55px] md:block hidden text-end text-[14px]">
                        Topik
                        yuqori ball
                        olish
                        va Koreya</h1>
                </div>
                <div class="con">

                    <!-- Next section -->
                    <div class="md:flex  md:justify-between p-0 justify-end ">
                        <h1
                            class="text-[#A43D3F]  font-[oswald]  font-bold  lg:text-[90.27px] text-end text-[30px] md:text-[70px]">
                            MADINA</h1>
                        <div></div>
                        <h1
                            class="text-[#A43D3F] font-[oswald]  top-10 font-bold lg:text-[90.27px] text-end text-[30px] md:text-[70px]">
                            MADINA</h1>
                    </div>
                    <!-- Next section -->

                    <div class="flex relative md:justify-between  justify-end bottom-10">
                        <h1
                            class="text-[#A43D3F]  font-[oswald] font-bold lg:text-[90.27px] text-end text-[20px] md:text-[40px]">
                            QODIROVA</h1>
                        <div></div>
                        <h1
                            class="text-[#A43D3F]  top-10 font-[oswald] font-bold lg:text-[90.27px] text-end text-[20px] md:text-[40px]">
                            QODIROVA</h1>
                    </div>

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
