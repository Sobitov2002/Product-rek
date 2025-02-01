<script setup lang="ts">
import { ref } from 'vue';
// import Price from '@/components/price/Price.vue'
import Dialog from '@/page/application/_components/Dialog.vue'
const footer = ref<HTMLElement | null>(null);


</script>

<template>
    <div class="prise-img md:min-h-[814px] w-full py-10 z-10 relative">
        <div class="absolute bottom-0  left-0 w-full h-full  -z-10">
            <img class=" md:block sm:h-[600px] h-[692px]  pt-20 sm:p-0 md:h-[692px] bottom-0 lg:h-[790px] w-auto mx-auto absolute left-1/2    transform -translate-x-1/2"
                src="https://ik.imagekit.io/vtroph5l9/Product/banner.webp?updatedAt=1735485996529" alt="Banner Img">
        </div>
        <div class="">
            <!-- First section -->
            <div class="flex md:custom w-[90%] m-auto justify-center items-center space-x-4">
                <div class="bg-white w-[246px]  p-1 md:py-2 rounded-[21.94px]">
                    <h1
                        class="text-[#CB7C7E] text-center font-[oswald] text-[27px] md:text-[40px] font-bold lg:text-[48.12px]   lg:leading-[71.32px]">
                        1,2,3
                        Fevral</h1>
                </div>
               
            </div>
            <!-- Next section -->
            <div class="lg:mt-[80px] mt-[30px] -z-20">
                <div class="grid md:grid-cols-2 w-[90%]  sm:container m-auto grid-cols-1 relative  top-14 ">
                    <h1
                        class="text-white font-[Freestyle] -z-20 lg:text-[55px] md:text-[50px] text-[40.49px] md:block  md:text-start text-center ">
                        Topik yuqori ball olish va Koreya </h1>

                    <h1 class="text-white  font-[Freestyle] text-[55px] md:text-[55px] md:block hidden text-end ">
                        Topik yuqori ball
                        olish
                        va Koreya</h1>
                </div>
                <div class="md:container w-[90%]  m-auto  mt-5">

                    <!-- Next section -->
                    <div class="md:flex  md:justify-between p-0 justify-end ">
                        <h1
                            class="text-[#A43D3F] font-[oswald] text-[60px] font-bold md:text-[90.27px] text-center relative -z-20">
                            MADINA
                        </h1>

                        <div></div>
                        <h1
                            class="text-[#A43D3F]  hidden md:block font-[oswald] text-[60px]  font-bold  md:text-[90.27px] text-end">
                            MADINA</h1>
                    </div>
                    <!-- Next section -->

                    <div class="flex relative md:justify-between  justify-center bottom-10 ">

                        <h1
                            class="text-[#A43D3F]  font-[oswald] -z-20 font-bold md:text-[90.27px] text-start  text-[60px]">
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
        <div class="md:flex justify-between">
            <div
                class="py-[16px] md:block z-40 md:w-[443px] md:rounded-br-[0px] w-[85%] h-[105px] rounded-tr-[75px] rounded-br-[75px] px-[23px] bg-[#A43D3F] md:rounded-tr-[75px] md:mt-0 mt-2 md:self-start self-end md:order-1 order-2 md:text-left text-left">
                <p
                    class="md:text-[18.53px]  lg:text-[25px] sm:text-[20px] text-[20px] font-[gilroy] md:leading-[38.16px]  text-white">
                    3 oyda Koreys tilini 0 dan oson o‘rganib TOPIK 2 olasiz
                </p>
            </div>

            <div
                class="sm:w-auto z-20 md:order-2 absolute md:relative bottom-2 order-3 w-full flex justify-center items-center">
                <p
                    class="text-[#272727] z-20 rounded-[20.14px] px-16 py-2 bg-white md:text-[18.53px] lg:text-[25px] sm:text-[20px] text-[22px] cursor-pointer font-[gilroy] flex items-center gap-2">
                    Batafsil
                    <svg class="w-6 h-6 animate-bounce" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="black" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 12L12 19L19 12" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </p>
            </div>



            <div
                class="py-[16px] z-50 md:w-[443px] mb-10 w-[85%] md:h-[105px] px-[23px] mt-4 bg-[#A43D3F] rounded-tr-[75px] md:rounded-tl-[75px] md:rounded-tr-[0px] md:rounded-br-[0px] rounded-br-[75px] md:self-start self-start md:order-3 order-1 md:text-right text-left">
                <p
                    class="md:text-[18.53px] lg:text-[25px] sm:text-[20px] text-[20px] font-[gilroy] md:leading-[30.16px] text-white">
                    Topikdan yuqori ball olish va Koreya universitetiga GRAND yutish uchun yillar shart emas
                </p>
            </div>
        </div>



    </div>

</template>
