<script setup lang="ts">
import SubTitle from '@/components/ui/SubTitle.vue'
import { productData } from '../../constant/productData'
import { ref } from 'vue'

const data = ref<any>({})
data.value = productData


</script>
<template>

    <div class="min-h-[687px] foryou-img">
        <div class="relative flex justify-center">
            <h1 class="text-[#A43D3F] text-[63.26px] py-4 font-[oswald] leading-[93.76px] text-shadow-custom font-bold">
                SIZ UCHUN</h1>
            <p
                class="text-[117.46px] leading-[138.34px] text-[#ED9FA1] text-shadow-custom font-[Freestyle] hidden md:block absolute md:top-12 md:left-1/2">
                siz
                uchun</p>
        </div>
        <ul class="grid lg:grid-cols-3 custom sm:grid-cols-2 grid-cols-1 gap-10 mt-20">
            <li v-for="(data, index) in productData">
                <div
                    class="relative shadow-[3px_22px_27.6px_-3px_rgba(0,0,0,0.5)] bg-[#F7D8D6] md:w-[325px] w-[300px] rounded-[29.4px] h-[309.48px] mx-auto">
                    <img class="absolute bottom-0 h-[343.06px] left-1/2 -translate-x-1/2 bg-center transform"
                        :src="data.imgUrlTwo" alt="Product">
                    <!-- Tugmani pastga o'rtaga joylash -->
                    <div
                        class="absolute -bottom-8 left-1/2 text-shadow-custom font-bold -translate-x-1/2 rounded-full w-[69px] h-[69px] bg-white flex items-center justify-center text-[43px]  text-[#A43D3F] shadow-lg leading-none">
                        {{ data.number }}
                    </div>
                </div>
                <div class="py-5 px-4 text-center">
                    <h3
                        class="text-[#A43D3F] text-[35.26px] mt-[20px] text-shadow-custom font-bold font-[oswald]  md:leading-[53.76px] leading-10 ">
                        {{data.title}}

                    </h3>
                    <p
                        class="text-[#A43D3F] my-[30px] text-start  text-[17.23px]  font-[gilroy-light] leading-[20.89px]">
                        {{data.discription}}
                    </p>
                </div>

            </li>
        </ul>

    </div>

</template>

<style lang="">

</style>