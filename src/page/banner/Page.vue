<script setup lang="ts">
import { ref } from 'vue';
// import Price from '@/components/price/Price.vue'
import Dialog from '@/page/application/_components/Dialog.vue'
const footer = ref<HTMLElement | null>(null);


</script>

<template>
    <div class="prise-img md:min-h-[814px] w-full py-10 z-10 relative">
        <div class="absolute bottom-0  left-0 w-full h-full z-[-1]">
            <img class=" md:block sm:h-[600px] h-[592px] pt-20 sm:p-0 md:h-[692px] bottom-0 lg:h-[790px] w-auto mx-auto absolute md:left-1/2    transform -translate-x-1/2"
                src="https://ik.imagekit.io/vtroph5l9/Product/banner.webp?updatedAt=1735485996529" alt="Banner Img">
        </div>
        <div class="">
            <!-- First section -->
            <div class="flex md:container w-[90%] m-auto justify-between items-center space-x-4">
                <div class="bg-white w-[246px]  p-1 md:py-2 rounded-[21.94px]">
                    <h1
                        class="text-[#CB7C7E] text-center font-[oswald] text-[27px] md:text-[40px] font-bold lg:text-[48.12px]   lg:leading-[71.32px]">
                        5
                        NOYABR</h1>
                </div>
                <div></div>
                <div class="bg-white w-[246px]  p-1 md:py-2  rounded-[21.94px] ">
                    <h1
                        class="text-[#CB7C7E] text-center font-[oswald] text-[27px] md:text-[40px] font-bold lg:text-[48.12px]   lg:leading-[71.32px]">
                        6
                        QOLDI</h1>
                </div>
            </div>
            <!-- Next section -->
            <div class="lg:mt-[100px] mt-[30px]">
                <div class="grid md:grid-cols-2 w-[90%]  sm:container m-auto grid-cols-1 relative  top-14 ">
                    <h1
                        class="text-white font-[Freestyle] lg:text-[55px] md:text-[50px] text-[39px] md:block  md:text-start text-end ">
                        Topik
                        yuqori ball olish va Koreya </h1>

                    <h1 class="text-white  font-[Freestyle] text-[55px] md:text-[50px] md:block hidden text-end ">
                        Topik
                        yuqori ball
                        olish
                        va Koreya</h1>
                </div>
                <div class="md:container w-[90%] m-auto sm:mt-0 mt-5">

                    <!-- Next section -->
                    <div class="md:flex  md:justify-between p-0 justify-end ">
                        <h1 class="text-[#A43D3F]  font-[oswald] text-[60px]  font-bold  md:text-[90.27px] text-end  ">
                            MADINA</h1>
                        <div></div>
                        <h1
                            class="text-[#A43D3F] font-[oswald]  top-10 font-bold text-[90.27px] hidden md:block text-end md:text-[80px]">
                            MADINA</h1>
                    </div>
                    <!-- Next section -->

                    <div class="flex relative md:justify-between  justify-end bottom-10">
                        <h1 class="text-[#A43D3F]  font-[oswald] font-bold md:text-[90.27px] text-end  text-[60px]">
                            QODIROVA</h1>
                        <div></div>
                        <h1
                            class="text-[#A43D3F]  top-10 font-[oswald] font-bold lg:text-[90.27px] text-end hidden md:block text-[75px]">
                            QODIROVA</h1>
                    </div>

                </div>
            </div>
        </div>

        <!-- Next section -->
        <div class="flex w-full md:justify-between justify-end flex-wrap md:flex-nowrap gap-4">
            <div
                class="py-[16px] md:block hidden md:w-[443px] w-[330px] h-[105px] px-[23px] bg-[#A43D3F] md:rounded-tr-[75px] md:mt-0 mt-2  md:self-start self-end">
                <p class="md:text-[30.53px] sm:text-[25px] text-[22px] font-[gilroy] leading-[38.16px] text-white">
                    4 oyda Koreys tilini 0 dan oson o‘rganib topik 3 olasiz
                </p>
            </div>
            <div
                class="py-[16px]  md:w-[443px] w-[330px] h-[105px] px-[23px] bg-[#A43D3F] rounded-tl-[75px] md:self-start self-end">
                <p class="md:text-[20.6px] text-[15.6px] text-end font-[gilroy] md:leading-[30.16px] text-white">
                    Topikdan yuqori ball olish va Koreya universitetiga GRAND yutish uchun yillar shart emas
                </p>
            </div>
        </div>


    </div>

</template>
