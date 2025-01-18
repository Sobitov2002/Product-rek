<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ref } from "vue"
import { priceData } from '../../constant/priceData';
import Dialog from './_components/Dialog.vue'
const footer = ref<HTMLElement | null>(null);
const Data = ref<any>({})
Data.value = priceData;

</script>
<template>
    <div class="prise-img ">
        <div ref="footer" class="container  py-20  ">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-20 sm:grid-cols-2 grid-cols-1 relative mt-5">
                <Card class="shadow-2xl  bg-white backdrop-blur-md rounded-[12.89px]   relative"
                    v-for="(data, index) in priceData" :key="index">
                    <div class="relative">
                        <div
                            class="absolute bg-[#EEB4B3] top-[-50px] left-[50%] shadow-[0px_4px_4px_1px_rgba(0,0,0,0.2)] transform -translate-x-1/2 h-[85px] w-[85px] rounded-full flex items-center justify-center">
                            <img :src="data.icon.class" :class="[ data.icon.size, data.icon.color]" alt="icon" />
                        </div>
                    </div>
                    <CardHeader class="mt-4  font-[oswald] flex items-center">
                        <CardTitle class="text-[54.22px] leading-[80.35px] text-[#BE605D] mb-0">
                            {{ data.text }}
                        </CardTitle>
                        <p
                            class="font-[Freestyle] sm:text-[43.61px] text-[38px] -mt-6 leading-[51.36px] text-[#0F0F0F] font-light pt-0">
                            Biz bilan kores tili osonroq
                        </p>
                    </CardHeader>
                    <CardContent class="33px">
                        <ul>
                            <li class="mt-[21px] flex items-center gap-4" v-for="(item, idx) in data.subtitle"
                                :key="item.id">
                                <div class=" flex justify-center">
                                    <span
                                        class=" w-2 h-2 bg-[#6A3230] mt-2.5 mr-2 text-white font-bold rounded-full shrink-0">
                                    </span>
                                    <div class="text-[#6A3230] font-[gilroy] leading-[22.81px] text-[18.62px]">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                    <div class="flex justify-center">
                        <CardDescription
                            class="font-[oswald] text-[38.11px] leading-[56.48px] font-bold  mb-16  text-[#9E5856]">
                            {{data.price}} SO'M
                        </CardDescription>
                    </div>
                    <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
                        <Dialog />
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
