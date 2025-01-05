<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {ref} from "vue"
import { priceData } from '../../constant/priceData';
import Dialog from '@/components/form/Dialog.vue'
import SubTitle from '@/components/ui/SubTitle.vue'
const footer = ref<HTMLElement | null>(null);

const Data = ref<any>({})
Data.value = priceData;

</script>
<template>
    <div ref="footer" class="md:mt-[130px] mt-[50px] mb-10">
        <SubTitle title="TA'RIFLAR"></SubTitle>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-20 sm:grid-cols-2 grid-cols-1 relative mt-5">
            <Card class="shadow-2xl  bg-white backdrop-blur-md rounded-[10px] p-4 pb-10 mt-6 relative"
                v-for="(data, index) in priceData" :key="index">
                <div class="relative">
                    <div
                        class="absolute bg-[#EFA3A7] top-[-50px] left-[50%] transform -translate-x-1/2 h-[80px] w-[80px] rounded-full flex items-center justify-center">
                        <i :class="['fa-solid', data.icon.class, data.icon.size, data.icon.color]"></i>
                    </div>
                </div>
                <CardHeader class="mt-[60px]  flex  items-center">
                    <CardTitle class="text-[30px]  ibm-plex-sans-semibold text-[#BA5A5B]">{{ data.text }}
                    </CardTitle>
                    <h1 class="ibm-plex-sans-regular text-gray-500">Biz bialn kores tili osonroq</h1>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li class="mt-4 flex items-center gap-4" v-for="(item, idx) in data.subtitle" :key="item.id">
                            <div class="text-gray-800 flex justify-center">
                                <span
                                    class=" w-4 h-4 bg-[#BA5A5B] mt-1 mr-2 text-white font-bold rounded-full shrink-0">
                                </span>
                                <div>
                                    {{ item.title }}</div>
                            </div>
                        </li>
                    </ul>
                </CardContent>
                <div class="flex justify-center">
                    <CardDescription class="ibm-plex-sans-semibold text-[25px] mt-5 mb-10 text-[#BA5A5B]">{{ data.price
                        }}
                        SO'M</CardDescription>
                </div>
                <div class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
                    <Dialog />
                </div>
            </Card>
        </div>
    </div>
</template>



