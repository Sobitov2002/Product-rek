<script setup lang="ts">
import { detailData , detailDataTwo } from './store/index';
</script>

<template>
    <div class="prise min-h-[600px] py-10 md:py-20 sm:p-0  relative">
        <!-- Katta sarlavha -->
        <div class="">
            <h1 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);" class="font-[oswald] text-center font-bold text-white leading-[1.2] pb-10
            lg:text-[103px] md:text-[100px] mt-  sm:text-[70px] text-[40px]">
                Kursda sizni nimalar kutmoqda?
            </h1>

            <!-- Katta qizil sarlavha -->
            <p class="absolute md:top-[110px] top-[130px] right-[9%] 
            lg:text-[121.98px] md:text-[140px]  sm:text-[45px]  text-[30px]
            font-[Freestyle] text-[#A43D3F]">
                Kursda sizni nimalar kutmoqda
            </p>

            <div class="relative custom mx-auto min-h-[500px]">
                <!-- Rasm -->
                <img class="absolute  lg:block hidden left-1/2 transform -translate-x-1/2 
                max-w-[490.83px] w-[90%] h-auto  object-cover z-[10]"
                    src="https://ik.imagekit.io/vtroph5l9/Product/3%201.svg?updatedAt=1737146763307" alt=""
                    loading="lazy" />

                <div
                    class="relative grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 h-full gap-5 mt-[00px]">
                    <!-- Chap qism -->
                    <ul class="items-center max-w-full ">
                        <div v-for="(item, index) in detailData" :key="index"
                            class="flex items-center mt-[20px] space-x-3">
                            <li class="p-5 mt-[30px] rounded-full bg-white">
                                <svg class="w-[30px] h-[30px] md:h-[59px] md:w-[59px] text-[#EEB4B3]"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                            </li>
                            <p class="text-[17.17px] text-[#A43D3F] mt-5 leading-[1.3]">
                                <span class="font-bold font-[gilroy] ">{{ item.title }}</span> <span
                                    class="font-light font-[gilroy-light] ">{{ item.text }}</span>
                            </p>

                        </div>
                    </ul>

                    <!-- O'rta qism -->
                    <div class="lg:block hidden "></div>

                    <!-- O'ng qism -->
                    <ul class="flex flex-col items-center space-y-5 max-w-full">
                        <div v-for="(item, index) in detailDataTwo" :key="index"
                            class="flex items-center mt-[20px] space-x-3">
                            <p class="text-[17.17px] text-[#A43D3F] mt-[30px] text-end leading-[1.3]">
                                <span class="font-bold font-[gilroy] ">{{ item.title }}</span> <span
                                    class="font-light font-[gilroy-light] ">{{ item.text }}</span>
                            </p>
                            <li class="p-5 m-0 mt-[30px] rounded-full bg-white">
                                <svg class="w-[30px] h-[30px] md:h-[59px] md:w-[59px] text-[#EEB4B3]"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
