<script setup lang="ts">
import { detailData } from './store/index';
</script>

<template>
    <div class="prise-img min-h-[645px] rounded-[10px] p-10 relative">
        <!-- Katta sarlavha -->
        <h1 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);" class="font-[oswald] text-center font-bold text-white leading-[1.2] pb-10
            lg:text-[138px] md:text-[100px] sm:text-[70px] text-[50px]">
            MA'LUMOTLAR
        </h1>

        <!-- Katta qizil sarlavha -->
        <p class="absolute top-20 right-[10%] 
            lg:text-[185px] md:text-[140px] sm:text-[90px] text-[60px] 
            font-[Freestyle] text-[#A43D3F]">
            ma’lumotlar
        </p>

        <div class="relative container mx-auto">
            <!-- Rasm -->
            <img class="absolute -bottom-10 md:block hidden left-1/2 transform -translate-x-1/2 
                max-w-[503.83px] w-full h-auto object-cover z-[10]"
                src="https://ik.imagekit.io/vtroph5l9/Product/3%201.svg?updatedAt=1737146763307" alt="" />

            <div class="relative grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 h-full gap-5">
                <!-- Chap qism -->
                <ul class="items-center max-w-full">
                    <div v-for="(item, index) in detailData" :key="index" class="flex items-center mt-[30px] space-x-5">
                        <li class="p-5 rounded-full bg-white">
                            <svg class="w-[59px] h-[59px] text-[#EEB4B3]" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                        </li>
                        <p class="font-[gilroy] text-[21px] text-[#A43D3F] leading-[1.3]">
                            {{ item.text }}
                        </p>
                    </div>
                </ul>

                <!-- O'rta qism -->
                <div class="md:block hidden"></div>

                <!-- O'ng qism -->
                <ul class="flex flex-col items-center space-y-5 mt-[30px] max-w-full">
                    <div v-for="(item, index) in detailData" :key="index" class="flex items-center space-x-5">
                        <p class="font-[gilroy] text-[21px] text-[#A43D3F] leading-[1.3] text-right">
                            {{ item.text }}
                        </p>
                        <li class="p-5 m-0 rounded-full bg-white">
                            <svg class="w-[59px] h-[59px] text-[#EEB4B3]" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>
